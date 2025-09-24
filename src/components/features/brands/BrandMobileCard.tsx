import { Brand } from "@/types/entities";
import Link from "next/link";
import Checkbox from "@/components/general/CheckBox";
import Image from "next/image";

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
            <Image
              src={brand.logo || '/images/default-brand.png'}
              alt={brand.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="flex flex-col flex-1 min-w-0">
              <h3 className="text-[15px] text-[#4F4F4F] font-semibold leading-[1.5] truncate">
                {brand.name}
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