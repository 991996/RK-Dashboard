import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CardContent, Card } from "@/components/ui/card";

export default function ImagesCarousel2({ images = [] }) {
  const [current, setCurrent] = useState(images[0]);

  // fallback إذا لا يوجد صور
  if (!images.length) {
    return (
      <div className="w-full h-64 flex items-center justify-center border rounded-md text-gray-400">
        No images
      </div>
    );
  }

  return (
    <Card>
      <CardContent>
        <div>
          <img src={current} />
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="basis-1/4 pl-1">
                <div
                  className="p-1 cursor-pointer"
                  onClick={() => setCurrent(image)}
                >
                  <img src={image} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
    </Card>
  );
}
