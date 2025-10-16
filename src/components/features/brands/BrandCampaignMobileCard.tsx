"use client";

import Image from "next/image";
import { CampaignDisplay } from "@/types/entities/campaign";
import { differenceInDays, parseISO } from "date-fns";

export default function BrandCampaignMobileCard({
  campaign,
  onRemove,
}: {
  campaign: CampaignDisplay;
  onRemove: (id: string) => void;
}) {
  const {
    title,
    thumbnailUrl,
    category,
    offer_status,
    startDate,
    endDate,
    is_dedicated,
  } = campaign;

  const getDaysLeft = () => {
    if (!endDate) return "N/A";
    const now = new Date();
    const end = parseISO(endDate);
    const days = differenceInDays(end, now);
    if (days < 0) return "Expired";
    return `${days} days left`;
  };

  return (
    <div className="bg-white rounded-[13px] p-3.5 cursor-pointer">
      <div className="flex gap-5 items-center">
        <div className="relative w-[86.31px] h-[86.31px] rounded-[10px] overflow-hidden bg-[#E1E1E1]">
          {thumbnailUrl && (
            <Image
              src={thumbnailUrl}
              alt={title ?? "Campaign thumbnail"}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div>
              <h3 className="text-[15px] font-semibold leading-[1.5] text-[#4F4F4F] mb-1.5">
                {title ?? "Untitled Campaign"}
              </h3>
              <div className="text-xs text-gray-500">
                {is_dedicated ? "Dedicated" : "Normal"}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemove(campaign.id.toString());
              }}
              className="p-1"
            >
              <Image
                src="/icons/campaign/add-campaign/remove-channel.svg"
                alt="delete campaign"
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[13px] leading-[1.5] text-[#757575] inline-flex items-center justify-center gap-1.5 ">
              <Image
                src={
                  offer_status === "Active"
                    ? "/icons/campaign/card/delivery-approved.svg"
                    : "/icons/campaign/card/delivery-pending-light.svg"
                }
                alt="category"
                width={12.155}
                height={11.8261}
              />
              <p>{offer_status}</p>
            </div>
            <div className="text-[13px] leading-[1.5] text-[#757575]">
              {getDaysLeft()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}