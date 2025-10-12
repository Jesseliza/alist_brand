import { ApiDedicatedOffer, DedicatedOfferDisplay, CampaignType, OfferType, TimeUnit } from "@/types/entities/dedicated-offer";

export const adaptDedicatedOfferSummaryToDisplay = (
  offer: ApiDedicatedOffer
): DedicatedOfferDisplay => {
  const getStatus = (status: number) => {
    switch (status) {
      case 1:
        return "Approved";
      case 2:
        return "Pending";
      case 3:
        return "Rejected";
      default:
        return "Draft";
    }
  };

  return {
    ...offer,
    id: offer.id,
    title: offer.offer_title,
    vendorName: offer.venue.venue_title,
    status: getStatus(offer.offer_status),
    thumbnailUrl: offer.banner_image
      ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/assets/uploads/foodoffers/${offer.banner_image}`
      : "/images/no_image.png",
    brandLogo: null,
    brandName: offer.venue.venue_title,
    is_dedicated: offer.is_offer_dummy === 0 ? 1 : 0,
    startDate: offer.offer_start_time,
    endDate: offer.offer_end_time,
    campaignType: "WalkIn" as CampaignType,
    offerType: "Barter" as OfferType,
    duration: 0,
    durationUnit: "Days" as TimeUnit,
    copyLinkUrl: "",
    account_status: "",
  };
};