import { Campaign, CampaignSummary, CampaignDisplay } from "@/types/entities/campaign";
import { FoodOffer } from "@/types/entities/brand";
import placeholderImage from "@/assets/images/campaigns/10.jpg";

export const adaptCampaignSummaryToDisplay = (summary: CampaignSummary): CampaignDisplay => {
  const startDate = new Date(summary.start_date);
  const endDate = new Date(summary.end_date);
  const timeDiff = endDate.getTime() - startDate.getTime();
  const daysDuration = Math.round(timeDiff / (1000 * 3600 * 24)) + 1;

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
    duration: daysDuration > 0 ? daysDuration : 0,
    durationUnit: 'Days',
  };
};

export const adaptCampaignToDisplay = (campaign: Campaign): CampaignDisplay => {
  // NOTE: The Campaign type does not have a status field, but other related objects do.
  // We are assuming the detailed campaign object from the API also contains an `account_status`
  // property to align with the CampaignDisplay type.
  const campaignWithStatus = campaign as Campaign & { account_status: string };

  let duration;
  let durationUnit;

  if (campaign.start_date && campaign.end_date) {
    const startDate = new Date(campaign.start_date);
    const endDate = new Date(campaign.end_date);
    const timeDiff = endDate.getTime() - startDate.getTime();
    const daysDuration = Math.round(timeDiff / (1000 * 3600 * 24)) + 1;
    duration = daysDuration > 0 ? daysDuration : 0;
    durationUnit = 'Days';
  } else {
    duration = campaign.advancedVisibility?.duration;
    durationUnit = campaign.advancedVisibility?.unit;
  }

  return {
    id: campaign.campaignId,
    campaignId: campaign.campaignId,
    title: campaign.title,
    vendorName: campaign.brandName,
    status: campaignWithStatus.account_status || 'Pending', // Default to Pending if not available
    thumbnailUrl: campaign.thumbnailUrl,
    brandLogo: campaign.brandLogo,
    brandName: campaign.brandName,
    creatorApprovalType: campaign.creatorApprovalType,
    campaignType: campaign.campaignType,
    offerType: campaign.offerType,
    startDate: campaign.start_date || campaign.createdAt.toString(),
    endDate: campaign.end_date,
    duration: duration,
    durationUnit: durationUnit,
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
  const daysDuration = Math.round(timeDiff / (1000 * 3600 * 24)) + 1;

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
    duration: daysDuration > 0 ? daysDuration : 0,
    durationUnit: 'Days',
  };
};