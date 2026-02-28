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
import PaginationComponent from "../../../components/myComponents/TablePagination";
import { Separator } from "@/components/ui/separator";
import ViewProductsTable from "../components/ViewProductsTable";
import DeleteDialog from "../components/DeleteProductDialog";
import { useProducts } from "../productQueries";
import TableShowSelect from "@/components/myComponents/TableShowSelect";

export default function ViewProducts() {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const { data: products, isLoading, error } = useProducts();
  // pagination
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(10);
  if (error) return <div>Error...!</div>;
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
              <PrimaryButton text="Add Product" />
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
            <TableShowSelect show={show} setShow={setShow} />
          </CardAction>
        </CardHeader>
        <hr />

        <CardContent>
          {/* Products table */}
          {isLoading ? (
            <div className=" h-[50vh] flex justify-center items-center">
              <TableLoader />
            </div>
          ) : (
            <ViewProductsTable
              products={products.slice((page - 1) * show, page * show)}
              setOpenDialog={setOpenDialog}
              setCurrentProduct={setCurrentProduct}
            />
          )}
        </CardContent>
        <Separator />
        <CardFooter>
          <PaginationComponent
            totalItems={products?.length}
            itemsPerPage={show}
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
