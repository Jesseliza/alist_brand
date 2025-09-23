"use client";

import { Combobox } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";
import { Brand } from "@/types/entities";
import { fetchData } from "@/services/commonService";
import InlineLoader from "@/components/general/InlineLoader";
import { transformApiVenueToBrand } from "@/utils/brandUtils";

interface BrandSearchComboboxProps {
  onChange: (selectedBrands: Brand[]) => void;
  initialSelectedBrands?: Brand[];
}

export default function BrandSearchCombobox({
  onChange,
  initialSelectedBrands = [],
}: BrandSearchComboboxProps) {
  const [query, setQuery] = useState("");
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<Brand[]>(initialSelectedBrands);
  const inputRef = useRef<HTMLInputElement>(null); // Create a ref for the input

  // Debounce search query
  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim() !== "") {
        const fetchBrands = async () => {
          setLoading(true);
          try {
            const response: any = await fetchData(`/api/list/venues?search=${query}`);
            if (response && response.venues) {
              setFilteredBrands(response.venues.map(transformApiVenueToBrand));
            }
          } catch (e) {
            console.error("Failed to fetch brands", e);
          } finally {
            setLoading(false);
          }
        };
        fetchBrands();
      } else {
        setFilteredBrands([]);
      }
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const handleSelectionChange = (newlySelectedBrands: Brand[]) => {
    setSelectedBrands(newlySelectedBrands);
    onChange(newlySelectedBrands);
    setQuery("");
    inputRef.current?.blur();
  };

  const removeBrand = (brandId: string) => {
    const newSelection = selectedBrands.filter((brand) => brand.brandId !== brandId);
    setSelectedBrands(newSelection);
    onChange(newSelection);
  };

  // Filter out already selected brands from the search results
  const availableBrands = filteredBrands.filter(
    (brand) => !selectedBrands.some((selected) => selected.brandId === brand.brandId)
  );

  return (
    <div className="mb-5 md:mb-7">
      <label className="block text-[#4F4F4F] mb-2.5">Associated Brands/Venues</label>
      <div className="flex flex-wrap gap-2 mb-2 min-h-[30px]">
        {selectedBrands.map((brand) => (
          <div
            key={brand.brandId}
            className="flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700"
          >
            <span>{brand.name}</span>
            <button
              type="button"
              className="ml-2 -mr-1 text-gray-500 hover:text-gray-700"
              onClick={() => removeBrand(brand.brandId)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <Combobox
        value={selectedBrands}
        onChange={handleSelectionChange}
        multiple
      >
        <div className="relative mt-1">
          <Combobox.Input
            ref={inputRef}
            className="w-full bg-[#F8F8F8] md:bg-[#F3F3F3] border md:border-0 border-[#E4E4E4] rounded-[11px] px-4 py-3 text-[#6E6E6E] placeholder:text-[#6E6E6E] outline-none"
            placeholder="Search for brands or venues..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoComplete="off"
          />
          <Combobox.Options className="absolute z-10 w-full bg-white shadow-lg rounded-md max-h-60 overflow-auto bottom-full mb-1">
            {loading ? (
              <div className="flex justify-center items-center py-2">
                <InlineLoader />
              </div>
            ) : availableBrands.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              availableBrands.map((brand) => (
                <Combobox.Option
                  key={brand.brandId}
                  value={brand}
                  className={({ active }) =>
                    `cursor-pointer select-none relative p-2 ${
                      active ? "bg-blue-100" : ""
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {brand.name}
                    </span>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
}
