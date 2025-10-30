// components/AccountBrandCard.tsx
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Brand } from "@/types/entities";
import TruncatedText from "@/components/general/TruncatedText";

export default function AccountBrandCard({ brand }: { brand: Brand }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/businesses/brands/${brand.brandId}?from=accounts`);
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

  const isUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };
  
  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-[13px] px-[21px] pt-[19px] pb-[22px] max-w-md cursor-pointer"
    >
      {/* Profile circle */}
      <div className="w-[90px] h-[90px] mx-auto overflow-hidden bg-white rounded-full border-5 border-[#E1E1E1] flex items-center justify-center">
        {brand.logo ? (
          <Image
            src={brand.logo}
            alt={brand.name}
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-white text-2xl font-bold"
            style={{ backgroundColor: brand.associateBackground }}
          >
            {brand.associateInitials}
          </div>
        )}
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
            {item.id === "instagram" && brand.instagramHandle ? (
              <a
                href={
                  isUrl(brand.instagramHandle)
                    ? brand.instagramHandle
                    : `https://www.instagram.com/${brand.instagramHandle}`
                }
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[11px] text-[#414141] text-center hover:underline"
              >
                <TruncatedText
                  text={(item.label ?? "").replace("https://www.instagram.com/", "")}
                  maxLength={15}
                />
              </a>
            ) : (
              <span className="text-[11px] text-[#414141] text-center">
                <TruncatedText text={item.label} maxLength={15} />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
