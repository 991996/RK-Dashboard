import UploadPhoto from "@/components/myComponents/images/UploadPhoto";
import PrimaryButton from "@/components/myComponents/buttons/PrimaryButton";
import OutlineButton from "@/components/myComponents/buttons/OutlineButton";
import { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TableLoader from "@/components/myComponents/loaders/TableLoader";
import { toast } from "sonner";
import { categoryInitialState } from "@/data/initialState";
import categoryReducer from "@/features/categories/reducer/categoryReducer";
import CategoryCard from "../components/CategoryCard";
import { CategoryInfoForm } from "../components/CategoryInfoForm";
import { useCategory, useUpdateCategory } from "../categoryQueries";

export default function EditCategory() {
  const { categoryId } = useParams();
  const [category, dispatch] = useReducer(
    categoryReducer,
    categoryInitialState
  );
  const navigate = useNavigate();
  const updateMutation = useUpdateCategory();

  //  Get the category
  const { data, isLoading } = useCategory(categoryId);

  // set the category to the view
  useEffect(() => {
    if (data) {
      dispatch({
        type: "SET_CATEGORY",
        payload: data,
      });
    }
  }, [data]);

  const handleEdit = () => {
    updateMutation.mutate(
      { categoryId, category },
      {
        onSuccess: () => {
          navigate("/categories");
        },
        onError: (error) => {
          toast.error("Category has not been updated", {
            position: "top-center",
          });
          console.log("faild", error);
        },
      }
    );
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <TableLoader />
      </div>
    );
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-y-4 xl:gap-4 py-6">
      <div className="flex flex-col  gap-4 col-span-1 order-2 xl:order-1">
        <CategoryCard category={category} />
        <div className="flex flex-col gap-3">
          <PrimaryButton
            onClick={handleEdit}
            disabled={updateMutation.isPending}
          >
            {updateMutation.isPending ? "Saving..." : "Submit"}
          </PrimaryButton>
          <OutlineButton onClick={() => navigate(-1)}>Cancel</OutlineButton>
        </div>
      </div>
      <div className="col-span-3 flex flex-col gap-4 order-1 xl:order-2">
        <UploadPhoto
          images={category?.images}
          maxFiles={1}
          dispatch={dispatch}
          cardTitle="Edit Category Photo"
        />
        <CategoryInfoForm category={category} dispatch={dispatch} />
      </div>
    </div>
  );
}
