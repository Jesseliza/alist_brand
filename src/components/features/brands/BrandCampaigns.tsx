"use client";

import CampaignCard from "../campaigns/CampaignCard";
import BrandCampaignMobileCard from "./BrandCampaignMobileCard";
import { CampaignsData } from "@/data/CampaignsData";
import { brandsData } from "@/data/BrandsData";
import { useRouter } from "next/navigation";
import { Campaign } from "@/types/entities";

interface BrandCampaignsProps {}

export default function BrandCampaigns({}: BrandCampaignsProps) {
  const router = useRouter();

  const brandAccountMap = new Map<string, string>();
  brandsData.forEach((brand) => {
    brandAccountMap.set(brand.brandId, brand.accountId);
  });

  const handleCampaignClick = (campaign: Campaign) => {
    const campaignAccountId = brandAccountMap.get(campaign.brandId);
    if (campaignAccountId) {
      router.push(
        `/businesses/accounts/${campaignAccountId}/${campaign.brandId}/${campaign.campaignId}`
      );
    } else {
      // Fallback for safety, though data should be consistent
      console.error(`Account ID not found for brand ID: ${campaign.brandId}`);
    }
  };

  const brandCampaigns = CampaignsData;

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
              onClick={() => handleCampaignClick(campaign)}
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
            onClick={() => handleCampaignClick(campaign)}
            className="cursor-pointer"
          >
            <BrandCampaignMobileCard campaign={campaign} />
          </div>
        ))}
      </div>
    </div>
  );
}
