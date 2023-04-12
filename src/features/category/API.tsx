import { DataStore } from "aws-amplify";
import _ from "lodash";
import { useEffect, useState } from "react"
import { Category } from "../../models"

export const useCategoryAPI = () => {
  const [categories, setCategories] = useState<Category[]>([
    // { id: "0", name: "cooker", description: "holiday"},
    // { id: "1", name: "cooker", description: "holiday"},
  ]);

  useEffect(() => {
    loadCategories();
    const subscription = DataStore.observe(Category).subscribe(() => loadCategories())
    return () => subscription.unsubscribe()
  }, [categories])
  
  const loadCategories = () => {
    DataStore.query(Category)
      .then(setCategories)
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
      });
  }



  const createCategory = async (cat: { id: string, name: string, description: string, image: string }) => {
    const newCategory = await DataStore.save(
      new Category({
        name: cat.name,
        description: cat.description,
        image: cat.image,
        products: []
      })
    );
    setCategories([...categories, newCategory])
  }

  const updateCategory = async (cate: {
    id: string;
    name: string;
    description: string;
    image: string;
  }) => {
    const { id, name, description, image } = cate;
    categories.map((cat) => {
      if (cat.id === id) {
        const updatedCat = {
          id,
          name,
          description,
          image
        }
        return {...cat, updatedCat };
      } else {
        return cat;
      }
    });
    setCategories(categories);

    // Update DataStore
    const original = await DataStore.query(Category, id);
    await DataStore.save(
      Category.copyOf(original, (updated) => {
        updated.name = name;
        updated.description = description;
        updated.image = image
      })
    );
  };

  const deleteCategory = async (id: string) => {
    try {
      _.remove(categories, (cat) => cat.id === id);
      setCategories(categories);

      // Remove from DataStore
      const toDelete = await DataStore.query(Category, id);
      DataStore.delete(toDelete);
    } catch {
      ((err) => {
        console.log(err)
      })
    }
  };

  return {
    categories,
    createCategory,
    updateCategory,
    deleteCategory
  }
}
