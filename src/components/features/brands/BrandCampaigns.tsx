"use client";

import CampaignCard from "../campaigns/CampaignCard";
import BrandCampaignMobileCard from "./BrandCampaignMobileCard";
import { CampaignsData } from "@/data/CampaignsData";
import { useRouter } from "next/navigation";

interface BrandCampaignsProps {
  brandId: string;
  accountId: string;
}

export default function BrandCampaigns({
  brandId,
  accountId,
}: BrandCampaignsProps) {
  const router = useRouter();

  const handleCampaignClick = (campaignId: string) => {
    router.push(`/businesses/accounts/${accountId}/${brandId}/${campaignId}`);
  };

  // Filter campaigns by brandId
  const brandCampaigns = CampaignsData.filter(
    (campaign) => campaign.brandId === brandId
  );

  if (brandCampaigns.length === 0) {
    return (
      <div className="py-6">
        <div className="max-w-[1428px] mx-auto">
          <div className="flex items-center justify-center min-h-[200px]">
            <p className="text-gray-500">No campaigns found for this brand.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="hidden md:block">
        <div className="max-w-[1428px] py-10 mx-auto grid grid-cols-[repeat(auto-fit,340px)] gap-x-[13px] gap-y-[20px] justify-center">
          {brandCampaigns.map((campaign) => (
            <div
              key={campaign.campaignId}
              onClick={() => handleCampaignClick(campaign.campaignId)}
              className="cursor-pointer"
            >
              <CampaignCard campaign={campaign} />
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-1.25">
        {brandCampaigns.map((campaign) => (
          <div
            key={campaign.campaignId}
            onClick={() => handleCampaignClick(campaign.campaignId)}
            className="cursor-pointer"
          >
            <BrandCampaignMobileCard campaign={campaign} />
          </div>
        ))}
      </div>
    </div>
  );
}
