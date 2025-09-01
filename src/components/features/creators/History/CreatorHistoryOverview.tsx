import Image from "next/image";
import { CreatorHistoryOffer } from "@/types/entities";

export default function CreatorHistoryOverview({
  offer,
}: {
  offer: CreatorHistoryOffer;
}) {
  // Create infoItems array from offer data
  const infoItems = [
    {
      icon: {
        src: "/icons/creator/history/price-2-light.svg",
        alt: "price",
        width: 38.11,
        height: 28.85,
      },
      texts: [offer.infoItems.price],
    },
    {
      icon: {
        src: "/icons/creator/history/location-2-light.svg",
        alt: "location",
        width: 32.13,
        height: 37.33,
      },
      texts: [offer.infoItems.location],
    },
    {
      icon: {
        src: "/icons/creator/history/hour-2-light.svg",
        alt: "hour",
        width: 36.65,
        height: 36.65,
      },
      texts: offer.infoItems.hours,
    },
    {
      icon: {
        src: "/icons/creator/history/booking-2-light.svg",
        alt: "booking",
        width: 38.36,
        height: 38.36,
      },
      texts: offer.infoItems.bookingMethod,
    },
    {
      icon: {
        src: "/icons/creator/history/gift-2-light.svg",
        alt: "gift",
        width: 38.11,
        height: 28.85,
      },
      texts: [offer.infoItems.rewardType],
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-[18px] leading-[27px] font-semibold text-[#4F4F4F] mb-2.5">
        {offer.title}
      </h3>
      <p className="text-[13px] leading-[20px] text-[#4F4F4F] mb-3">
        Offer status: <span className="text-[#00CC86]">{offer.status}</span> |
        ends on
        {offer.endDate}
      </p>
      <div className="mb-2.5 flex items-center justify-between bg-[#F6F6F6] rounded-[13px] p-2 relative">
        {/* Colored left border */}
        <div className="absolute left-0 top-0 bottom-0 w-[16.35px] rounded-l-[11px] bg-[#00A4B6]" />

        <div className="flex w-full gap-6">
          <div className="flex-1 pl-[41px] pt-[22px] pb-[9px]">
            <h3 className="text-[34px] font-semibold leading-[34px] text-[#505050] pb-1.5">
              {offer.voucherCode}
            </h3>
            <p className="text-[18px] leading-[34px] text-[#00A4B6] font-semibold mb-[25px]">
              {offer.redemptionStatus}
            </p>
            <div className="flex truncate text-nowrap items-center  gap-7">
              <div>
                <div className="text-[15px] font-medium text-[#4F4F4F] leading-[23px]">
                  Claimed on:
                </div>
                <div className="text-[13px] text-[#4F4F4F] leading-[23px]">
                  {offer.claimedDate}
                </div>
              </div>
              <div className="h-[34px] w-px bg-[#BDBDBD] mx-7" />
              <div>
                <div className="text-[15px] font-medium text-[#4F4F4F] leading-[23px]">
                  Redeemed on:
                </div>
                <div className="text-[13px] text-[#4F4F4F] leading-[23px]">
                  {offer.redeemedDate}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[168.29px] h-[168.29px] rounded-[11px] overflow-hidden aspect-square flex-shrink-0">
              <Image
                src={offer.imageSrc}
                alt={offer.imageAlt}
                width={168.29}
                height={168.29}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <ul className="flex items-center justify-between gap-2 text-center">
        {infoItems.map((item, idx) => (
          <li
            key={idx}
            className="aspect-square px-2.5 bg-[#F6F6F6] rounded-[11px] w-[138.28px] h-[138.28px] flex justify-center pt-[26px]"
          >
            <div>
              <div className="flex items-center justify-center h-[39px] mb-3">
                <Image
                  src={item.icon.src}
                  alt={item.icon.alt}
                  width={item.icon.width}
                  height={item.icon.height}
                />
              </div>
              {item.texts.map((text, tIdx) => (
                <p
                  key={tIdx}
                  className="text-[12px] leading-[17px] text-[#4F4F4F]"
                >
                  {text}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-[11px] bg-[#F6F6F6] pt-5 px-8 flex-1">
        <p className="text-[#4F4F4F] text-[15px] leading-[23px] font-medium">
          Description:
        </p>
        <p className="text-[#4F4F4F] text-[15px] leading-[23px]">
          {offer.description}
        </p>
      </div>
    </div>
  );
}
