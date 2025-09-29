import { useState } from "react";
import Image from "next/image";
import { CampaignDisplay } from "@/types/entities/campaign";
import { generateColorFromString } from "@/utils/colorGenerator";
import { getInitials } from "@/utils/text";

export default function CampaignCard({ campaign }: { campaign: CampaignDisplay }) {
  const {
    title,
    vendorName,
    status,
    banner_image,
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
  const [imageError, setImageError] = useState(false);

  const getCampaignTypeDisplay = (type?: string) => {
    switch (type) {
      case "WalkIn":
        return "Walk in";
      case "Delivery":
        return "Delivery";
      case "Online":
        return "Online";
      case "Exclusive":
        return "Exclusive";
      default:
        return type || "N/A";
    }
  };

  const getModeIcon = () => {
    if (campaignType === "WalkIn") {
      return status === 'Approved'
        ? "/icons/campaign/card/walk-approved.svg"
        : "/icons/campaign/card/walk-pending-light.svg";
    } else if (campaignType === "Delivery") {
      return status === 'Approved'
        ? "/icons/campaign/card/delivery-approved.svg"
        : "/icons/campaign/card/delivery-pending-light.svg";
    }
    return status === 'Approved'
      ? "/icons/campaign/card/delivery-approved.svg"
      : "/icons/campaign/card/delivery-pending-light.svg";
  };

  const getBarterIcon = () => {
    return status === 'Approved'
      ? "/icons/campaign/card/barter-approved.svg"
      : "/icons/campaign/card/barter-pending-light.svg";
  };

  const handleEditClick = () => {
    console.log("Edit clicked for campaign:", campaign.id);
  };

  const handleCopyClick = () => {
    if (copyLinkUrl) {
      navigator.clipboard.writeText(copyLinkUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const statusConfig: { [key: string]: { icon: string; color: string } } = {
    Approved: {
      icon: "/icons/campaign/card/active-light.svg",
      color: "text-green-500",
    },
    Rejected: {
      icon: "/icons/campaign/card/rejected-red.svg",
      color: "text-red-500",
    },
    Pending: {
      icon: "/icons/campaign/card/pending-light.svg",
      color: "text-[#787878]",
    },
  };

  const currentStatus = statusConfig[status] || statusConfig.Pending;

  return (
    <article className="w-full bg-white rounded-[13px] overflow-hidden">
      <div className="h-[90px] w-full relative bg-[#E1E1E1]">
        <Image
          src={imageError || !banner_image ? '/images/no_image.png' : banner_image}
          alt={`${title} header`}
          fill
          className="object-cover"
          onError={() => setImageError(true)}
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
              src={currentStatus.icon}
              alt={status}
              width={11.6}
              height={11.6}
            />
            <p className={`text-[13px] leading-[20px] ${currentStatus.color}`}>
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
              {offerType ?? 'N/A'}
            </span>
          </div>
          <div className="aspect-square flex flex-col justify-center items-center gap-2 rounded-[11px] bg-white shadow-[0_0_2px_rgba(0,0,0,0.16)]">
            <div className="h-[30.65px] flex items-center justify-center">
              <span
                className={`text-[21px] font-bold leading-[31px] ${
                  status === 'Approved' ? "text-[#00A4B6]" : "text-[#505050]"
                }`}
              >
                {duration ?? 'N/A'}
              </span>
            </div>
            <span className="text-[12px] text-[#414141] font-medium">
              {durationUnit ?? ''}
            </span>
          </div>
        </div>
        <div className="flex gap-[9px]">
          <button
            onClick={handleCopyClick}
            className="flex-1 bg-[#00A4B6] text-[15px] text-white py-[9px] rounded-[11px] font-medium leading-[23px]"
          >
            {copied ? "Copied!" : "Copy Link"}
          </button>
          <button
            onClick={handleEditClick}
            className="flex-1 bg-[#787878] text-[15px]  text-white py-[9px] rounded-[11px] font-medium leading-[23px]">
            Edit
          </button>
        </div>
      </div>
    </article>
  );
}