"use client";

import { Combobox } from "@headlessui/react";
import { useState } from "react";
import { brandsData } from "@/data/BrandsData";
import { Brand } from "@/types/entities";

interface BrandSearchComboboxProps {
  selectedBrandIds: string[];
  onChange: (selectedIds: string[]) => void;
}

export default function BrandSearchCombobox({
  selectedBrandIds,
  onChange,
}: BrandSearchComboboxProps) {
  const [query, setQuery] = useState("");

  const selectedBrands = brandsData.filter(
    (brand) => selectedBrandIds?.includes(brand.brandId)
  );

  const filteredBrands =
    query === ""
      ? []
      : brandsData.filter((brand) => {
          return brand.name.toLowerCase().includes(query.toLowerCase()) && !selectedBrandIds?.includes(brand.brandId);
        });

  const handleSelectionChange = (brands: Brand[]) => {
    const newSelectedIds = brands.map((b) => b.brandId);
    onChange(newSelectedIds);
    setQuery(""); // Clear query after selection
  };

  const removeBrand = (brandId: string) => {
    const newSelectedIds = selectedBrandIds.filter((id) => id !== brandId);
    onChange(newSelectedIds);
  };

  return (
    <div className="mb-5 md:mb-7">
      <label className="block text-[#4F4F4F] mb-2.5">Associated Brands</label>
      <div className="flex flex-wrap gap-2 mb-2">
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
            className="w-full bg-[#F8F8F8] md:bg-[#F3F3F3] border md:border-0 border-[#E4E4E4] rounded-[11px] px-4 py-3 text-[#6E6E6E] placeholder:text-[#6E6E6E] outline-none"
            placeholder="Search for brands..."
            onChange={(event) => setQuery(event.target.value)}
            autoComplete="off"
          />
          <Combobox.Options className="absolute z-10 w-full bg-white shadow-lg rounded-md max-h-60 overflow-auto bottom-full mb-1">
            {filteredBrands.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredBrands.map((brand) => (
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
