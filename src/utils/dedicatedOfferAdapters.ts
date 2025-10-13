import { ApiDedicatedOffer, DedicatedOfferDisplay, CampaignType, OfferType } from "@/types/entities/dedicated-offer";
import { format, parseISO } from "date-fns";

export const adaptDedicatedOfferSummaryToDisplay = (
  offer: ApiDedicatedOffer,
  brandName?: string,
  brandId?: string,
  brandLogo?: string,
  brandCategory?: string
): DedicatedOfferDisplay => {
  let offerType: OfferType = "Barter";
  if (offer.amount && parseFloat(offer.amount) > 0) {
    offerType = "Paid";
  }

  const formatDate = (dateString: string) => {
    if (!dateString || dateString.startsWith('0000-00-00')) {
      return "N/A";
    }
    try {
      const date = parseISO(dateString);
      return format(date, "MMM d, yyyy");
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };

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
    offerType,
    startDate: formatDate(offer.offer_start_time),
    endDate: formatDate(offer.offer_end_time),
    duration: undefined, //  duration and durationUnit are not available in ApiDedicatedOffer
    durationUnit: undefined,
    minimum_user_count: offer.minimum_user_count ?? 0,
    offer_usage: offer.offer_usage,
    offer_users: offer.offer_users,
  };
};