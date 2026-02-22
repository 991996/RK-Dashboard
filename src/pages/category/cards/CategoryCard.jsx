import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import ImagesCarousel from "@/pages/products/inputs/ImagesCarousel";

export default function CategoryCard({ category }) {
  return (
    <Card
      className="text-gray-500 dark:text-gray-300 text-lg
  dark:bg-primary-black font-hanken max-w-md"
    >
      <CardContent>
        <div className="flex flex-col gap-4">
          {/* category image */}

          <ImagesCarousel images={category.images} />

          {/* category title */}
          <div className="flex flex-wrap items-center gap-1">
            <h1 className="font-semibold text-lg text-gray-700">
              {category?.title || "Category Title"}
            </h1>
          </div>

          {/* Category info */}
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col gap-2">
              <Label>Created By:</Label>
              <p className="font-semibold text-sm text-gray-700">
                {category?.createdBy}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Stock:</Label>
              <p className="font-semibold text-sm text-gray-700">
                {category?.stock}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Label>ID:</Label>
              <p className="font-semibold text-sm text-gray-700">
                {category?.tagId}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
