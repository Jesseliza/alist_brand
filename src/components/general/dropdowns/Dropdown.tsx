// components/Dropdown.tsx
"use client";

import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Transition,
} from "@headlessui/react";
import { Fragment, ReactNode, useState } from "react";
import Image from "next/image";

type Option<T> = { value: T; label: ReactNode };

interface DropdownProps<T> {
  options: Option<T>[];
  onSelect: (value: T) => void;
  /** "select" shows the picked item; "action" never changes it */
  mode?: "select" | "action";
  /** if provided, always show this instead of selected/first */
  title?: ReactNode;
  selected?: T; // for controlled select
  defaultSelected?: T; // for uncontrolled select
  icon?: string; // path to SVG image
  buttonClassName?: string; // extra Tailwind classes
  menuItemsClassName?: string;
  disabled?: boolean;
}

export function Dropdown<T>(props: DropdownProps<T>) {
  const {
    options,
    onSelect,
    mode = "select",
    title,
    selected: controlled,
    defaultSelected,
    icon = "/icons/general/dropdownarrow-1-light.svg",
    buttonClassName = `
      flex items-center justify-between w-full
      border border-[#E4E4E4] rounded-[11px]
      bg-white 
      text-left
      focus:outline-none focus:ring-2 focus:ring-[#00A4B6]
      text-[#6E6E6E] pt-2 pb-2.5
    `.trim(),
    menuItemsClassName = `
      absolute mt-1 w-full bg-white
      border border-[#E4E4E4] rounded-[11px]
      shadow-lg max-h-60 overflow-auto z-10
      focus:outline-none 
    `.trim(),
    disabled = false,
  } = props;

  // uncontrolled state for select mode
  const [internal, setInternal] = useState<T | undefined>(defaultSelected);

  // only relevant in select mode
  const currentValue = mode === "select" ? controlled ?? internal : undefined;

  const currentOption = options.find((o) => o.value === currentValue);
  const firstLabel = options[0]?.label ?? null;
  const displayLabel = title ?? currentOption?.label ?? firstLabel;

  if (mode === "select") {
    return (
      <Listbox
        value={controlled ?? internal}
        onChange={(val) => {
          if (controlled === undefined) setInternal(val);
          onSelect(val);
        }}
        disabled={disabled}
      >
        <div className="relative text-left">
          <ListboxButton className={buttonClassName}>
            <div className="truncate flex-1">{displayLabel}</div>
            <div className="mr-3">
              <Image
                src={icon}
                alt="dropdown arrow"
                width={14.882}
                height={8.441}
                className="transition-transform duration-100"
              />
            </div>
          </ListboxButton>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <ListboxOptions className={menuItemsClassName}>
              {options.map((opt) => (
                <ListboxOption
                  key={String(opt.value)}
                  value={opt.value}
                  className="cursor-pointer select-none hover:bg-gray-100  focus:bg-gray-100 "
                >
                  {opt.label}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    );
  }

  // —— action mode ——
  return (
    <Menu as="div" className="relative w-full text-left">
      <MenuButton
        className={buttonClassName}
        disabled={disabled}
      >
        <div className="truncate flex-1">{displayLabel}</div>
        <div className="mr-3">
          <Image
            src={icon}
            alt="dropdown arrow"
            width={14.882}
            height={8.441}
            className="transition-transform duration-100"
          />
        </div>
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className={menuItemsClassName}>
          {options.map((opt) => (
            <MenuItem key={String(opt.value)}>
              <button
                className="w-full text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                onClick={() => onSelect(opt.value)}
              >
                {opt.label}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
}
