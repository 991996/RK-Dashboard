import React, { useState, useEffect, useMemo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ImagesCarousel({ product }) {
  const images = useMemo(() => {
    return product?.images || [];
  }, [product]);
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (!api || !images.length) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, images]);

  // fallback إذا لا يوجد صور
  if (!images.length) {
    return (
      <div className="w-full h-64 flex items-center justify-center border rounded-md text-gray-400">
        No images
      </div>
    );
  }

  return (
    <div className="w-full">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={img.id || index}>
              <div className="w-full aspect-square bg-gray-200 rounded-lg">
                <img
                  src={img.preview || img.url}
                  alt={`product-${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* indicator */}
      <div className="text-center text-sm text-gray-500 mt-2">
        {current} / {images.length}
      </div>
    </div>
  );
}
