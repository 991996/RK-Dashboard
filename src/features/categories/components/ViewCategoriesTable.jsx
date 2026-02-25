import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import IconButton from "@/components/myComponents/IconButton";
import { IoEyeOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import MyTooltip from "@/components/myComponents/MyTooltip";
import { useNavigate } from "react-router-dom";
import CategoryItem from "./CategoryItem";

export default function ViewCategoriesTable({
  categories = [],
  setOpenDialog,
  setCurrentCategory,
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
            Categories
          </TableHead>
          <TableHead className="text-gray-500 font-semibold">Price</TableHead>
          <TableHead className="text-gray-500 font-semibold">
            Created by
          </TableHead>
          <TableHead className="text-gray-500 font-semibold">ID</TableHead>
          <TableHead className="text-gray-500 font-semibold">Stock</TableHead>
          <TableHead className="text-gray-500 font-semibold">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category) => {
          return (
            <TableRow key={category.firestoreId}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <CategoryItem category={category} />
              </TableCell>
              <TableCell>
                <p className="text-gray-400">{category?.title}</p>
              </TableCell>
              <TableCell>{category?.createdBy}</TableCell>
              <TableCell>
                <p className="text-gray-500">{category?.tagId}</p>
              </TableCell>
              <TableCell>{category?.stock}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <MyTooltip text="View Category">
                    <IconButton
                      icon={<IoEyeOutline />}
                      className="bg-gray-100 text-gray-500 hover:bg-gray-500"
                    />
                  </MyTooltip>
                  <MyTooltip text="Edit Category">
                    <IconButton
                      icon={<CiEdit />}
                      className="bg-primary-red/20 text-primary-red hover:bg-primary-red"
                      onClick={() => {
                        navigate(`/editCategory/${category.firestoreId}`);
                      }}
                    />
                  </MyTooltip>
                  <MyTooltip text="Delete Category">
                    <IconButton
                      icon={<AiOutlineDelete />}
                      className="bg-red-100 text-red-500 hover:bg-red-500"
                      onClick={() => {
                        setCurrentCategory(category);
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
