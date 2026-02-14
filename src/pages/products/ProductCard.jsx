import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { colorClasses } from "@/data/productList";
import ImagesCarousel from "./ImagesCarousel";
import { Separator } from "@/components/ui/separator";

export default function ProductCard({ product }) {
  const price = Number(product.price) || 0;
  const discount = Number(product.discount) || 0;
  const discountedPrice = price * (1 - discount / 100);

  return (
    <Card
      className="text-gray-500 dark:text-gray-300 text-lg
  dark:bg-primary-black font-hanken max-w-md"
    >
      <CardContent>
        <div className="flex flex-col gap-4">
          {/* Product image */}

          <ImagesCarousel product={product} />

          {/* product name */}
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-lg text-gray-700">
              {product?.name || "Product Name"}
            </h1>
            <p className="text-sm capitalize">
              ({product.category !== "" ? product.category : "Category"})
            </p>
          </div>
          {/* price */}
          <div className="flex flex-col gap-1">
            <Label>Price:</Label>
            {/* check if there is a discount */}
            {product.discount > 0 ? (
              <div className="flex gap-2 font-medium items-center">
                <p className=" line-through">${price.toFixed(2)}</p>
                <p className="text-gray-700">${discountedPrice.toFixed(2)}</p>
                <p className="text-sm">({discount}% off)</p>
              </div>
            ) : (
              <p className=" font-medium">${price.toFixed(2)}</p>
            )}
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
          {/* TAGS */}
          {product.tags.length !== 0 ? (
            <>
              <Separator />
              <div className="flex items-center gap-2">
                <Label>Tags:</Label>
                <div className="flex flex-wrap gap-1">
                  {product.tags.map((tag, index) => (
                    <p key={index} className=" text-xs text-gray-900">
                      {tag}
                      {product.tags.length - 1 === index ? "." : ","}
                    </p>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
