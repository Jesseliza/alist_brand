import { ApiDedicatedOffer, DedicatedOfferDisplay, CampaignType } from "@/types/entities/dedicated-offer";

export const adaptDedicatedOfferSummaryToDisplay = (
  offer: ApiDedicatedOffer,
  brandName?: string,
  brandId?: string,
  brandLogo?: string,
  brandCategory?: string
): DedicatedOfferDisplay => {
  return {
    id: offer.id,
    title: offer.offer_title,
    vendorName: offer.venue?.venue_title || brandName || "",
    thumbnailUrl: offer.banner_image
      ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/assets/uploads/foodoffers/${offer.banner_image}`
      : "/images/no_image.png",
    brandLogo: brandLogo || null,
    brandName: offer.venue?.venue_title || brandName || "",
    offerDate: offer.offer_date,
    campaignType: "WalkIn" as CampaignType,
    category: offer.venue?.category?.category || brandCategory || "Unknown",
    is_dedicated: 1, // Assuming it's always a dedicated offer in this context
  };
};