import UploadPhoto from "@/pages/products/inputs/UploadPhoto";
import PrimaryButton from "@/myComponents/PrimaryButton";
import OutlineButton from "@/myComponents/OutlineButton";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import categoryReducer from "@/reducers/categoryReducer";
import CategoryCard from "../cards/CategoryCard";
import { CategoryInfoForm } from "../cards/CategoryInfoForm";

export default function AddCategory() {
  const initialState = {
    title: "",
    createdBy: "Seller",
    stock: 10,
    tagId: "",
    images: [],
    description: "",
  };
  const [category, dispatch] = useReducer(categoryReducer, initialState);
  return (
    <div
      className="grid grid-cols-1 
    xl:grid-cols-4 gap-y-4 xl:gap-4 py-6"
    >
      <div className="flex flex-col  gap-4 col-span-1 order-2 xl:order-1">
        <CategoryCard category={category} />
        <div className="flex flex-col gap-3">
          <PrimaryButton text="Submit" />
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
