// SearchInput.jsx
import Image from "next/image";

export default function SearchInput() {
  return (
    <div className="relative max-w-[341px]">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Image
          src="/icons/navbar/search.svg"
          alt="Search"
          width={16.75}
          height={16.75}
        />
      </div>

      <input
        type="text"
        placeholder="Search"
        className="
          text-[18px]
          block
          w-full
          pl-14       /* space for the icon on the left */
          pr-4
          pt-2.25
          pb-2.5
          bg-[#F8F8F8]
          border
          border-solid
          border-[#E4E4E4]
          text-gray-800
          placeholder-[#6E6E6E]
          rounded-[11px]
          focus:outline-none
          focus:ring-2
          focus:ring-[#00A4B6]
        "
      />
    </div>
  );
}
