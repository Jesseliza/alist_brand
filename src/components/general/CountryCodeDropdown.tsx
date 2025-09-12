"use client";

import { countryCodes } from "@/data/CountryCodes";

interface CountryCodeDropdownProps {
  selectedCode: string;
  onCodeChange: (code: string) => void;
}

export default function CountryCodeDropdown({ selectedCode, onCodeChange }: CountryCodeDropdownProps) {
  return (
    <select
      value={selectedCode}
      onChange={(e) => onCodeChange(e.target.value)}
      className="rounded-[11px] bg-gray-100 px-2 py-[11px] text-[15px] outline-none focus:ring-2 focus:ring-[#00A4B6] transition placeholder:text-[#6E6E6E] w-32"
    >
      {countryCodes.map((country) => (
        <option key={country.name} value={country.code}>
          {country.code}
        </option>
      ))}
    </select>
  );
}
