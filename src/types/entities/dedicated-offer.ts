export type CampaignType = "WalkIn" | "Delivery" | "Online" | "Exclusive";
export type OfferType = "Barter" | "Paid" | "BarterAndPaid";
export type TimeUnit = "Days" | "Hours";

export interface Venue {
  id: number;
  account_id: number | null;
  venue_title: string;
  company_name: string | null;
  venue_url: string | null;
  venu_code: number;
  venue_review_url: string;
  venue_instagram_url: string;
  venue_tiktok_url: string;
  venu_code_url: string | null;
  venue_whatsapp_no: string;
  venue_email: string;
  delivery_areas: string | null;
  venue_banner: string | null;
  venue_logo: string | null;
  venue_influencers: number;
  venue_voucher_value: number;
  venue_redeem_option: string | null;
  venue_optout_url: number;
  category_id: number;
  avail_days: number;
  Venue_contact_name: string;
  venue_contact_number: string;
  venue_instruction: string | null;
  created_at: string;
  updated_at: string;
  approval_status: number;
  state_id: number;
  trade_license_file: string | null;
  vat_certificate_file: string | null;
  reviewScreenshot: number;
  reminder_custom_days: number;
  updated_by: string;
  upload_alist_screenshot: number;
  menu_pdf: string | null;
  monday_id: string | null;
  service: string;
  is_venue_code_required: number;
  skip_stories: number;
  max_campaign_visible_days: number;
  country_id: number | null;
  category: {
    id: number;
    category: string;
    image: string;
    priority: number;
    created_at: string | null;
    updated_at: string;
  };
}

export interface User {
  id: number;
  name: string;
  email: string;
  profile_picture: string;
  instagram_url: string;
  credibility: string;
}

export interface OfferUser {
  id: number;
  user_id: number;
  offer_id: number;
  status: number;
  send_to_venue: number;
  flag: number;
  created_at: string;
  updated_at: string;
  rejectReason: string | null;
  user: User;
}

export interface ApiDedicatedOffer {
  id: number;
  offer_title: string;
  venue_id: number;
  social_media_id: number;
  banner_image: string;
  offer_date: string;
  offer_usage: number;
  description: string;
  credibility_range: string;
  review_url: string | null;
  restaurant_website: string | null;
  whatsapp_no: string | null;
  amount: string;
  currency_id: number;
  instagram_followers: string;
  offer_status: number;
  offer_notify: number;
  minimum_user_count: number | null;
  no_of_tables: number | null;
  offer_gender: string;
  influencer_types: string;
  reminder_custom_date: string | null;
  skip_invitation: number;
  venue_update: number;
  is_published: number;
  min_age: number;
  max_age: number;
  user_types: string;
  is_offer_is_prive: number;
  is_offer_special: number;
  is_offer_instagram_verified: number;
  is_offer_blogger: number;
  offer_id: number | null;
  created_at: string;
  updated_at: string;
  offer_location: string;
  location_country_id: number | null;
  confirmation_message: string;
  schedule_publish_time: string | null;
  offer_start_time: string;
  offer_end_time: string;
  offer_display_start_time: string;
  offer_display_end_time: string;
  venue_offer_banner: number;
  is_offer_dummy: number;
  venue: Venue;
  offer_users: OfferUser[];
  account_status?: string;
  rejectReason?: string;
}

export interface DedicatedOfferDisplay {
  id: number;
  title: string;
  vendorName: string;
  thumbnailUrl: string;
  brandLogo: string | null;
  brandName: string;
  campaignType: CampaignType;
  category: string;
  offerDate: string;
  is_dedicated: number;
  offerType?: OfferType;
  startDate?: string;
  endDate?: string;
  duration?: number;
  durationUnit?: TimeUnit;
  minimum_user_count: number | null;
  offer_usage: number;
  offer_users: OfferUser[];
  banner_image: string;
  offer_title: string;
  account_status?: string;
  rejectReason?: string;
  description: string;
  confirmation_message: string;
}

export interface DedicatedOffer extends ApiDedicatedOffer {
  account_status?: string;
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
  offerId?: string;
}

// API Responses
export interface DedicatedOffersApiResponse {
  data: {
    venues: {
      data: DedicatedOffer[];
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

// Redux State
export interface DedicatedOffersState {
  dedicatedOffers: DedicatedOffer[];
  dedicatedOffer: DedicatedOffer | null;
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
  reviewPosts: any[]; // Replace with actual type
  reviewPostsLoading: boolean;
  reviewPostsError: string | null;
  reviewPostsPagination: any; // Replace with actual type
  reviews: any[]; // Replace with actual type
  reviewsLoading: boolean;
  reviewsError: string | null;
  reviewsPagination: any; // Replace with actual type
  voucherCodes: any[]; // Replace with actual type
  voucherCodesLoading: boolean;
  voucherCodesError: string | null;
  voucherCodesPagination: any; // Replace with actual type
  dedicatedOfferAvailability: any[]; // Replace with actual type
  dedicatedOfferAvailabilityLoading: boolean;
  dedicatedOfferAvailabilityError: string | null;
}

// Types for components that are not yet refactored
export interface GetDedicatedOfferReviewPostsPayload {
  id: string;
  page?: number;
  per_page?: number;
}

export interface GetVoucherCodesPayload {
  id: string;
  page?: number;
  per_page?: number;
}

export interface GetDedicatedOfferAvailabilityPayload {
  dedicated_offer_id: string;
  year_month: string;
}

export interface GetDedicatedOfferReviewsPayload {
  id: string;
  page?: number;
  per_page?: number;
}

export interface DedicatedOfferReviewPostsResponse {}
export interface VoucherCodesApiResponse {}
export interface DedicatedOfferAvailability {}
export interface DedicatedOfferAvailabilityApiResponse {}
export interface DedicatedOfferReviewsResponse {}
export interface GetDedicatedOfferReviewPostsAction {
  type: string;
  payload: GetDedicatedOfferReviewPostsPayload;
}
export interface GetVoucherCodesAction {
  type: string;
  payload: GetVoucherCodesPayload;
}
export interface GetDedicatedOfferAvailabilityAction {
  type: string;
  payload: GetDedicatedOfferAvailabilityPayload;
}
export interface GetDedicatedOfferReviewsAction {
  type: string;
  payload: GetDedicatedOfferReviewsPayload;
}