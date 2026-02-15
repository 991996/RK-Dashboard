import { PricingDetails } from "../PricingDetails";
import ProductCard from "../ProductCard";
import { ProductInfoForm } from "../ProductInfoForm";
import UploadPhoto from "../UploadPhoto";
import PrimaryButton from "@/myComponents/PrimaryButton";
import OutlineButton from "@/myComponents/OutlineButton";
import { useReducer, useState } from "react";
import productReducer from "@/reducers/productReducer";
import { createProduct } from "@/services/productService";
import UploadLoader from "@/myComponents/UploadLoader";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const initialState = {
    name: "",
    images: [],
    category: "",
    brand: "",
    weight: "",
    sizes: [],
    colors: [],
    description: "",
    tagNumber: "",
    stock: 0,
    tags: [],
    price: 0.0,
    discount: 0.0,
    tax: 0.0,
    createdAt: null,
  };
  const [product, dispatch] = useReducer(productReducer, initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // save the product
  const handleSave = async () => {
    setLoading(true);
    try {
      await createProduct(product);
      navigate("/added_successfully");
    } catch (error) {
      console.error(error);
    }
  };
  if (loading) return <UploadLoader />;
  return (
    <div
      className="grid grid-cols-1 
    xl:grid-cols-4 gap-y-4 xl:gap-4 py-6"
    >
      <div className="flex flex-col  gap-4 col-span-1 order-2 xl:order-1">
        <ProductCard product={product} />
        <div className="flex flex-col gap-3">
          <PrimaryButton text="Submit" onClick={handleSave} />
          <OutlineButton text="cancel" />
        </div>
      </div>
      <div className="col-span-3 flex flex-col gap-4 order-1 xl:order-2">
        <UploadPhoto product={product} dispatch={dispatch} />
        <ProductInfoForm product={product} dispatch={dispatch} />
        <PricingDetails product={product} dispatch={dispatch} />
      </div>
    </div>
  );
}
