import { Text } from "@bacons/react-views";
import View from "@bacons/react-views/build/View";
import { DataStore } from "aws-amplify";
import _ from "lodash";
import { useEffect, useState } from "react"
import { ScrollView } from "react-native";
import { Category } from "../../models"
import CategoryList from "./categoryList";
import { CreateCategory } from "./createCategory";

const CategoryAPI = () => {
  const [categories, setCategories] = useState<Category[]>([
    // { id: "0", name: "cooker", description: "holiday"},
    // { id: "1", name: "cooker", description: "holiday"},
  ]);

  useEffect(() => {
    loadCategories();
    const subscription = DataStore.observe(Category).subscribe(() => loadCategories())
    return () => subscription.unsubscribe()
  }, [])
  
  const loadCategories = () => {
    DataStore.query(Category)
      .then(setCategories)
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
      });
  }



  const createCategory = async (cat: {id: string, name: string, description: string, image: string}) => {
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

  const updateCategory = async (categoryId: string, name: string, description: string) => {
    categories.map((cat) => {
      if (cat.id === categoryId) {
        return { ...cat, name, description };
      } else {
        return cat;
      }
    });
    setCategories(categories);

    // Update DataStore
    const original = await DataStore.query(Category, categoryId);
    await DataStore.save(
      Category.copyOf(original, (updated) => {
        updated.name = name;
        updated.description = description;
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

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      scrollEventThrottle={16}
      contentContainerStyle={{flex: 1}}
    >
      <View>
        <Text>Catx</Text>
        <CreateCategory createCategory={createCategory} />
        <CategoryList
          categories={categories}
          updateCategory={updateCategory}
          deleteCategory={deleteCategory}
        />
      </View>
    </ScrollView>
  )
}

export default CategoryAPI