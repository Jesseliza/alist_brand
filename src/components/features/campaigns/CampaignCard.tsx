import { useState } from "react";
import Image from "next/image";
import { CampaignDisplay } from "@/types/entities/campaign";
import { generateColorFromString } from "@/utils/colorGenerator";
import { getInitials } from "@/utils/text";
import CheckBox from "@/components/general/CheckBox";

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
  onRemove,
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
    offerType,
    duration,
    durationUnit,
    copyLinkUrl,
    is_dedicated,
  } = campaign;

  const [copied, setCopied] = useState(false);


  const getModeIcon = () => {
    if (campaignType === "WalkIn") {
      return status === "Approved"
        ? "/icons/campaign/card/walk-approved.svg"
        : "/icons/campaign/card/walk-pending-light.svg";
    } else if (campaignType === "Delivery") {
      return status === "Approved"
        ? "/icons/campaign/card/delivery-approved.svg"
        : "/icons/campaign/card/delivery-pending-light.svg";
    }
    return status === "Approved"
      ? "/icons/campaign/card/delivery-approved.svg"
      : "/icons/campaign/card/delivery-pending-light.svg";
  };

  const getBarterIcon = () => {
    return status === "Approved"
      ? "/icons/campaign/card/barter-approved.svg"
      : "/icons/campaign/card/barter-pending-light.svg";
  };


  const handleRemoveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onRemove(campaign.id.toString());
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
        <div className="">
          <h3 className="text-[15px] font-medium leading-[23px] text-[#4F4F4F]">
            {title}
          </h3>
        </div>
        <div className="flex items-center justify-between mb-[15px]">
          <p className="text-[13px] text-[#414141] leading-[20px]">
            By {vendorName}
          </p>
          <div className="flex gap-[4.5px] items-center">
            <Image
              src={
                status === "Approved"
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
              {is_dedicated === 1 ? "Dedicated" : "Normal"}
            </span>
          </div>
          <div className="aspect-square flex flex-col justify-center items-center gap-2 rounded-[11px] bg-white shadow-[0_0_2px_rgba(0,0,0,0.16)]">
            <div className="h-[30.65px] flex items-center justify-center">
              <Image
                src={getModeIcon()}
                alt={campaignType || "Campaign"}
                width={campaignType === "WalkIn" ? 18.04 : 31.87}
                height={campaignType === "WalkIn" ? 29.65 : 30.65}
              />
            </div>
            <span className="text-[12px] text-[#414141] font-medium">
              {offerType ?? "N/A"}
            </span>
          </div>
          <div className="aspect-square flex flex-col justify-center items-center gap-2 rounded-[11px] bg-white shadow-[0_0_2px_rgba(0,0,0,0.16)]">
            <div className="h-[30.65px] flex items-center justify-center">
              <span
                className={`text-[21px] font-bold leading-[31px] ${
                  status === "Approved" ? "text-[#00A4B6]" : "text-[#505050]"
                }`}
              >
                {duration ?? "N/A"}
              </span>
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