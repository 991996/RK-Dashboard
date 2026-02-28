import UploadPhoto from "@/components/myComponents/images/UploadPhoto";
import PrimaryButton from "@/components/myComponents/PrimaryButton";
import OutlineButton from "@/components/myComponents/OutlineButton";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import categoryReducer from "@/features/categories/reducer/categoryReducer";
import CategoryCard from "../components/CategoryCard";
import { CategoryInfoForm } from "../components/CategoryInfoForm";
import { categoryInitialState } from "@/data/initialState";
import { useAddCategory } from "../categoryQueries";

export default function AddCategory() {
  const [category, dispatch] = useReducer(
    categoryReducer,
    categoryInitialState
  );
  const mutation = useAddCategory();
  // Add function
  const handleSave = async () => {
    mutation.mutate(category);
  };
  return (
    <div
      className="grid grid-cols-1 
    xl:grid-cols-4 gap-y-4 xl:gap-4 py-6"
    >
      <div className="flex flex-col  gap-4 col-span-1 order-2 xl:order-1">
        <CategoryCard category={category} />
        <div className="flex flex-col gap-3">
          <PrimaryButton
            text={mutation.isPending ? "Saving..." : "Submit"}
            onClick={handleSave}
            disabled={mutation.isPending}
          />
          <Link to="/products" className="w-full cursor-pointer">
            <OutlineButton text="Cancel" className="w-full" />
          </Link>
        </div>
      </div>
      <div className="col-span-3 flex flex-col gap-4 order-1 xl:order-2">
        <UploadPhoto
          maxFiles={1}
          dispatch={dispatch}
          cardTitle="Add Thumbnail Photo"
        />
        <CategoryInfoForm category={category} dispatch={dispatch} />
      </div>
    </div>
  );
}
