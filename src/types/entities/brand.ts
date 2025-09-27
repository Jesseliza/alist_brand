export type FoodOffer = {
  id: number;
  offer_title: string;
  restaurant_name: number;
  campaign_id: string;
  account_status: string;
  amount: string;
  banner_image: string;
  calendar_custom_days: number;
  created_at: string;
  credibility_range: string | null;
  currency_id: number;
  custom_btn_icon: string | null;
  custom_btn_title: string | null;
  custom_btn_url: string | null;
  date_valid_text: string | null;
  dedicated_offer_id: string | null;
  description: string;
  dress_code: string | null;
  email_text: string;
  end_date: string;
  end_offer_block: string | null;
  group_id: string | null;
  influencer_types: string | null;
  insight_required: number;
  instagram_followers: string;
  is_dedicated: number;
  is_groupX: number;
  is_offer_blogger: number;
  is_offer_dummy: number;
  is_offer_is_prive: number;
  is_offer_special: number;
  location_country_id: string | null;
  max_age: number;
  min_age: number;
  minimum_user_count: string | null;
  mobile_redemption_text: string | null;
  mobile_redemption_title: string | null;
  no_of_tables: string | null;
  notification_text: string | null;
  offer_available_end_date: string | null;
  offer_available_start_date: string | null;
  offer_display_end_time: string;
  offer_display_start_time: string;
  offer_end_time: string | null;
  offer_gender: string | null;
  offer_location: string | null;
  offer_notify: number;
  offer_start_time: string | null;
  offer_status: string;
  offer_usage: number;
  phone_campaign_mentions: string | null;
  phone_campaign_message: string | null;
  phone_review_comments: string | null;
  phone_review_text: string | null;
  reminder_custom_date: string;
  restaurant_website: string | null;
  review_url: string | null;
  rule_1: string;
  rule_2: string;
  rule_3: string;
  schedule_publish_time: string | null;
  skip_invitation: number;
  skip_stories: number;
  social_media_id: number;
  start_date: string;
  start_offer_block: string | null;
  updated_at: string;
  user_types: string;
  venue_offer_banner: number;
  whatsapp_no: string | null;
};

export type Brand = {
  brandId: string;
  accountId: string; // FK to Account
  name: string; // Display name (e.g. "Dunkin'")
  owner: string; // Owner of the brand
  logo: string; // Brand image URL
  phoneNumber: string; // Main contact number
  emailAddress: string; // Contact email
  industry: string; // Category (e.g. "Food & Drinks")
  companyName: string; // Legal name on trade license
  country: string; // Country code
  state: string; // State or province
  businessLocation: string; // Business location
  tradeLicenseCopy: string | File; // File reference (e.g. PDF)
  vatCertificate: string | File; // File reference (e.g. PDF)
  instagramHandle: string; // Social media username
  websiteUrl: string; // Public website
  associateName: string; // On brand contact person's name
  associateEmail: string; // On brand contact person's email
  associatePhone: string; // On brand contact person's phone
  associateFirstName: string;
  associateLastName: string;
  associateInitials: string;
  associateBackground: string;
  registrationDate: string;
  offersCount: number; // (Derived) Number of "offers" or activities scheduled under Brand
  campaignsCount: number; // (Derived) Number of Campaigns this Brand runs
  profileCompletion: number; // (Derived) How complete the Brand's profile is for the UI
  files: number; // Number of files associated with the brand
  Venue_contact_name: string | null;
  venue_email: string | null;
  food_offers: FoodOffer[];
};