import { useMemo } from "react";
import Image from "next/image";
import { DedicatedOffer } from "@/types/entities/dedicatedOffer";
import { generateColorFromString } from "@/utils/colorGenerator";
import { getInitials } from "@/utils/getInitials";
import { formatDate } from "@/utils/date";

interface DedicatedOfferCardProps {
  offer: DedicatedOffer;
  onClick: () => void;
}

export default function DedicatedOfferCard({
  offer,
  onClick,
}: DedicatedOfferCardProps) {
  const {
    offer_title,
    venue,
    offer_date,
    banner_image
  } = offer;

  const { status, isOfferActive } = useMemo(() => {
    if (!offer_date) return { status: "Pending", isOfferActive: false };

    const now = new Date();
    const offerDate = new Date(offer_date);
    now.setHours(0, 0, 0, 0);
    offerDate.setHours(0, 0, 0, 0);

    if (offerDate < now) {
      return { status: "Expired", isOfferActive: false };
    } else if (offerDate > now) {
      return { status: "Pending", isOfferActive: false };
    } else {
      return { status: "Active", isOfferActive: true };
    }
  }, [offer_date]);

  const getBarterIcon = () => {
    return isOfferActive
      ? "/icons/campaign/card/barter-approved.svg"
      : "/icons/campaign/card/barter-pending-light.svg";
  };

  const getCategoryIcon = () => {
    return isOfferActive
      ? "/icons/campaign/card/delivery-approved.svg"
      : "/icons/campaign/card/delivery-pending-light.svg";
  };

  const getImageUrl = (imageName: string | null | undefined) => {
    if (!imageName) return null;
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}/assets/uploads/foodoffers/${imageName}`;
  };

  return (
    <article className="w-full bg-white rounded-[13px] overflow-hidden relative">
      <div className="h-[90px] w-full relative bg-[#E1E1E1]">
        {banner_image && (
          <Image
            src={getImageUrl(banner_image) || "/images/no_image.png"}
            alt={`${offer_title} header`}
            fill
            className="object-cover"
          />
        )}
        <div className="w-[90px] h-[90px] absolute top-[39px] left-[24px] bg-white rounded-full border-5 border-[#E1E1E1] flex items-center justify-center overflow-hidden">
          {venue?.logo ? (
            <Image
              src={venue.logo}
              alt="Brand logo"
              fill
              className="object-cover rounded-full aspect-square"
            />
          ) : (
            <div
              className="h-full w-full flex items-center justify-center"
              style={{
                backgroundColor: generateColorFromString(
                  venue?.venue_title || offer_title || ""
                ),
              }}
            >
              <span className="text-white text-3xl font-semibold">
                {getInitials(venue?.venue_title || offer_title || "")}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="pt-[35px] pb-[15px] px-[21px]">
        <div className="">
          <h3 className="text-[15px] font-medium leading-[23px] text-[#4F4F4F]">
            {offer_title}
          </h3>
        </div>
        <div className="flex items-center justify-between mb-[15px]">
          <p className="text-[13px] text-[#414141] leading-[20px]">
            By {venue?.venue_title ?? 'N/A'}
          </p>
          <div className="flex gap-[4.5px] items-center">
            <Image
              src={
                isOfferActive
                  ? "/icons/campaign/card/active-light.svg"
                  : "/icons/campaign/card/pending-light.svg"
              }
              alt={status}
              width={11.6}
              height={11.6}
            />
            <p className="text-[13px] text-[#787878] leading-[20px]">
              {status}
            </p>
          </div>
        </div>
        <hr className="border-[#F2F2F2] mb-[15px]" />
        <div className="grid grid-cols-3 gap-[9px] mb-[13px]">
          <div className="aspect-square flex flex-col justify-center items-center gap-2 rounded-[11px] bg-white shadow-[0_0_2px_rgba(0,0,0,0.16)]">
            <div className="h-[30.65px] flex items-center justify-center">
              <Image
                src={getBarterIcon()}
                alt="Barter"
                width={24}
                height={25.83}
              />
            </div>
            <span className="text-[12px] text-[#414141] leading-[20px]">
              Dedicated
            </span>
          </div>
          <div className="aspect-square flex flex-col justify-center items-center gap-2 rounded-[11px] bg-white shadow-[0_0_2px_rgba(0,0,0,0.16)]">
            <div className="h-[30.65px] flex items-center justify-center">
              <Image
                src={getCategoryIcon()}
                alt="Category"
                width={24}
                height={24}
              />
            </div>
            <span className="text-[12px] text-[#414141] font-medium">
              {venue?.category?.category ?? "N/A"}
            </span>
          </div>
          <div className="aspect-square flex flex-col justify-center items-center gap-2 rounded-[11px] bg-white shadow-[0_0_2px_rgba(0,0,0,0.16)]">
            <div className="h-[30.65px] flex items-center justify-center">
              <span
                className={`text-[12px] font-bold leading-[31px] ${
                  isOfferActive ? "text-[#00A4B6]" : "text-[#505050]"
                }`}
              >
                {formatDate(offer_date)}
              </span>
            </div>
            <span className="text-[12px] text-[#414141] font-medium">
              Offer Date
            </span>
          </div>
        </div>
        <div className="flex gap-[9px]">
          <button
            onClick={onClick}
            className="flex-1 bg-[#787878] text-[15px]  text-white py-[9px] rounded-[11px] font-medium leading-[23px]"
          >
            Edit
          </button>
        </div>
      </div>
    </article>
  );
}