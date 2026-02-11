import image from "@/assets/404 1.png";
import PrimaryButton from "@/myComponents/PrimaryButton";
import { Link } from "react-router-dom";

export default function NotFound404() {
  return (
    <div className="w-full flex flex-col justify-between items-center h-full">
      <div className=" w-full sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto">
        <img src={image} className="w-full" />
      </div>
      <div className="flex flex-col items-center gap-6 pb-30">
        <p
          className="text-xl uppercase text-gray-500 font-semibold
         tracking-wide"
        >
          Opps! Page Not Found
        </p>
        <Link to="/">
          <PrimaryButton text="back to home" />
        </Link>
      </div>
    </div>
  );
}
