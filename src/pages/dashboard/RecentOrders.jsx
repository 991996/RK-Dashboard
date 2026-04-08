import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ordersList } from "@/data/orderList";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Plus } from "lucide-react";
import TableShowSelect from "@/components/myComponents/TableShowSelect";
import ViewOrdersTable from "@/features/orders/components/ViewOrdersTable";
import { Separator } from "@/components/ui/separator";
import PaginationComponent from "@/components/myComponents/TablePagination";
import PrimaryButton from "@/components/myComponents/buttons/PrimaryButton";

export default function RecentOrders() {
  const orders = ordersList;
  const isLoading = false;
  // pagination
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(10);
  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle className="font-hanken text-gray-700">
          Recent Orders
        </CardTitle>

        <CardAction className="flex gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <PrimaryButton className="flex items-center">
                <Plus />
                <span className="hidden md:inline">Create Order</span>
              </PrimaryButton>
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
  );
}
