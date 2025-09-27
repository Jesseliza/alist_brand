import { brandsData } from "./BrandsData";
import { Campaign } from "@/types/entities";

const placeholderImage = "/images/placeholder.png";

function getBrandDetails(brandId: string | number): {
  brandLogo: string;
  brandName: string;
} {
  const brand = brandsData.find((b) => b.brandId === brandId.toString());
  return brand
    ? { brandLogo: brand.logo, brandName: brand.name }
    : { brandLogo: placeholderImage, brandName: "Default Brand" };
}

const CampaignsData: Campaign[] = [
  {
    campaignId: "0",
    brandId: "0",
    subscriptionId: "sub_african_eastern_001",
    title: "African + Eastern",
    thumbnailUrl: placeholderImage,
    campaignType: "Delivery",
    offerType: "Barter",
    brandLogo: getBrandDetails("0").brandLogo,
    brandName: getBrandDetails("0").brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join African + Eastern's exclusive influencer campaign and showcase our premium products to your engaged audience. This is a unique opportunity to collaborate with a leading brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our African + Eastern campaign! Share your authentic experience with our products and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#AfricanEastern #InfluencerCampaign #LuxuryBrand",
          mentions: "@africaneastern",
        },
        url: "https://example.com/campaign/african-eastern",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#AfricanEastern #Stories #LuxuryBrand",
          mentions: "@africaneastern",
        },
        url: "https://example.com/campaign/african-eastern-stories",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 125000,
    ageRange: { min: 25, max: 55 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["lifestyle", "luxury", "fashion", "business"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 450,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 58,
      impressions: "1.2M",
      reach: "858K",
      posts: 174,
      reviews: 58,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "450AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Jan 15, 2024",
    },

    campaignGuidelines: [
      {
        platform: "3 Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@africaneastern",
            highlight: "@africaneastern",
          },
          {
            label: "Visible Tag:",
            value: "@africaneastern",
            highlight: "@africaneastern",
          },
          {
            label: "Duration:",
            value: "All stories must remain visible for 24 hours.",
          },
        ],
      },
      {
        platform: "Google Reviews",
        platformIcon: "/icons/campaign/details/overview/google.svg",
        requirements: "Submit authentic Google reviews",
        rules: [
          {
            label: "Length:",
            value: "Minimum of 50 characters",
          },
          {
            label: "Content:",
            value: "Do not mention alist.ae",
          },
          {
            label: "Attachment:",
            value: "All stories must Include an image of the experience",
          },
          {
            label: "Removal:",
            value: "Do not remove unless requested by alist",
          },
        ],
      },
    ],

    campaignPlan: {
      planName: "Enterprise",
      planType: "Annual",
      nextBillAmount: 431988,
      nextBillCurrency: "AED",
      nextBillDate: "01/06/2025",
      paymentDate: "01/06/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "5085",
    },

    campaignPosts: [],
    createdAt: new Date("2024-01-15T10:00:00Z"),
    updatedAt: new Date("2024-01-15T10:00:00Z"),
  },
  {
    campaignId: "1",
    brandId: "0",
    subscriptionId: "sub_african_eastern_002",
    title: "African Eastern",
    thumbnailUrl: placeholderImage,
    campaignType: "WalkIn",
    offerType: "Barter",

    brandLogo: getBrandDetails("0").brandLogo,
    brandName: getBrandDetails("0").brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join African + Eastern's exclusive influencer campaign and showcase our premium products to your engaged audience. This is a unique opportunity to collaborate with a leading brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our African + Eastern campaign! Share your authentic experience with our products and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#AfricanEastern #InfluencerCampaign #LuxuryBrand",
          mentions: "@africaneastern",
        },
        url: "https://example.com/campaign/african-eastern-2",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#AfricanEastern #TikTok #LuxuryBrand",
          mentions: "@africaneastern",
        },
        url: "https://example.com/campaign/african-eastern-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 180000,
    ageRange: { min: 18, max: 45 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "5K–25K",
    influencerTags: ["lifestyle", "fashion", "beauty", "travel"],
    creatorStatusFilters: ["InstagramVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 350,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 48,
      impressions: "1.1M",
      reach: "780K",
      posts: 156,
      reviews: 48,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "350AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Jan 16, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@africaneastern",
            highlight: "@africaneastern",
          },
          {
            label: "Hashtags:",
            value: "#AfricanEastern #LuxuryBrand #Lifestyle",
          },
          {
            label: "Duration:",
            value: "Posts must remain visible for 7 days.",
          },
        ],
      },
      {
        platform: "Google Reviews",
        platformIcon: "/icons/campaign/details/overview/google.svg",
        requirements: "Submit authentic Google reviews",
        rules: [
          {
            label: "Length:",
            value: "Minimum of 50 characters",
          },
          {
            label: "Content:",
            value: "Do not mention alist.ae",
          },
          {
            label: "Attachment:",
            value: "All stories must Include an image of the experience",
          },
          {
            label: "Removal:",
            value: "Do not remove unless requested by alist",
          },
        ],
      },
    ],

    campaignPlan: {
      planName: "Professional",
      planType: "Monthly",
      nextBillAmount: 125000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "1234",
    },

    createdAt: new Date("2024-01-16T10:00:00Z"),
    updatedAt: new Date("2024-01-16T10:00:00Z"),
  },
];

export { CampaignsData };