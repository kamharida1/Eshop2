import { useSearchParams } from "expo-router";
import AddCategoryForm from "../../../src/features/categore/AddCategoryForm";
import EditCategoryForm from "../../../src/features/categore/EditCategoryForm";

export default function AddCategory() {
  const { catId } = useSearchParams();

  return catId ? <EditCategoryForm catId={catId} /> : <AddCategoryForm />;
}
