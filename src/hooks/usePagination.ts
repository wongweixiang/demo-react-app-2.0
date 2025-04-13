import { useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const pageSize = 5; // Default page size

  const setCurrentPage = (current: number | undefined) => {
    if (!current) return;

    setPage(current);
  };

  return {
    currentPage: page,
    pageSize,
    setCurrentPage,
  };
};
