import Image from "next/image";
import { Campaign } from "@/types/entities";

export default function BrandCampaignMobileCard({
  campaign,
}: {
  campaign: Campaign;
}) {
  const isActive = campaign.creatorApprovalType === "Automated";

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

  // Helper function to get offer type display
  const getOfferTypeDisplay = (offerType: string) => {
    switch (offerType) {
      case "Barter":
        return "Barter";
      case "Paid":
        return "Paid";
      case "BarterAndPaid":
        return "Barter & Paid";
      default:
        return offerType;
    }
  };

  return (
    <div className="bg-white rounded-[13px] p-3.5 cursor-pointer">
      <div className="flex gap-5 items-center">
        <div className="relative w-[86.31px] h-[86.31px] rounded-[10px] overflow-hidden bg-[#E1E1E1]">
          {campaign.thumbnailUrl ? (
            <Image
              src={campaign.thumbnailUrl}
              alt={campaign.title}
              fill
              className="object-cover"
            />
          ) : null}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div>
              <h3 className="text-[15px] font-semibold leading-[1.5] text-[#4F4F4F] mb-1.5">
                {campaign.title}
              </h3>
              {/* Status display instead of vendor */}
              {isActive ? (
                <div className="flex gap-[4.5px] items-center">
                  <Image
                    src="/icons/campaign/card/active-light.svg"
                    alt="active"
                    width={11.6}
                    height={11.6}
                  />
                  <p className="text-[13px] text-[#787878] leading-[1.5]">
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
                  <p className="text-[13px] text-[#787878] leading-[1.5]">
                    Pending
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[#757575] inline-flex items-center justify-center gap-1.5">
              {campaign.campaignType === "WalkIn" && (
                <Image
                  src="/icons/general/walk-in-1-dark.svg"
                  alt="walk in"
                  width={8.42}
                  height={13.85}
                />
              )}
              {campaign.campaignType === "Delivery" && (
                <Image
                  src="/icons/general/delivery-1-dark.svg"
                  alt="delivery"
                  width={12.155}
                  height={11.8261}
                />
              )}
              {campaign.campaignType === "Online" && (
                <Image
                  src="/icons/general/online-1-dark.svg"
                  alt="online"
                  width={9.412}
                  height={9.412}
                />
              )}
              {campaign.campaignType === "Exclusive" && (
                <Image
                  src="/icons/general/exclusive-1-dark.svg"
                  alt="exclusive"
                  width={9.9775}
                  height={8.606}
                />
              )}
              <span className="text-[13px] leading-[1.5] font-medium text-[#757575] ">
                {getCampaignTypeDisplay(campaign.campaignType)}
              </span>
            </div>
            <div className="text-[13px] leading-[1.5] text-[#757575] font-medium inline-flex items-center justify-center gap-1.5">
              <Image
                src="/icons/general/barter-1-dark.svg"
                alt="barter"
                width={10.01}
                height={10.01}
              />
              <p>{getOfferTypeDisplay(campaign.offerType)}</p>
            </div>
            <div className="text-[13px] leading-[1.5] font-medium text-[#757575]">
              {campaign.advancedVisibility.duration}{" "}
              {campaign.advancedVisibility.unit.toLowerCase()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
