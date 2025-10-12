import Image from "next/image";
import { DedicatedOfferDisplay } from "@/types/entities/dedicated-offer";

export default function DedicatedOfferDetails({ dedicatedOffer }: { dedicatedOffer: DedicatedOfferDisplay }) {
  const offerDetails = [
    {
      imgSource: "/icons/campaign/details/overview/walkin-1-light.svg",
      imgWidth: 24.88,
      imgWidthMobile: 40.89,
      imgHeight: 19.47,
      imgHeightMobile: 32,
      text: dedicatedOffer?.venue?.category?.category ?? "N/A",
    },
    {
      imgSource: "/icons/campaign/details/overview/price-1-light.svg",
      imgWidth: 39.24,
      imgWidthMobile: 30.32,
      imgHeight: 26.08,
      imgHeightMobile: 20.15,
      text: dedicatedOffer?.amount ? `${dedicatedOffer.amount} AED` : "N/A",
    },
    {
      imgSource: "/icons/campaign/details/overview/date-1-light.svg",
      imgWidth: 31.29,
      imgWidthMobile: 30.63,
      imgHeight: 25.87,
      imgHeightMobile: 25.25,
      text: dedicatedOffer?.offer_date
        ? `${dedicatedOffer.offer_date}`
        : "N/A",
    },
  ];

  return (
    <div>
      <div className=" mt-[13px] ">
        <h4 className="text-center text-[15px] text-[#7E7E7E] leading-[23px] mb-5 ">
          Offer details
        </h4>
      </div>
      <div className="flex items-center justify-center gap-3">
        {offerDetails.map((card, index) => (
          <div
            key={index}
            className="flex-1 aspect-square max-w-[118.94px] bg-[#FAFAFA] rounded-[11px] "
          >
            <div className="h-[42px] flex items-center justify-center mb-[9px]  mt-6">
              <Image
                src={card.imgSource}
                width={card.imgWidth}
                height={card.imgHeight}
                alt={card.text}
                className="mx-auto"
              />
            </div>
            <p className="text-center text-[13px] leading-[20px] text-[#4F4F4F]">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}