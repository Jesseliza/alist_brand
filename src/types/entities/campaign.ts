import { CampaignPost } from './campaignPost';

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
  config: Record<string, unknown>; // Flexible config object
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

// Campaign post type - moved to ./campaignPost.ts to avoid naming conflict

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
  account_status?: string;
  offer_status?: string;
  is_dedicated?: number;
  start_date?: string;
  end_date?: string;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
};

// Simplified campaign type for listings from API
export interface CampaignSummary {
  id: number;
  offer_title: string;
  account_status: string;
  campaign_id: string;
  start_date: string;
  end_date: string;
  banner_image: string;
  is_dedicated: number;
  venue: {
    venue_title: string;
    category?: {
      category?: string;
    };
  };
}

// API Payloads
export interface GetCampaignsPayload {
  search?: string;
  page?: number;
  per_page?: number;
}

export interface UpdateCampaignStatusPayload {
  id: string;
  status: 'Approved' | 'Rejected';
  rejectReason?: string;
}

export interface GetCampaignDetailsPayload {
  id: string;
}

export interface UpdateDedicatedPageStatusPayload {
  id: string;
  status: 0 | 1;
  rejectReason?: string;
}

// API Responses
export interface CampaignsApiResponse {
  data: {
    venues: {
      data: CampaignSummary[];
      current_page: number;
      last_page: number;
      per_page: number;
      total: number;
    };
  };
}

export interface CampaignDetailsApiResponse {
  data: {
    data: Campaign;
  };
}


// Redux Actions
export interface GetCampaignsAction {
  type: string;
  payload: GetCampaignsPayload;
}

export interface UpdateCampaignStatusAction {
  type: string;
  payload: UpdateCampaignStatusPayload;
}

export interface GetCampaignDetailsAction {
  type: string;
  payload: GetCampaignDetailsPayload;
}

export interface UpdateDedicatedPageStatusAction {
  type: string;
  payload: UpdateDedicatedPageStatusPayload;
}

// Redux State
export interface CampaignsState {
  campaigns: CampaignSummary[];
  campaign: Campaign | null;
  loading: boolean;
  error: string | null;
  pagination: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  } | null;
}

// Unified type for display components
export interface CampaignDisplay {
  id: number | string;
  campaignId: string;
  title: string;
  vendorName: string;
  status: string;
  thumbnailUrl?: string;
  banner_image?: string;
  brandLogo?: string | null;
  brandName?: string;
  creatorApprovalType?: 'Automated' | 'Manual';
  campaignType?: 'WalkIn' | 'Delivery' | 'Online' | 'Exclusive';
  offerType?: string;
  startDate?: string;
  endDate?: string;
  duration?: number;
  durationUnit?: 'Days' | 'Hours';
  copyLinkUrl?: string;
  is_dedicated: number;
}