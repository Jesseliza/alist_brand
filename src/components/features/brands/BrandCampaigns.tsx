"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import CampaignCard from "../campaigns/CampaignCard";
import BrandCampaignMobileCard from "./BrandCampaignMobileCard";
import { FoodOffer } from "@/types/entities/brand";
import { adaptFoodOfferToDisplay } from "@/utils/campaignAdapters";

interface BrandCampaignsProps {
  foodOffers: FoodOffer[];
  brandName: string;
  brandLogo: string;
  accountId: string;
  brandId: string;
}

export default function BrandCampaigns({
  foodOffers,
  brandName,
  brandLogo,
  accountId,
  brandId,
}: BrandCampaignsProps) {
  const router = useRouter();

  const handleCampaignClick = (campaignId: string) => {
    router.push(`/businesses/accounts/${accountId}/${brandId}/${campaignId}`);
  };

  const displayCampaigns = useMemo(
    () => foodOffers.map((offer) => adaptFoodOfferToDisplay(offer, brandName, brandId)),
    [foodOffers, brandName, brandId]
  );

  if (!displayCampaigns || displayCampaigns.length === 0) {
    return (
      <div className="py-6">
        <div className="max-w-[1428px] mx-auto">
          <div className="bg-white rounded-lg shadow-md flex items-center justify-center min-h-[200px]">
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
          {displayCampaigns.map((campaign, index) => (
            <div
              key={`${campaign.campaignId}-${index}`}
              onClick={() => handleCampaignClick(campaign.campaignId)}
              className="cursor-pointer"
            >
              <CampaignCard campaign={campaign} />
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-1.25">
        {displayCampaigns.map((campaign, index) => (
          <div
            key={`${campaign.campaignId}-${index}`}
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