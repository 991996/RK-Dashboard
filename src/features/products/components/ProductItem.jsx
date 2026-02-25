export default function ProductItem({ product }) {
  return (
    <div className="flex items-center gap-3">
      {/* Image */}
      <div className="w-15 aspect-square bg-gray-100 rounded-lg">
        <img src={product?.images[0]} className="w-full h-full object-cover" />
      </div>
      {/* name and size */}
      <div className="flex flex-col gap-1">
        <p className=" capitalize">{product.name}</p>
        <p className="text-sm text-gray-400">
          Size:
          {product.sizes?.map((size, index) => {
            return (
              <span key={index}>
                {size} {product.sizes.length - 1 !== index ? "," : ""}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
