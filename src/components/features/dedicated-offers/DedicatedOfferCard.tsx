import { useState } from "react";
import Image from "next/image";
import { DedicatedOfferDisplay } from "@/types/entities/dedicated-offer";
import { generateColorFromString } from "@/utils/colorGenerator";
import { getInitials } from "@/utils/text";
import CheckBox from "@/components/general/CheckBox";
import { formatDate } from "@/utils/date";

interface DedicatedOfferCardProps {
  dedicatedOffer: DedicatedOfferDisplay;
  checked: boolean;
  onCheckboxChange: () => void;
}

export default function DedicatedOfferCard({
  dedicatedOffer,
  checked,
  onCheckboxChange,
}: DedicatedOfferCardProps) {
  const {
    title,
    vendorName,
    thumbnailUrl,
    brandLogo,
    brandName,
    campaignType,
    category,
    offerDate,
    is_dedicated,
  } = dedicatedOffer;

  const isOfferActive = () => {
    if (!offerDate) return false;
    const now = new Date();
    const endDate = new Date(offerDate);
    return now <= endDate;
  };

  const getModeIcon = () => {
    const active = isOfferActive();
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

  const [copied, setCopied] = useState(false);

  return (
    <article className="w-full bg-white rounded-[13px] overflow-hidden relative">
      <div className="absolute top-2 right-2 z-10">
        <div onClick={(e) => e.stopPropagation()}>
          <CheckBox
            checked={checked}
            onChange={onCheckboxChange}
          />
        </div>
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
        </div>
        <hr className="border-[#F2F2F2] mb-[15px]" />
        <div className="grid grid-cols-2 gap-[9px] mb-[13px]">
          <div className="aspect-square-offer flex flex-col justify-center items-center gap-2 rounded-[11px] bg-white shadow-[0_0_2px_rgba(0,0,0,0.16)]">
            <div className="h-[10.65px] flex items-center justify-center mb-2">
              <Image
                src={getModeIcon()}
                alt={campaignType || "Dedicated Offer"}
                width={campaignType === "WalkIn" ? 18.04 : 31.87}
                height={campaignType === "WalkIn" ? 29.65 : 30.65}
              />
            </div>
            <span className="text-[12px] text-[#414141] font-medium">
              {category ?? "N/A"}
            </span>
          </div>
          <div className="aspect-square-offer flex flex-col justify-center items-center gap-2 rounded-[11px] bg-white shadow-[0_0_2px_rgba(0,0,0,0.16)]">
            <div className="h-[10.65px] flex items-center justify-center mb-2">
              <span
                className={`text-[21px] font-bold leading-[31px] ${
                  isOfferActive() ? "text-[#00A4B6]" : "text-[#505050]"
                }`}
              >
                {formatDate(offerDate) ?? "N/A"}
              </span>
            </div>
            <span className="text-[12px] text-[#414141] font-medium">
              Offer Date
            </span>
          </div>
        </div>
        <div className="flex gap-[9px]">
          <button className="flex-1 bg-[#787878] text-[15px]  text-white py-[9px] rounded-[11px] font-medium leading-[23px]">
            Edit
          </button>
        </div>
      </div>
    </article>
  );
}