/**
 * Creator Tier Enum
 */
export enum CreatorTier {
  NANO = "nano",
  MICRO = "micro",
  MACRO = "macro",
  MEGA = "mega",
}

/**
 * Gender Enum
 */
export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

/**
 * Social Handle Type
 */
export type SocialHandle = {
  platform: string; // e.g. "Instagram", "TikTok"
  handle: string; // e.g. "olivia.johnson"
  url: string; // e.g. "https://instagram.com/olivia.johnson"
};

/**
 * Analytics Metrics Type
 */
export type AnalyticsMetrics = {
  followers: number;
  avgLikes: number;
  engagementRate: number;
  audienceCredibility: number;
  avgComments: number;
  avgReelsViews?: number;
  sponsoredCount: number;
  sponsoredPerformance?: number;
};

/**

/**
 * Audience Breakdown Types
 */
export type FollowerType = {
  label: string;
  value: number;
  color: string;
};

export type GenderDistribution = {
  label: string;
  value: number;
  color: string;
};

export type EngagementByAge = {
  age: string;
  Male: { value: number; color: string };
  Female: { value: number; color: string };
};

export type LocationByCountry = {
  country: string;
  value: number;
  color: string;
};

export type LocationByCity = {
  city: string;
  value: number;
  color: string;
};

export type LanguageDistribution = {
  language: string;
  AudienceLanguage: { value: number; color: string };
};

export type EthnicityDistribution = {
  ethnicity: string;
  AudienceEthnicity: { value: number; color: string };
};

export type AudienceBreakdown = {
  followerTypes: FollowerType[];
  genderDist: GenderDistribution[];
  engagementByAge: EngagementByAge[];
  locationByCountry: LocationByCountry[];
  locationByCity: LocationByCity[];
  languageDist: LanguageDistribution[];
  ethnicityDist: EthnicityDistribution[];
};

/**
 * Growth Trends Types
 */
export type GrowthSeries = {
  name: string;
  color: string;
  data: number[];
};

export type GrowthAxis = {
  values: (string | number)[];
};

export type GrowthChart = {
  xAxis: GrowthAxis;
  yAxis: GrowthAxis;
  series: GrowthSeries[];
};

export type GrowthTrends = {
  followersGrowth: GrowthChart;
  likesGrowth: GrowthChart;
};

/**
 * Brand and Topic Affinity Types
 */
export type BrandAffinity = {
  brand: string;
  value: number;
  color: string;
};

export type TopicAffinity = {
  topic: string;
  value: number;
  color: string;
};

/**
 * Similar Creator Type
 */
export type SimilarCreator = {
  creatorId: string;
  name: string;
  followerCount: number;
  isVerified: boolean;
  avatarUrl: string;
};

/**
 * Creator Insights Type (Deep-dive insights)
 */
export type CreatorInsights = {
  /** When these metrics were last fetched */
  analyticsUpdatedAt: Date;

  /** Per platform metrics */
  analyticsMetrics: AnalyticsMetrics;

  /** All your pie chart/bar chart data */
  audienceBreakdown: AudienceBreakdown;

  /** Time series growth data */
  growthTrends: GrowthTrends;

  /** Brands this creator follows */
  creatorInterestsBrands: BrandAffinity[];

  /** Topics this creator posts about */
  creatorBrandAffinityTopics: TopicAffinity[];

  /** Accounts they tag most often */
  frequentlyTaggedAccounts: string[];

  /** Hashtags they use most often */
  frequentlyUsedHashtags: string[];

  /** Brands followed by the creator's audience */
  audienceInterestsBrands: BrandAffinity[];

  /** Topics discussed by the creator's audience */
  audienceBrandAffinityTopics: TopicAffinity[];

  /** Other creators with similar audience profiles */
  similarCreators: SimilarCreator[];
};

/**
 * Creator Entity Type
 * Represents an influencer/profile in the system, with both static profile data and dynamic performance/insight metrics
 */
export type Creator = {
  /** Unique identifier for the creator */
  creatorId: string; // UUID/string - Primary key

  /** First name */
  firstName: string;

  /** Last name */
  lastName: string;

  /** Derived from first+last */
  fullName: string;

  /** Profile image */
  avatarUrl: string;

  /** Creator tier level */
  tier: CreatorTier;

  /** Which channels are verified */
  verifiedPlatforms: string[]; // e.g. ["Instagram","TikTok"]

  /** Social media handles */
  socialHandles: SocialHandle[];

  /** Email address */
  email: string;

  /** Phone number */
  phone: string;

  /** WhatsApp number */
  whatsappNumber: string;

  /** Nationality */
  nationality: string;

  /** Location */
  location: string; // e.g. "Business Bay, Dubai – UAE"

  /** Date of birth */
  dateOfBirth: Date;

  /** Derived age */
  age: number;

  /** Gender */
  gender: Gender;

  /** Registration date */
  signUpDate: Date;

  /** % of profile fields filled */
  profileCompletion: number; // 0-100

  /** Influencer tags/categories */
  influencerTags: string[]; // e.g. ["Food & Drinks","Lifestyle Travel","Beauty"]

  /** % audience credibility */
  credibilityScore: number; // 0-100

  /** Total followers */
  followerCount: number;

  /** Total impressions/reach */
  reach: number;

  /** Engagement rate percentage */
  engagementRate: number; // 0-100

  /** Sum of voucher redemptions */
  totalRedemptionsValue: number; // e.g. 1090

  /** Currency for redemptions */
  totalRedemptionsCurrency: string; // e.g. "AED"

  /** How many campaigns they've participated in */
  campaignsCount: number;

  /** Total posts made */
  postsCount: number;

  /** Total reviews written */
  reviewsCount: number;

  /** Deep-dive insights */
  insights: CreatorInsights;

  /** When creator was created */
  createdAt: Date;

  /** When creator was last modified */
  updatedAt: Date;

  /** Whether the creator is approved */
  isApproved: boolean;

  campaignIds: string[];

  /** Redemption segments for the donut chart */
  redemptionSegments: {
    value: number;
    color: string;
    label: string;
  }[];

  /** Social media platforms with active/inactive status */
  socialPlatforms: {
    platform: string; // e.g. "instagram", "tiktok", "snapchat", "twitch", "youtube"
    isActive: boolean;
  }[];
};
