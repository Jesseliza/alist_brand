import { DedicatedOfferPost } from './dedicated-offerPost';

// DedicatedOffer type enums
export type DedicatedOfferType = "WalkIn" | "Delivery" | "Online" | "Exclusive";
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

// DedicatedOffer stats type
export type DedicatedOfferStats = {
  creators: number | string;
  impressions: number | string;
  reach: number | string;
  posts: number | string;
  reviews: number | string;
};

// DedicatedOffer details type
export type DedicatedOfferDetails = {
  walkIn: string;
  barter: string;
  price: string;
  approval: string;
  restricted: string;
  date: string;
};

// DedicatedOffer guideline type
export type DedicatedOfferGuideline = {
  platform: string;
  platformIcon: string;
  requirements: string;
  rules: {
    label: string;
    value: string;
    highlight?: string;
  }[];
};

// DedicatedOffer plan type
export type DedicatedOfferPlan = {
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

// DedicatedOffer post type - moved to ./dedicated-offerPost.ts to avoid naming conflict

// Main DedicatedOffer type - Expanded version
export type DedicatedOffer = {
  // Primary identifiers
  dedicated-offerId: string; // UUID / string
  brandId: string; // UUID / string (FK)
  subscriptionId: string; // UUID / string (FK)

  // Basic dedicated-offer info
  title: string;
  thumbnailUrl: string;
  dedicated-offerType: DedicatedOfferType;
  offerType: OfferType;

  // Brand information (derived from brandId)
  brandLogo: string;
  brandName: string;

  // Payment details
  payments: PaymentArrangement[];

  // DedicatedOffer content
  offerDescription: string;
  advancedVisibility: AdvancedVisibility;
  dedicated-offerMessage: string;

  // Channels configuration
  channels: ChannelConfig[];

  // DedicatedOffer rules
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

  // DedicatedOffer statistics
  dedicated-offerStats: DedicatedOfferStats;

  // DedicatedOffer details
  dedicated-offerDetails: DedicatedOfferDetails;

  // DedicatedOffer guidelines
  dedicated-offerGuidelines: DedicatedOfferGuideline[];

  // DedicatedOffer plan
  dedicated-offerPlan: DedicatedOfferPlan;

  // DedicatedOffer posts
  dedicated-offerPosts?: DedicatedOfferPost[];
  account_status?: string;
  offer_status?: string;
  is_dedicated?: number;
  start_date?: string;
  end_date?: string;
  description?: string;
  phone_dedicated-offer_message?: string;
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

// Simplified dedicated-offer type for listings from API
export interface DedicatedOfferSummary {
  id: number;
  offer_title: string;
  account_status: string;
  dedicated-offer_id: string;
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
export interface GetDedicatedOffersPayload {
  search?: string;
  page?: number;
  per_page?: number;
}

export interface UpdateDedicatedOfferStatusPayload {
  id: string;
  status: 'Approved' | 'Rejected';
  rejectReason?: string;
}

export interface GetDedicatedOfferDetailsPayload {
  id: string;
}

export interface UpdateDedicatedPageStatusPayload {
  id: string;
  status: 0 | 1;
  rejectReason?: string;
  dedicated-offerId?: string;
}

// API Responses
export interface DedicatedOffersApiResponse {
  data: {
    venues: {
      data: DedicatedOfferSummary[];
      current_page: number;
      last_page: number;
      per_page: number;
      total: number;
    };
  };
}

export interface DedicatedOfferDetailsApiResponse {
  data: {
    data: DedicatedOffer;
  };
}


// Redux Actions
export interface GetDedicatedOffersAction {
  type: string;
  payload: GetDedicatedOffersPayload;
}

export interface UpdateDedicatedOfferStatusAction {
  type: string;
  payload: UpdateDedicatedOfferStatusPayload;
}

export interface GetDedicatedOfferDetailsAction {
  type: string;
  payload: GetDedicatedOfferDetailsPayload;
}

export interface UpdateDedicatedPageStatusAction {
  type: string;
  payload: UpdateDedicatedPageStatusPayload;
}

// DedicatedOffer Review Post Types
export interface InstagramFollowerRange {
  followers: string;
  reach: number;
}

export interface DedicatedOfferReviewPostUser {
  name: string;
  instagram_url: string | null;
  instagram_followers: number | null;
  profile_picture: string | null;
  instagram_follower_range: InstagramFollowerRange | null;
}

export interface DedicatedOfferReviewPost {
  id: number;
  rating: number; // to be used as reach
  screenshot1: string | null;
  screenshot2: string | null;
  screenshot3: string | null;
  screenshot4: string | null;
  comments: string;
  user: DedicatedOfferReviewPostUser;
}

export interface DedicatedOfferReviewPostsResponse {
  data: {
    data: DedicatedOfferReviewPost[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface GetDedicatedOfferReviewPostsPayload {
  id: string;
  page?: number;
  per_page?: number;
}

export interface GetDedicatedOfferReviewPostsAction {
  type: string;
  payload: GetDedicatedOfferReviewPostsPayload;
}

// DedicatedOffer Review Types
export interface DedicatedOfferReviewUser {
  id: number;
  name: string;
  profile_picture: string | null;
}

export interface DedicatedOfferReview {
  id: number;
  offer_id: number;
  comments: string;
  rating: number;
  approve_status: number;
  user_id: number;
  created_at: string;
  user: DedicatedOfferReviewUser;
}

export interface DedicatedOfferReviewsResponse {
  data: {
    data: DedicatedOfferReview[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface GetDedicatedOfferReviewsPayload {
  id: string;
  page?: number;
  per_page?: number;
}

export interface GetDedicatedOfferReviewsAction {
  type: string;
  payload: GetDedicatedOfferReviewsPayload;
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

// DedicatedOffer Availability Types
export interface DedicatedOfferAvailability {
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

export interface DedicatedOfferAvailabilityApiResponse {
  success: boolean;
  message: string;
  data: DedicatedOfferAvailability[];
}

export interface GetDedicatedOfferAvailabilityPayload {
  dedicated-offer_id: string;
  year_month: string;
}

export interface GetDedicatedOfferAvailabilityAction {
  type: string;
  payload: GetDedicatedOfferAvailabilityPayload;
}

// Redux State
export interface DedicatedOffersState {
  dedicated-offers: DedicatedOfferSummary[];
  dedicated-offer: DedicatedOffer | null;
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
  reviewPosts: DedicatedOfferReviewPost[];
  reviewPostsLoading: boolean;
  reviewPostsError: string | null;
  reviewPostsPagination: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  } | null;
  reviews: DedicatedOfferReview[];
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
  dedicated-offerAvailability: DedicatedOfferAvailability[];
  dedicated-offerAvailabilityLoading: boolean;
  dedicated-offerAvailabilityError: string | null;
}

// Unified type for display components
export interface DedicatedOfferDisplay {
  id: number | string;
  dedicated-offerId: string;
  title: string;
  vendorName: string;
  status: string;
  thumbnailUrl?: string;
  brandLogo?: string | null;
  brandName?: string;
  creatorApprovalType?: 'Automated' | 'Manual';
  dedicated-offerType?: 'WalkIn' | 'Delivery' | 'Online' | 'Exclusive';
  offerType?: string;
  startDate?: string;
  endDate?: string;
  duration?: number;
  durationUnit?: 'Days' | 'Hours';
  copyLinkUrl?: string;
  is_dedicated: number;
}
