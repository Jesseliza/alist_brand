import { CampaignSummary, CampaignDisplay } from "@/types/entities/campaign";
import { FoodOffer } from "@/types/entities/brand";
import placeholderImage from "@/assets/images/campaigns/10.jpg";

export const adaptCampaignSummaryToDisplay = (summary: CampaignSummary): CampaignDisplay => {
  return {
    id: summary.id,
    campaignId: summary.campaign_id,
    title: summary.offer_title,
    vendorName: summary.venue.venue_title,
    status: summary.account_status,
    startDate: summary.start_date,
    endDate: summary.end_date,
    thumbnailUrl: placeholderImage.src,
    brandLogo: null,
    brandName: summary.venue.venue_title,
    creatorApprovalType: summary.account_status === "Approved" ? "Automated" : "Manual",
    campaignType: 'Delivery',
    offerType: 'Barter',
    duration: 0,
    durationUnit: 'Days',
  };
};

export const adaptFoodOfferToDisplay = (
  offer: FoodOffer,
  brandName: string,
  brandId: string,
  brandLogo: string
): CampaignDisplay => {
  const startDate = new Date(offer.start_date);
  const endDate = new Date(offer.end_date);
  const timeDiff = endDate.getTime() - startDate.getTime();
  const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return {
    id: offer.id,
    campaignId: offer.campaign_id,
    title: offer.offer_title,
    vendorName: brandName,
    status: offer.account_status,
    thumbnailUrl: placeholderImage.src,
    brandLogo: brandLogo,
    brandName: brandName,
    creatorApprovalType: offer.account_status === "Approved" ? "Automated" : "Manual",
    campaignType: 'Delivery',
    offerType: 'Barter',
    startDate: offer.start_date,
    endDate: offer.end_date,
    duration: daysRemaining > 0 ? daysRemaining : 0,
    durationUnit: 'Days',
  };
};