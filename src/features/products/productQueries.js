import {
  fetchProducts,
  fetchProduct,
  updateProduct,
  createProduct,
  deleteProduct,
} from "./productService";

import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// get products list custom hook
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

// get a product custom hook
export const useProduct = (productId) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
  });
};

// add new Product custom hook
export const useAddProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      navigate("/added_successfully");
    },
  });
};

// update Product custom hook
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ productId, product }) => updateProduct(productId, product),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      toast.success("Product has been updated", { position: "top-center" });
    },
  });
};

// delete Product custom hook
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      toast.success("Product has been deleted", { position: "top-center" });
    },
    onError: (error) => {
      toast.error("Product has not been deleted", { position: "top-center" });
      console.log("ERROR", error);
    },
  });
};
