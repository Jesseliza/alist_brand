"use client";

import { useState } from "react";
import { Combobox } from "@headlessui/react";
import Image from "next/image";

interface Option {
  value: string;
  label: string;
}

interface SearchableDropdownProps {
  options: Option[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function SearchableDropdown({
  options,
  selectedValue,
  onValueChange,
  placeholder = "Select an option",
  disabled = false,
}: SearchableDropdownProps) {
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.label
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleOnChange = (value: string | null) => {
    if (value) {
      onValueChange(value);
    }
  };

  const selectedOption = options.find(option => option.value === selectedValue);

  return (
    <Combobox value={selectedValue} onChange={handleOnChange} disabled={disabled}>
      <div className="relative w-full">
        <div className={`relative w-full cursor-default overflow-hidden rounded-[11px] bg-[#F8F8F8] md:bg-[#F3F3F3] border md:border-0 border-[#E4E4E4] text-left focus:outline-none sm:text-sm ${disabled ? 'opacity-50' : ''}`}>
          <Combobox.Input
            className="w-full border-none py-3 pl-4 pr-10 text-[15px] leading-5 text-[#6E6E6E] bg-transparent focus:outline-none focus:ring-0 focus:border-transparent"
            displayValue={() => selectedOption?.label || ""}
            onChange={(event) => setQuery(event.target.value)}
            autoComplete="off"
            placeholder={placeholder}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2 focus:outline-none focus:ring-0">
            <Image
              src="/icons/general/dropdownarrow-1-light.svg"
              alt="dropdown arrow"
              width={12}
              height={12}
            />
          </Combobox.Button>
        </div>
        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm">
          {filteredOptions.length === 0 && query !== "" ? (
            <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
              Nothing found.
            </div>
          ) : (
            filteredOptions.map((option) => (
              <Combobox.Option
                key={option.value}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? "bg-teal-600 text-white" : "text-gray-900"
                  }`
                }
                value={option.value}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.label}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? "text-white" : "text-teal-600"
                        }`}
                      ></span>
                    ) : null}
                  </>
                )}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
      </div>
    </Combobox>
  );
}
