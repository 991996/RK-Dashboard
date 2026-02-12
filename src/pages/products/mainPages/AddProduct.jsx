import { PricingDetails } from "../PricingDetails";
import ProductCard from "../ProductCard";
import { ProductInfoForm } from "../ProductInfoForm";
import UploadPhoto from "../UploadPhoto";
import PrimaryButton from "@/myComponents/PrimaryButton";
import OutlineButton from "@/myComponents/OutlineButton";
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import productReducer from "@/reducers/productReducer";

export default function AddProduct() {
  const initialState = {
    id: uuidv4(),
    name: "",
    images: [],
    category: null,
    brand: "",
    weight: "",
    gender: "",
    sizes: [],
    colors: [],
    description: "",
    tagNumber: "",
    stock: 0,
    tags: [],
    price: 0,
    discount: 0,
    tax: 0,
  };
  const [product, dispatch] = useReducer(productReducer, initialState);
  //console.log(product);
  return (
    <div
      className="grid grid-cols-1 
    xl:grid-cols-4 gap-y-4 xl:gap-4 py-6"
    >
      <div className="col-span-3 flex flex-col gap-4">
        <UploadPhoto />
        <ProductInfoForm product={product} dispatch={dispatch} />
        <PricingDetails product={product} dispatch={dispatch} />
        <div className="flex flex-col md:flex-row gap-3">
          <PrimaryButton text="Submit" type="submit" />
          <OutlineButton text="cancel" />
        </div>
      </div>
      <div className="col-span-1">
        <ProductCard product={product} />
      </div>
    </div>
  );
}
