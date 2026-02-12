import { PricingDetails } from "../PricingDetails";
import ProductCard from "../ProductCard";
import { ProductInfoForm } from "../ProductInfoForm";
import UploadPhoto from "../UploadPhoto";
import PrimaryButton from "@/myComponents/PrimaryButton";
import OutlineButton from "@/myComponents/OutlineButton";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddProduct() {
  const [product, setProduct] = useState({
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
  });
  return (
    <div
      className="grid grid-cols-1 
    xl:grid-cols-4 gap-y-4 xl:gap-4 py-6"
    >
      <form className="col-span-3 flex flex-col gap-4">
        <UploadPhoto />
        <ProductInfoForm />
        <PricingDetails />
        <div className="flex flex-col md:flex-row gap-3">
          <PrimaryButton text="Submit" type="submit" />
          <OutlineButton text="cancel" />
        </div>
      </form>
      <div className="col-span-1">
        <ProductCard />
      </div>
    </div>
  );
}
