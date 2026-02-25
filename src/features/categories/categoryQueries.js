import {
  fetchCategories,
  fetchCategory,
  updateCategory,
  createCategory,
  deleteCategory,
} from "./categoryService";

import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// get categories list custom hook
export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};

// get a category custom hook
export const useCategory = (categoryId) => {
  return useQuery({
    queryKey: ["category", categoryId],
    enabled: !!categoryId,
    queryFn: () => fetchCategory(categoryId),
  });
};

// add new category custom hook
export const useAddCategory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
      navigate("/categories");
    },
  });
};

// update category custom hook
export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ categoryId, category }) =>
      updateCategory(categoryId, category),
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
      toast.success("Category has been updated", { position: "top-center" });
    },
  });
};

// delete category custom hook
export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
      toast.success("Category has been deleted", { position: "top-center" });
    },
    onError: (error) => {
      toast.error("Category has not been deleted", { position: "top-center" });
      console.log("ERROR", error);
    },
  });
};
