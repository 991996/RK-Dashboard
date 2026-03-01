import ImagesCarousel2 from "@/components/myComponents/images/ImagesCarousel2";
import ProductDetailsCard from "../components/ProductDetailsCard";
import { useParams } from "react-router-dom";
import { useProduct } from "../productQueries";
import TableLoader from "@/components/myComponents/TableLoader";

export default function ViewProduct() {
  const { productId } = useParams();
  // get product hook
  const { data: product, isLoading } = useProduct(productId);
  // set product to the view

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <TableLoader />
      </div>
    );
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <ImagesCarousel2 images={product.images} />
      </div>

      <div className="col-span-2">
        <ProductDetailsCard product={product} />
      </div>
    </div>
  );
}
