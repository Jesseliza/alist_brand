import { Brand } from "@/types/entities";
import Link from "next/link";
import Checkbox from "@/components/general/CheckBox";
import Image from "next/image";
import { getInitials } from "@/utils/text";
import { generateColorFromString } from "@/utils/colorGenerator";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import TruncatedText from "@/components/general/TruncatedText";

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
    // This empty handler is to prevent the Link from navigating when clicking on the checkbox area.
    e.stopPropagation();
  };

  const { industries } = useSelector((state: RootState) => state.common);
  const industryMap = new Map(industries.map((i) => [i.value, i.label]));
  const industryName = industryMap.get(brand.industry ?? "") || 'N/A';
  console.log(brand);

  const items = [
    {
      id: "industry",
      iconSrc: "/icons/store.svg",
      iconAlt: "Industry",
      label: industryName,
      width: 39.58,
      height: 33.62,
    },
    {
      id: "instagram",
      iconSrc: "/icons/instagram.svg",
      iconAlt: "Social",
      label: brand.instagramHandle ? brand.instagramHandle.replace("https://www.instagram.com/", "") : "N/A",
      width: 32.71,
      height: 32.71,
    },
    {
      id: "offers",
      iconSrc: "/icons/calendar.svg",
      iconAlt: "Offers",
      label: `${brand.offersCount} offers`,
      width: 30.64,
      height: 29.84,
    },
  ];

  return (
    <div className="bg-white rounded-[13px] p-6 relative">
      <div onClick={handleWrapperClick} className="absolute top-4 right-4 z-10">
        <Checkbox
          checked={checked}
          onChange={onCheckboxChange}
        />
      </div>
      <Link href={`/businesses/brands/${brand.brandId}`} className="block cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="h-[75px] w-[75px] rounded-full overflow-hidden relative flex-shrink-0 border-[5px] border-[#EEEEEE]">
            {/* {brand.logo ? (
              <Image src={brand.logo} alt={brand.name} fill className="object-cover" sizes="100vw" />
            ) : ( */}
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: generateColorFromString(brand.name) }}
            >
              <span className="text-white text-3xl font-semibold">{getInitials(brand.name)}</span>
            </div>
            {/* )} */}
          </div>
          <div className="flex-1">
            <h3 className="text-[17px] font-medium text-[#4F4F4F] mb-1">
              <TruncatedText text={brand.name} maxLength={20} />
            </h3>
            {brand.owner && (
              <div className="text-[15px] text-[#4F4F4F] mb-1">
                <TruncatedText text={brand.owner} maxLength={25} />
              </div>
            )}
            {brand.emailAddress && (
              <div className="text-[15px] text-[#4F4F4F]">
                <TruncatedText text={brand.emailAddress} maxLength={30} />
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-6">
          {items.map((item) => (
            <div key={item.id} className="rounded-[11px] pt-4 pb-5 flex items-center justify-center mb-2 flex-col gap-[16px] [box-shadow:0px_0px_2px_rgba(0,0,0,0.16)]">
              <div className="h-[33px] w-[40px] flex items-center justify-center">
                <Image src={item.iconSrc} alt={item.iconAlt} width={item.width} height={item.height} />
              </div>
              {item.id === "instagram" && brand.instagramHandle ? (
                <a
                  href={brand.instagramHandle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#4F4F4F] text-center hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  <TruncatedText text={item.label} maxLength={15} />
                </a>
              ) : (
                <p className="text-[11px] text-[#4F4F4F] text-center">
                  <TruncatedText text={item.label} maxLength={15} />
                </p>
              )}
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}