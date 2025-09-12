"use client";

import { countryCodes } from "@/data/CountryCodes";
import Image from "next/image";

interface CountryCodeDropdownProps {
  selectedCode: string;
  onCodeChange: (code: string) => void;
}

export default function CountryCodeDropdown({ selectedCode, onCodeChange }: CountryCodeDropdownProps) {
  return (
    <div className="relative w-32">
      <select
        value={selectedCode}
        onChange={(e) => onCodeChange(e.target.value)}
        className="appearance-none w-full rounded-[11px] bg-gray-100 pl-4 pr-8 py-[11px] text-[15px] outline-none focus:ring-2 focus:ring-[#00A4B6] transition"
      >
        {countryCodes.map((country) => (
          <option key={country.name} value={country.code}>
            {country.code}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <Image
          src="/icons/general/dropdownarrow-1-light.svg"
          alt="dropdown arrow"
          width={12}
          height={12}
        />
      </div>
    </div>
  );
}
