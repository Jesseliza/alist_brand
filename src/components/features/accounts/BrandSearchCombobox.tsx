"use client";

import { Combobox } from "@headlessui/react";
import { useState, useEffect } from "react";
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
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>([]);

  useEffect(() => {
    if (query.length < 2) {
      setFilteredBrands([]);
      return;
    }
    const filtered = brandsData.filter((brand) =>
      brand.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBrands(filtered);
  }, [query]);

  const selectedBrands = brandsData.filter(
    (brand) => selectedBrandIds?.includes(brand.brandId)
  );

  const toggleSelection = (brands: Brand[]) => {
    const newSelectedIds = brands.map(b => b.brandId);
    onChange(newSelectedIds);
  };

  return (
    <div className="mb-5 md:mb-7">
      <label className="block text-[#4F4F4F] mb-2.5">Associated Brands</label>
      <Combobox
        value={selectedBrands}
        onChange={toggleSelection}
        multiple
      >
        <div className="relative mt-1">
          <Combobox.Input
            className="w-full bg-[#F8F8F8] md:bg-[#F3F3F3] border md:border-0 border-[#E4E4E4] rounded-[11px] px-4 py-3 text-[#6E6E6E] placeholder:text-[#6E6E6E] outline-none"
            placeholder="Search for brands..."
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(brands: Brand[]) =>
              brands.map((b) => b.name).join(", ")
            }
          />
          {filteredBrands.length > 0 && (
            <Combobox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md max-h-60 overflow-auto">
              {filteredBrands.map((brand) => (
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
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selected}
                        readOnly
                        className="mr-2"
                      />
                      {brand.name}
                    </div>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox>
    </div>
  );
}
