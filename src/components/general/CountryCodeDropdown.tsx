"use client";

import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { countryCodes } from "@/data/CountryCodes";
import Image from "next/image";

interface CountryCodeDropdownProps {
  selectedCode: string;
  onCodeChange: (code: string) => void;
}

export default function CountryCodeDropdown({ selectedCode, onCodeChange }: CountryCodeDropdownProps) {
  const [query, setQuery] = useState("");

  const filteredCountries =
    query === ""
      ? countryCodes
      : countryCodes.filter((country) =>
          country.name.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={selectedCode} onChange={onCodeChange}>
      <div className="relative w-32">
        <div className="relative w-full cursor-default overflow-hidden rounded-[11px] bg-gray-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className="w-full border-none py-[11px] pl-3 pr-10 text-[15px] leading-5 text-gray-900 bg-gray-100 focus:ring-0"
            displayValue={() => selectedCode}
            onChange={(event) => setQuery(event.target.value)}
            autoComplete="off"
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <Image
              src="/icons/general/dropdownarrow-1-light.svg"
              alt="dropdown arrow"
              width={12}
              height={12}
            />
          </Combobox.Button>
        </div>
        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
          {filteredCountries.length === 0 && query !== '' ? (
            <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
              Nothing found.
            </div>
          ) : (
            filteredCountries.map((country) => (
              <Combobox.Option
                key={country.name}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-teal-600 text-white' : 'text-gray-900'
                  }`
                }
                value={country.code}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {country.name}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? 'text-white' : 'text-teal-600'
                        }`}
                      >
                      </span>
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
