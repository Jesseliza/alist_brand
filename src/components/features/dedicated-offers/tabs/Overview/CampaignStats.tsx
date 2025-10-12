import Image from "next/image";
import { DedicatedOffer } from "@/types/entities";

export default function DedicatedOfferStats({ dedicated-offer }: { dedicated-offer: DedicatedOffer }) {
  // Format numbers for display
  const formatNumber = (num: number | string) => {
    const number = typeof num === "string" ? parseInt(num) : num;
    if (number >= 1000000) {
      return `${(number / 1000000).toFixed(1)}M`;
    } else if (number >= 1000) {
      return `${(number / 1000).toFixed(0)}K`;
    }
    return number.toString();
  };

  const statCards = [
    {
      imgSrc: "/icons/dedicated-offer/details/overview/creators.svg",
      imgWidth: 47.27,
      imgHeight: 33.09,
      title: dedicated-offer.dedicated_offer?.offer_users.filter((o) => o.status === 1).length.toString() ?? "0",
      subtitle: "Creators",
    },
    {
      imgSrc: "/icons/dedicated-offer/details/overview/posts.svg",
      imgWidth: 32,
      imgHeight: 31.57,
      title: dedicated-offer.reviews_count?.toString() ?? "0",
      subtitle: "Posts",
    },
  ];

  return (
    <div className="flex items-center mx-auto gap-[14px] mt-[13px] border-b border-[#E2E2E2] pb-[25px]">
      {statCards.map(
        ({ imgSrc, imgWidth, imgHeight, title, subtitle }, idx) => (
          <div
            key={idx}
            className="bg-[#F8F8F8] flex-1 max-w-[144.18px] aspect-square rounded-xl px-6 py-4 flex flex-col items-center justify-center text-center"
          >
            <Image
              src={imgSrc}
              width={imgWidth}
              height={imgHeight}
              alt={subtitle}
            />
            <p className="text-[21px] leading-[31px] text-[#4F4F4F] font-semibold mt-2">
              {title}
            </p>
            <p className="text-[15px] text-[#4F4F4F] leading-[23px]">
              {subtitle}
            </p>
          </div>
        )
      )}
    </div>
  );
}