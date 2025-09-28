import Image from "next/image";
import { Campaign } from "@/types/entities";
import { generateColorFromString } from "@/utils/colorGenerator";
import { getInitials } from "@/utils/text";

export default function CampaignCard({ campaign }: { campaign: Campaign }) {
  // Map Campaign properties to component state
  const title = campaign.title;
  const status =
    campaign.creatorApprovalType === "Automated" ? "active" : "pending";
  const logoSrc = campaign.brandLogo; // Use brand logo from Campaign entity
  const headerSrc = campaign.thumbnailUrl;

  // Helper function to get display name for campaign type
  const getCampaignTypeDisplay = (campaignType: string) => {
    switch (campaignType) {
      case "WalkIn":
        return "Walk in";
      case "Delivery":
        return "Delivery";
      case "Online":
        return "Online";
      case "Exclusive":
        return "Exclusive";
      default:
        return campaignType;
    }
  };

  const mode: "Walk in" | "Delivery" | "Online" | "Exclusive" =
    campaign.campaignType === "WalkIn"
      ? "Walk in"
      : campaign.campaignType === "Delivery"
      ? "Delivery"
      : campaign.campaignType === "Online"
      ? "Online"
      : "Exclusive";

  // const barter = campaign.offerType === "Barter";
  const daysRemaining = campaign.advancedVisibility.duration;

  const isActive = status === "active";

  // Determine icons based on status and mode
  const getModeIcon = () => {
    if (mode === "Walk in") {
      return isActive
        ? "/icons/campaign/card/walk-approved.svg"
        : "/icons/campaign/card/walk-pending-light.svg";
    } else if (mode === "Delivery") {
      return isActive
        ? "/icons/campaign/card/delivery-approved.svg"
        : "/icons/campaign/card/delivery-pending-light.svg";
    } else {
      // For Online and Exclusive, use delivery icon as fallback
      return isActive
        ? "/icons/campaign/card/delivery-approved.svg"
        : "/icons/campaign/card/delivery-pending-light.svg";
    }
  };

  const getBarterIcon = () => {
    return isActive
      ? "/icons/campaign/card/barter-approved.svg"
      : "/icons/campaign/card/barter-pending-light.svg";
  };

  return (
    <article className="w-full  bg-white rounded-[13px] overflow-hidden">
      <div className="h-[90px] w-full relative bg-[#E1E1E1]">
        {headerSrc && (
          <Image
            src={headerSrc}
            alt={`${title} header`}
            fill
            className="object-cover"
          />
        )}
        <div className="w-[90px] h-[90px] absolute top-[39px] left-[24px] bg-white rounded-full border-5 border-[#E1E1E1] flex items-center justify-center overflow-hidden">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt="Brand logo"
              fill
              className="object-cover rounded-full aspect-square"
            />
          ) : (
            <div
              className="h-full w-full flex items-center justify-center"
              style={{
                backgroundColor: generateColorFromString(campaign.brandName),
              }}
            >
              <span className="text-white text-3xl font-semibold">
                {getInitials(campaign.brandName)}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="pt-[35px] pb-[15px] px-[21px]  ">
        <div className="">
          <h3 className="text-[15px] font-medium leading-[23px] text-[#4F4F4F]">
            {title}
          </h3>
        </div>
        <div className="flex items-center justify-between mb-[15px]">
          <p className="text-[13px] text-[#414141] leading-[20px]">
            By {campaign.brandName}
          </p>
          {isActive ? (
            <div className="flex gap-[4.5px] items-center">
              {" "}
              <Image
                src="/icons/campaign/card/active-light.svg"
                alt="pending"
                width={11.6}
                height={11.6}
              />
              <p className="text-[13px] text-[#787878] leading-[20px]">
                Active
              </p>
            </div>
          ) : (
            <div className="flex gap-[4.5px] items-center">
              <Image
                src="/icons/campaign/card/pending-light.svg"
                alt="pending"
                width={11.6}
                height={11.6}
              />
              <p className="text-[13px] text-[#787878] leading-[20px]">
                Pending
              </p>
            </div>
          )}
        </div>

        {/* Separator line */}
        <hr className="border-[#F2F2F2] mb-[15px]" />

        {/* Icon grid */}
        <div className="grid grid-cols-3 gap-[9px] mb-[13px] ">
          <div className="aspect-square flex flex-col justify-center items-center gap-2 rounded-[11px] bg-white shadow-[0_0_2px_rgba(0,0,0,0.16)]">
            <div className="h-[30.65px] flex items-center justify-center">
              <Image
                src={getModeIcon()}
                alt={mode}
                width={mode === "Walk in" ? 18.04 : 31.87}
                height={mode === "Walk in" ? 29.65 : 30.65}
              />
            </div>
            <span className="text-[12px] text-[#414141] leading-[20px]">
              {getCampaignTypeDisplay(campaign.campaignType)}
            </span>
          </div>

          <div className="aspect-square flex flex-col justify-center items-center gap-2 rounded-[11px] bg-white shadow-[0_0_2px_rgba(0,0,0,0.16)]">
            <div className="h-[30.65px] flex items-center justify-center">
              <Image
                src={getBarterIcon()}
                alt="Barter"
                width={24}
                height={25.83}
              />
            </div>
            <span className="text-[12px] text-[#414141] font-medium">
              {campaign.offerType}
            </span>
          </div>
          <div className="aspect-square flex flex-col justify-center items-center gap-2 rounded-[11px] bg-white shadow-[0_0_2px_rgba(0,0,0,0.16)]">
            <div className="h-[30.65px] flex items-center justify-center">
              <span
                className={`text-[21px] font-bold leading-[31px] ${
                  isActive ? "text-[#00A4B6]" : "text-[#505050]"
                }`}
              >
                {typeof daysRemaining === "number" ? daysRemaining : "N/A"}
              </span>
            </div>
            <span className="text-[12px] text-[#414141] font-medium">
              {campaign.advancedVisibility.unit}
            </span>
          </div>
        </div>

        <div className="flex gap-[9px]">
          <button className="flex-1 bg-[#00A4B6] text-[15px] text-white py-[9px] rounded-[11px] font-medium leading-[23px]">
            Edit
          </button>

          <button className="flex-1 bg-[#787878] text-[15px]  text-white py-[9px] rounded-[11px] font-medium leading-[23px]">
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}
