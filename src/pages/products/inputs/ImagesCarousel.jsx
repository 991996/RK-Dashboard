import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ImagesCarousel({ images = [] }) {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    handleSelect();

    api.on("select", handleSelect);

    return () => api.off("select", handleSelect);
  }, [api]);

  const getPreview = (file) => {
    if (typeof file === "string") return file;
    return file.preview;
  };

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
            <CarouselItem key={index}>
              <div className="w-full aspect-square bg-gray-200 rounded-lg">
                <img
                  src={getPreview(img)}
                  alt={`product-${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {images.length > 1 ? (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        ) : null}
      </Carousel>

      {/* indicator */}
      {images.length > 1 ? (
        <div className="text-center text-sm text-gray-500 mt-2">
          {current} / {images.length}
        </div>
      ) : null}
    </div>
  );
}
