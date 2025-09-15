import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setSearchTerm } from "@/store/search/searchSlice";

export default function SearchInput() {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state: RootState) => state.search);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

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
        value={searchTerm}
        onChange={handleChange}
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
