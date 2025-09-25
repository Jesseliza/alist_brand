// components/BrandCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Brand } from "@/types/entities";
import Checkbox from "@/components/general/CheckBox";

interface BrandCardProps {
  brand: Brand;
  checked: boolean;
  onCheckboxChange: () => void;
}

export default function BrandCard({
  brand,
  checked,
  onCheckboxChange,
}: BrandCardProps) {
  const handleWrapperClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const items = [
    {
      id: "industry",
      iconSrc: "/icons/category-1-light.svg",
      iconAlt: "Industry",
      label: brand.industry,
      with: 33.64,
      height: 28.58,
    },
    {
      id: "instagram",
      iconSrc: "/icons/instagram-1-light.svg",
      iconAlt: "Instagram",
      label: brand.instagramHandle,
      with: 27.8,
      height: 27.8,
    },
    {
      id: "offers",
      iconSrc: "/icons/date-1-light.svg",
      iconAlt: "Offers",
      label: `${brand.offersCount} offers`,
      with: 26.04,
      height: 25.36,
    },
  ];
  return (
    <Link href={`/businesses/brands/${brand.brandId}`} className="block cursor-pointer">
      <div className="bg-white rounded-[13px] px-[21px] pt-[19px] pb-[22px] max-w-[400px] mx-auto relative">
        <div onClick={handleWrapperClick} className="absolute top-2 right-2">
          <Checkbox
            checked={checked}
            onChange={onCheckboxChange}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        {/* Profile circle */}
        <div className="w-[90px] h-[90px] mx-auto overflow-hidden bg-white rounded-full border-5 border-[#E1E1E1]">
          <Image src={brand.logo} alt={brand.name} width={80} height={80} />
        </div>

        {/* Brand name */}
        <h2 className="mt-4 text-center text-[18px] font-medium text-[#4F4F4F]">
          {brand.name}
        </h2>

      {/* Info items */}
      <div className="mt-5 grid grid-cols-3 gap-2.5">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-white rounded-[11px] shadow-[0_0_2px_rgba(0,0,0,0.16)] py-[18px] aspect-square"
          >
            <div className="h-[29px] flex items-center justify-center mb-3">
              <Image
                src={item.iconSrc}
                alt={item.iconAlt}
                width={item.with}
                height={item.height}
              />
            </div>
            <span className="text-[11px] text-[#414141] text-center truncate text-ellipsis max-w-[80px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-3 mt-5">
        <div
          className="h-[35px] w-[35px] aspect-square rounded-full flex items-center justify-center text-[14px] text-white font-semibold"
          style={{ backgroundColor: brand.associateBackground }}
        >
          {brand.associateInitials}
        </div>
        <div className="text-[#414141] text-[14px]">
          <p className="font-medium text-[13px] leading-[20px]">
            {`${brand.associateFirstName} ${brand.associateLastName}`}
          </p>
          <p className="text-[11px] leading-[17px]">{brand.associateEmail}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}
