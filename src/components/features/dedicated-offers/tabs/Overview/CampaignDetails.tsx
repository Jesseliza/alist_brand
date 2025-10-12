import Image from "next/image";
import { DedicatedOffer } from "@/types/entities";

// interface DedicatedOfferDetailsProps {
//   dedicated-offer: DedicatedOffer;
// }

export default function DedicatedOfferDetails({ dedicated-offer }: { dedicated-offer: DedicatedOffer }) {
  const dedicated-offerCards = [
    {
      imgSource: "/icons/dedicated-offer/details/overview/walkin-1-light.svg",
      imgWidth: 24.88,
      imgWidthMobile: 40.89,
      imgHeight: 19.47,
      imgHeightMobile: 32,
      text: dedicated-offer?.venue?.category?.category ?? "N/A",
    },
    {
      imgSource: "/icons/dedicated-offer/details/overview/barter-1-light.svg",
      imgWidth: 33.18,
      imgWidthMobile: 35.71,
      imgHeight: 28.47,
      imgHeightMobile: 30.64,
      text: dedicated-offer?.is_dedicated === 1 ? "Dedicated" : "Normal",
    },
    {
      imgSource: "/icons/dedicated-offer/details/overview/price-1-light.svg",
      imgWidth: 39.24,
      imgWidthMobile: 30.32,
      imgHeight: 26.08,
      imgHeightMobile: 20.15,
      text: dedicated-offer?.amount ? `${dedicated-offer.amount} AED` : "N/A",
    },
    {
      imgSource: "/icons/dedicated-offer/details/overview/automated-1-light.svg",
      imgWidth: 41.03,
      imgWidthMobile: 34.14,
      imgHeight: 30.39,
      imgHeightMobile: 25.28,
      text: dedicated-offer?.account_status ?? "N/A",
    },
    // {
    //   imgSource: "/icons/dedicated-offer/details/overview/restricted-1-light.svg",
    //   imgWidth: 34.14,
    //   imgWidthMobile: 34.14,
    //   imgHeight: 28.47,
    //   imgHeightMobile: 28.47,
    //   text: dedicated-offer.dedicated-offerDetails.restricted,
    // },
    {
      imgSource: "/icons/dedicated-offer/details/overview/date-1-light.svg",
      imgWidth: 31.29,
      imgWidthMobile: 30.63,
      imgHeight: 25.87,
      imgHeightMobile: 25.25,
      text: dedicated-offer?.start_date && dedicated-offer?.end_date
        ? `${dedicated-offer.start_date} - ${dedicated-offer.end_date}`
        : "N/A",
    },
  ];

  return (
    <div>
      <div className=" mt-[13px] ">
        <h4 className="text-center text-[15px] text-[#7E7E7E] leading-[23px] mb-5 ">
          DedicatedOffer details
        </h4>
      </div>
      <div className="flex items-center justify-center gap-3">
        {dedicated-offerCards.map((card, index) => (
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
