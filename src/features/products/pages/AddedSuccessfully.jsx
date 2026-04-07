import OutlineButton from "@/components/myComponents/buttons/OutlineButton";
import { CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";
import PrimaryButton from "@/components/myComponents/buttons/PrimaryButton";

export default function AddedSuccessfully() {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen gap-4">
      {/* Icon */}
      <div className="text-green-600">
        <CircleCheckBig size={100} />
      </div>

      <div className="flex flex-col items-center gap-6 pb-30">
        <p
          className="text-xl uppercase text-gray-500 font-semibold
             tracking-wide"
        >
          The product added successfully.
        </p>
        <div className=" flex flex-col gap-1 items-center">
          <Link to="/addProduct">
            <PrimaryButton text="Add new product" />
          </Link>
          <Link to="/products">
            <OutlineButton text="view products" />
          </Link>
        </div>
      </div>
    </div>
  );
}
