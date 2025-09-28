"use client";

import CampaignCard from "../campaigns/CampaignCard";
import BrandCampaignMobileCard from "./BrandCampaignMobileCard";
import { useRouter } from "next/navigation";
import { Campaign, CampaignType, CreatorApprovalType, OfferType } from "@/types/entities";
import { FoodOffer } from "@/types/entities/brand";
import placeholderImage from "@/assets/images/campaigns/10.jpg";

interface BrandCampaignsProps {
  foodOffers: FoodOffer[];
  brandName: string;
  brandLogo: string;
  accountId: string;
  brandId: string;
}

const transformFoodOfferToCampaign = (
  offer: FoodOffer,
  brandName: string,
  brandLogo: string,
  brandId: string,
): Campaign => {
  const startDate = new Date(offer.start_date);
  const endDate = new Date(offer.end_date);
  const timeDiff = endDate.getTime() - startDate.getTime();
  const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

  const campaignType: CampaignType = 'Delivery';
  const offerType: OfferType = 'Barter';

  return {
    campaignId: offer.campaign_id,
    brandId: brandId,
    subscriptionId: `sub_${offer.campaign_id}`,
    title: offer.offer_title,
    thumbnailUrl: placeholderImage.src,
    campaignType: campaignType,
    offerType: offerType,
    brandLogo: brandLogo,
    brandName: brandName,
    creatorApprovalType: offer.account_status === "Approved" ? "Automated" : "Manual",
    advancedVisibility: {
      duration: daysRemaining > 0 ? daysRemaining : 0,
      unit: "Days",
    },
    payments: [],
    offerDescription: offer.description,
    campaignMessage: '',
    channels: [],
    rulesAndGuidelines: '',
    audienceDefinition: 'Broad',
    potentialReach: 0,
    ageRange: { min: 18, max: 65 },
    excludedLanguages: [],
    followersTierRange: 'Any',
    influencerTags: [],
    creatorStatusFilters: [],
    voucherValue: parseFloat(offer.amount),
    voucherCurrency: 'AED',
    campaignStats: { creators: 0, impressions: 0, reach: 0, posts: 0, reviews: 0 },
    campaignDetails: { walkIn: '', barter: '', price: '', approval: '', restricted: '', date: '' },
    campaignGuidelines: [],
    campaignPlan: { planName: '', planType: '', nextBillAmount: 0, nextBillCurrency: '', nextBillDate: '', paymentDate: '', cardType: '', cardIcon: '', cardEnding: '' },
    createdAt: new Date(offer.created_at),
    updatedAt: new Date(offer.updated_at),
  };
};

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

  if (!foodOffers || foodOffers.length === 0) {
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

  const brandCampaigns = foodOffers.map((offer) =>
    transformFoodOfferToCampaign(offer, brandName, brandLogo, brandId)
  );

  return (
    <div className="py-6">
      <div className="hidden md:block">
        <div className="max-w-[1428px] py-10 mx-auto grid grid-cols-[repeat(auto-fit,340px)] gap-x-[13px] gap-y-[20px] justify-center">
          {brandCampaigns.map((campaign, index) => (
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
        {brandCampaigns.map((campaign, index) => (
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