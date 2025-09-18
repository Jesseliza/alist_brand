// components/Pagination.tsx
interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange?: (items: number) => void;
  itemsPerPageOptions?: number[];
  fixed?: boolean;
}

const defaultItemsPerPageOptions = [10, 15, 20, 25, 50, 100];

const calculatePageNumbers = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | string)[] = [];
  pages.push(1);

  if (currentPage > 4) {
    pages.push("...");
  }

  const startPage = Math.max(2, currentPage - 2);
  const endPage = Math.min(totalPages - 1, currentPage + 2);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (currentPage < totalPages - 3) {
    pages.push("...");
  }

  pages.push(totalPages);

  // Remove duplicates that might occur if ranges overlap, e.g. [1, '...', 2, 3, 4]
  const uniquePages = pages.filter((page, index) => {
    return pages.indexOf(page) === index;
  });

  return uniquePages;
};

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange = () => {},
  itemsPerPageOptions = defaultItemsPerPageOptions,
  fixed = false,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number | string) => {
    if (typeof page === "number") {
      onPageChange(page);
    }
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
  };

  const pageNumbers = calculatePageNumbers(currentPage, totalPages);

  return (
    <div
      className={`flex items-center py-4 ${
        fixed ? "justify-center" : "justify-center md:justify-between"
      }`}
    >
      {!fixed && (
        <div className="hidden md:flex items-center gap-6">
          <span className="text-sm text-gray-700">Show</span>
          <select
            className="p-2 border border-gray-300 rounded-lg bg-white text-gray-900 cursor-pointer focus:outline-none focus:border-teal-500"
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

      <div className="flex items-center gap-1.5">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 py-1.5 text-sm border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
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
              className={`px-4 py-1.5 text-sm border border-gray-300 rounded-lg ${
                isActive
                  ? "bg-[#00a4b6] text-white border-[#00a4b6]"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              } focus:outline-none ${
                isEllipsis ? "cursor-default" : ""
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-1.5 text-sm border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
