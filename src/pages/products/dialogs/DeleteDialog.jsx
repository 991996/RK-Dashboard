import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import OutlineButton from "@/myComponents/OutlineButton";
import PrimaryButton from "@/myComponents/PrimaryButton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon } from "lucide-react";
import ProductItem from "../ProductItem";
import { deleteProduct } from "@/services/productService";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function DeleteDialog({ open, setOpen, product }) {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
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
  const handleDelete = () => {
    console.log(product);
    deleteMutation.mutate(product.firestoreId);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="font-hanken">
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col gap-4">
              <p>Are you sure you want to delete this product?</p>
              <Alert className="max-w-md border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
                <AlertTriangleIcon />

                <AlertTitle>Delete Product Warning</AlertTitle>

                <AlertDescription>
                  This action will permanently delete this product from your
                  store. This cannot be undone. Please confirm that you want to
                  continue.
                </AlertDescription>
              </Alert>
            </div>
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <ProductItem product={product} />

        <DialogFooter>
          <DialogClose asChild>
            <OutlineButton text="Cancel" />
          </DialogClose>
          <DialogClose asChild>
            <PrimaryButton text="Delete" type="submit" onClick={handleDelete} />
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
