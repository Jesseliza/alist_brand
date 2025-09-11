"use client";

import { Combobox } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Brand } from "@/types/entities";
import { fetchBrandsRequest } from "@/store/brand/brandSlice";
import { RootState } from "@/store/store";

interface BrandSearchComboboxProps {
  onChange: (selectedBrands: Brand[]) => void;
  initialSelectedBrands?: Brand[];
}

export default function BrandSearchCombobox({
  onChange,
  initialSelectedBrands = [],
}: BrandSearchComboboxProps) {
  const dispatch = useDispatch();
  const { brands: filteredBrands, loading } = useSelector((state: RootState) => state.brand);
  const [query, setQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<Brand[]>(initialSelectedBrands);
  const inputRef = useRef<HTMLInputElement>(null); // Create a ref for the input

  // Debounce search query
  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim() !== "") {
        dispatch(fetchBrandsRequest({ search: query }));
      }
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [query, dispatch]);

  const handleSelectionChange = (newlySelectedBrands: Brand[]) => {
    setSelectedBrands(newlySelectedBrands);
    onChange(newlySelectedBrands);
    setQuery("");
    inputRef.current?.blur();
  };

  const removeBrand = (brandId: number) => {
    const newSelection = selectedBrands.filter((brand) => brand.id !== brandId);
    setSelectedBrands(newSelection);
    onChange(newSelection);
  };

  // Filter out already selected brands from the search results
  const availableBrands = filteredBrands.filter(
    (brand) => !selectedBrands.some((selected) => selected.id === brand.id)
  );

  return (
    <div className="mb-5 md:mb-7">
      <label className="block text-[#4F4F4F] mb-2.5">Associated Brands/Venues</label>
      <div className="flex flex-wrap gap-2 mb-2 min-h-[30px]">
        {selectedBrands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700"
          >
            <span>{brand.venue_title}</span>
            <button
              type="button"
              className="ml-2 -mr-1 text-gray-500 hover:text-gray-700"
              onClick={() => removeBrand(brand.id)}
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
                 <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Loading...
                 </div>
            ) : availableBrands.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              availableBrands.map((brand) => (
                <Combobox.Option
                  key={brand.id}
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
                      {brand.venue_title}
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
