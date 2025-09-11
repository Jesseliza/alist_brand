import React from 'react';

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

interface PaginationProps {
  links: Link[];
  onPageChange: (url: string) => void;
  itemsPerPage: number;
  onItemsPerPageChange?: (items: number) => void;
  itemsPerPageOptions?: number[];
  fixed?: boolean;
}

const defaultItemsPerPageOptions = [10, 15, 20, 25, 50, 100];

export default function Pagination({
  links,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange = () => {},
  itemsPerPageOptions = defaultItemsPerPageOptions,
  fixed = false,
}: PaginationProps) {
  const handlePageChange = (url: string | null) => {
    if (url) {
      onPageChange(url);
    }
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = Number(e.target.value);
    onItemsPerPageChange?.(newItemsPerPage);
  };

  return (
    <div
      className={`flex items-center py-4 ${
        fixed ? 'justify-center' : 'justify-between'
      }`}
    >
      {!fixed && (
        <div className="flex items-center gap-6">
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
        {links.map((link, idx) => {
          const isEllipsis = !link.url && link.label.includes('...');
          const label = link.label.replace(/&laquo;|&raquo;/g, '').trim();

          return (
            <button
              key={idx}
              onClick={() => handlePageChange(link.url)}
              disabled={!link.url || isEllipsis}
              className={`px-4 py-1.5 text-sm border border-gray-300 rounded-lg ${
                link.active
                  ? 'bg-[#00a4b6] text-white border-[#00a4b6]'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
