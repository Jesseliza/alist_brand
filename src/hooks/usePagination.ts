// src/hooks/usePagination.ts
import { useState } from "react";

export const usePagination = (
  totalItems: number,
  initialItemsPerPage: number
) => {
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1); // Reset to first page when items per page change
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return {
    itemsPerPage,
    currentPage,
    startIndex,
    endIndex,
    handlePageChange,
    handleItemsPerPageChange,
  };
};
