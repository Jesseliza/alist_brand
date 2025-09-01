export interface CreatorHistoryOffer {
  creatorId: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  location: string;
  price: string;
  walkType: string;
  dateText: string;
  // Extended properties for overview
  status: string;
  endDate: string;
  voucherCode: string;
  redemptionStatus: string;
  claimedDate: string;
  redeemedDate: string;
  description: string;
  infoItems: {
    price: string;
    location: string;
    hours: string[];
    bookingMethod: string[];
    rewardType: string;
  };
}
