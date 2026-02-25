import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProductItem from "./ProductItem";
import { Checkbox } from "@/components/ui/checkbox";
import { FaStar } from "react-icons/fa6";
import IconButton from "@/components/myComponents/IconButton";
import { IoEyeOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import MyTooltip from "@/components/myComponents/MyTooltip";
import { useNavigate } from "react-router-dom";

export default function ViewProductsTable({
  products = [],
  setOpenDialog,
  setCurrentProduct,
}) {
  const navigate = useNavigate();
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-50">
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead className="w-[25%] text-gray-500 font-semibold">
            Product Name & Size
          </TableHead>
          <TableHead className="text-gray-500 font-semibold">Price</TableHead>
          <TableHead className="text-gray-500 font-semibold">Stock</TableHead>
          <TableHead className="text-gray-500 font-semibold">
            Category
          </TableHead>
          <TableHead className="text-gray-500 font-semibold">Rating</TableHead>
          <TableHead className="text-gray-500 font-semibold">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => {
          return (
            <TableRow key={product.firestoreId}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <ProductItem product={product} />
              </TableCell>
              <TableCell>
                <p className="text-gray-400">${product.price}</p>
              </TableCell>
              <TableCell>
                <StockItem product={product} />
              </TableCell>
              <TableCell>
                <p className="text-gray-500">{product.category}</p>
              </TableCell>
              <TableCell>
                <RatingCell />
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <MyTooltip text="View Product">
                    <IconButton
                      icon={<IoEyeOutline />}
                      className="bg-gray-100 text-gray-500 hover:bg-gray-500"
                    />
                  </MyTooltip>
                  <MyTooltip text="Edit Product">
                    <IconButton
                      icon={<CiEdit />}
                      className="bg-primary-red/20 text-primary-red hover:bg-primary-red"
                      onClick={() => {
                        navigate(`/editProduct/${product.firestoreId}`);
                      }}
                    />
                  </MyTooltip>
                  <MyTooltip text="Delete Product">
                    <IconButton
                      icon={<AiOutlineDelete />}
                      className="bg-red-100 text-red-500 hover:bg-red-500"
                      onClick={() => {
                        setCurrentProduct(product);
                        setOpenDialog(true);
                      }}
                    />
                  </MyTooltip>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

function StockItem({ product }) {
  return (
    <div className="flex flex-col">
      <p>{product.stock} Item Left</p>
      <p className="text-gray-400">{(product.stock / 3).toFixed(0)} Sold</p>
    </div>
  );
}

function RatingCell() {
  return (
    <div className="flex items-center gap-2">
      {/* Rating */}
      <div className="flex gap-1 items-center py-1 px-2 rounded-sm bg-gray-100 text-yellow-600">
        <FaStar size={15} />
        <p className="text-gray-800 font-semibold">4.1</p>
      </div>
      {/* Review */}
      <p className="text-gray-500">289 Review</p>
    </div>
  );
}
