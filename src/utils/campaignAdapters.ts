import { Campaign, CampaignSummary, CampaignDisplay, TimeUnit } from "@/types/entities/campaign";
import { FoodOffer, DedicatedOffer } from "@/types/entities/brand";

export const adaptCampaignSummaryToDisplay = (summary: CampaignSummary): CampaignDisplay => {
  const startDate = new Date(summary.start_date);
  const endDate = new Date(summary.end_date);
  const timeDiff = endDate.getTime() - startDate.getTime();
  const daysDuration = Math.round(timeDiff / (1000 * 3600 * 24)) + 1;

  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const createLinkUrl = process.env.NEXT_PUBLIC_CREATE_LINK_URL;

  const thumbnailUrl =
    imageUrl && summary.banner_image
      ? `${imageUrl}/assets/uploads/foodoffers/${summary.banner_image}`
      : '/images/no_image.png';

  const copyLinkUrl = createLinkUrl
    ? `${createLinkUrl}/offerView/${summary.campaign_id}`
    : undefined;

  return {
    id: summary.id,
    campaignId: summary.campaign_id,
    title: summary.offer_title,
    vendorName: summary.venue.venue_title,
    status: summary.account_status,
    startDate: summary.start_date,
    endDate: summary.end_date,
    thumbnailUrl,
    brandLogo: null,
    brandName: summary.venue.venue_title,
    creatorApprovalType: summary.account_status === "Approved" ? "Automated" : "Manual",
    campaignType: 'Delivery',
    offerType: summary.venue.category?.category ?? 'N/A',
    duration: daysDuration > 0 ? daysDuration : 0,
    durationUnit: 'Days',
    copyLinkUrl,
    is_dedicated: summary.is_dedicated,
  };
};

export const adaptCampaignToDisplay = (campaign: Campaign): CampaignDisplay => {
  // NOTE: The Campaign type does not have a status field, but other related objects do.
  // We are assuming the detailed campaign object from the API also contains an `account_status`
  // property to align with the CampaignDisplay type.
  const campaignWithStatus = campaign as Campaign & { account_status: string };

  let duration;
  let durationUnit: TimeUnit | undefined;

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
    thumbnailUrl: campaign.thumbnailUrl || '/images/no_image.png',
    brandLogo: campaign.brandLogo,
    brandName: campaign.brandName,
    creatorApprovalType: campaign.creatorApprovalType,
    campaignType: campaign.campaignType,
    offerType: campaign.offerType,
    startDate: campaign.start_date || campaign.createdAt.toString(),
    endDate: campaign.end_date,
    duration: duration,
    durationUnit: durationUnit,
    is_dedicated: campaign.is_dedicated ?? 0,
  };
};

export const adaptFoodOfferToDisplay = (
  offer: FoodOffer,
  brandName: string,
  brandId: string,
  brandLogo: string,
  brandCategory?: string
): CampaignDisplay => {
  const startDate = new Date(offer.start_date);
  const endDate = new Date(offer.end_date);
  const timeDiff = endDate.getTime() - startDate.getTime();
  const daysDuration = Math.round(timeDiff / (1000 * 3600 * 24)) + 1;

  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const thumbnailUrl =
    imageUrl && offer.banner_image
      ? `${imageUrl}/assets/uploads/foodoffers/${offer.banner_image}`
      : "/images/no_image.png";

  return {
    id: offer.id,
    campaignId: offer.campaign_id,
    title: offer.offer_title,
    vendorName: brandName,
    status: offer.account_status,
    thumbnailUrl,
    brandLogo: brandLogo,
    brandName: brandName,
    creatorApprovalType:
      offer.account_status === "Approved" ? "Automated" : "Manual",
    campaignType: "Delivery",
    offerType: brandCategory ?? "N/A",
    startDate: offer.start_date,
    endDate: offer.end_date,
    duration: daysDuration > 0 ? daysDuration : 0,
    durationUnit: "Days",
    is_dedicated: offer.is_dedicated,
  };
};

export const adaptDedicatedOfferToDisplay = (
  offer: DedicatedOffer,
  brandName: string,
  brandId: string,
  brandLogo: string,
  brandCategory?: string
): CampaignDisplay => {
  const startDate = new Date(offer.offer_date);
  const endDate = new Date(offer.offer_date);
  const timeDiff = endDate.getTime() - startDate.getTime();
  const daysDuration = Math.round(timeDiff / (1000 * 3600 * 24)) + 1;

  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const thumbnailUrl =
    imageUrl && offer.banner_image
      ? `${imageUrl}/assets/uploads/foodoffers/${offer.banner_image}`
      : "/images/no_image.png";

  const status = offer.offer_status === 1 ? "Approved" : "Pending";

  return {
    id: offer.id,
    campaignId: offer.id,
    title: offer.offer_title,
    vendorName: brandName,
    status: status,
    thumbnailUrl,
    brandLogo: brandLogo,
    brandName: brandName,
    creatorApprovalType:
      status === "Approved" ? "Automated" : "Manual",
    campaignType: "Dedicated",
    offerType: brandCategory ?? "N/A",
    startDate: offer.offer_date,
    endDate: offer.offer_date,
    duration: daysDuration > 0 ? daysDuration : 0,
    durationUnit: "Days",
    is_dedicated: 1,
  };
};