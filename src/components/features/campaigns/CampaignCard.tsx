// import { useState } from "react";
import Image from "next/image";
import { CampaignDisplay } from "@/types/entities/campaign";
import { generateColorFromString } from "@/utils/colorGenerator";
import { getInitials } from "@/utils/text";
import CheckBox from "@/components/general/CheckBox";
import TruncatedText from "@/components/general/TruncatedText";

interface CampaignCardProps {
  campaign: CampaignDisplay;
  checked: boolean;
  onCheckboxChange: () => void;
  onRemove: (id: string) => void;
}

export default function CampaignCard({
  campaign,
  checked,
  onCheckboxChange,
  // onRemove,
}: CampaignCardProps) {
  const handleWrapperClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const {
    title,
    vendorName,
    status,
    thumbnailUrl,
    brandLogo,
    brandName,
    campaignType,
    // offerType,
    duration,
    durationUnit,
    is_dedicated,
  } = campaign;

  // const [copied, setCopied] = useState(false);


  const isCampaignActive = () => {
    if (!campaign.startDate || !campaign.endDate) return false;
    const now = new Date();
    const startDate = new Date(campaign.startDate);
    const endDate = new Date(campaign.endDate);
    if (
      now.getFullYear() === endDate.getFullYear() &&
      now.getMonth() === endDate.getMonth() &&
      now.getDate() === endDate.getDate()
    ) {
      return "today";
    }
    return now >= startDate && now <= endDate;
  };

  const getModeIcon = () => {
    const active = isCampaignActive();
    if (active === "today") {
      if (campaignType === "WalkIn") {
        return "/icons/campaign/card/walk-approved.svg";
      } else if (campaignType === "Delivery") {
        return "/icons/campaign/card/delivery-approved.svg";
      }
      return "/icons/campaign/card/delivery-approved.svg";
    }
    if (campaignType === "WalkIn") {
      return active
        ? "/icons/campaign/card/walk-approved.svg"
        : "/icons/campaign/card/walk-pending-light.svg";
    } else if (campaignType === "Delivery") {
      return active
        ? "/icons/campaign/card/delivery-approved.svg"
        : "/icons/campaign/card/delivery-pending-light.svg";
    }
    return active
      ? "/icons/campaign/card/delivery-approved.svg"
      : "/icons/campaign/card/delivery-pending-light.svg";
  };

  const getBarterIcon = () => {
    const active = isCampaignActive();
    if (active === "today") {
      return "/icons/campaign/card/barter-approved.svg";
    }
    return active
      ? "/icons/campaign/card/barter-approved.svg"
      : "/icons/campaign/card/barter-pending-light.svg";
  };


  // const handleRemoveClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   onRemove(campaign.id.toString());
  // };

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
        <Image
          src={thumbnailUrl || "/images/no_image.png"}
          alt={`${title} header`}
          fill
          className="object-cover"
        />
        <div className="w-[90px] h-[90px] absolute top-[39px] left-[24px] bg-white rounded-full border-5 border-[#E1E1E1] flex items-center justify-center overflow-hidden">
          {brandLogo ? (
            <Image
              src={brandLogo}
              alt="Brand logo"
              fill
              className="object-cover rounded-full aspect-square"
            />
          ) : (
            <div
              className="h-full w-full flex items-center justify-center"
              style={{
                backgroundColor: generateColorFromString(
                  brandName || title || ""
                ),
              }}
            >
              <span className="text-white text-3xl font-semibold">
                {getInitials(brandName || title || "")}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="pt-[35px] pb-[15px] px-[21px]">
        <div className="h-[46px]">
          <h3
            className="text-[15px] font-medium leading-[23px] text-[#4F4F4F] line-clamp-2"
            title={title}
          >
            {title}
          </h3>
        </div>
        <div className="flex items-center justify-between mb-[15px]">
          <p
            className="text-[13px] text-[#414141] leading-[20px] truncate"
            title={vendorName}
          >
            By {vendorName}
          </p>
          <div className="flex gap-[4.5px] items-center">
            <Image
              src={
                status === "Approved"
                  ? "/icons/campaign/card/active-light.svg"
                  : status === "Rejected"
                  ? "/icons/campaign/card/rejected-red.svg"
                  : "/icons/campaign/card/pending-light.svg"
              }
              alt={status}
              width={11.6}
              height={11.6}
            />
            <p
              className={`text-[13px] leading-[20px] ${
                status === "Approved"
                  ? "text-green-500"
                  : status === "Rejected"
                  ? "text-red-500"
                  : "text-[#787878]"
              }`}
            >
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
              {is_dedicated === 1 ? "Dedicated" : "Normal"}
            </span>
          </div>
          <div className="aspect-square flex flex-col justify-center items-center gap-2 rounded-[11px] bg-white shadow-[0_0_2px_rgba(0,0,0,0.16)]">
            <div className="h-[30.65px] flex items-center justify-center">
              <Image
                src={getModeIcon()}
                alt={campaign.category || "Category"}
                width={campaignType === "WalkIn" ? 18.04 : 31.87}
                height={campaignType === "WalkIn" ? 29.65 : 30.65}
              />
            </div>
            <span className="text-[12px] text-[#414141] font-medium">
              {campaign.category ?? "N/A"}
            </span>
          </div>
          <div className="aspect-square flex flex-col justify-center items-center gap-2 rounded-[11px] bg-white shadow-[0_0_2px_rgba(0,0,0,0.16)]">
            <div className="h-[30.65px] flex items-center justify-center">
              {(() => {
                const active = isCampaignActive();
                const isActive = active === "today" || active === true;
                return (
                  <span
                    className={`text-[21px] font-bold leading-[31px] ${isActive ? "text-[#00A4B6]" : "text-[#505050]"
                      }`}
                  >
                    {duration ?? "N/A"}
                  </span>
                );
              })()}
            </div>
            <span className="text-[12px] text-[#414141] font-medium">
              {durationUnit ?? ""}
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