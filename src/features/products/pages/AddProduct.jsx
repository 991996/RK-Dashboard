import { PricingDetails } from "../components/PricingDetails";
import ProductCard from "../components/ProductCard";
import { ProductInfoForm } from "../components/ProductInfoForm";
import UploadPhoto from "../../../components/myComponents/images/UploadPhoto";
import PrimaryButton from "@/components/myComponents/buttons/PrimaryButton";
import OutlineButton from "@/components/myComponents/buttons/OutlineButton";
import { useReducer } from "react";
import productReducer from "@/features/products/reducer/productReducer";
import UploadLoader from "@/components/myComponents/loaders/UploadLoader";
import { Link } from "react-router-dom";
import { productInitialState } from "@/data/initialState";
import { useAddProduct } from "../productQueries";

export default function AddProduct() {
  const [product, dispatch] = useReducer(productReducer, productInitialState);

  const mutation = useAddProduct();

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
          <PrimaryButton onClick={handleSave} disabled={mutation.isPending}>
            {mutation.isPending ? "Saving..." : "Submit"}
          </PrimaryButton>
          <Link to="/products" className="w-full cursor-pointer">
            <OutlineButton className="w-full">Cancel</OutlineButton>
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
