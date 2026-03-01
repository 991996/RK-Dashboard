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
import MyTag from "@/components/myComponents/MyTag";
import MyOutlineTag from "@/components/myComponents/MyOutlineTag";

export default function ViewOrdersTable({
  orders = [],
  setOpenDialog,
  setCurrentOrder,
}) {
  const navigate = useNavigate();
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-50">
          <TableHead className="text-gray-500 font-semibold">
            Order ID
          </TableHead>
          <TableHead className="text-gray-500 font-semibold">
            Created at
          </TableHead>
          <TableHead className="text-gray-500 font-semibold">
            Customer
          </TableHead>
          <TableHead className="text-gray-500 font-semibold">
            Priority
          </TableHead>
          <TableHead className="text-gray-500 font-semibold">Total</TableHead>
          <TableHead className="text-gray-500 font-semibold">
            Payment Status
          </TableHead>
          <TableHead className="text-gray-500 font-semibold">Items</TableHead>
          <TableHead className="text-gray-500 font-semibold">
            Delivery Number
          </TableHead>
          <TableHead className="text-gray-500 font-semibold">
            Order Status
          </TableHead>
          <TableHead className="text-gray-500 font-semibold">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => {
          return (
            <TableRow key={order.firestoreId}>
              <TableCell>
                <p>{order.orderId}</p>
              </TableCell>
              <TableCell>
                <p className="text-gray-400">{order?.createdAt}</p>
              </TableCell>
              <TableCell>
                <p className="text-primary-red">{order?.customer}</p>
              </TableCell>
              <TableCell>
                <p className="text-gray-500">{order?.priority}</p>
              </TableCell>
              <TableCell>{order?.total}</TableCell>
              <TableCell>
                <MyTag
                  text={order?.paymentStatus}
                  color={
                    order.paymentStatus === "paid"
                      ? "bg-green-500"
                      : order.paymentStatus === "unpaid"
                      ? "bg-gray-400"
                      : "bg-red-500"
                  }
                />
              </TableCell>
              <TableCell>
                <p className="text-gray-500">{order?.items}</p>
              </TableCell>
              <TableCell>
                <p className="text-gray-500">{order?.DeliveryNumber}</p>
              </TableCell>
              <TableCell>
                <MyOutlineTag
                  text={order?.orderStatus}
                  color={
                    order.orderStatus === "completed"
                      ? "green"
                      : order.orderStatus === "draft"
                      ? "gray"
                      : order.orderStatus === "canceled"
                      ? "red"
                      : "orange"
                  }
                />
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <MyTooltip text="View Order">
                    <IconButton
                      icon={<IoEyeOutline />}
                      className="bg-gray-100 text-gray-500 hover:bg-gray-500"
                    />
                  </MyTooltip>
                  <MyTooltip text="Edit Order">
                    <IconButton
                      icon={<CiEdit />}
                      className="bg-primary-red/20 text-primary-red hover:bg-primary-red"
                      onClick={() => {
                        navigate(`/editOrder/${order.firestoreId}`);
                      }}
                    />
                  </MyTooltip>
                  <MyTooltip text="Delete Order">
                    <IconButton
                      icon={<AiOutlineDelete />}
                      className="bg-red-100 text-red-500 hover:bg-red-500"
                      onClick={() => {
                        setCurrentOrder(order);
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
