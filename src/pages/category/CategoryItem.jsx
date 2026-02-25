export default function CategoryItem({ category }) {
  return (
    <div className="flex items-center gap-3">
      {/* Image */}
      <div className="w-15 aspect-square bg-gray-100 rounded-lg">
        <img src={category?.images} className="w-full h-full object-cover" />
      </div>
      {/* title */}

      <p className=" capitalize">{category?.title}</p>
    </div>
  );
}
