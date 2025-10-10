"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import CampaignCard from "../campaigns/CampaignCard";
import BrandCampaignMobileCard from "./BrandCampaignMobileCard";
import { DedicatedOffer } from "@/types/entities/brand";
import { adaptDedicatedOfferToDisplay } from "@/utils/campaignAdapters";

interface BrandDedicatedOffersProps {
  dedicatedOffers: DedicatedOffer[];
  brandName: string;
  brandLogo: string;
  brandId: string;
  onRemoveCampaign?: (id: string) => void;
  brandCategory?: string;
}

export default function BrandDedicatedOffers({
  dedicatedOffers,
  brandName,
  brandLogo,
  brandId,
  onRemoveCampaign,
  brandCategory,
}: BrandDedicatedOffersProps) {
  const router = useRouter();

  const handleCampaignClick = (campaignId: string | number) => {
    router.push(
      `/businesses/campaigns/${campaignId}?source=brand&brandId=${brandId}`
    );
  };

  const displayCampaigns = useMemo(
    () =>
      dedicatedOffers.map((offer) =>
        adaptDedicatedOfferToDisplay(
          offer,
          brandName,
          brandId,
          brandLogo,
          brandCategory
        )
      ),
    [dedicatedOffers, brandName, brandId, brandLogo, brandCategory]
  );

  if (!displayCampaigns || displayCampaigns.length === 0) {
    return (
      <div className="py-6">
        <div className="max-w-[1428px] mx-auto">
          <div className="bg-white rounded-lg shadow-md flex items-center justify-center min-h-[200px]">
            <p className="text-gray-500">No dedicated offers found for this brand.</p>
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
              onClick={() => handleCampaignClick(campaign.id)}
              className="cursor-pointer"
            >
              <CampaignCard
                campaign={campaign}
                onRemove={() =>
                  onRemoveCampaign && onRemoveCampaign(campaign.id.toString())
                }
                checked={false}
                onCheckboxChange={() => {}}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-1.25">
        {displayCampaigns.map((campaign, index) => (
          <div
            key={`${campaign.campaignId}-${index}`}
            onClick={() => handleCampaignClick(campaign.id)}
            className="cursor-pointer"
          >
            <BrandCampaignMobileCard
              campaign={campaign}
              onRemove={() =>
                onRemoveCampaign && onRemoveCampaign(campaign.id.toString())
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}