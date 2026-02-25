import { PricingDetails } from "../cards/PricingDetails";
import ProductCard from "../cards/ProductCard";
import { ProductInfoForm } from "../cards/ProductInfoForm";
import UploadPhoto from "../inputs/UploadPhoto";
import PrimaryButton from "@/myComponents/PrimaryButton";
import OutlineButton from "@/myComponents/OutlineButton";
import { useReducer } from "react";
import productReducer from "@/reducers/productReducer";
import { createProduct } from "@/services/productService";
import UploadLoader from "@/myComponents/UploadLoader";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productInitialState } from "@/reducers/initialState";

export default function AddProduct() {
  const queryClient = useQueryClient();
  const [product, dispatch] = useReducer(productReducer, productInitialState);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      navigate("/added_successfully");
    },
  });

  // save the product
  const handleSave = async () => {
    mutation.mutate(product);
  };
  if (mutation.isLoading) return <UploadLoader />;
  return (
    <div
      className="grid grid-cols-1 
    xl:grid-cols-4 gap-y-4 xl:gap-4 py-6"
    >
      <div className="flex flex-col  gap-4 col-span-1 order-2 xl:order-1">
        <ProductCard product={product} />
        <div className="flex flex-col gap-3">
          <PrimaryButton text="Submit" onClick={handleSave} />
          <Link to="/products" className="w-full cursor-pointer">
            <OutlineButton text="Cancel" className="w-full" />
          </Link>
        </div>
      </div>
      <div className="col-span-3 flex flex-col gap-4 order-1 xl:order-2">
        <UploadPhoto dispatch={dispatch} cardTitle="Add Product Photo" />
        <ProductInfoForm product={product} dispatch={dispatch} />
        <PricingDetails product={product} dispatch={dispatch} />
      </div>
    </div>
  );
}
