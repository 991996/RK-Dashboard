import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import PaginationComponent from "@/components/myComponents/TablePagination";
import usePagination from "@/hooks/usePagination";
import { topPagesData } from "@/data/dashboard";
import OutlineButton from "@/components/myComponents/buttons/OutlineButton";
import PrimaryButton from "@/components/myComponents/buttons/PrimaryButton";

//   Random color for exit rate
const getRandomColor = () => {
  const colors = ["#f87171", "#fbbf24", "#34d399"]; // أحمر، برتقالي، أخضر
  return colors[Math.floor(Math.random() * colors.length)];
};

export default function TopPagesTable() {
  // pagination
  const [page, setPage] = useState(1);
  // get sliced list based on show and page
  const { paginatedItems: topPagesList, totalPages } = usePagination(
    topPagesData,
    page,
    7
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-semibold text-lg">Top Pages</CardTitle>

        <CardAction className="flex gap-1">
          {/* Add Category button */}
          <Link to="">
            <PrimaryButton>View All</PrimaryButton>
          </Link>
        </CardAction>
      </CardHeader>
      <hr />

      <CardContent>
        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-[25%] text-gray-500 font-semibold">
                Page Path
              </TableHead>
              <TableHead className="text-gray-500 font-semibold">
                Page Views
              </TableHead>
              <TableHead className="text-gray-500 font-semibold">
                Exit Rate
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topPagesList.map((page, index) => {
              const color = getRandomColor();
              return (
                <TableRow key={index}>
                  <TableCell>
                    <p className="text-gray-600">{page.pagePath}</p>
                  </TableCell>
                  <TableCell>
                    <p className="text-gray-400 text-center">
                      {page.pageViews}
                    </p>
                  </TableCell>

                  <TableCell>
                    <p
                      className={`rounded-sm w-fit px-2 text-xs font-semibold py-0.5`}
                      style={{
                        backgroundColor: `${color}33`,
                        color: color,
                      }} // 33 = شفافية bg
                    >
                      {(page.exitRate * 100).toFixed(0)}%
                    </p>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
      <Separator />
      <CardFooter>
        <PaginationComponent
          totalItems={topPagesList.length}
          totalPages={totalPages}
          currentPage={page}
          onPageChange={setPage}
        />
      </CardFooter>
    </Card>
  );
}
