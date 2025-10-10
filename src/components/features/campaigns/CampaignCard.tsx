import { useMemo } from "react";
import Image from "next/image";
import { CampaignSummary } from "@/types/entities/campaign";
import { generateColorFromString } from "@/utils/colorGenerator";
import { getInitials } from "@/utils/getInitials";
import CheckBox from "@/components/general/CheckBox";
import { formatDate } from "@/utils/date";

interface CampaignCardProps {
  campaign: CampaignSummary;
  checked: boolean;
  onCheckboxChange: () => void;
}

export default function CampaignCard({
  campaign,
  checked,
  onCheckboxChange,
}: CampaignCardProps) {
  const handleWrapperClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const {
    offer_title,
    venue,
    account_status,
    banner_image,
    is_dedicated,
    start_date,
    end_date,
  } = campaign;

  const isOfferActive = useMemo(() => {
    if (!start_date || !end_date) return false;
    const now = new Date();
    const start = new Date(start_date);
    const end = new Date(end_date);
    return now >= start && now <= end;
  }, [start_date, end_date]);


  const getModeIcon = () => {
    return isOfferActive
      ? "/icons/campaign/card/delivery-approved.svg"
      : "/icons/campaign/card/delivery-pending-light.svg";
  };

  const getBarterIcon = () => {
    return isOfferActive
      ? "/icons/campaign/card/barter-approved.svg"
      : "/icons/campaign/card/barter-pending-light.svg";
  };

  const getImageUrl = (imageName: string | null | undefined) => {
    if (!imageName) return null;
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}/assets/uploads/foodoffers/${imageName}`;
  };

  return (
    <article className="w-full bg-white rounded-[13px] overflow-hidden relative">
      <div onClick={handleWrapperClick} className="absolute top-2 right-2 z-10">
        <CheckBox
          checked={checked}
          onChange={onCheckboxChange}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
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
            By {venue?.venue_title ?? "N/A"}
          </p>
          <div className="flex gap-[4.5px] items-center">
            <Image
              src={
                isOfferActive
                  ? "/icons/campaign/card/active-light.svg"
                  : "/icons/campaign/card/pending-light.svg"
              }
              alt={account_status}
              width={11.6}
              height={11.6}
            />
            <p className="text-[13px] text-[#787878] leading-[20px]">
              {account_status}
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
              {is_dedicated === 1 ? "Dedicated" : "Normal"}
            </span>
          </div>
          <div className="aspect-square flex flex-col justify-center items-center gap-2 rounded-[11px] bg-white shadow-[0_0_2px_rgba(0,0,0,0.16)]">
            <div className="h-[30.65px] flex items-center justify-center">
              <Image
                src={getModeIcon()}
                alt={"Campaign"}
                width={31.87}
                height={30.65}
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
                {formatDate(start_date)}
              </span>
            </div>
            <span className="text-[12px] text-[#414141] font-medium">
              Start Date
            </span>
          </div>
        </div>
        <div className="flex gap-[9px]">
          <button className="flex-1 bg-[#787878] text-[15px]  text-white py-[9px] rounded-[11px] font-medium leading-[23px]">
            Edit
          </button>
          {/* <button
            onClick={handleRemoveClick}
            className="flex-1 bg-red-500 text-[15px] text-white py-[9px] rounded-[11px] font-medium leading-[23px]"
          >
            Remove
          </button> */}
        </div>
      </div>
    </article>
  );
}