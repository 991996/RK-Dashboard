import { Card, CardContent } from "@/components/ui/card";
import productImage from "@/assets/p-1.png";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { colorClasses } from "@/data/productList";

export default function ProductCard({ product }) {
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
              {product.name}
            </h1>
            <p className="text-sm">(Fashion)</p>
          </div>
          {/* price */}
          <div className="flex flex-col gap-1">
            <Label>Price:</Label>
            <div className="flex gap-2 font-medium items-center">
              <p className=" line-through">${product.price}</p>
              <p className="text-gray-700">$80</p>
              <p className="text-sm">(30% off)</p>
            </div>
          </div>
          {/* size */}
          <div className="flex flex-col gap-2">
            <Label>Size:</Label>
            <div className="flex flex-wrap gap-1">
              {product?.sizes.map((size, index) => {
                return (
                  <Button
                    key={index}
                    type="button"
                    className="cursor-pointer bg-gray-100 text-gray-800 hover:bg-gray-100"
                  >
                    {size}
                  </Button>
                );
              })}
            </div>
          </div>
          {/* Colors */}
          <div className="flex flex-col gap-2">
            <Label>Colors:</Label>
            <div className="flex flex-wrap gap-2">
              {product?.colors.map((color, index) => {
                return (
                  <Button
                    key={index}
                    type="button"
                    className="cursor-pointer p-3 bg-gray-100 text-gray-800 hover:bg-gray-100"
                  >
                    <div
                      className={`w-4 aspect-square rounded-full ${colorClasses[color]}`}
                    ></div>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
