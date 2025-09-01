"use client";

import { ChangeEvent } from "react";

interface SearchInputMobileProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  id?: string;
}

export default function SearchInputMobile({
  value,
  onChange,
  placeholder = "Search brand",
  icon,
  id = "brand-search",
}: SearchInputMobileProps) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <div className="flex items-center gap-5 rounded-[11px] border border-[#E4E4E4] bg-white px-4 focus-within:border-[#6E6E6E] focus-within:ring-1 focus-within:ring-[#4F4F4F] py-1.75">
        {icon || (
          <svg
            width="17.883"
            height="17.63"
            viewBox="0 0 17.883 17.63"
            className="w-[17.883px] h-[17.63px] flex-shrink-0"
          >
            <g
              id="Group_2"
              data-name="Group 2"
              transform="translate(0 8.815) rotate(-45)"
            >
              <g
                id="Ellipse_3"
                data-name="Ellipse 3"
                transform="translate(0 0)"
                fill="none"
                stroke="#6e6e6e"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <circle cx="6.233" cy="6.233" r="6.233" stroke="none" />
                <circle cx="6.233" cy="6.233" r="5.233" fill="none" />
              </g>
              <line
                id="Line_13"
                data-name="Line 13"
                y2="4.592"
                transform="translate(6.545 12.154)"
                fill="none"
                stroke="#6e6e6e"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        )}

        <input
          type="text"
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-[15px]  text-[#4F4F4F] placeholder:text-[15px] placeholder:text-[#6E6E6E] outline-none"
        />
      </div>
    </div>
  );
}
