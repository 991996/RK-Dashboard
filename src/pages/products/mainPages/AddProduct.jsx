import ProductCard from "../ProductCard";
import { ProductInfoForm } from "../ProductInfoForm";
import UploadPhoto from "../UploadPhoto";

export default function AddProduct() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-6">
      <div className="col-span-1">
        <ProductCard />
      </div>

      <div className="col-span-3 flex flex-col gap-4">
        <UploadPhoto />
        <ProductInfoForm />
      </div>
    </div>
  );
}
