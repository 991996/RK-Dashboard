import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PrimaryButton from "@/components/myComponents/PrimaryButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import TableLoader from "@/components/myComponents/TableLoader";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import OutlineButton from "@/components/myComponents/OutlineButton";
import { ChevronDown, Star, StarIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import DeleteDialog from "../../../pages/category/DeleteDialog";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@/features/categories/categoryService";
import ViewCategoriesTable from "../../../pages/category/ViewCategoriesTable";

export default function ViewCategories() {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  if (error) return <div>Error...!</div>;
  return (
    <>
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="font-hanken text-gray-700">
            All Categories List
          </CardTitle>

          <CardAction className="flex gap-1">
            {/* Add Category button */}
            <Link to="/addCategory">
              <PrimaryButton text="Add Category" />
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <OutlineButton text="This month" icon={<ChevronDown />} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Download</DropdownMenuItem>
                <DropdownMenuItem>Import</DropdownMenuItem>
                <DropdownMenuItem>Export</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardAction>
        </CardHeader>
        <hr />

        <CardContent>
          {/* categories table */}
          {isLoading ? (
            <div className=" h-[50vh] flex justify-center items-center">
              <TableLoader />
            </div>
          ) : (
            <ViewCategoriesTable
              categories={categories}
              setOpenDialog={setOpenDialog}
              setCurrentCategory={setCurrentCategory}
            />
          )}
        </CardContent>
        <Separator />
        <CardFooter>{/* <PaginationComponent /> */}</CardFooter>
      </Card>
      {/* Delete Dialog */}
      <DeleteDialog
        open={openDialog}
        setOpen={setOpenDialog}
        category={currentCategory}
      />
    </>
  );
}
