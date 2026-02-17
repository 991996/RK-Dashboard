import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent() {
  return (
    <Pagination className="justify-end!">
      <PaginationContent className="border rounded-lg">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="hover:text-primary-red rounded-none"
          />
        </PaginationItem>
        <MyPaginationItem number="1" />
        <MyPaginationItem number="2" isActive={true} />
        <MyPaginationItem number="3" />
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            className="hover:text-primary-red rounded-none"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function MyPaginationItem({ isActive = false, number }) {
  return (
    <PaginationItem>
      <PaginationLink
        href="#"
        className={` rounded-none
            ${
              isActive
                ? "bg-primary-red text-white hover:bg-primary-red hover:text-white"
                : "hover:text-primary-red"
            }`}
      >
        {number}
      </PaginationLink>
    </PaginationItem>
  );
}
