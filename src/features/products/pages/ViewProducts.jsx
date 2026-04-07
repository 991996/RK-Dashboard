import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PrimaryButton from "@/components/myComponents/buttons/PrimaryButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import TableLoader from "@/components/myComponents/loaders/TableLoader";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import OutlineButton from "@/components/myComponents/buttons/OutlineButton";
import { ChevronDown, Star, StarIcon } from "lucide-react";
import PaginationComponent from "../../../components/myComponents/TablePagination";
import { Separator } from "@/components/ui/separator";
import ViewProductsTable from "../components/ViewProductsTable";
import DeleteDialog from "../components/DeleteProductDialog";
import { useProducts } from "../productQueries";
import TableShowSelect from "@/components/myComponents/TableShowSelect";
import { useCategories } from "@/features/categories/categoryQueries";
import usePagination from "@/hooks/usePagination";

export default function ViewProducts() {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const { data: products, isLoading, error } = useProducts();
  // get the category title for every product
  const { data: categories = [], isLoading: catLoading } = useCategories();

  // pagination
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(10);

  // get sliced list based on show and page
  const { paginatedItems: paginatedProducts, totalPages } = usePagination(
    products,
    page,
    show
  );

  return (
    <>
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="font-hanken text-gray-700">
            All Products List
          </CardTitle>

          <CardAction className="flex gap-1">
            {/* Add product button */}
            <Link to="/addProduct">
              <PrimaryButton className="flex items-center">
                <span className="hidden md:inline">Add Product</span>
                <span className="md:hidden">Add</span>
              </PrimaryButton>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {/* <OutlineButton text="This month" icon={<ChevronDown />} /> */}
                <OutlineButton className="flex items-center">
                  <span className="hidden md:inline">This month</span>
                  <ChevronDown />
                </OutlineButton>
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
        {/* Products table */}
        <CardContent>
          {/* error */}
          {error && <div className="text-red-500">Error loading products</div>}

          {/* loading */}
          {isLoading || catLoading ? (
            <TableLoader />
          ) : (
            <ViewProductsTable
              products={paginatedProducts}
              categories={categories}
              setOpenDialog={setOpenDialog}
              setCurrentProduct={setCurrentProduct}
            />
          )}
        </CardContent>
        <Separator />
        <CardFooter>
          <PaginationComponent
            totalItems={products?.length}
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
        product={currentProduct}
      />
    </>
  );
}
