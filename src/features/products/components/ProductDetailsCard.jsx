import MyTag from "@/components/myComponents/MyTag";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Label } from "@/components/ui/label";
import { colorClasses } from "@/data/productList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { IoBookmarks } from "react-icons/io5";
import Reviews from "@/components/myComponents/Reviews";

export default function ProductDetailsCard({ product }) {
  const price = Number(product?.price) || 0;
  const discount = Number(product?.discount) || 0;
  const discountedPrice = price * (1 - discount / 100);
  return (
    <Card>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <MyTag text="New Arrival" />
          <h1 className="text-2xl">{product?.name}</h1>
          {/* Review */}
          <Reviews rate={4.5} />
        </div>
        {/* price */}
        <div className="flex flex-col gap-1">
          {/* check if there is a discount */}
          {product?.discount > 0 ? (
            <div className="flex gap-2 font-medium items-center">
              <p className=" line-through text-2xl">${price.toFixed(2)}</p>
              <p className="text-gray-700">${discountedPrice.toFixed(2)}</p>
              <p className="text-xs text-red-500">({discount}% off)</p>
            </div>
          ) : (
            <p className=" font-medium text-2xl">${price.toFixed(2)}</p>
          )}
        </div>
        <div className="flex gap-6">
          {/* size */}
          <div className="flex flex-col gap-2">
            <Label>Size:</Label>
            <div className="flex flex-wrap gap-1">
              {product?.sizes.map((size, index) => {
                return (
                  <Button
                    key={index}
                    type="button"
                    className="bg-gray-100 text-gray-800 hover:bg-gray-100"
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
                    className="p-3 bg-gray-100 text-gray-800 hover:bg-gray-100"
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
        {/* Quantity */}
        <div className="flex gap-2">
          <Label className="text-lg">Quantity:</Label>
          <Input
            type="number"
            value={product?.stock}
            className="w-fit"
            disable
          />
        </div>
        {/* check marks */}
        <div>
          <div className="flex gap-2 items-center text-green-500">
            <Check size={18} />
            <p className="text-gray-700"> In Stock</p>
          </div>
          <div className="flex gap-2 items-center text-green-500">
            <Check size={18} />
            <p className="text-gray-700"> Free delivery available</p>
          </div>
          <div className="flex gap-2 items-center text-green-500">
            <Check size={18} />
            <p className="text-gray-700">
              Sales 10% Off Use Code:{" "}
              <span className="text-gray-900">CODE123</span>
            </p>
          </div>
        </div>
        {/* Description */}
        <div>
          <Label className="text-lg">Description :</Label>
          <p className="text-gray-500">
            Top in sweatshirt fabric made from a cotton blend with a soft
            brushed inside. Relaxed fit with dropped shoulders, long sleeves and
            ribbing around the neckline, cuffs and hem. Small metal text
            applique.
          </p>
        </div>
        {/* Offers */}
        <div className="flex flex-col gap-2">
          <Label className="text-lg">Available offers :</Label>
          <div className="flex  gap-5 text-green-500">
            <IoBookmarks className="mt-1" />
            <p className="text-gray-500">
              <span className="text-gray-800">Bank Offer</span> 10% instant
              discount on Bank Debit Cards, up to $30 on orders of $50 and above
            </p>
          </div>
          <div className="flex gap-5 text-green-500">
            <IoBookmarks className="mt-1" />
            <p className="text-gray-500">
              <span className="text-gray-800">Bank Offer</span> Grab our
              exclusive offer now and save 20% on your next purchase! Don't miss
              out, shop today!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
