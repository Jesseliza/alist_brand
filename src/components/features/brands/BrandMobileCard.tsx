import { Brand } from "@/types/entities";
import Link from "next/link";
import Checkbox from "@/components/general/CheckBox";
import Image from "next/image";
import { getDisplayName } from "@/utils/brandUtils";
import { generateColorFromString } from "@/utils/colorGenerator";

interface BrandMobileCardProps {
  brand: Brand;
  checked: boolean;
  onCheckboxChange: () => void;
}

export default function BrandMobileCard({
  brand,
  checked,
  onCheckboxChange,
}: BrandMobileCardProps) {
  const handleWrapperClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <Link href={`/businesses/brands/${brand.brandId}`} className="block cursor-pointer">
      <div
        className="bg-white rounded-[13px] py-3 px-3.5 flex items-center justify-between"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div onClick={handleWrapperClick} className="p-2 -ml-2">
            <Checkbox
              checked={checked}
              onChange={onCheckboxChange}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="flex items-center gap-4">
            {brand.logo ? (
              <Image
                src={brand.logo}
                alt={brand.name}
                width={48}
                height={48}
                className="rounded-full"
              />
            ) : (
              <div
                className="h-[48px] w-[48px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: generateColorFromString(brand.name) }}
              >
                <span className="text-white text-xl font-semibold">
                  {brand.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
            )}
            <div className="flex flex-col flex-1 min-w-0">
              <h3 className="text-[15px] text-[#4F4F4F] font-semibold leading-[1.5] truncate">
                {getDisplayName(brand)}
              </h3>
              <p className="text-[11px] text-[#686868] leading-[1.5] truncate">
                {brand.emailAddress}
              </p>
              <p className="text-[11px] text-[#686868] leading-[1.5] truncate">
                {brand.phoneNumber}
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#BDBDBD]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}