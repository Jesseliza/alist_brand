// components/Pagination.tsx
import { useState } from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange?: (items: number) => void; // optional
  itemsPerPageOptions?: number[];
  fixed?: boolean;
}

const defaultItemsPerPageOptions = [10, 15, 25, 50, 100];

const calculatePageNumbers = (currentPage: number, totalPages: number) => {
  // Display always 5 pages around the current page with ellipsis logic
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const visiblePages = 3; // Number of pages around current
  const pages: (number | "...")[] = [];
  pages.push(1); // Always show first page

  if (currentPage <= visiblePages + 1) {
    pages.push(...Array.from({ length: visiblePages }, (_, i) => i + 2));
  } else if (currentPage >= totalPages - visiblePages) {
    pages.push(
      ...Array.from(
        { length: visiblePages },
        (_, i) => totalPages - visiblePages - 1 + i + 1
      )
    );
  } else {
    pages.push(
      ...Array.from({ length: visiblePages }, (_, i) => currentPage - 1 + i)
    );
  }

  const lastPage = pages[pages.length - 1];
  if (typeof lastPage === "number" && lastPage < totalPages - 1) {
    pages.push("..."); // Ellipsis if there's a gap before the last page
  }

  if (pages[pages.length - 1] !== totalPages) {
    pages.push(totalPages); // Always show last page
  }

  return pages;
};

export default function Pagination({
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange = () => {},
  itemsPerPageOptions = defaultItemsPerPageOptions,
  fixed = false,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number | "...") => {
    if (typeof page === "number") {
      setCurrentPage(page);
      onPageChange(page);
    }
    // if page === "...", do nothing
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = Number(e.target.value);
    onItemsPerPageChange?.(newItemsPerPage);
    setCurrentPage(1);
  };

  const pageNumbers = calculatePageNumbers(currentPage, totalPages);

  return (
    <div
      className={`
        flex items-center py-4
        ${fixed ? "justify-center" : "justify-between"}
      `}
    >
      {/* Left side: "Show [select] Entries" (only if not fixed) */}
      {!fixed && (
        <div className="flex items-center gap-6">
          <span className="text-sm text-gray-700">Show</span>
          <select
            className="
              p-2 
              border border-gray-300 
              rounded-lg 
              bg-white text-gray-900 
              cursor-pointer 
              focus:outline-none focus:border-teal-500
            "
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            {itemsPerPageOptions.map((option) => (
              <option key={option} value={option} className="text-sm">
                {option}
              </option>
            ))}
          </select>
          <span className="text-sm text-gray-700">Entries</span>
        </div>
      )}

      {/* Right side: page buttons */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`
            px-4 py-1.5 text-sm 
            border border-gray-300 rounded-lg 
            bg-white text-gray-700 
            hover:bg-gray-50
            focus:outline-none 
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          Previous
        </button>

        {pageNumbers.map((page, idx) => {
          const isActive = page === currentPage;
          const isEllipsis = page === "...";
          return (
            <button
              key={idx}
              onClick={() => handlePageChange(page)}
              disabled={isEllipsis}
              className={`
                px-4 py-1.5 text-sm 
                border border-gray-300 rounded-lg 
                ${
                  isActive
                    ? "bg-[#00a4b6] text-white border-[#00a4b6] hover:bg-[#00a4b6]"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }
                focus:outline-none 
                ${isEllipsis ? "cursor-default" : ""}
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`
            px-4 py-1.5 text-sm 
            border border-gray-300 rounded-lg 
            bg-white text-gray-700 
            hover:bg-gray-50
            focus:outline-none 
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          Next
        </button>
      </div>
    </div>
  );
}
