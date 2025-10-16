"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import DedicatedOfferCard from "../dedicated-offers/DedicatedOfferCard";
import { ApiDedicatedOffer } from "@/types/entities/dedicated-offer";
import { adaptDedicatedOfferSummaryToDisplay } from "@/utils/dedicatedOfferAdapters";

interface BrandDedicatedOffersProps {
  dedicatedOffers: ApiDedicatedOffer[];
  brandName: string;
  brandLogo: string;
  brandId: string;
  brandCategory?: string;
}

export default function BrandDedicatedOffers({
  dedicatedOffers,
  brandName,
  brandLogo,
  brandId,
  brandCategory,
}: BrandDedicatedOffersProps) {
  const router = useRouter();

  const handleDedicatedOfferClick = (offerId: string | number) => {
    router.push(`/businesses/dedicated-offers/${offerId}?from=brand&brandId=${brandId}`);
  };

  const displayDedicatedOffers = useMemo(
    () =>
      dedicatedOffers.map((offer) =>
        adaptDedicatedOfferSummaryToDisplay(
          offer,
          brandName,
          brandId,
          brandLogo,
          brandCategory
        )
      ),
    [dedicatedOffers, brandName, brandId, brandLogo, brandCategory]
  );

  if (!displayDedicatedOffers || displayDedicatedOffers.length === 0) {
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
          {displayDedicatedOffers.map((offer, index) => (
            <div
              key={`${offer.id}-${index}`}
              onClick={() => handleDedicatedOfferClick(offer.id)}
              className="cursor-pointer"
            >
              <DedicatedOfferCard
                dedicatedOffer={offer}
                checked={false}
                onCheckboxChange={() => {}}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-4">
        {displayDedicatedOffers.map((offer, index) => (
          <div
            key={`${offer.id}-${index}`}
            onClick={() => handleDedicatedOfferClick(offer.id)}
            className="cursor-pointer"
          >
            <DedicatedOfferCard
              dedicatedOffer={offer}
              checked={false}
              onCheckboxChange={() => {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
}