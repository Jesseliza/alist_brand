import { ApiDedicatedOffer, DedicatedOfferDisplay, CampaignType } from "@/types/entities/dedicated-offer";

export const adaptDedicatedOfferSummaryToDisplay = (
  offer: ApiDedicatedOffer
): DedicatedOfferDisplay => {

  return {
    ...offer,
    id: offer.id,
    title: offer.offer_title,
    vendorName: offer.venue.venue_title,
    thumbnailUrl: offer.banner_image
      ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/assets/uploads/foodoffers/${offer.banner_image}`
      : "/images/no_image.png",
    brandLogo: null,
    brandName: offer.venue.venue_title,
    offerDate: offer.offer_date,
    campaignType: "WalkIn" as CampaignType,
    category: offer.venue.category.category,
    is_dedicated: offer.is_dedicated,
  };
};