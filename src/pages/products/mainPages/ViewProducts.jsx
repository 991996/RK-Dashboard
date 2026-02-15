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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/services/productService";
import TableLoader from "@/myComponents/TableLoader";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import OutlineButton from "@/myComponents/OutlineButton";
import { ChevronDown } from "lucide-react";

export default function ViewProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log("data", data);
        setProducts(data);
      } catch (error) {
        console.log("Error while get the products: ", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  console.log("products", products);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-hanken text-gray-700">
          All Product List
        </CardTitle>

        <CardAction className="flex gap-1">
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[25%]">Product Name & Size</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead className="text-right">Category</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => {
                return (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell className="text-right">
                      {product.category}
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.name}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
