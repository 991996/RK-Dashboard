import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import OutlineButton from "@/components/myComponents/OutlineButton";
import PrimaryButton from "@/components/myComponents/PrimaryButton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon } from "lucide-react";
import CategoryItem from "./CategoryItem";
import { useDeleteCategory } from "../categoryQueries";

export default function DeleteDialog({ open, setOpen, category }) {
  const deleteMutation = useDeleteCategory();
  const handleDelete = () => {
    deleteMutation.mutate(category.firestoreId);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="font-hanken">
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col gap-4">
              <p>Are you sure you want to delete this category?</p>
              <Alert className="max-w-md border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
                <AlertTriangleIcon />

                <AlertTitle>Delete Category Warning</AlertTitle>

                <AlertDescription>
                  This action will permanently delete this category from your
                  store. This cannot be undone. Please confirm that you want to
                  continue.
                </AlertDescription>
              </Alert>
            </div>
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <CategoryItem category={category} />

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
