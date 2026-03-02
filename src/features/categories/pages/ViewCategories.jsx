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
import DeleteDialog from "../components/DeleteCategoryDialog";
import ViewCategoriesTable from "../components/ViewCategoriesTable";
import PaginationComponent from "@/components/myComponents/TablePagination";
import { useCategories } from "../categoryQueries";
import TableShowSelect from "@/components/myComponents/TableShowSelect";
import { categoryList } from "@/data/categoryList";
import usePagination from "@/hooks/usePagination";

export default function ViewCategories() {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const { data: categories, isLoading, error } = useCategories();
  // pagination
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(10);
  // get sliced list based on show and page
  const { paginatedItems: paginatedCategories, totalPages } = usePagination(
    categories,
    page,
    show
  );
  if (error) return <div>Error...!</div>;
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryList.map((cat, index) => {
          return <CategoryBlock key={index} category={cat} />;
        })}
      </div>
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
            {totalPages > 1 ? (
              <TableShowSelect show={show} setShow={setShow} />
            ) : null}
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
              categories={paginatedCategories}
              setOpenDialog={setOpenDialog}
              setCurrentCategory={setCurrentCategory}
            />
          )}
        </CardContent>
        <Separator />
        <CardFooter>
          <PaginationComponent
            totalItems={categories?.length}
            totalPages={totalPages}
            currentPage={page}
            onPageChange={setPage}
          />
        </CardFooter>
      </Card>
      {/* Delete Dialog */}
      <DeleteDialog
        open={openDialog}
        setOpen={setOpenDialog}
        category={currentCategory}
      />
    </div>
  );
}

function CategoryBlock({ category }) {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col justify-center items-center gap-3">
          <div
            className="w-full h-30 rounded-lg"
            style={{ backgroundColor: category.bgColor }}
          >
            <img
              src={category?.image}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="font-semibold text-gray-600 text-lg">
            {category?.title}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
