import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent({
  totalItems,
  itemsPerPage = 10,
  currentPage,
  onPageChange,
  maxVisiblePages = 5,
  className = "justify-end",
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  // calculate visible range
  let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let end = start + maxVisiblePages - 1;

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - maxVisiblePages + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <Pagination className={className}>
      <PaginationContent className="border rounded-lg">
        {/* Previous */}
        {currentPage > 1 && (
          <PaginationItem onClick={() => goToPage(currentPage - 1)}>
            <PaginationPrevious
              href="#"
              className="hover:text-primary-red rounded-none"
            />
          </PaginationItem>
        )}

        {/* Left ellipsis */}
        {start > 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Pages */}
        {pages.map((page) => (
          <PaginationItem key={page} onClick={() => goToPage(page)}>
            <PaginationLink
              href="#"
              isActive={currentPage === page}
              className={`rounded-none ${
                currentPage === page
                  ? "bg-primary-red text-white hover:bg-primary-red hover:text-white"
                  : "hover:text-primary-red"
              }`}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Right ellipsis */}
        {end < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next */}
        {currentPage < totalPages && (
          <PaginationItem onClick={() => goToPage(currentPage + 1)}>
            <PaginationNext
              href="#"
              className="hover:text-primary-red rounded-none"
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
