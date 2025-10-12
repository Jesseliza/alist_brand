import { DedicatedOffer, DedicatedOfferSummary, DedicatedOfferDisplay, TimeUnit } from "@/types/entities/dedicated-offer";
import { FoodOffer } from "@/types/entities/brand";

export const adaptDedicatedOfferSummaryToDisplay = (summary: DedicatedOfferSummary): DedicatedOfferDisplay => {
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
    ? `${createLinkUrl}/offerView/${summary.dedicated-offer_id}`
    : undefined;

  return {
    id: summary.id,
    dedicated-offerId: summary.dedicated-offer_id,
    title: summary.offer_title,
    vendorName: summary.venue.venue_title,
    status: summary.account_status,
    startDate: summary.start_date,
    endDate: summary.end_date,
    thumbnailUrl,
    brandLogo: null,
    brandName: summary.venue.venue_title,
    creatorApprovalType: summary.account_status === "Approved" ? "Automated" : "Manual",
    dedicated-offerType: 'Delivery',
    offerType: summary.venue.category?.category ?? 'N/A',
    duration: daysDuration > 0 ? daysDuration : 0,
    durationUnit: 'Days',
    copyLinkUrl,
    is_dedicated: summary.is_dedicated,
  };
};

export const adaptDedicatedOfferToDisplay = (dedicated-offer: DedicatedOffer): DedicatedOfferDisplay => {
  // NOTE: The DedicatedOffer type does not have a status field, but other related objects do.
  // We are assuming the detailed dedicated-offer object from the API also contains an `account_status`
  // property to align with the DedicatedOfferDisplay type.
  const dedicated-offerWithStatus = dedicated-offer as DedicatedOffer & { account_status: string };

  let duration;
  let durationUnit: TimeUnit | undefined;

  if (dedicated-offer.start_date && dedicated-offer.end_date) {
    const startDate = new Date(dedicated-offer.start_date);
    const endDate = new Date(dedicated-offer.end_date);
    const timeDiff = endDate.getTime() - startDate.getTime();
    const daysDuration = Math.round(timeDiff / (1000 * 3600 * 24)) + 1;
    duration = daysDuration > 0 ? daysDuration : 0;
    durationUnit = 'Days';
  } else {
    duration = dedicated-offer.advancedVisibility?.duration;
    durationUnit = dedicated-offer.advancedVisibility?.unit;
  }

  return {
    id: dedicated-offer.dedicated-offerId,
    dedicated-offerId: dedicated-offer.dedicated-offerId,
    title: dedicated-offer.title,
    vendorName: dedicated-offer.brandName,
    status: dedicated-offerWithStatus.account_status || 'Pending', // Default to Pending if not available
    thumbnailUrl: dedicated-offer.thumbnailUrl || '/images/no_image.png',
    brandLogo: dedicated-offer.brandLogo,
    brandName: dedicated-offer.brandName,
    creatorApprovalType: dedicated-offer.creatorApprovalType,
    dedicated-offerType: dedicated-offer.dedicated-offerType,
    offerType: dedicated-offer.offerType,
    startDate: dedicated-offer.start_date || dedicated-offer.createdAt.toString(),
    endDate: dedicated-offer.end_date,
    duration: duration,
    durationUnit: durationUnit,
    is_dedicated: dedicated-offer.is_dedicated ?? 0,
  };
};

export const adaptFoodOfferToDisplay = (
  offer: FoodOffer,
  brandName: string,
  brandId: string,
  brandLogo: string,
  brandCategory?: string
): DedicatedOfferDisplay => {
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
    dedicated-offerId: offer.dedicated-offer_id,
    title: offer.offer_title,
    vendorName: brandName,
    status: offer.account_status,
    thumbnailUrl,
    brandLogo: brandLogo,
    brandName: brandName,
    creatorApprovalType:
      offer.account_status === "Approved" ? "Automated" : "Manual",
    dedicated-offerType: "Delivery",
    offerType: brandCategory ?? "N/A",
    startDate: offer.start_date,
    endDate: offer.end_date,
    duration: daysDuration > 0 ? daysDuration : 0,
    durationUnit: "Days",
    is_dedicated: offer.is_dedicated,
  };
};