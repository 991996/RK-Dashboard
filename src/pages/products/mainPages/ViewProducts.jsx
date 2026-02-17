import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PrimaryButton from "@/myComponents/PrimaryButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/services/productService";
import TableLoader from "@/myComponents/TableLoader";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import OutlineButton from "@/myComponents/OutlineButton";
import { ChevronDown, Star, StarIcon } from "lucide-react";
import PaginationComponent from "../Pagination";
import { Separator } from "@/components/ui/separator";
import ViewProductsTable from "../ViewProductsTable";
import DeleteDialog from "../dialogs/DeleteDialog";

export default function ViewProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.log("Error while get the products: ", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="font-hanken text-gray-700">
            All Product List
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
          </CardAction>
        </CardHeader>
        <hr />

        <CardContent>
          {/* Products table */}
          {loading ? (
            <div className=" h-[50vh] flex justify-center items-center">
              <TableLoader />
            </div>
          ) : (
            <ViewProductsTable
              products={products}
              setOpenDialog={setOpenDialog}
              setCurrentProduct={setCurrentProduct}
            />
          )}
        </CardContent>
        <Separator />
        <CardFooter>
          <PaginationComponent />
        </CardFooter>
      </Card>
      {/* Delete Dialog */}
      <DeleteDialog
        open={openDialog}
        setOpen={setOpenDialog}
        product={currentProduct}
        setProducts={setProducts}
      />
    </>
  );
}
