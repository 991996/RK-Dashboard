import UploadPhoto from "@/pages/products/inputs/UploadPhoto";
import PrimaryButton from "@/myComponents/PrimaryButton";
import OutlineButton from "@/myComponents/OutlineButton";
import { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TableLoader from "@/myComponents/TableLoader";
import { toast } from "sonner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { categoryInitialState } from "@/reducers/initialState";
import categoryReducer from "@/reducers/categoryReducer";
import { updateCategory } from "@/services/categoryService";
import { fetchCategory } from "@/services/categoryService";
import CategoryCard from "../cards/CategoryCard";
import { CategoryInfoForm } from "../cards/CategoryInfoForm";

export default function EditCategory() {
  const { categoryId } = useParams();
  const [category, dispatch] = useReducer(
    categoryReducer,
    categoryInitialState
  );
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const updateMutation = useMutation({
    mutationFn: ({ categoryId, category }) =>
      updateCategory(categoryId, category),
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
      toast.success("Category has been updated", { position: "top-center" });
    },
  });

  //  Get the category
  const { data, isLoading } = useQuery({
    queryKey: ["category", categoryId],
    queryFn: () => fetchCategory(categoryId),
  });

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
            text={updateMutation.isPending ? "Saving..." : "Submit"}
            onClick={handleEdit}
            disabled={updateMutation.isPending}
          />
          <OutlineButton text="Cancel" onClick={() => navigate(-1)} />
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
