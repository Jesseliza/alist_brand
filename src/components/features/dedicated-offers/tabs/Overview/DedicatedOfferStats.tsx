import Image from "next/image";
import { DedicatedOfferDisplay } from "@/types/entities/dedicated-offer";

export default function DedicatedOfferStats({ dedicatedOffer }: { dedicatedOffer: DedicatedOfferDisplay }) {
  const statCards = [
    {
      imgSrc: "/icons/campaign/details/overview/creators.svg",
      imgWidth: 47.27,
      imgHeight: 33.09,
      title: dedicatedOffer.offer_users.filter((o) => o.status === 6).length.toString() ?? "0",
      subtitle: "Creators",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center mx-auto gap-[14px] mt-[13px] border-b border-[#E2E2E2] pb-[25px]">
      {statCards.map(
        ({ imgSrc, imgWidth, imgHeight, title, subtitle }, idx) => (
          <div
            key={idx}
            className="bg-[#F8F8F8] w-full md:flex-1 max-w-full md:max-w-[144.18px] aspect-video md:aspect-square rounded-xl px-6 py-4 flex flex-col items-center justify-center text-center"
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