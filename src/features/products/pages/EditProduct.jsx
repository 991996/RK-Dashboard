import { PricingDetails } from "../components/PricingDetails";
import ProductCard from "../components/ProductCard";
import { ProductInfoForm } from "@/features/products/components/ProductInfoForm";
import UploadPhoto from "../../../components/myComponents/images/UploadPhoto";
import PrimaryButton from "@/components/myComponents/buttons/PrimaryButton";
import OutlineButton from "@/components/myComponents/buttons/OutlineButton";
import { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TableLoader from "@/components/myComponents/loaders/TableLoader";
import productReducer from "@/features/products/reducer/productReducer";
import { toast } from "sonner";
import { productInitialState } from "@/data/initialState";
import { useProduct, useUpdateProduct } from "../productQueries";

export default function EditProduct() {
  const { productId } = useParams();
  const [product, dispatch] = useReducer(productReducer, productInitialState);
  const navigate = useNavigate();
  const updateMutation = useUpdateProduct();

  //  Get the Product
  const { data, isLoading } = useProduct(productId);

  // set the product to the view
  useEffect(() => {
    if (data) {
      dispatch({
        type: "SET_PRODUCT",
        payload: data,
      });
    }
  }, [data]);

  const handleEdit = () => {
    updateMutation.mutate(
      { productId, product },
      {
        onSuccess: () => {
          navigate("/products");
        },
        onError: (error) => {
          toast.error("Product has not been updated", {
            position: "top-center",
          });
          console.log("faild", error);
        },
      }
    );
  };

  if (isLoading)
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
          <PrimaryButton
            onClick={handleEdit}
            disabled={updateMutation.isPending}
          >
            {updateMutation.isPending ? "Saving..." : "Submit"}
          </PrimaryButton>

          <OutlineButton onClick={() => navigate(-1)}>Cancel</OutlineButton>
        </div>
      </div>
      <div className="col-span-3 flex flex-col gap-4 order-1 xl:order-2">
        <UploadPhoto
          images={product?.images}
          dispatch={dispatch}
          cardTitle="Edit Product Photo"
        />
        <ProductInfoForm product={product} dispatch={dispatch} />
        <PricingDetails product={product} dispatch={dispatch} />
      </div>
    </div>
  );
}
