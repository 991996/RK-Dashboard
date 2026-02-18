import { PricingDetails } from "../cards/PricingDetails";
import ProductCard from "../cards/ProductCard";
import { ProductInfoForm } from "../cards/ProductInfoForm";
import UploadPhoto from "../inputs/UploadPhoto";
import PrimaryButton from "@/myComponents/PrimaryButton";
import OutlineButton from "@/myComponents/OutlineButton";
import { useEffect, useState, useReducer } from "react";
import { fetchProduct, updateProduct } from "@/services/productService";
import { useNavigate, useParams } from "react-router-dom";
import TableLoader from "@/myComponents/TableLoader";
import productReducer from "@/reducers/productReducer";
import { toast } from "sonner";

export default function EditProduct() {
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, dispatch] = useReducer(productReducer, null);
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProduct(productId);
        if (!data) {
          console.log("Product not found");
          return;
        }
        dispatch({
          type: "SET_PRODUCT",
          payload: data,
        });
      } catch (error) {
        console.log("Error while get the product: ", error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [productId]);

  const handleEdit = async () => {
    setLoading(true);
    const saveProduct = async () => {
      try {
        await updateProduct(productId, {
          ...product,
        });
        toast.success("Product has been updated", { position: "top-center" });
        navigate("/products");
      } catch (error) {
        toast.error("Product has not been updated", { position: "top-center" });
        console.log("faild", error);
      }
    };
    saveProduct();
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <TableLoader />
      </div>
    );
  return (
    <div
      className="grid grid-cols-1 
    xl:grid-cols-4 gap-y-4 xl:gap-4 py-6"
    >
      <div className="flex flex-col  gap-4 col-span-1 order-2 xl:order-1">
        <ProductCard product={product} />
        <div className="flex flex-col gap-3">
          <PrimaryButton text="Submit" onClick={handleEdit} />

          <OutlineButton text="Cancel" onClick={() => navigate(-1)} />
        </div>
      </div>
      <div className="col-span-3 flex flex-col gap-4 order-1 xl:order-2">
        <UploadPhoto images={product.images} dispatch={dispatch} />
        <ProductInfoForm product={product} dispatch={dispatch} />
        <PricingDetails product={product} dispatch={dispatch} />
      </div>
    </div>
  );
}
