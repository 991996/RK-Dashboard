import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import OutlineButton from "@/components/myComponents/buttons/OutlineButton";
import PrimaryButton from "@/components/myComponents/buttons/PrimaryButton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon } from "lucide-react";
import ProductItem from "./ProductItem";
import { useDeleteProduct } from "../productQueries";

export default function DeleteDialog({ open, setOpen, product }) {
  const deleteMutation = useDeleteProduct();
  const handleDelete = () => {
    if (!product?.firestoreId) return;
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

        {product && <ProductItem product={product} />}

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
