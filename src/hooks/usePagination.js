export default function usePagination(data = [], page = 1, show = 10) {
  const safeData = Array.isArray(data) ? data : [];

  const totalItems = safeData.length;
  const totalPages = Math.ceil(totalItems / show);

  const currentPage = Math.min(Math.max(page, 1), totalPages || 1);

  const startIndex = (currentPage - 1) * show;
  const endIndex = currentPage * show;

  const paginatedItems = safeData.slice(startIndex, endIndex);

  return {
    paginatedItems,
    totalPages,
    currentPage,
    totalItems,
  };
}
