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
  food_offer_user_count: number;
  food_offer_user_with_user_count: number;
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
  description?: string;
  phone_campaign_message?: string;
  rule_1?: string;
  rule_2?: string;
  rule_3?: string;
  reviews_count?: number;
  banner_image?: string;
  amount?: number;
  venue?: {
    id: string;
    venue_title: string;
    category?: {
      category?: string;
    };
  };
  rejectReason?:string;

  dedicated_offer?: {
    offer_users: OfferUser[];
  };

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
};

// Type for a user associated with an offer
export type OfferUser = {
  id: number | string;
  user: {
    id: number | string;
    profile_picture: string | null;
    name: string;
    instagram_url: string | null;
    instagram_followers: number | null;
    credibility: string | null;
  };
  status: number;
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
  campaignId?: string;
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

// Campaign Review Post Types
export interface InstagramFollowerRange {
  followers: string;
  reach: number;
}

export interface CampaignReviewPostUser {
  name: string;
  instagram_url: string | null;
  instagram_followers: number | null;
  profile_picture: string | null;
  instagram_follower_range: InstagramFollowerRange | null;
}

export interface CampaignReviewPost {
  id: number;
  rating: number; // to be used as reach
  screenshot1: string | null;
  screenshot2: string | null;
  screenshot3: string | null;
  screenshot4: string | null;
  comments: string;
  user: CampaignReviewPostUser;
}

export interface CampaignReviewPostsResponse {
  data: {
    data: CampaignReviewPost[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface GetCampaignReviewPostsPayload {
  id: string;
  page?: number;
  per_page?: number;
}

export interface GetCampaignReviewPostsAction {
  type: string;
  payload: GetCampaignReviewPostsPayload;
}

// Campaign Review Types
export interface CampaignReviewUser {
  id: number;
  name: string;
  profile_picture: string | null;
}

export interface CampaignReview {
  id: number;
  offer_id: number;
  comments: string;
  rating: number;
  approve_status: number;
  user_id: number;
  created_at: string;
  user: CampaignReviewUser;
}

export interface CampaignReviewsResponse {
  data: {
    data: CampaignReview[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface GetCampaignReviewsPayload {
  id: string;
  page?: number;
  per_page?: number;
}

export interface GetCampaignReviewsAction {
  type: string;
  payload: GetCampaignReviewsPayload;
}

// Voucher Code Types
export interface VoucherUser {
  id: number;
  name: string;
}

export interface VoucherCode {
  id: number;
  user_id: number | null;
  offer_id: number;
  offer_code: string;
  offer_date: string;
  tier: number;
  block: unknown | null;
  created_at: string;
  updated_at: string;
  redem_at: string | null;
  used_at: string | null;
  user: VoucherUser | null;
}

export interface VoucherCodesApiResponse {
  data: {
    data: VoucherCode[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface GetVoucherCodesPayload {
  id: string;
  page?: number;
  per_page?: number;
}

export interface GetVoucherCodesAction {
  type: string;
  payload: GetVoucherCodesPayload;
}

// Campaign Availability Types
export interface CampaignAvailability {
  id: number;
  user_id: number | null;
  offer_id: number;
  offer_code: string;
  offer_date: string;
  tier: number;
  block: number;
  created_at: string;
  updated_at: string;
  redem_at: string;
  used_at: string | null;
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
}

export interface CampaignAvailabilityApiResponse {
  success: boolean;
  message: string;
  data: CampaignAvailability[];
}

export interface GetCampaignAvailabilityPayload {
  campaign_id: string;
  year_month: string;
}

export interface GetCampaignAvailabilityAction {
  type: string;
  payload: GetCampaignAvailabilityPayload;
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
  bulkDeleteLoading: boolean;
  bulkDeleteError: string | null;
  dedicatedPageStatusLoading: boolean;
  statusUpdateLoading: boolean;
  reviewPosts: CampaignReviewPost[];
  reviewPostsLoading: boolean;
  reviewPostsError: string | null;
  reviewPostsPagination: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  } | null;
  reviews: CampaignReview[];
  reviewsLoading: boolean;
  reviewsError: string | null;
  reviewsPagination: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  } | null;
  voucherCodes: VoucherCode[];
  voucherCodesLoading: boolean;
  voucherCodesError: string | null;
  voucherCodesPagination: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  } | null;
  campaignAvailability: CampaignAvailability[];
  campaignAvailabilityLoading: boolean;
  campaignAvailabilityError: string | null;
}

// Unified type for display components
export interface CampaignDisplay {
  id: number | string;
  campaignId: string;
  title: string;
  vendorName: string;
  status: string;
  thumbnailUrl?: string;
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
  banner_image?: string;
  category?: string;
}
