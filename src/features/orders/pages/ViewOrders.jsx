import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ordersBlocksList, ordersList } from "@/data/orderList";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import OutlineButton from "@/components/myComponents/OutlineButton";
import { ChevronDown } from "lucide-react";
import TableShowSelect from "@/components/myComponents/TableShowSelect";
import ViewOrdersTable from "../components/ViewOrdersTable";
import { Separator } from "@/components/ui/separator";
import PaginationComponent from "@/components/myComponents/TablePagination";

export default function ViewOrders() {
  const orders = ordersList;
  //   const [openDialog, setOpenDialog] = useState(false);
  //   const [currentOrder, setCurrentOrder] = useState(null);
  const isLoading = false;
  // pagination
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(10);
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ordersBlocksList.map((order, index) => {
          return <OrderBlock key={index} order={order} />;
        })}
      </div>
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="font-hanken text-gray-700">
            All Orders List
          </CardTitle>

          <CardAction className="flex gap-1">
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
          {/* categories table */}
          {isLoading ? (
            <div className=" h-[50vh] flex justify-center items-center">
              <TableLoader />
            </div>
          ) : (
            <ViewOrdersTable
              orders={orders.slice((page - 1) * show, page * show)}
              //   setOpenDialog={setOpenDialog}
              //   setCurrentOrder={setCurrentOrder}
            />
          )}
        </CardContent>
        <Separator />
        <CardFooter>
          <PaginationComponent
            totalItems={orders?.length}
            itemsPerPage={show}
            currentPage={page}
            onPageChange={setPage}
          />
        </CardFooter>
      </Card>
      {/* Delete Dialog */}
      {/* <DeleteDialog
        open={openDialog}
        setOpen={setOpenDialog}
        category={currentCategory}
      /> */}
    </div>
  );
}

function OrderBlock({ order }) {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between">
          <div
            className="flex flex-col justify-between h-full
          text-lg font-semibold"
          >
            <p>{order?.title}</p>
            <p className="text-gray-500">{order?.number}</p>
          </div>
          {/* Icon */}
          <div className="text-primary-red bg-primary-red/20 p-3 rounded-md">
            <order.icon size={35} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
