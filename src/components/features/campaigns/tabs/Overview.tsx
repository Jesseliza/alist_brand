"use client";

import Image from "next/image";
import { Campaign } from "@/types/entities";
import CampaignStats from "./Overview/CampaignStats";
import CampaignCreators from "./Overview/CampaignCreators";
import CampaignDetails from "./Overview/CampaignDetails";
import CampaignGuidlines from "./Overview/CampaignGuidlines";
import CampaignPlans from "./Overview/CampaignPlans";

export default function Overview({
  campaign,
  campaignId,
}: {
  campaign: Campaign;
  campaignId: string;
}) {
  return (
    <div className="max-w-[774px] mx-auto mt-[13px] pb-[100px]">
      <div className="flex bg-[#F8F8F8] rounded-[13px] overflow-hidden">
        {/* left accent stripe */}
        <div className="w-[17.77px] bg-[#00A4B6]" />

        {/* main content */}
        <div className="flex-1 flex items-center justify-between pr-[11px]  py-[11px]">
          {/* text block */}
          <div className="ml-[35px]">
            <div className="flex items-center gap-6">
              <h2 className="text-[89px] font-bold text-[#00A4B6] leading-[133px]">
                {campaign.voucherValue ?? 0}
              </h2>
              <h2 className="text-[37px] font-medium text-[#4F4F4F] leading-[37px] max-w-[180px]">
                Total Vouchers
              </h2>
            </div>
            <p className="-mt-[16px] text-[15px] leading-[23px] text-[#4F4F4F]">
              of which{" "}
              <span className=" text-[#00A4B6]">
                {campaign.voucherValue ?? 0}
              </span>{" "}
              vouchers have been redeemed
            </p>
          </div>

          {/* image */}
          <div className="w-[204] h-[204px] rounded-[11px] aspect-square overflow-hidden">
            <Image
              src={campaign.thumbnailUrl || '/images/default-banner.png'}
              alt={campaign.title ?? "Campaign thumbnail"}
              className="w-full h-full object-cover rounded-[11px]"
              width={204}
              height={204}
            />
          </div>
        </div>
      </div>

      <CampaignStats campaign={campaign} />
      <CampaignCreators campaign={campaign} />
      <CampaignDetails campaign={campaign} />
      <div className="mt-[11px] rounded-[11px] bg-[#F8F8F8] px-[35px] py-[30px] text-[15px] leading-[23px] text-[#4F4F4F]">
        <p className="font-medium">Description:</p>
        <p>{campaign.offerDescription ?? "No description available."}</p>
      </div>
      <div className="mt-[12.5px] rounded-[11px] bg-[#F8F8F8] px-[35px] py-[30px] text-[15px] leading-[23px] text-[#4F4F4F]">
        <p className="font-medium">Campaign Message:</p>
        <p>{campaign.campaignMessage ?? "No message available."}</p>
      </div>
      <div className="border-b border-[#E2E2E2]">
        <CampaignGuidlines campaign={campaign} />
      </div>
      <CampaignPlans campaign={campaign} />
    </div>
  );
}