"use client";

import { Dropdown } from "@/components/general/dropdowns/Dropdown";

interface ActionDropdownProps {
  onSelect?: (value: string) => void;
  showUpdate?: boolean;
  disabled?: boolean;
  excludeActions?: string[];
  actions?: string[];
}

export default function ActionDropdown({
  onSelect,
  showUpdate,
  disabled,
  excludeActions = [],
  actions,
}: ActionDropdownProps) {
  const baseOptions = [
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
    {
      value: "Approved",
      label: (
        <div className="flex items-center px-3 py-2 text-[#6E6E6E]">
          <span>Approve</span>
        </div>
      ),
    },
    {
      value: "Rejected",
      label: (
        <div className="flex items-center px-3 py-2 text-[#6E6E6E]">
          <span>Reject</span>
        </div>
      ),
    },
  ];

  const updateOption = {
    value: "update",
    label: (
      <div className="flex items-center px-3 py-2 text-[#6E6E6E]">
        <span>Update</span>
      </div>
    ),
  };

  let allOptions = [...baseOptions];
  if (showUpdate) {
    allOptions.unshift(updateOption);
  }

  let options;
  if (actions) {
    const allPossibleOptions = [updateOption, ...baseOptions];
    const lowerCaseActions = actions.map((a) => a.toLowerCase());
    options = allPossibleOptions.filter((opt) =>
      lowerCaseActions.includes(opt.value.toLowerCase())
    );
  } else {
    options = allOptions.filter(
      (option) => !excludeActions.includes(option.value)
    );
  }

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
      buttonClassName={`pt-1.25 pb-1.75 border-0 rounded-[11px] flex items-center justify-between w-full ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00A4B6]'}`}
      icon="/icons/general/dropdownarrow-1-white.svg"
      disabled={disabled}
    />
  );
}
