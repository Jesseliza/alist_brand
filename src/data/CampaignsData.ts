import { brandsData } from "./BrandsData";
import { Campaign } from "@/types/entities";
// import dunkin from "@/assets/images/brands/1847-4.png";
// import africanEasternCover1 from "@/assets/images/campaigns/African + Eastern Cover Photo 1.jpg";
// import africanEasternCover2 from "@/assets/images/campaigns/African Eastern Cover Photo 2.jpg";
// import alfuttaimCover1 from "@/assets/images/campaigns/Al Futtaim Cover.jpg";
// import alfuttaimCover2 from "@/assets/images/campaigns/Al Futtaim Cover 2.jpeg";
// import binsinaCover from "@/assets/images/campaigns/Binsina Cover 1.png";
// import biodermaCover from "@/assets/images/campaigns/Bioderma Cover Photo 1.jpg";
// import cafuCover2 from "@/assets/images/campaigns/Cafu Cover Photo 2.jpeg";
// import careemCover1 from "@/assets/images/campaigns/Careem Cover Photo 2.jpg";
// import casioCover1 from "@/assets/images/campaigns/Casio Cover 1.jpg";
// import casioCover2 from "@/assets/images/campaigns/Casio Cover 2.jpg";
// import cinnabonCover2 from "@/assets/images/campaigns/Cinnabon Cover Photo 2.jpg";
// import clarinsCover1 from "@/assets/images/campaigns/Clarins Cover 1.jpg";
// import danubeCover1 from "@/assets/images/campaigns/Danube Cover Photo 1.jpg";
// import danubeCover3 from "@/assets/images/campaigns/Danube Properties Cover.jpg";
// import deliverooCover1 from "@/assets/images/campaigns/Deliveroo Cover 1.jpg";
// import deliverooCover2 from "@/assets/images/campaigns/Deliveroo Cover 2.png";
// import deliverooCover3 from "@/assets/images/campaigns/Deliveroo Cover 3.png";
// import dqCover2 from "@/assets/images/campaigns/DQ COVER 2.jpeg";
// import dqCover3 from "@/assets/images/campaigns/DQ COVER 3.png";
// import dubaiHoldingCover1 from "@/assets/images/campaigns/Dubai Holding Cover.jpg";
// import dunkinCover1 from "@/assets/images/campaigns/Dunkin Cover Photo.jpg";
// import fourSeasonsCover1 from "@/assets/images/campaigns/Four Seasons Cover Photo.jpg";
// import fourSeasonsCover2 from "@/assets/images/campaigns/Four Seasons Cover Photo 2.jpg";
// import hersheysCover1 from "@/assets/images/campaigns/Hershey_s Cover 1.jpg";
// import hersheysCover2 from "@/assets/images/campaigns/Hershey_s Cover 2.jpg";
// import hiltonCover1 from "@/assets/images/campaigns/Hilton Cover Photo.jpeg";
// import hiltonCover2 from "@/assets/images/campaigns/Hilton Cover Photo 2.jpg";
// import hiltonCover3 from "@/assets/images/campaigns/Hilton Cover Photo 3.jpg";
// import insurancemarketCover2 from "@/assets/images/campaigns/insurancemarket cover 2.jpg";
// import jumeirahCover1 from "@/assets/images/campaigns/Jumeirah Cover Photo 1.jpg";
// import kitopiCover1 from "@/assets/images/campaigns/Kitopi Cover 1.jpg";
// import landmarkCover1 from "@/assets/images/campaigns/Landmark Group Cover.jpg";
// import mariottCover1 from "@/assets/images/campaigns/Marriott Cover Photo.jpg";
// import meydanCover1 from "@/assets/images/campaigns/Meydan Cover 1.jpg";
// import meydanCover2 from "@/assets/images/campaigns/Meydan Cover 2.jpg";
// import nandoCover1 from "@/assets/images/campaigns/Nando_s Cover 1.jpg";
// import nandoCover2 from "@/assets/images/campaigns/Nando_s Cover 2.jpg";
// import nikkiCover1 from "@/assets/images/campaigns/Nikki Beach.jpg";
// import noonCover1 from "@/assets/images/campaigns/Noon Cover 1.jpg";
// import noonCover2 from "@/assets/images/campaigns/Noon Cover 2.jpg";
// import novomedCover1 from "@/assets/images/campaigns/Novomed Cover.jpg";
// import novomedCover2 from "@/assets/images/campaigns/Novomed Cover 2.jpg";
// import ounassCover1 from "@/assets/images/campaigns/Ounass Cover 1.jpg";
// import ounassCover2 from "@/assets/images/campaigns/Ounas Cover 2.jpg";
// import pandaCover1 from "@/assets/images/campaigns/Panda Express Cover.jpg";
// import peugeotCover1 from "@/assets/images/campaigns/Reese_s Cover 1.jpg";
// import reecesCover1 from "@/assets/images/campaigns/Reese_s Cover 2.png";
// import sivviCover from "@/assets/images/campaigns/Sivvi Cover Photo 1.jpg";
// import ritzCover from "@/assets/images/campaigns/The Ritz Carlton 2.jpg";
// import uberCover1 from "@/assets/images/campaigns/Uber Cover 1.jpg";

function getBrandDetails(brandId: string | number): {
  brandLogo: string;
  brandName: string;
} {
  const brand = brandsData.find((b) => b.brandId === brandId.toString());
  return brand
    ? { brandLogo: brand.logo ?? "", brandName: brand.name  ?? ""}
    : { brandLogo: dunkin.src, brandName: "Default Brand" };
}

const CampaignsData: Campaign[] = [
  {
    campaignId: "0",
    brandId: "0",
    subscriptionId: "sub_african_eastern_001",
    title: "African + Eastern",
    thumbnailUrl: africanEasternCover1.src,
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
    thumbnailUrl: africanEasternCover2.src,
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
      "Join African Eastern's exclusive influencer campaign and showcase our premium products to your engaged audience. This is a unique opportunity to collaborate with a leading brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our African Eastern campaign! Share your authentic experience with our products and help us reach new audiences. Your creativity and influence will make this campaign a success.",

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
  {
    campaignId: "2",
    brandId: "0",
    subscriptionId: "sub_alfuttaim_001",
    title: "Al Futtaim",
    thumbnailUrl: alfuttaimCover1.src,
    campaignType: "Online",
    offerType: "Barter",
    brandLogo: getBrandDetails(0).brandLogo,
    brandName: getBrandDetails(0).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Al Futtaim's exclusive influencer campaign and showcase our premium products to your engaged audience. This is a unique opportunity to collaborate with a leading brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Al Futtaim campaign! Share your authentic experience with our products and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#AlFuttaim #InfluencerCampaign #LuxuryBrand",
          mentions: "@alfuttaim",
        },
        url: "https://example.com/campaign/alfuttaim",
      },
      {
        type: "YouTubeVideos",
        config: {
          platform: "youtube_videos",
          requirements: "Create engaging YouTube videos content",
          hashtags: "#AlFuttaim #YouTube #LuxuryBrand",
          mentions: "@alfuttaim",
        },
        url: "https://example.com/campaign/alfuttaim-youtube",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 200000,
    ageRange: { min: 25, max: 60 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "25K–100K",
    influencerTags: ["lifestyle", "luxury", "business", "technology"],
    creatorStatusFilters: ["InstagramVerified", "YouTubeVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 600,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 72,
      impressions: "1.5M",
      reach: "1.1M",
      posts: 215,
      reviews: 72,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "600AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Jan 17, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@alfuttaim",
            highlight: "@alfuttaim",
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
      planName: "Business",
      planType: "Quarterly",
      nextBillAmount: 250000,
      nextBillCurrency: "AED",
      nextBillDate: "01/04/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "5678",
    },

    createdAt: new Date("2024-01-17T10:00:00Z"),
    updatedAt: new Date("2024-01-17T10:00:00Z"),
  },
  {
    campaignId: "3",
    brandId: "0",
    subscriptionId: "sub_alfuttaim_002",
    title: "Al Futtaim",
    thumbnailUrl: alfuttaimCover2.src,
    campaignType: "Exclusive",
    offerType: "Barter",
    brandLogo: getBrandDetails(0).brandLogo,
    brandName: getBrandDetails(0).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Al Futtaim's exclusive influencer campaign and showcase our premium products to your engaged audience. This is a unique opportunity to collaborate with a leading brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Al Futtaim campaign! Share your authentic experience with our products and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#AlFuttaim #InfluencerCampaign #LuxuryBrand",
          mentions: "@alfuttaim",
        },
        url: "https://example.com/campaign/alfuttaim-exclusive",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#AlFuttaim #Stories #LuxuryBrand",
          mentions: "@alfuttaim",
        },
        url: "https://example.com/campaign/alfuttaim-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#AlFuttaim #TikTok #LuxuryBrand",
          mentions: "@alfuttaim",
        },
        url: "https://example.com/campaign/alfuttaim-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 150000,
    ageRange: { min: 22, max: 50 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["lifestyle", "fashion", "beauty", "entertainment"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 500,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 55,
      impressions: "1.3M",
      reach: "920K",
      posts: 182,
      reviews: 55,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "500AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Jan 18, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@alfuttaim",
            highlight: "@alfuttaim",
          },
          {
            label: "Hashtags:",
            value: "#AlFuttaim #LuxuryBrand #Business",
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
      planName: "Premium",
      planType: "Annual",
      nextBillAmount: 500000,
      nextBillCurrency: "AED",
      nextBillDate: "01/01/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "9012",
    },

    createdAt: new Date("2024-01-18T10:00:00Z"),
    updatedAt: new Date("2024-01-18T10:00:00Z"),
  },
  {
    campaignId: "4",
    brandId: "0",
    subscriptionId: "sub_binsina_001",
    title: "Binsina",
    thumbnailUrl: binsinaCover.src,
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
      "Join Binsina's exclusive influencer campaign and showcase our premium products to your engaged audience. This is a unique opportunity to collaborate with a leading brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Binsina campaign! Share your authentic experience with our products and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Binsina #InfluencerCampaign #LuxuryBrand",
          mentions: "@binsina",
        },
        url: "https://example.com/campaign/binsina",
      },
      {
        type: "GoogleReviews",
        config: {
          platform: "google_reviews",
          requirements: "Create engaging Google reviews content",
          hashtags: "#Binsina #Reviews #LuxuryBrand",
          mentions: "@binsina",
        },
        url: "https://example.com/campaign/binsina-reviews",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 95000,
    ageRange: { min: 20, max: 45 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "5K–25K",
    influencerTags: ["lifestyle", "fashion", "beauty", "food"],
    creatorStatusFilters: ["InstagramVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 300,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 32,
      impressions: "750K",
      reach: "520K",
      posts: 118,
      reviews: 32,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "300AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Jan 19, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@binsina",
            highlight: "@binsina",
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
      planName: "Starter",
      planType: "Monthly",
      nextBillAmount: 75000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "3456",
    },

    createdAt: new Date("2024-01-19T10:00:00Z"),
    updatedAt: new Date("2024-01-19T10:00:00Z"),
  },

  {
    campaignId: "5",
    brandId: "34",
    subscriptionId: "sub_bioderma_001",
    title: "Bioderma",
    thumbnailUrl: biodermaCover.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(34).brandLogo,
    brandName: getBrandDetails(34).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Bioderma's exclusive influencer campaign and showcase our premium skincare products to your engaged audience. This is a unique opportunity to collaborate with a leading beauty brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Bioderma campaign! Share your authentic experience with our skincare products and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Bioderma #InfluencerCampaign #Skincare #Beauty",
          mentions: "@bioderma",
        },
        url: "https://example.com/campaign/bioderma",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Bioderma #Stories #Skincare #Beauty",
          mentions: "@bioderma",
        },
        url: "https://example.com/campaign/bioderma-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Bioderma #TikTok #Skincare #Beauty",
          mentions: "@bioderma",
        },
        url: "https://example.com/campaign/bioderma-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 120000,
    ageRange: { min: 18, max: 40 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["beauty", "skincare", "lifestyle", "fashion"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 400,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 42,
      impressions: "950K",
      reach: "680K",
      posts: 156,
      reviews: 42,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "400AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Jan 20, 2024",
    },

    campaignGuidelines: [
      {
        platform: "3 Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@bioderma",
            highlight: "@bioderma",
          },
          {
            label: "Visible Tag:",
            value: "@bioderma",
            highlight: "@bioderma",
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
      planName: "Basic",
      planType: "Monthly",
      nextBillAmount: 45000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "7890",
    },

    createdAt: new Date("2024-01-20T10:00:00Z"),
    updatedAt: new Date("2024-01-20T10:00:00Z"),
  },

  {
    campaignId: "6",
    brandId: "37",
    subscriptionId: "sub_cafu_001",
    title: "Cafu",
    thumbnailUrl: cafuCover2.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(37).brandLogo,
    brandName: getBrandDetails(37).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Cafu's exclusive influencer campaign and showcase our premium fuel services to your engaged audience. This is a unique opportunity to collaborate with a leading energy brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Cafu campaign! Share your authentic experience with our fuel services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Cafu #InfluencerCampaign #Fuel #Energy",
          mentions: "@cafu",
        },
        url: "https://example.com/campaign/cafu",
      },
      {
        type: "GoogleReviews",
        config: {
          platform: "google_reviews",
          requirements: "Create engaging Google reviews content",
          hashtags: "#Cafu #Reviews #Fuel #Energy",
          mentions: "@cafu",
        },
        url: "https://example.com/campaign/cafu-reviews",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 85000,
    ageRange: { min: 25, max: 55 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "5K–25K",
    influencerTags: ["lifestyle", "business", "technology", "automotive"],
    creatorStatusFilters: ["InstagramVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 250,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 38,
      impressions: "820K",
      reach: "580K",
      posts: 142,
      reviews: 38,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "250AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Jan 21, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@cafu",
            highlight: "@cafu",
          },
          {
            label: "Hashtags:",
            value: "#Cafu #CarService #Lifestyle",
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
      planName: "Standard",
      planType: "Quarterly",
      nextBillAmount: 180000,
      nextBillCurrency: "AED",
      nextBillDate: "01/04/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "2345",
    },

    createdAt: new Date("2024-01-21T10:00:00Z"),
    updatedAt: new Date("2024-01-21T10:00:00Z"),
  },
  {
    campaignId: "7",
    brandId: "8",
    subscriptionId: "sub_careem_001",
    title: "Careem",
    thumbnailUrl: careemCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(8).brandLogo,
    brandName: getBrandDetails(8).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Careem's exclusive influencer campaign and showcase our premium ride-hailing services to your engaged audience. This is a unique opportunity to collaborate with a leading transportation brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Careem campaign! Share your authentic experience with our ride-hailing services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Careem #InfluencerCampaign #RideHailing #Transportation",
          mentions: "@careem",
        },
        url: "https://example.com/campaign/careem",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Careem #Stories #RideHailing #Transportation",
          mentions: "@careem",
        },
        url: "https://example.com/campaign/careem-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Careem #TikTok #RideHailing #Transportation",
          mentions: "@careem",
        },
        url: "https://example.com/campaign/careem-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 200000,
    ageRange: { min: 18, max: 50 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["lifestyle", "travel", "technology", "business"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 550,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 65,
      impressions: "1.8M",
      reach: "1.2M",
      posts: 198,
      reviews: 65,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "550AED",
      approval: "Manual",
      restricted: "Broad",
      date: "Jan 22, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@careem",
            highlight: "@careem",
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
      planName: "Professional",
      planType: "Annual",
      nextBillAmount: 350000,
      nextBillCurrency: "AED",
      nextBillDate: "01/01/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "6789",
    },

    createdAt: new Date("2024-01-22T10:00:00Z"),
    updatedAt: new Date("2024-01-22T10:00:00Z"),
  },
  {
    campaignId: "8",
    brandId: "38",
    subscriptionId: "sub_casio_001",
    title: "Casio",
    thumbnailUrl: casioCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(38).brandLogo,
    brandName: getBrandDetails(38).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Casio's exclusive influencer campaign and showcase our premium electronics and watches to your engaged audience. This is a unique opportunity to collaborate with a leading technology brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Casio campaign! Share your authentic experience with our electronics and watches and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Casio #InfluencerCampaign #Electronics #Watches",
          mentions: "@casio",
        },
        url: "https://example.com/campaign/casio",
      },
      {
        type: "YouTubeVideos",
        config: {
          platform: "youtube_videos",
          requirements: "Create engaging YouTube videos content",
          hashtags: "#Casio #YouTube #Electronics #Watches",
          mentions: "@casio",
        },
        url: "https://example.com/campaign/casio-youtube",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 110000,
    ageRange: { min: 20, max: 45 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["technology", "lifestyle", "fashion", "business"],
    creatorStatusFilters: ["InstagramVerified", "YouTubeVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 380,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 45,
      impressions: "1.1M",
      reach: "780K",
      posts: 167,
      reviews: 45,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "380AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Jan 23, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@casio",
            highlight: "@casio",
          },
          {
            label: "Hashtags:",
            value: "#Casio #Watches #Lifestyle",
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
      planName: "Business",
      planType: "Monthly",
      nextBillAmount: 150000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "4567",
    },

    createdAt: new Date("2024-01-23T10:00:00Z"),
    updatedAt: new Date("2024-01-23T10:00:00Z"),
  },
  {
    campaignId: "9",
    brandId: "38",
    subscriptionId: "sub_casio_002",
    title: "Casio",
    thumbnailUrl: casioCover2.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(38).brandLogo,
    brandName: getBrandDetails(38).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Casio's exclusive influencer campaign and showcase our premium electronics and watches to your engaged audience. This is a unique opportunity to collaborate with a leading technology brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Casio campaign! Share your authentic experience with our electronics and watches and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Casio #InfluencerCampaign #Electronics #Watches",
          mentions: "@casio",
        },
        url: "https://example.com/campaign/casio-2",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Casio #Stories #Electronics #Watches",
          mentions: "@casio",
        },
        url: "https://example.com/campaign/casio-stories",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 95000,
    ageRange: { min: 18, max: 40 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "5K–25K",
    influencerTags: ["technology", "lifestyle", "fashion", "entertainment"],
    creatorStatusFilters: ["InstagramVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 320,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 35,
      impressions: "880K",
      reach: "620K",
      posts: 128,
      reviews: 35,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "320AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Jan 24, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@casio",
            highlight: "@casio",
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
      planName: "Standard",
      planType: "Monthly",
      nextBillAmount: 95000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "8901",
    },

    createdAt: new Date("2024-01-24T10:00:00Z"),
    updatedAt: new Date("2024-01-24T10:00:00Z"),
  },
  {
    campaignId: "10",
    brandId: "42",
    subscriptionId: "sub_cinnabon_001",
    title: "Cinnabon",
    thumbnailUrl: cinnabonCover2.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(42).brandLogo,
    brandName: getBrandDetails(42).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Cinnabon's exclusive influencer campaign and showcase our delicious cinnamon rolls and baked goods to your engaged audience. This is a unique opportunity to collaborate with a leading food brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Cinnabon campaign! Share your authentic experience with our delicious treats and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Cinnabon #InfluencerCampaign #Food #BakedGoods",
          mentions: "@cinnabon",
        },
        url: "https://example.com/campaign/cinnabon",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Cinnabon #Stories #Food #BakedGoods",
          mentions: "@cinnabon",
        },
        url: "https://example.com/campaign/cinnabon-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Cinnabon #TikTok #Food #BakedGoods",
          mentions: "@cinnabon",
        },
        url: "https://example.com/campaign/cinnabon-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 140000,
    ageRange: { min: 16, max: 45 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "5K–25K",
    influencerTags: ["food", "lifestyle", "entertainment", "travel"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 280,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 28,
      impressions: "680K",
      reach: "480K",
      posts: 95,
      reviews: 28,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "280AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Jan 25, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@cinnabon",
            highlight: "@cinnabon",
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
      planName: "Basic",
      planType: "Monthly",
      nextBillAmount: 65000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "1234",
    },

    createdAt: new Date("2024-01-25T10:00:00Z"),
    updatedAt: new Date("2024-01-25T10:00:00Z"),
  },
  {
    campaignId: "11",
    brandId: "95",
    subscriptionId: "sub_clarins_001",
    title: "Clarins",
    thumbnailUrl: clarinsCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(95).brandLogo,
    brandName: getBrandDetails(95).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Clarins' exclusive influencer campaign and showcase our premium skincare and beauty products to your engaged audience. This is a unique opportunity to collaborate with a leading luxury beauty brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Clarins campaign! Share your authentic experience with our luxury skincare products and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Clarins #InfluencerCampaign #Skincare #LuxuryBeauty",
          mentions: "@clarins",
        },
        url: "https://example.com/campaign/clarins",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Clarins #Stories #Skincare #LuxuryBeauty",
          mentions: "@clarins",
        },
        url: "https://example.com/campaign/clarins-stories",
      },
      {
        type: "YouTubeVideos",
        config: {
          platform: "youtube_videos",
          requirements: "Create engaging YouTube videos content",
          hashtags: "#Clarins #YouTube #Skincare #LuxuryBeauty",
          mentions: "@clarins",
        },
        url: "https://example.com/campaign/clarins-youtube",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 160000,
    ageRange: { min: 20, max: 45 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "25K–100K",
    influencerTags: ["beauty", "skincare", "lifestyle", "fashion"],
    creatorStatusFilters: ["InstagramVerified", "YouTubeVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 650,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 78,
      impressions: "1.7M",
      reach: "1.3M",
      posts: 234,
      reviews: 78,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "650AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Jan 26, 2024",
    },

    campaignGuidelines: [
      {
        platform: "3 Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@clarins",
            highlight: "@clarins",
          },
          {
            label: "Visible Tag:",
            value: "@clarins",
            highlight: "@clarins",
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
      planName: "Premium",
      planType: "Annual",
      nextBillAmount: 280000,
      nextBillCurrency: "AED",
      nextBillDate: "01/01/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "5678",
    },

    createdAt: new Date("2024-01-26T10:00:00Z"),
    updatedAt: new Date("2024-01-26T10:00:00Z"),
  },
  {
    campaignId: "12",
    brandId: "46",
    subscriptionId: "sub_danube_001",
    title: "Danube",
    thumbnailUrl: danubeCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(46).brandLogo,
    brandName: getBrandDetails(46).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Danube's exclusive influencer campaign and showcase our premium real estate and property services to your engaged audience. This is a unique opportunity to collaborate with a leading real estate brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Danube campaign! Share your authentic experience with our real estate services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Danube #InfluencerCampaign #RealEstate #Property",
          mentions: "@danube",
        },
        url: "https://example.com/campaign/danube",
      },
      {
        type: "GoogleReviews",
        config: {
          platform: "google_reviews",
          requirements: "Create engaging Google reviews content",
          hashtags: "#Danube #Reviews #RealEstate #Property",
          mentions: "@danube",
        },
        url: "https://example.com/campaign/danube-reviews",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 110000,
    ageRange: { min: 25, max: 60 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["business", "lifestyle", "realestate", "investment"],
    creatorStatusFilters: ["InstagramVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 420,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 52,
      impressions: "1.0M",
      reach: "720K",
      posts: 168,
      reviews: 52,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "420AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Jan 27, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@danube",
            highlight: "@danube",
          },
          {
            label: "Hashtags:",
            value: "#Danube #HomeImprovement #Lifestyle",
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
      planName: "Business",
      planType: "Quarterly",
      nextBillAmount: 220000,
      nextBillCurrency: "AED",
      nextBillDate: "01/04/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "9012",
    },

    createdAt: new Date("2024-01-27T10:00:00Z"),
    updatedAt: new Date("2024-01-27T10:00:00Z"),
  },
  {
    campaignId: "13",
    brandId: "46",
    subscriptionId: "sub_danube_properties_001",
    title: "Danube Properties",
    thumbnailUrl: danubeCover3.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(46).brandLogo,
    brandName: getBrandDetails(46).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Danube Properties' exclusive influencer campaign and showcase our premium real estate and property development services to your engaged audience. This is a unique opportunity to collaborate with a leading property development brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Danube Properties campaign! Share your authentic experience with our property development services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags:
            "#DanubeProperties #InfluencerCampaign #RealEstate #PropertyDevelopment",
          mentions: "@danubeproperties",
        },
        url: "https://example.com/campaign/danube-properties",
      },
      {
        type: "YouTubeVideos",
        config: {
          platform: "youtube_videos",
          requirements: "Create engaging YouTube videos content",
          hashtags:
            "#DanubeProperties #YouTube #RealEstate #PropertyDevelopment",
          mentions: "@danubeproperties",
        },
        url: "https://example.com/campaign/danube-properties-youtube",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 130000,
    ageRange: { min: 28, max: 65 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "25K–100K",
    influencerTags: ["business", "realestate", "investment", "lifestyle"],
    creatorStatusFilters: ["InstagramVerified", "YouTubeVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 580,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 68,
      impressions: "1.4M",
      reach: "1.0M",
      posts: 198,
      reviews: 68,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "580AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Jan 28, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@danubeproperties",
            highlight: "@danubeproperties",
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
      nextBillAmount: 450000,
      nextBillCurrency: "AED",
      nextBillDate: "01/01/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "3456",
    },

    createdAt: new Date("2024-01-28T10:00:00Z"),
    updatedAt: new Date("2024-01-28T10:00:00Z"),
  },
  {
    campaignId: "14",
    brandId: "47",
    subscriptionId: "sub_deliveroo_001",
    title: "Deliveroo",
    thumbnailUrl: deliverooCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(47).brandLogo,
    brandName: getBrandDetails(47).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Deliveroo's exclusive influencer campaign and showcase our premium food delivery services to your engaged audience. This is a unique opportunity to collaborate with a leading food delivery brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Deliveroo campaign! Share your authentic experience with our food delivery services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Deliveroo #InfluencerCampaign #FoodDelivery #Food",
          mentions: "@deliveroo",
        },
        url: "https://example.com/campaign/deliveroo",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Deliveroo #Stories #FoodDelivery #Food",
          mentions: "@deliveroo",
        },
        url: "https://example.com/campaign/deliveroo-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Deliveroo #TikTok #FoodDelivery #Food",
          mentions: "@deliveroo",
        },
        url: "https://example.com/campaign/deliveroo-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 180000,
    ageRange: { min: 18, max: 50 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["food", "lifestyle", "entertainment", "travel"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 480,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 62,
      impressions: "1.3M",
      reach: "950K",
      posts: 186,
      reviews: 62,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "480AED",
      approval: "Manual",
      restricted: "Broad",
      date: "Jan 29, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@deliveroo",
            highlight: "@deliveroo",
          },
          {
            label: "Hashtags:",
            value: "#Deliveroo #FoodDelivery #Lifestyle",
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
      planName: "Standard",
      planType: "Monthly",
      nextBillAmount: 120000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "7890",
    },

    createdAt: new Date("2024-01-29T10:00:00Z"),
    updatedAt: new Date("2024-01-29T10:00:00Z"),
  },
  {
    campaignId: "15",
    brandId: "47",
    subscriptionId: "sub_deliveroo_002",
    title: "Deliveroo",
    thumbnailUrl: deliverooCover2.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(47).brandLogo,
    brandName: getBrandDetails(47).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Deliveroo's exclusive influencer campaign and showcase our premium food delivery services to your engaged audience. This is a unique opportunity to collaborate with a leading food delivery brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Deliveroo campaign! Share your authentic experience with our food delivery services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Deliveroo #InfluencerCampaign #FoodDelivery #Food",
          mentions: "@deliveroo",
        },
        url: "https://example.com/campaign/deliveroo-2",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Deliveroo #TikTok #FoodDelivery #Food",
          mentions: "@deliveroo",
        },
        url: "https://example.com/campaign/deliveroo-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 150000,
    ageRange: { min: 18, max: 45 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "5K–25K",
    influencerTags: ["food", "lifestyle", "entertainment", "travel"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 350,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 45,
      impressions: "1.0M",
      reach: "720K",
      posts: 142,
      reviews: 45,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "350AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Jan 30, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@deliveroo",
            highlight: "@deliveroo",
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
      planName: "Basic",
      planType: "Monthly",
      nextBillAmount: 85000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "2345",
    },

    createdAt: new Date("2024-01-30T10:00:00Z"),
    updatedAt: new Date("2024-01-30T10:00:00Z"),
  },
  {
    campaignId: "16",
    brandId: "47",
    subscriptionId: "sub_deliveroo_003",
    title: "Deliveroo",
    thumbnailUrl: deliverooCover3.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(47).brandLogo,
    brandName: getBrandDetails(47).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Deliveroo's exclusive influencer campaign and showcase our premium food delivery services to your engaged audience. This is a unique opportunity to collaborate with a leading food delivery brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Deliveroo campaign! Share your authentic experience with our food delivery services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Deliveroo #InfluencerCampaign #FoodDelivery #Food",
          mentions: "@deliveroo",
        },
        url: "https://example.com/campaign/deliveroo-3",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Deliveroo #Stories #FoodDelivery #Food",
          mentions: "@deliveroo",
        },
        url: "https://example.com/campaign/deliveroo-stories",
      },
      {
        type: "YouTubeVideos",
        config: {
          platform: "youtube_videos",
          requirements: "Create engaging YouTube videos content",
          hashtags: "#Deliveroo #YouTube #FoodDelivery #Food",
          mentions: "@deliveroo",
        },
        url: "https://example.com/campaign/deliveroo-youtube",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 170000,
    ageRange: { min: 20, max: 50 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "25K–100K",
    influencerTags: ["food", "lifestyle", "entertainment", "travel"],
    creatorStatusFilters: ["InstagramVerified", "YouTubeVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 520,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 75,
      impressions: "1.6M",
      reach: "1.2M",
      posts: 225,
      reviews: 75,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "520AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Jan 31, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@deliveroo",
            highlight: "@deliveroo",
          },
          {
            label: "Hashtags:",
            value: "#Deliveroo #FoodDelivery #Lifestyle",
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
      planName: "Standard",
      planType: "Quarterly",
      nextBillAmount: 180000,
      nextBillCurrency: "AED",
      nextBillDate: "01/04/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "5678",
    },

    createdAt: new Date("2024-01-31T10:00:00Z"),
    updatedAt: new Date("2024-01-31T10:00:00Z"),
  },
  {
    campaignId: "17",
    brandId: "45",
    subscriptionId: "sub_dq_001",
    title: "DQ",
    thumbnailUrl: dqCover2.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(45).brandLogo,
    brandName: getBrandDetails(45).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join DQ's exclusive influencer campaign and showcase our delicious ice cream and frozen treats to your engaged audience. This is a unique opportunity to collaborate with a leading dessert brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our DQ campaign! Share your authentic experience with our delicious ice cream and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#DQ #InfluencerCampaign #IceCream #Dessert",
          mentions: "@dq",
        },
        url: "https://example.com/campaign/dq",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#DQ #Stories #IceCream #Dessert",
          mentions: "@dq",
        },
        url: "https://example.com/campaign/dq-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#DQ #TikTok #IceCream #Dessert",
          mentions: "@dq",
        },
        url: "https://example.com/campaign/dq-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 120000,
    ageRange: { min: 16, max: 40 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "5K–25K",
    influencerTags: ["food", "lifestyle", "entertainment", "travel"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 300,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 38,
      impressions: "850K",
      reach: "620K",
      posts: 125,
      reviews: 38,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "300AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Feb 01, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@dq",
            highlight: "@dq",
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
      planName: "Business",
      planType: "Monthly",
      nextBillAmount: 140000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "9012",
    },

    createdAt: new Date("2024-02-01T10:00:00Z"),
    updatedAt: new Date("2024-02-01T10:00:00Z"),
  },
  {
    campaignId: "18",
    brandId: "45",
    subscriptionId: "sub_dq_002",
    title: "DQ",
    thumbnailUrl: dqCover3.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(45).brandLogo,
    brandName: getBrandDetails(45).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join DQ's exclusive influencer campaign and showcase our delicious ice cream and frozen treats to your engaged audience. This is a unique opportunity to collaborate with a leading dessert brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our DQ campaign! Share your authentic experience with our delicious ice cream and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#DQ #InfluencerCampaign #IceCream #Dessert",
          mentions: "@dq",
        },
        url: "https://example.com/campaign/dq-2",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#DQ #TikTok #IceCream #Dessert",
          mentions: "@dq",
        },
        url: "https://example.com/campaign/dq-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 100000,
    ageRange: { min: 16, max: 40 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "5K–25K",
    influencerTags: ["food", "lifestyle", "entertainment", "travel"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 280,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 35,
      impressions: "780K",
      reach: "550K",
      posts: 108,
      reviews: 35,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "280AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Feb 02, 2024",
    },

    campaignGuidelines: [
      {
        platform: "3 Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@dq",
            highlight: "@dq",
          },
          {
            label: "Visible Tag:",
            value: "@dq",
            highlight: "@dq",
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
      planName: "Premium",
      planType: "Annual",
      nextBillAmount: 320000,
      nextBillCurrency: "AED",
      nextBillDate: "01/01/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "6789",
    },

    createdAt: new Date("2024-02-02T10:00:00Z"),
    updatedAt: new Date("2024-02-02T10:00:00Z"),
  },
  {
    campaignId: "19",
    brandId: "48",
    subscriptionId: "sub_dubai_holding_001",
    title: "Dubai Holding",
    thumbnailUrl: dubaiHoldingCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(48).brandLogo,
    brandName: getBrandDetails(48).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Dubai Holding's exclusive influencer campaign and showcase our premium real estate and investment services to your engaged audience. This is a unique opportunity to collaborate with a leading investment brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Dubai Holding campaign! Share your authentic experience with our investment services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#DubaiHolding #InfluencerCampaign #RealEstate #Investment",
          mentions: "@dubaiholding",
        },
        url: "https://example.com/campaign/dubai-holding",
      },
      {
        type: "YouTubeVideos",
        config: {
          platform: "youtube_videos",
          requirements: "Create engaging YouTube videos content",
          hashtags: "#DubaiHolding #YouTube #RealEstate #Investment",
          mentions: "@dubaiholding",
        },
        url: "https://example.com/campaign/dubai-holding-youtube",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 140000,
    ageRange: { min: 30, max: 65 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "25K–100K",
    influencerTags: ["business", "investment", "realestate", "lifestyle"],
    creatorStatusFilters: ["InstagramVerified", "YouTubeVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 700,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 85,
      impressions: "1.9M",
      reach: "1.4M",
      posts: 256,
      reviews: 85,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "700AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Feb 03, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@dubaiholding",
            highlight: "@dubaiholding",
          },
          {
            label: "Hashtags:",
            value: "#DubaiHolding #RealEstate #Lifestyle",
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
      planName: "Enterprise",
      planType: "Annual",
      nextBillAmount: 580000,
      nextBillCurrency: "AED",
      nextBillDate: "01/01/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "1234",
    },

    createdAt: new Date("2024-02-03T10:00:00Z"),
    updatedAt: new Date("2024-02-03T10:00:00Z"),
  },
  {
    campaignId: "20",
    brandId: "49",
    subscriptionId: "sub_dunkin_001",
    title: "Dunkin",
    thumbnailUrl: dunkinCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(49).brandLogo,
    brandName: getBrandDetails(49).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Dunkin's exclusive influencer campaign and showcase our delicious coffee and donuts to your engaged audience. This is a unique opportunity to collaborate with a leading coffee brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Dunkin campaign! Share your authentic experience with our coffee and donuts and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Dunkin #InfluencerCampaign #Coffee #Donuts",
          mentions: "@dunkin",
        },
        url: "https://example.com/campaign/dunkin",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Dunkin #Stories #Coffee #Donuts",
          mentions: "@dunkin",
        },
        url: "https://example.com/campaign/dunkin-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Dunkin #TikTok #Coffee #Donuts",
          mentions: "@dunkin",
        },
        url: "https://example.com/campaign/dunkin-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 160000,
    ageRange: { min: 18, max: 45 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["food", "lifestyle", "entertainment", "travel"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 450,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 58,
      impressions: "1.2M",
      reach: "880K",
      posts: 175,
      reviews: 58,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "450AED",
      approval: "Manual",
      restricted: "Broad",
      date: "Feb 04, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@dunkin",
            highlight: "@dunkin",
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
      planName: "Standard",
      planType: "Monthly",
      nextBillAmount: 110000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "4567",
    },

    createdAt: new Date("2024-02-04T10:00:00Z"),
    updatedAt: new Date("2024-02-04T10:00:00Z"),
  },
  {
    campaignId: "21",
    brandId: "50",
    subscriptionId: "sub_four_seasons_001",
    title: "Four Seasons",
    thumbnailUrl: fourSeasonsCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(50).brandLogo,
    brandName: getBrandDetails(50).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Four Seasons' exclusive influencer campaign and showcase our luxury hospitality services to your engaged audience. This is a unique opportunity to collaborate with a leading luxury hotel brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Four Seasons campaign! Share your authentic experience with our luxury hospitality services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#FourSeasons #InfluencerCampaign #Luxury #Hospitality",
          mentions: "@fourseasons",
        },
        url: "https://example.com/campaign/four-seasons",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#FourSeasons #Stories #Luxury #Hospitality",
          mentions: "@fourseasons",
        },
        url: "https://example.com/campaign/four-seasons-stories",
      },
      {
        type: "YouTubeVideos",
        config: {
          platform: "youtube_videos",
          requirements: "Create engaging YouTube videos content",
          hashtags: "#FourSeasons #YouTube #Luxury #Hospitality",
          mentions: "@fourseasons",
        },
        url: "https://example.com/campaign/four-seasons-youtube",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 180000,
    ageRange: { min: 25, max: 60 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "25K–100K",
    influencerTags: ["luxury", "travel", "lifestyle", "business"],
    creatorStatusFilters: ["InstagramVerified", "YouTubeVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 800,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 92,
      impressions: "2.1M",
      reach: "1.6M",
      posts: 285,
      reviews: 92,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "800AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Feb 05, 2024",
    },

    campaignGuidelines: [
      {
        platform: "3 Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@fourseasons",
            highlight: "@fourseasons",
          },
          {
            label: "Visible Tag:",
            value: "@fourseasons",
            highlight: "@fourseasons",
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
      planName: "Premium",
      planType: "Annual",
      nextBillAmount: 420000,
      nextBillCurrency: "AED",
      nextBillDate: "01/01/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "8901",
    },

    createdAt: new Date("2024-02-05T10:00:00Z"),
    updatedAt: new Date("2024-02-05T10:00:00Z"),
  },
  {
    campaignId: "22",
    brandId: "50",
    subscriptionId: "sub_four_seasons_002",
    title: "Four Seasons",
    thumbnailUrl: fourSeasonsCover2.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(50).brandLogo,
    brandName: getBrandDetails(50).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Four Seasons' exclusive influencer campaign and showcase our luxury hospitality services to your engaged audience. This is a unique opportunity to collaborate with a leading luxury hotel brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Four Seasons campaign! Share your authentic experience with our luxury hospitality services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#FourSeasons #InfluencerCampaign #Luxury #Hospitality",
          mentions: "@fourseasons",
        },
        url: "https://example.com/campaign/four-seasons-2",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#FourSeasons #TikTok #Luxury #Hospitality",
          mentions: "@fourseasons",
        },
        url: "https://example.com/campaign/four-seasons-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 150000,
    ageRange: { min: 22, max: 55 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["luxury", "travel", "lifestyle", "entertainment"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 600,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 72,
      impressions: "1.5M",
      reach: "1.1M",
      posts: 218,
      reviews: 72,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "600AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Feb 06, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@fourseasons",
            highlight: "@fourseasons",
          },
          {
            label: "Hashtags:",
            value: "#FourSeasons #Luxury #Lifestyle",
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
      planName: "Business",
      planType: "Quarterly",
      nextBillAmount: 280000,
      nextBillCurrency: "AED",
      nextBillDate: "01/04/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "2345",
    },

    createdAt: new Date("2024-02-06T10:00:00Z"),
    updatedAt: new Date("2024-02-06T10:00:00Z"),
  },
  {
    campaignId: "23",
    brandId: "54",
    subscriptionId: "sub_hersheys_001",
    title: "Hershey's",
    thumbnailUrl: hersheysCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(54).brandLogo,
    brandName: getBrandDetails(54).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Hershey's exclusive influencer campaign and showcase our delicious chocolate and candy products to your engaged audience. This is a unique opportunity to collaborate with a leading confectionery brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Hershey's campaign! Share your authentic experience with our chocolate products and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Hersheys #InfluencerCampaign #Chocolate #Candy",
          mentions: "@hersheys",
        },
        url: "https://example.com/campaign/hersheys",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Hersheys #Stories #Chocolate #Candy",
          mentions: "@hersheys",
        },
        url: "https://example.com/campaign/hersheys-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Hersheys #TikTok #Chocolate #Candy",
          mentions: "@hersheys",
        },
        url: "https://example.com/campaign/hersheys-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 140000,
    ageRange: { min: 16, max: 45 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "5K–25K",
    influencerTags: ["food", "lifestyle", "entertainment", "travel"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 320,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 42,
      impressions: "950K",
      reach: "680K",
      posts: 135,
      reviews: 42,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "320AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Feb 07, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@hersheys",
            highlight: "@hersheys",
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
      planName: "Basic",
      planType: "Monthly",
      nextBillAmount: 75000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "5678",
    },

    createdAt: new Date("2024-02-07T10:00:00Z"),
    updatedAt: new Date("2024-02-07T10:00:00Z"),
  },
  {
    campaignId: "24",
    brandId: "54",
    subscriptionId: "sub_hersheys_002",
    title: "Hershey's",
    thumbnailUrl: hersheysCover2.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(54).brandLogo,
    brandName: getBrandDetails(54).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Hershey's exclusive influencer campaign and showcase our delicious chocolate and candy products to your engaged audience. This is a unique opportunity to collaborate with a leading confectionery brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Hershey's campaign! Share your authentic experience with our chocolate products and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Hersheys #InfluencerCampaign #Chocolate #Candy",
          mentions: "@hersheys",
        },
        url: "https://example.com/campaign/hersheys-2",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Hersheys #TikTok #Chocolate #Candy",
          mentions: "@hersheys",
        },
        url: "https://example.com/campaign/hersheys-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 120000,
    ageRange: { min: 16, max: 45 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "5K–25K",
    influencerTags: ["food", "lifestyle", "entertainment", "travel"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 300,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 38,
      impressions: "880K",
      reach: "620K",
      posts: 118,
      reviews: 38,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "300AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Feb 08, 2024",
    },

    campaignGuidelines: [
      {
        platform: "3 Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@hersheys",
            highlight: "@hersheys",
          },
          {
            label: "Visible Tag:",
            value: "@hersheys",
            highlight: "@hersheys",
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
      planName: "Standard",
      planType: "Monthly",
      nextBillAmount: 95000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "9012",
    },

    createdAt: new Date("2024-02-08T10:00:00Z"),
    updatedAt: new Date("2024-02-08T10:00:00Z"),
  },
  {
    campaignId: "25",
    brandId: "55",
    subscriptionId: "sub_hilton_001",
    title: "Hilton",
    thumbnailUrl: hiltonCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(55).brandLogo,
    brandName: getBrandDetails(55).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Hilton's exclusive influencer campaign and showcase our luxury hospitality services to your engaged audience. This is a unique opportunity to collaborate with a leading hotel brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Hilton campaign! Share your authentic experience with our luxury hospitality services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Hilton #InfluencerCampaign #Luxury #Hospitality",
          mentions: "@hilton",
        },
        url: "https://example.com/campaign/hilton",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Hilton #Stories #Luxury #Hospitality",
          mentions: "@hilton",
        },
        url: "https://example.com/campaign/hilton-stories",
      },
      {
        type: "YouTubeVideos",
        config: {
          platform: "youtube_videos",
          requirements: "Create engaging YouTube videos content",
          hashtags: "#Hilton #YouTube #Luxury #Hospitality",
          mentions: "@hilton",
        },
        url: "https://example.com/campaign/hilton-youtube",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 170000,
    ageRange: { min: 25, max: 60 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "25K–100K",
    influencerTags: ["luxury", "travel", "lifestyle", "business"],
    creatorStatusFilters: ["InstagramVerified", "YouTubeVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 750,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 88,
      impressions: "2.0M",
      reach: "1.5M",
      posts: 268,
      reviews: 88,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "750AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Feb 09, 2024",
    },

    campaignGuidelines: [
      {
        platform: "3 Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@hilton",
            highlight: "@hilton",
          },
          {
            label: "Visible Tag:",
            value: "@hilton",
            highlight: "@hilton",
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
      planName: "Premium",
      planType: "Annual",
      nextBillAmount: 380000,
      nextBillCurrency: "AED",
      nextBillDate: "01/01/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "3456",
    },

    createdAt: new Date("2024-02-09T10:00:00Z"),
    updatedAt: new Date("2024-02-09T10:00:00Z"),
  },
  {
    campaignId: "26",
    brandId: "55",
    subscriptionId: "sub_hilton_002",
    title: "Hilton",
    thumbnailUrl: hiltonCover2.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(55).brandLogo,
    brandName: getBrandDetails(55).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Hilton's exclusive influencer campaign and showcase our luxury hospitality services to your engaged audience. This is a unique opportunity to collaborate with a leading hotel brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Hilton campaign! Share your authentic experience with our luxury hospitality services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Hilton #InfluencerCampaign #Luxury #Hospitality",
          mentions: "@hilton",
        },
        url: "https://example.com/campaign/hilton-2",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Hilton #TikTok #Luxury #Hospitality",
          mentions: "@hilton",
        },
        url: "https://example.com/campaign/hilton-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 140000,
    ageRange: { min: 22, max: 55 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["luxury", "travel", "lifestyle", "entertainment"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 550,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 68,
      impressions: "1.4M",
      reach: "1.0M",
      posts: 205,
      reviews: 68,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "550AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Feb 10, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@hilton",
            highlight: "@hilton",
          },
          {
            label: "Hashtags:",
            value: "#Hilton #Luxury #Lifestyle",
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
      planName: "Business",
      planType: "Quarterly",
      nextBillAmount: 240000,
      nextBillCurrency: "AED",
      nextBillDate: "01/04/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "7890",
    },

    createdAt: new Date("2024-02-10T10:00:00Z"),
    updatedAt: new Date("2024-02-10T10:00:00Z"),
  },
  {
    campaignId: "27",
    brandId: "55",
    subscriptionId: "sub_hilton_003",
    title: "Hilton",
    thumbnailUrl: hiltonCover3.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(55).brandLogo,
    brandName: getBrandDetails(55).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Hilton's exclusive influencer campaign and showcase our luxury hospitality services to your engaged audience. This is a unique opportunity to collaborate with a leading hotel brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Hilton campaign! Share your authentic experience with our luxury hospitality services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Hilton #InfluencerCampaign #Luxury #Hospitality",
          mentions: "@hilton",
        },
        url: "https://example.com/campaign/hilton-3",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Hilton #Stories #Luxury #Hospitality",
          mentions: "@hilton",
        },
        url: "https://example.com/campaign/hilton-stories",
      },
      {
        type: "YouTubeVideos",
        config: {
          platform: "youtube_videos",
          requirements: "Create engaging YouTube videos content",
          hashtags: "#Hilton #YouTube #Luxury #Hospitality",
          mentions: "@hilton",
        },
        url: "https://example.com/campaign/hilton-youtube",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 160000,
    ageRange: { min: 25, max: 60 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "25K–100K",
    influencerTags: ["luxury", "travel", "lifestyle", "business"],
    creatorStatusFilters: ["InstagramVerified", "YouTubeVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 680,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 82,
      impressions: "1.8M",
      reach: "1.3M",
      posts: 245,
      reviews: 82,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "680AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Feb 11, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@hilton",
            highlight: "@hilton",
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
      planName: "Standard",
      planType: "Monthly",
      nextBillAmount: 160000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "5678",
    },

    createdAt: new Date("2024-02-11T10:00:00Z"),
    updatedAt: new Date("2024-02-11T10:00:00Z"),
  },
  {
    campaignId: "28",
    brandId: "92",
    subscriptionId: "sub_insurance_market_001",
    title: "InsuranceMarket",
    thumbnailUrl: insurancemarketCover2.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(92).brandLogo,
    brandName: getBrandDetails(92).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join InsuranceMarket's exclusive influencer campaign and showcase our comprehensive insurance services to your engaged audience. This is a unique opportunity to collaborate with a leading insurance brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our InsuranceMarket campaign! Share your authentic experience with our insurance services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags:
            "#InsuranceMarket #InfluencerCampaign #Insurance #FinancialServices",
          mentions: "@insurancemarket",
        },
        url: "https://example.com/campaign/insurance-market",
      },
      {
        type: "GoogleReviews",
        config: {
          platform: "google_reviews",
          requirements: "Create engaging Google reviews content",
          hashtags: "#InsuranceMarket #Reviews #Insurance #FinancialServices",
          mentions: "@insurancemarket",
        },
        url: "https://example.com/campaign/insurance-market-reviews",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 95000,
    ageRange: { min: 25, max: 65 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["business", "finance", "lifestyle", "technology"],
    creatorStatusFilters: ["InstagramVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 380,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 48,
      impressions: "1.1M",
      reach: "780K",
      posts: 152,
      reviews: 48,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "380AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Feb 12, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@insurancemarket",
            highlight: "@insurancemarket",
          },
          {
            label: "Hashtags:",
            value: "#InsuranceMarket #Finance #Lifestyle",
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
      planName: "Business",
      planType: "Quarterly",
      nextBillAmount: 260000,
      nextBillCurrency: "AED",
      nextBillDate: "01/04/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "9012",
    },

    createdAt: new Date("2024-02-12T10:00:00Z"),
    updatedAt: new Date("2024-02-12T10:00:00Z"),
  },
  {
    campaignId: "29",
    brandId: "58",
    subscriptionId: "sub_jumeirah_001",
    title: "Jumeirah",
    thumbnailUrl: jumeirahCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(58).brandLogo,
    brandName: getBrandDetails(58).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Jumeirah's exclusive influencer campaign and showcase our luxury hospitality services to your engaged audience. This is a unique opportunity to collaborate with a leading luxury hotel brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Jumeirah campaign! Share your authentic experience with our luxury hospitality services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Jumeirah #InfluencerCampaign #Luxury #Hospitality",
          mentions: "@jumeirah",
        },
        url: "https://example.com/campaign/jumeirah",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Jumeirah #Stories #Luxury #Hospitality",
          mentions: "@jumeirah",
        },
        url: "https://example.com/campaign/jumeirah-stories",
      },
      {
        type: "YouTubeVideos",
        config: {
          platform: "youtube_videos",
          requirements: "Create engaging YouTube videos content",
          hashtags: "#Jumeirah #YouTube #Luxury #Hospitality",
          mentions: "@jumeirah",
        },
        url: "https://example.com/campaign/jumeirah-youtube",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 190000,
    ageRange: { min: 25, max: 65 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "25K–100K",
    influencerTags: ["luxury", "travel", "lifestyle", "business"],
    creatorStatusFilters: ["InstagramVerified", "YouTubeVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 850,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 95,
      impressions: "2.3M",
      reach: "1.7M",
      posts: 298,
      reviews: 95,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "850AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Feb 13, 2024",
    },

    campaignGuidelines: [
      {
        platform: "3 Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@jumeirah",
            highlight: "@jumeirah",
          },
          {
            label: "Visible Tag:",
            value: "@jumeirah",
            highlight: "@jumeirah",
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
      nextBillAmount: 650000,
      nextBillCurrency: "AED",
      nextBillDate: "01/01/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "2345",
    },

    createdAt: new Date("2024-02-13T10:00:00Z"),
    updatedAt: new Date("2024-02-13T10:00:00Z"),
  },
  {
    campaignId: "30",
    brandId: "60",
    subscriptionId: "sub_kitopi_001",
    title: "Kitopi",
    thumbnailUrl: kitopiCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(60).brandLogo,
    brandName: getBrandDetails(60).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Kitopi's exclusive influencer campaign and showcase our cloud kitchen and food delivery services to your engaged audience. This is a unique opportunity to collaborate with a leading food technology brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Kitopi campaign! Share your authentic experience with our cloud kitchen services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Kitopi #InfluencerCampaign #FoodDelivery #CloudKitchen",
          mentions: "@kitopi",
        },
        url: "https://example.com/campaign/kitopi",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Kitopi #Stories #FoodDelivery #CloudKitchen",
          mentions: "@kitopi",
        },
        url: "https://example.com/campaign/kitopi-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Kitopi #TikTok #FoodDelivery #CloudKitchen",
          mentions: "@kitopi",
        },
        url: "https://example.com/campaign/kitopi-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 130000,
    ageRange: { min: 18, max: 45 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["food", "lifestyle", "entertainment", "technology"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 420,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 55,
      impressions: "1.3M",
      reach: "920K",
      posts: 168,
      reviews: 55,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "420AED",
      approval: "Manual",
      restricted: "Broad",
      date: "Feb 14, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@kitopi",
            highlight: "@kitopi",
          },
          {
            label: "Hashtags:",
            value: "#Kitopi #FoodDelivery #Lifestyle",
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
      planName: "Standard",
      planType: "Monthly",
      nextBillAmount: 180000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "6789",
    },

    createdAt: new Date("2024-02-14T10:00:00Z"),
    updatedAt: new Date("2024-02-14T10:00:00Z"),
  },
  {
    campaignId: "31",
    brandId: "61",
    subscriptionId: "sub_landmark_group_001",
    title: "Landmark Group",
    thumbnailUrl: landmarkCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(61).brandLogo,
    brandName: getBrandDetails(61).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Landmark Group's exclusive influencer campaign and showcase our retail and fashion services to your engaged audience. This is a unique opportunity to collaborate with a leading retail brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Landmark Group campaign! Share your authentic experience with our retail services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#LandmarkGroup #InfluencerCampaign #Retail #Fashion",
          mentions: "@landmarkgroup",
        },
        url: "https://example.com/campaign/landmark-group",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#LandmarkGroup #Stories #Retail #Fashion",
          mentions: "@landmarkgroup",
        },
        url: "https://example.com/campaign/landmark-group-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#LandmarkGroup #TikTok #Retail #Fashion",
          mentions: "@landmarkgroup",
        },
        url: "https://example.com/campaign/landmark-group-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 160000,
    ageRange: { min: 18, max: 50 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["fashion", "lifestyle", "entertainment", "shopping"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 480,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 62,
      impressions: "1.4M",
      reach: "1.0M",
      posts: 185,
      reviews: 62,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "480AED",
      approval: "Manual",
      restricted: "Broad",
      date: "Feb 15, 2024",
    },

    campaignGuidelines: [
      {
        platform: "3 Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@landmarkgroup",
            highlight: "@landmarkgroup",
          },
          {
            label: "Visible Tag:",
            value: "@landmarkgroup",
            highlight: "@landmarkgroup",
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
      planName: "Premium",
      planType: "Annual",
      nextBillAmount: 420000,
      nextBillCurrency: "AED",
      nextBillDate: "01/01/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "4567",
    },

    createdAt: new Date("2024-02-15T10:00:00Z"),
    updatedAt: new Date("2024-02-15T10:00:00Z"),
  },
  {
    campaignId: "32",
    brandId: "62",
    subscriptionId: "sub_marriott_001",
    title: "Marriott",
    thumbnailUrl: mariottCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(62).brandLogo,
    brandName: getBrandDetails(62).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Marriott's exclusive influencer campaign and showcase our luxury hospitality services to your engaged audience. This is a unique opportunity to collaborate with a leading hotel brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Marriott campaign! Share your authentic experience with our luxury hospitality services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Marriott #InfluencerCampaign #Luxury #Hospitality",
          mentions: "@marriott",
        },
        url: "https://example.com/campaign/marriott",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Marriott #Stories #Luxury #Hospitality",
          mentions: "@marriott",
        },
        url: "https://example.com/campaign/marriott-stories",
      },
      {
        type: "YouTubeVideos",
        config: {
          platform: "youtube_videos",
          requirements: "Create engaging YouTube videos content",
          hashtags: "#Marriott #YouTube #Luxury #Hospitality",
          mentions: "@marriott",
        },
        url: "https://example.com/campaign/marriott-youtube",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 175000,
    ageRange: { min: 25, max: 60 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "25K–100K",
    influencerTags: ["luxury", "travel", "lifestyle", "business"],
    creatorStatusFilters: ["InstagramVerified", "YouTubeVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 780,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 92,
      impressions: "2.2M",
      reach: "1.6M",
      posts: 275,
      reviews: 92,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "780AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Feb 16, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@marriott",
            highlight: "@marriott",
          },
          {
            label: "Hashtags:",
            value: "#Marriott #Luxury #Hospitality",
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
      planName: "Business",
      planType: "Quarterly",
      nextBillAmount: 320000,
      nextBillCurrency: "AED",
      nextBillDate: "01/04/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "8901",
    },

    createdAt: new Date("2024-02-16T10:00:00Z"),
    updatedAt: new Date("2024-02-16T10:00:00Z"),
  },
  {
    campaignId: "33",
    brandId: "64",
    subscriptionId: "sub_meydan_001",
    title: "Meydan",
    thumbnailUrl: meydanCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(64).brandLogo,
    brandName: getBrandDetails(64).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Meydan's exclusive influencer campaign and showcase our luxury hospitality and entertainment services to your engaged audience. This is a unique opportunity to collaborate with a leading entertainment brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Meydan campaign! Share your authentic experience with our luxury entertainment services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Meydan #InfluencerCampaign #Luxury #Entertainment",
          mentions: "@meydan",
        },
        url: "https://example.com/campaign/meydan",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Meydan #Stories #Luxury #Entertainment",
          mentions: "@meydan",
        },
        url: "https://example.com/campaign/meydan-stories",
      },
      {
        type: "YouTubeVideos",
        config: {
          platform: "youtube_videos",
          requirements: "Create engaging YouTube videos content",
          hashtags: "#Meydan #YouTube #Luxury #Entertainment",
          mentions: "@meydan",
        },
        url: "https://example.com/campaign/meydan-youtube",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 150000,
    ageRange: { min: 25, max: 60 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "25K–100K",
    influencerTags: ["luxury", "entertainment", "lifestyle", "travel"],
    creatorStatusFilters: ["InstagramVerified", "YouTubeVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 650,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 78,
      impressions: "1.8M",
      reach: "1.3M",
      posts: 235,
      reviews: 78,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "650AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Feb 17, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@meydan",
            highlight: "@meydan",
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
      planName: "Standard",
      planType: "Monthly",
      nextBillAmount: 220000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "1234",
    },

    createdAt: new Date("2024-02-17T10:00:00Z"),
    updatedAt: new Date("2024-02-17T10:00:00Z"),
  },
  {
    campaignId: "34",
    brandId: "64",
    subscriptionId: "sub_meydan_002",
    title: "Meydan",
    thumbnailUrl: meydanCover2.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(64).brandLogo,
    brandName: getBrandDetails(64).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Meydan's exclusive influencer campaign and showcase our luxury hospitality and entertainment services to your engaged audience. This is a unique opportunity to collaborate with a leading entertainment brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Meydan campaign! Share your authentic experience with our luxury entertainment services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Meydan #InfluencerCampaign #Luxury #Entertainment",
          mentions: "@meydan",
        },
        url: "https://example.com/campaign/meydan-2",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Meydan #TikTok #Luxury #Entertainment",
          mentions: "@meydan",
        },
        url: "https://example.com/campaign/meydan-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 120000,
    ageRange: { min: 22, max: 55 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["luxury", "entertainment", "lifestyle", "travel"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 520,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 65,
      impressions: "1.5M",
      reach: "1.1M",
      posts: 198,
      reviews: 65,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "520AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Feb 18, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@meydan",
            highlight: "@meydan",
          },
          {
            label: "Hashtags:",
            value: "#Meydan #Entertainment #Lifestyle",
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
      planName: "Business",
      planType: "Quarterly",
      nextBillAmount: 280000,
      nextBillCurrency: "AED",
      nextBillDate: "01/04/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "5678",
    },

    createdAt: new Date("2024-02-18T10:00:00Z"),
    updatedAt: new Date("2024-02-18T10:00:00Z"),
  },
  {
    campaignId: "35",
    brandId: "66",
    subscriptionId: "sub_nandos_001",
    title: "Nando's",
    thumbnailUrl: nandoCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(66).brandLogo,
    brandName: getBrandDetails(66).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Nando's exclusive influencer campaign and showcase our delicious peri-peri chicken and Portuguese cuisine to your engaged audience. This is a unique opportunity to collaborate with a leading restaurant brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Nando's campaign! Share your authentic experience with our peri-peri chicken and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Nandos #InfluencerCampaign #Food #PeriPeri",
          mentions: "@nandos",
        },
        url: "https://example.com/campaign/nandos",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Nandos #Stories #Food #PeriPeri",
          mentions: "@nandos",
        },
        url: "https://example.com/campaign/nandos-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Nandos #TikTok #Food #PeriPeri",
          mentions: "@nandos",
        },
        url: "https://example.com/campaign/nandos-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 145000,
    ageRange: { min: 18, max: 45 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["food", "lifestyle", "entertainment", "travel"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 380,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 48,
      impressions: "1.1M",
      reach: "780K",
      posts: 145,
      reviews: 48,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "380AED",
      approval: "Manual",
      restricted: "Broad",
      date: "Feb 19, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@nandos",
            highlight: "@nandos",
          },
          {
            label: "Hashtags:",
            value: "#Nandos #Food #Lifestyle",
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
      planName: "Standard",
      planType: "Monthly",
      nextBillAmount: 160000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "3456",
    },

    createdAt: new Date("2024-02-19T10:00:00Z"),
    updatedAt: new Date("2024-02-19T10:00:00Z"),
  },
  {
    campaignId: "36",
    brandId: "66",
    subscriptionId: "sub_nandos_002",
    title: "Nando's",
    thumbnailUrl: nandoCover2.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(66).brandLogo,
    brandName: getBrandDetails(66).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Nando's exclusive influencer campaign and showcase our delicious peri-peri chicken and Portuguese cuisine to your engaged audience. This is a unique opportunity to collaborate with a leading restaurant brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Nando's campaign! Share your authentic experience with our peri-peri chicken and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Nandos #InfluencerCampaign #Food #PeriPeri",
          mentions: "@nandos",
        },
        url: "https://example.com/campaign/nandos-2",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Nandos #TikTok #Food #PeriPeri",
          mentions: "@nandos",
        },
        url: "https://example.com/campaign/nandos-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 125000,
    ageRange: { min: 18, max: 45 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "5K–25K",
    influencerTags: ["food", "lifestyle", "entertainment", "travel"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 320,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 42,
      impressions: "950K",
      reach: "680K",
      posts: 128,
      reviews: 42,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "320AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Feb 20, 2024",
    },

    campaignGuidelines: [
      {
        platform: "3 Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@nandos",
            highlight: "@nandos",
          },
          {
            label: "Visible Tag:",
            value: "@nandos",
            highlight: "@nandos",
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
      planName: "Business",
      planType: "Quarterly",
      nextBillAmount: 240000,
      nextBillCurrency: "AED",
      nextBillDate: "01/04/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "7890",
    },

    createdAt: new Date("2024-02-20T10:00:00Z"),
    updatedAt: new Date("2024-02-20T10:00:00Z"),
  },
  {
    campaignId: "37",
    brandId: "68",
    subscriptionId: "sub_nikki_beach_001",
    title: "Nikki Beach",
    thumbnailUrl: nikkiCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(68).brandLogo,
    brandName: getBrandDetails(68).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Nikki Beach's exclusive influencer campaign and showcase our luxury beach club and entertainment services to your engaged audience. This is a unique opportunity to collaborate with a leading lifestyle brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Nikki Beach campaign! Share your authentic experience with our luxury beach club services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#NikkiBeach #InfluencerCampaign #Luxury #BeachClub",
          mentions: "@nikkibeach",
        },
        url: "https://example.com/campaign/nikki-beach",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#NikkiBeach #Stories #Luxury #BeachClub",
          mentions: "@nikkibeach",
        },
        url: "https://example.com/campaign/nikki-beach-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#NikkiBeach #TikTok #Luxury #BeachClub",
          mentions: "@nikkibeach",
        },
        url: "https://example.com/campaign/nikki-beach-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 135000,
    ageRange: { min: 22, max: 55 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "25K–100K",
    influencerTags: ["luxury", "lifestyle", "entertainment", "travel"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 580,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 72,
      impressions: "1.6M",
      reach: "1.2M",
      posts: 218,
      reviews: 72,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "580AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Feb 21, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@nikkibeach",
            highlight: "@nikkibeach",
          },
          {
            label: "Hashtags:",
            value: "#NikkiBeach #Luxury #Lifestyle",
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
      planName: "Enterprise",
      planType: "Annual",
      nextBillAmount: 580000,
      nextBillCurrency: "AED",
      nextBillDate: "01/01/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "2345",
    },

    createdAt: new Date("2024-02-21T10:00:00Z"),
    updatedAt: new Date("2024-02-21T10:00:00Z"),
  },
  {
    campaignId: "38",
    brandId: "69",
    subscriptionId: "sub_noon_001",
    title: "Noon",
    thumbnailUrl: noonCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(69).brandLogo,
    brandName: getBrandDetails(69).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Noon's exclusive influencer campaign and showcase our e-commerce and digital marketplace services to your engaged audience. This is a unique opportunity to collaborate with a leading e-commerce brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Noon campaign! Share your authentic experience with our e-commerce services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Noon #InfluencerCampaign #Ecommerce #DigitalMarketplace",
          mentions: "@noon",
        },
        url: "https://example.com/campaign/noon",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Noon #Stories #Ecommerce #DigitalMarketplace",
          mentions: "@noon",
        },
        url: "https://example.com/campaign/noon-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Noon #TikTok #Ecommerce #DigitalMarketplace",
          mentions: "@noon",
        },
        url: "https://example.com/campaign/noon-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 200000,
    ageRange: { min: 18, max: 50 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["technology", "lifestyle", "entertainment", "shopping"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 550,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 68,
      impressions: "1.4M",
      reach: "1.0M",
      posts: 205,
      reviews: 68,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "550AED",
      approval: "Manual",
      restricted: "Broad",
      date: "Feb 22, 2024",
    },

    campaignGuidelines: [
      {
        platform: "3 Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@noon",
            highlight: "@noon",
          },
          {
            label: "Visible Tag:",
            value: "@noon",
            highlight: "@noon",
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
      planName: "Premium",
      planType: "Annual",
      nextBillAmount: 480000,
      nextBillCurrency: "AED",
      nextBillDate: "01/01/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "6789",
    },

    createdAt: new Date("2024-02-22T10:00:00Z"),
    updatedAt: new Date("2024-02-22T10:00:00Z"),
  },
  {
    campaignId: "39",
    brandId: "69",
    subscriptionId: "sub_noon_002",
    title: "Noon",
    thumbnailUrl: noonCover2.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(69).brandLogo,
    brandName: getBrandDetails(69).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Noon's exclusive influencer campaign and showcase our e-commerce and digital marketplace services to your engaged audience. This is a unique opportunity to collaborate with a leading e-commerce brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Noon campaign! Share your authentic experience with our e-commerce services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Noon #InfluencerCampaign #Ecommerce #DigitalMarketplace",
          mentions: "@noon",
        },
        url: "https://example.com/campaign/noon-2",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Noon #TikTok #Ecommerce #DigitalMarketplace",
          mentions: "@noon",
        },
        url: "https://example.com/campaign/noon-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 170000,
    ageRange: { min: 18, max: 50 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["technology", "lifestyle", "entertainment", "shopping"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 480,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 58,
      impressions: "1.3M",
      reach: "950K",
      posts: 175,
      reviews: 58,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "480AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Feb 23, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@noon",
            highlight: "@noon",
          },
          {
            label: "Hashtags:",
            value: "#Noon #Ecommerce #Lifestyle",
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
      planName: "Business",
      planType: "Quarterly",
      nextBillAmount: 320000,
      nextBillCurrency: "AED",
      nextBillDate: "01/04/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "9012",
    },

    createdAt: new Date("2024-02-23T10:00:00Z"),
    updatedAt: new Date("2024-02-23T10:00:00Z"),
  },
  {
    campaignId: "40",
    brandId: "70",
    subscriptionId: "sub_novomed_001",
    title: "Novomed",
    thumbnailUrl: novomedCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(70).brandLogo,
    brandName: getBrandDetails(70).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Novomed's exclusive influencer campaign and showcase our premium medical and aesthetic services to your engaged audience. This is a unique opportunity to collaborate with a leading healthcare brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Novomed campaign! Share your authentic experience with our medical services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Novomed #InfluencerCampaign #Healthcare #Medical",
          mentions: "@novomed",
        },
        url: "https://example.com/campaign/novomed",
      },
      {
        type: "GoogleReviews",
        config: {
          platform: "google_reviews",
          requirements: "Create engaging Google reviews content",
          hashtags: "#Novomed #Reviews #Healthcare #Medical",
          mentions: "@novomed",
        },
        url: "https://example.com/campaign/novomed-reviews",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 85000,
    ageRange: { min: 25, max: 65 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["healthcare", "lifestyle", "beauty", "business"],
    creatorStatusFilters: ["InstagramVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 350,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 45,
      impressions: "1.0M",
      reach: "720K",
      posts: 142,
      reviews: 45,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "350AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Feb 24, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@novomed",
            highlight: "@novomed",
          },
          {
            label: "Hashtags:",
            value: "#Novomed #Healthcare #Lifestyle",
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
      planName: "Standard",
      planType: "Monthly",
      nextBillAmount: 140000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "4567",
    },

    createdAt: new Date("2024-02-24T10:00:00Z"),
    updatedAt: new Date("2024-02-24T10:00:00Z"),
  },
  {
    campaignId: "41",
    brandId: "70",
    subscriptionId: "sub_novomed_002",
    title: "Novomed",
    thumbnailUrl: novomedCover2.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(70).brandLogo,
    brandName: getBrandDetails(70).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Novomed's exclusive influencer campaign and showcase our premium medical and aesthetic services to your engaged audience. This is a unique opportunity to collaborate with a leading healthcare brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Novomed campaign! Share your authentic experience with our medical services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Novomed #InfluencerCampaign #Healthcare #Medical",
          mentions: "@novomed",
        },
        url: "https://example.com/campaign/novomed-2",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Novomed #TikTok #Healthcare #Medical",
          mentions: "@novomed",
        },
        url: "https://example.com/campaign/novomed-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 75000,
    ageRange: { min: 22, max: 60 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "5K–25K",
    influencerTags: ["healthcare", "lifestyle", "beauty", "entertainment"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 280,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 35,
      impressions: "750K",
      reach: "520K",
      posts: 108,
      reviews: 35,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "280AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Feb 25, 2024",
    },

    campaignGuidelines: [
      {
        platform: "3 Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@novomed",
            highlight: "@novomed",
          },
          {
            label: "Visible Tag:",
            value: "@novomed",
            highlight: "@novomed",
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
      planName: "Business",
      planType: "Quarterly",
      nextBillAmount: 200000,
      nextBillCurrency: "AED",
      nextBillDate: "01/04/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "7890",
    },

    createdAt: new Date("2024-02-25T10:00:00Z"),
    updatedAt: new Date("2024-02-25T10:00:00Z"),
  },
  {
    campaignId: "42",
    brandId: "71",
    subscriptionId: "sub_ounass_001",
    title: "Ounass",
    thumbnailUrl: ounassCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(71).brandLogo,
    brandName: getBrandDetails(71).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Ounass's exclusive influencer campaign and showcase our luxury fashion and lifestyle products to your engaged audience. This is a unique opportunity to collaborate with a leading luxury e-commerce brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Ounass campaign! Share your authentic experience with our luxury fashion products and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Ounass #InfluencerCampaign #Luxury #Fashion",
          mentions: "@ounass",
        },
        url: "https://example.com/campaign/ounass",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Ounass #Stories #Luxury #Fashion",
          mentions: "@ounass",
        },
        url: "https://example.com/campaign/ounass-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Ounass #TikTok #Luxury #Fashion",
          mentions: "@ounass",
        },
        url: "https://example.com/campaign/ounass-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 155000,
    ageRange: { min: 22, max: 55 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "25K–100K",
    influencerTags: ["luxury", "fashion", "lifestyle", "entertainment"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 620,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 75,
      impressions: "1.7M",
      reach: "1.2M",
      posts: 225,
      reviews: 75,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "620AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Feb 26, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@ounass",
            highlight: "@ounass",
          },
          {
            label: "Hashtags:",
            value: "#Ounass #Luxury #Lifestyle",
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
      planName: "Enterprise",
      planType: "Annual",
      nextBillAmount: 720000,
      nextBillCurrency: "AED",
      nextBillDate: "01/01/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "3456",
    },

    createdAt: new Date("2024-02-26T10:00:00Z"),
    updatedAt: new Date("2024-02-26T10:00:00Z"),
  },
  {
    campaignId: "43",
    brandId: "71",
    subscriptionId: "sub_ounass_002",
    title: "Ounass",
    thumbnailUrl: ounassCover2.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(71).brandLogo,
    brandName: getBrandDetails(71).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Ounass's exclusive influencer campaign and showcase our luxury fashion and lifestyle products to your engaged audience. This is a unique opportunity to collaborate with a leading luxury e-commerce brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Ounass campaign! Share your authentic experience with our luxury fashion products and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Ounass #InfluencerCampaign #Luxury #Fashion",
          mentions: "@ounass",
        },
        url: "https://example.com/campaign/ounass-2",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Ounass #TikTok #Luxury #Fashion",
          mentions: "@ounass",
        },
        url: "https://example.com/campaign/ounass-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 130000,
    ageRange: { min: 20, max: 50 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["luxury", "fashion", "lifestyle", "entertainment"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 520,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 62,
      impressions: "1.3M",
      reach: "950K",
      posts: 185,
      reviews: 62,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "520AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Feb 27, 2024",
    },

    campaignGuidelines: [
      {
        platform: "3 Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@ounass",
            highlight: "@ounass",
          },
          {
            label: "Visible Tag:",
            value: "@ounass",
            highlight: "@ounass",
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
      planName: "Business",
      planType: "Quarterly",
      nextBillAmount: 360000,
      nextBillCurrency: "AED",
      nextBillDate: "01/04/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "5678",
    },

    createdAt: new Date("2024-02-27T10:00:00Z"),
    updatedAt: new Date("2024-02-27T10:00:00Z"),
  },
  {
    campaignId: "44",
    brandId: "72",
    subscriptionId: "sub_panda_express_001",
    title: "Panda Express",
    thumbnailUrl: pandaCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(72).brandLogo,
    brandName: getBrandDetails(72).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Panda Express's exclusive influencer campaign and showcase our delicious Chinese-American cuisine to your engaged audience. This is a unique opportunity to collaborate with a leading restaurant brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Panda Express campaign! Share your authentic experience with our Chinese-American cuisine and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#PandaExpress #InfluencerCampaign #Food #ChineseAmerican",
          mentions: "@pandaexpress",
        },
        url: "https://example.com/campaign/panda-express",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#PandaExpress #Stories #Food #ChineseAmerican",
          mentions: "@pandaexpress",
        },
        url: "https://example.com/campaign/panda-express-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#PandaExpress #TikTok #Food #ChineseAmerican",
          mentions: "@pandaexpress",
        },
        url: "https://example.com/campaign/panda-express-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 135000,
    ageRange: { min: 18, max: 45 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["food", "lifestyle", "entertainment", "travel"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 360,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 42,
      impressions: "850K",
      reach: "620K",
      posts: 128,
      reviews: 42,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "360AED",
      approval: "Manual",
      restricted: "Broad",
      date: "Feb 28, 2024",
    },

    campaignGuidelines: [
      {
        platform: "Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@pandaexpress",
            highlight: "@pandaexpress",
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
      planName: "Premium",
      planType: "Annual",
      nextBillAmount: 520000,
      nextBillCurrency: "AED",
      nextBillDate: "01/01/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "9012",
    },

    createdAt: new Date("2024-02-28T10:00:00Z"),
    updatedAt: new Date("2024-02-28T10:00:00Z"),
  },

  {
    campaignId: "45",
    brandId: "73",
    subscriptionId: "sub_peugeot_001",
    title: "Peugeot",
    thumbnailUrl: peugeotCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(73).brandLogo,
    brandName: getBrandDetails(73).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Peugeot's exclusive influencer campaign and showcase our premium automotive and vehicle services to your engaged audience. This is a unique opportunity to collaborate with a leading automotive brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Peugeot campaign! Share your authentic experience with our automotive services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Peugeot #InfluencerCampaign #Automotive #Vehicles",
          mentions: "@peugeot",
        },
        url: "https://example.com/campaign/peugeot",
      },
      {
        type: "YouTubeVideos",
        config: {
          platform: "youtube_videos",
          requirements: "Create engaging YouTube videos content",
          hashtags: "#Peugeot #YouTube #Automotive #Vehicles",
          mentions: "@peugeot",
        },
        url: "https://example.com/campaign/peugeot-youtube",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 110000,
    ageRange: { min: 25, max: 60 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "25K–100K",
    influencerTags: ["automotive", "lifestyle", "business", "technology"],
    creatorStatusFilters: ["InstagramVerified", "YouTubeVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 450,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 55,
      impressions: "1.2M",
      reach: "880K",
      posts: 165,
      reviews: 55,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "450AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Feb 29, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@peugeot",
            highlight: "@peugeot",
          },
          {
            label: "Hashtags:",
            value: "#Peugeot #Automotive #Lifestyle",
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
      planName: "Business",
      planType: "Quarterly",
      nextBillAmount: 280000,
      nextBillCurrency: "AED",
      nextBillDate: "01/04/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "7890",
    },

    createdAt: new Date("2024-02-29T10:00:00Z"),
    updatedAt: new Date("2024-02-29T10:00:00Z"),
  },
  {
    campaignId: "46",
    brandId: "75",
    subscriptionId: "sub_reeses_001",
    title: "Reese's",
    thumbnailUrl: reecesCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(75).brandLogo,
    brandName: getBrandDetails(75).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Reese's exclusive influencer campaign and showcase our delicious chocolate and peanut butter products to your engaged audience. This is a unique opportunity to collaborate with a leading confectionery brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Reese's campaign! Share your authentic experience with our chocolate and peanut butter products and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Reeses #InfluencerCampaign #Chocolate #PeanutButter",
          mentions: "@reeses",
        },
        url: "https://example.com/campaign/reeses",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Reeses #Stories #Chocolate #PeanutButter",
          mentions: "@reeses",
        },
        url: "https://example.com/campaign/reeses-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Reeses #TikTok #Chocolate #PeanutButter",
          mentions: "@reeses",
        },
        url: "https://example.com/campaign/reeses-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 125000,
    ageRange: { min: 16, max: 45 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "5K–25K",
    influencerTags: ["food", "lifestyle", "entertainment", "travel"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Automated",

    voucherValue: 290,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 35,
      impressions: "720K",
      reach: "520K",
      posts: 105,
      reviews: 35,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "290AED",
      approval: "Automated",
      restricted: "Broad",
      date: "Mar 01, 2024",
    },

    campaignGuidelines: [
      {
        platform: "3 Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@reeses",
            highlight: "@reeses",
          },
          {
            label: "Visible Tag:",
            value: "@reeses",
            highlight: "@reeses",
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
      planName: "Standard",
      planType: "Monthly",
      nextBillAmount: 120000,
      nextBillCurrency: "AED",
      nextBillDate: "01/02/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "1234",
    },

    createdAt: new Date("2024-03-01T10:00:00Z"),
    updatedAt: new Date("2024-03-01T10:00:00Z"),
  },
  {
    campaignId: "47",
    brandId: "79",
    subscriptionId: "sub_sivvi_001",
    title: "Sivvi",
    thumbnailUrl: sivviCover.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(79).brandLogo,
    brandName: getBrandDetails(79).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Sivvi's exclusive influencer campaign and showcase our premium fashion and lifestyle products to your engaged audience. This is a unique opportunity to collaborate with a leading fashion brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Sivvi campaign! Share your authentic experience with our fashion products and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Sivvi #InfluencerCampaign #Fashion #Lifestyle",
          mentions: "@sivvi",
        },
        url: "https://example.com/campaign/sivvi",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Sivvi #Stories #Fashion #Lifestyle",
          mentions: "@sivvi",
        },
        url: "https://example.com/campaign/sivvi-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Sivvi #TikTok #Fashion #Lifestyle",
          mentions: "@sivvi",
        },
        url: "https://example.com/campaign/sivvi-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 140000,
    ageRange: { min: 18, max: 50 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["fashion", "lifestyle", "entertainment", "shopping"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 420,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 52,
      impressions: "1.1M",
      reach: "820K",
      posts: 158,
      reviews: 52,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "420AED",
      approval: "Manual",
      restricted: "Broad",
      date: "Mar 02, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@sivvi",
            highlight: "@sivvi",
          },
          {
            label: "Hashtags:",
            value: "#Sivvi #Fashion #Lifestyle",
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
      planName: "Premium",
      planType: "Annual",
      nextBillAmount: 440000,
      nextBillCurrency: "AED",
      nextBillDate: "01/01/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "5678",
    },

    createdAt: new Date("2024-03-02T10:00:00Z"),
    updatedAt: new Date("2024-03-02T10:00:00Z"),
  },
  {
    campaignId: "48",
    brandId: "76",
    subscriptionId: "sub_ritz_carlton_001",
    title: "The Ritz Carlton",
    thumbnailUrl: ritzCover.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(76).brandLogo,
    brandName: getBrandDetails(76).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join The Ritz Carlton's exclusive influencer campaign and showcase our luxury hospitality and fine dining services to your engaged audience. This is a unique opportunity to collaborate with a leading luxury hotel brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our The Ritz Carlton campaign! Share your authentic experience with our luxury hospitality services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#RitzCarlton #InfluencerCampaign #Luxury #Hospitality",
          mentions: "@ritzcarlton",
        },
        url: "https://example.com/campaign/ritz-carlton",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#RitzCarlton #Stories #Luxury #Hospitality",
          mentions: "@ritzcarlton",
        },
        url: "https://example.com/campaign/ritz-carlton-stories",
      },
      {
        type: "YouTubeVideos",
        config: {
          platform: "youtube_videos",
          requirements: "Create engaging YouTube videos content",
          hashtags: "#RitzCarlton #YouTube #Luxury #Hospitality",
          mentions: "@ritzcarlton",
        },
        url: "https://example.com/campaign/ritz-carlton-youtube",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Specific",
    potentialReach: 200000,
    ageRange: { min: 28, max: 70 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "25K–100K",
    influencerTags: ["luxury", "travel", "lifestyle", "business"],
    creatorStatusFilters: ["InstagramVerified", "YouTubeVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 900,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 95,
      impressions: "2.5M",
      reach: "1.8M",
      posts: 285,
      reviews: 95,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "900AED",
      approval: "Manual",
      restricted: "Specific",
      date: "Mar 03, 2024",
    },

    campaignGuidelines: [
      {
        platform: "3 Instagram Stories",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram stories content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@ritzcarlton",
            highlight: "@ritzcarlton",
          },
          {
            label: "Visible Tag:",
            value: "@ritzcarlton",
            highlight: "@ritzcarlton",
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
      nextBillAmount: 850000,
      nextBillCurrency: "AED",
      nextBillDate: "01/01/2025",
      paymentDate: "01/01/2024",
      cardType: "Visa",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "9012",
    },

    createdAt: new Date("2024-03-03T10:00:00Z"),
    updatedAt: new Date("2024-03-03T10:00:00Z"),
  },
  {
    campaignId: "49",
    brandId: "85",
    subscriptionId: "sub_uber_001",
    title: "Uber",
    thumbnailUrl: uberCover1.src,
    campaignType: "Delivery",
    offerType: "Barter",

    brandLogo: getBrandDetails(85).brandLogo,
    brandName: getBrandDetails(85).brandName,

    payments: [
      {
        arrangement: "Barter",
        currency: "AED",
        amount: 0,
      },
    ],

    offerDescription:
      "Join Uber's exclusive influencer campaign and showcase our ride-hailing and delivery services to your engaged audience. This is a unique opportunity to collaborate with a leading transportation brand in the industry.",
    advancedVisibility: {
      duration: 90,
      unit: "Days",
    },
    campaignMessage:
      "We're excited to partner with you for our Uber campaign! Share your authentic experience with our ride-hailing services and help us reach new audiences. Your creativity and influence will make this campaign a success.",

    channels: [
      {
        type: "InstagramPosts",
        config: {
          platform: "instagram_posts",
          requirements: "Create engaging Instagram posts content",
          hashtags: "#Uber #InfluencerCampaign #RideHailing #Transportation",
          mentions: "@uber",
        },
        url: "https://example.com/campaign/uber",
      },
      {
        type: "InstagramStories",
        config: {
          platform: "instagram_stories",
          requirements: "Create engaging Instagram stories content",
          hashtags: "#Uber #Stories #RideHailing #Transportation",
          mentions: "@uber",
        },
        url: "https://example.com/campaign/uber-stories",
      },
      {
        type: "TikTokVideos",
        config: {
          platform: "tiktok_videos",
          requirements: "Create engaging TikTok videos content",
          hashtags: "#Uber #TikTok #RideHailing #Transportation",
          mentions: "@uber",
        },
        url: "https://example.com/campaign/uber-tiktok",
      },
    ],

    rulesAndGuidelines:
      "• Content must be original and authentic\n• Include brand mentions and hashtags\n• Follow platform-specific guidelines\n• Maintain professional standards\n• Submit content for approval before posting\n• Engage with audience comments\n• Complete campaign within specified timeframe",
    audienceDefinition: "Broad",
    potentialReach: 250000,
    ageRange: { min: 18, max: 55 },
    excludedLanguages: ["ar", "fr"],
    followersTierRange: "10K–50K",
    influencerTags: ["technology", "lifestyle", "entertainment", "travel"],
    creatorStatusFilters: ["InstagramVerified", "TikTokVerified"],

    creatorApprovalType: "Manual",

    voucherValue: 600,
    voucherCurrency: "AED",

    campaignStats: {
      creators: 78,
      impressions: "1.9M",
      reach: "1.4M",
      posts: 235,
      reviews: 78,
    },
    campaignDetails: {
      walkIn: "Walk-in",
      barter: "Barter",
      price: "600AED",
      approval: "Manual",
      restricted: "Broad",
      date: "Mar 04, 2024",
    },

    campaignGuidelines: [
      {
        platform: "2 Instagram Posts",
        platformIcon: "/icons/campaign/details/overview/instagram.svg",
        requirements: "Create engaging Instagram posts content",
        rules: [
          {
            label: "Visible Tag:",
            value: "@uber",
            highlight: "@uber",
          },
          {
            label: "Hashtags:",
            value: "#Uber #Transportation #Lifestyle",
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
      planName: "Business",
      planType: "Quarterly",
      nextBillAmount: 400000,
      nextBillCurrency: "AED",
      nextBillDate: "01/04/2025",
      paymentDate: "01/01/2024",
      cardType: "Mastercard",
      cardIcon: "/icons/campaign/details/overview/mastercard.svg",
      cardEnding: "3456",
    },

    createdAt: new Date("2024-03-04T10:00:00Z"),
    updatedAt: new Date("2024-03-04T10:00:00Z"),
  },
];

export { CampaignsData };
