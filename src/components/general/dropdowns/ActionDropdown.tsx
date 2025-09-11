"use client";

import { Dropdown } from "@/components/general/dropdowns/Dropdown";

interface ActionDropdownProps {
  onSelect?: (value: string) => void;
  updateDisabled?: boolean;
}

export default function ActionDropdown({
  onSelect,
  updateDisabled,
}: ActionDropdownProps) {
  const options = [
    {
      value: "update",
      label: (
        <div className="flex items-center px-3 py-2 text-[#6E6E6E]">
          <span>Update</span>
        </div>
      ),
      disabled: updateDisabled,
    },
    {
      value: "delete",
      label: (
        <div className="flex items-center px-3 py-2 text-[#6E6E6E]">
          <span>Delete</span>
        </div>
      ),
    },
    {
      value: "active",
      label: (
        <div className="flex items-center px-3 py-2 text-[#6E6E6E]">
          <span>Active</span>
        </div>
      ),
    },
    {
      value: "inactive",
      label: (
        <div className="flex items-center px-3 py-2 text-[#6E6E6E]">
          <span>Inactive</span>
        </div>
      ),
    },
  ];

  const title = (
    <div className="text-[18px] px-6 text-white leading-[27px]">
      <span>Action</span>
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
      buttonClassName="pt-1.25 pb-1.75 bg-[#00A4B6] border-0 rounded-[11px] flex items-center justify-between w-full"
      icon="/icons/general/dropdownarrow-1-white.svg"
    />
  );
}
