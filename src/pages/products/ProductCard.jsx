import { Card, CardContent } from "@/components/ui/card";
import productImage from "@/assets/p-1.png";
import { Label } from "@/components/ui/label";
import SizeInput from "./SizeInput";
import ColorInput from "./ColorInput";

export default function ProductCard() {
  const colors = ["red", "blue", "black"];
  const sizes = ["S", "M", "L", "XL"];
  return (
    <Card
      className="text-gray-500 dark:text-gray-300 text-lg
  dark:bg-primary-black font-hanken max-w-md"
    >
      <CardContent>
        <div className="flex flex-col gap-4">
          {/* Product image */}
          <div className="w-full aspect-square bg-gray-200 rounded-lg">
            <img src={productImage} className="w-full h-full object-contain" />
          </div>
          {/* product name */}
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-lg text-gray-700">
              Men Black Slim Fit T-shirt
            </h1>
            <p className="text-sm">(Fashion)</p>
          </div>
          {/* price */}
          <div className="flex flex-col gap-1">
            <Label>Price:</Label>
            <div className="flex gap-2 font-medium items-center">
              <p className=" line-through">$100</p>
              <p className="text-gray-700">$80</p>
              <p className="text-sm">(30% off)</p>
            </div>
          </div>
          {/* size */}
          <div className="flex flex-col gap-2">
            <Label>Size:</Label>
            <SizeInput sizes={sizes} />
          </div>
          {/* Colors */}
          <div className="flex flex-col gap-2">
            <Label>Colors:</Label>
            <ColorInput colors={colors} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
