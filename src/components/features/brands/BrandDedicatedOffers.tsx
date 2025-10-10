"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import DedicatedOfferCard from "../campaigns/DedicatedOfferCard";
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

  const handleOfferClick = (offerId: string | number) => {
    router.push(
      `/businesses/dedicated-offers/${offerId}?source=brand&brandId=${brandId}`
    );
  };

  const displayOffers = useMemo(
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

  if (!displayOffers || displayOffers.length === 0) {
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
          {displayOffers.map((offer, index) => (
            <div
              key={`${offer.campaignId}-${index}`}
              onClick={() => handleOfferClick(offer.id)}
              className="cursor-pointer"
            >
              <DedicatedOfferCard campaign={offer} />
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-1.25">
        {displayOffers.map((offer, index) => (
          <div
            key={`${offer.campaignId}-${index}`}
            onClick={() => handleOfferClick(offer.id)}
            className="cursor-pointer"
          >
            <DedicatedOfferCard campaign={offer} />
          </div>
        ))}
      </div>
    </div>
  );
}