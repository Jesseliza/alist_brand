// Campaign type enums
export type CampaignType = "WalkIn" | "Delivery" | "Online" | "Exclusive";
export type OfferType = "Barter" | "Paid" | "BarterAndPaid";
export type TimeUnit = "Days" | "Hours";
export type ChannelType =
  | "InstagramStories"
  | "GoogleReviews"
  | "InstagramPosts"
  | "TikTokVideos"
  | "YouTubeVideos"
  | "BlogPosts";
export type AudienceDefinition = "Specific" | "Broad";
export type CreatorApprovalType = "Automated" | "Manual";
export type CreatorStatusFilter =
  | "InstagramVerified"
  | "TikTokVerified"
  | "YouTubeVerified"
  | "SnapchatVerified";

// Payment arrangement type
export type PaymentArrangement = {
  arrangement: OfferType;
  currency: string;
  amount: number;
};

// Channel configuration type
export type ChannelConfig = {
  type: ChannelType;
  config: Record<string, any>; // Flexible config object
  url: string;
};

// Age range type
export type AgeRange = {
  min: number;
  max: number;
};

// Followers tier range type (can be string or object)
export type FollowersTierRange = string | { min: number; max: number };

// Advanced visibility type
export type AdvancedVisibility = {
  duration: number;
  unit: TimeUnit;
};

// Campaign stats type
export type CampaignStats = {
  creators: number | string;
  impressions: number | string;
  reach: number | string;
  posts: number | string;
  reviews: number | string;
};

// Campaign details type
export type CampaignDetails = {
  walkIn: string;
  barter: string;
  price: string;
  approval: string;
  restricted: string;
  date: string;
};

// Campaign guideline type
export type CampaignGuideline = {
  platform: string;
  platformIcon: string;
  requirements: string;
  rules: {
    label: string;
    value: string;
    highlight?: string;
  }[];
};

// Campaign plan type
export type CampaignPlan = {
  planName: string;
  planType: string;
  nextBillAmount: number;
  nextBillCurrency: string;
  nextBillDate: string;
  paymentDate: string;
  cardType: string;
  cardIcon: string;
  cardEnding: string;
};

// Campaign post type
export type CampaignPost = {
  postId: string;
  creatorId: string; // Foreign key to Creator
  postImages: string[];
};

// Main Campaign type - Expanded version
export type Campaign = {
  // Primary identifiers
  campaignId: string; // UUID / string
  brandId: string; // UUID / string (FK)
  subscriptionId: string; // UUID / string (FK)

  // Basic campaign info
  title: string;
  thumbnailUrl: string;
  campaignType: CampaignType;
  offerType: OfferType;

  // Brand information (derived from brandId)
  brandLogo: string;
  brandName: string;

  // Payment details
  payments: PaymentArrangement[];

  // Campaign content
  offerDescription: string;
  advancedVisibility: AdvancedVisibility;
  campaignMessage: string;

  // Channels configuration
  channels: ChannelConfig[];

  // Campaign rules
  rulesAndGuidelines: string;

  // Audience targeting
  audienceDefinition: AudienceDefinition;
  potentialReach: number;
  ageRange: AgeRange;
  excludedLanguages: string[];
  followersTierRange: FollowersTierRange;
  influencerTags: string[];
  creatorStatusFilters: CreatorStatusFilter[];

  // Creator approval
  creatorApprovalType: CreatorApprovalType;

  // Voucher details
  voucherValue: number;
  voucherCurrency: string;

  // Campaign statistics
  campaignStats: CampaignStats;

  // Campaign details
  campaignDetails: CampaignDetails;

  // Campaign guidelines
  campaignGuidelines: CampaignGuideline[];

  // Campaign plan
  campaignPlan: CampaignPlan;

  // Campaign posts
  campaignPosts?: CampaignPost[];

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
};
