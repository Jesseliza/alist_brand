"use client";

import { Dropdown } from "@/components/general/dropdowns/Dropdown";
import Image from "next/image";

interface SortDropdownProps {
  onSelect?: (value: string) => void;
}

export default function SortDropdown({ onSelect }: SortDropdownProps) {
  const options = [
    {
      value: "alerts",
      label: (
        <div className="flex items-center px-3 py-2 text-[#6E6E6E]">
          <span>Alerts</span>
        </div>
      ),
    },
    {
      value: "archive",
      label: (
        <div className="flex items-center px-3 py-2 text-[#6E6E6E]">
          <span>Archive</span>
        </div>
      ),
    },
    {
      value: "delete",
      label: (
        <div className="flex items-center px-3 py-2 text-[#6E6E6E]">
          <span>Delete</span>
        </div>
      ),
    },
  ];

  const title = (
    <div className="flex items-center gap-3 px-3">
      <Image
        src="/icons/general/sort-1-light.svg"
        alt="sort"
        width={24.08}
        height={14.61}
      />
      <span>Sort</span>
    </div>
  );

  const handleSelect = (value: string) => {
    onSelect?.(value);
    console.log("Sort action:", value);
  };

  return (
    <Dropdown
      mode="action"
      title={title}
      options={options}
      onSelect={handleSelect}
    />
  );
}
