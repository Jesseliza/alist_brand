import { Creator, CreatorTier, Gender } from "@/types/entities";
// import fullprofileImage from "@/assets/images/creators/1.png";
// import fullprofileImage2 from "@/assets/images/creators/2.png";
// import fullprofileImage3 from "@/assets/images/creators/3.png";
// import fullprofileImage4 from "@/assets/images/creators/4.png";
// import fullprofileImage5 from "@/assets/images/creators/5.jpeg";
// import fullprofileImage6 from "@/assets/images/creators/6.jpeg";
// import fullprofileImage7 from "@/assets/images/creators/7.jpeg";
// import fullprofileImage8 from "@/assets/images/creators/8.jpeg";
// import fullprofileImage9 from "@/assets/images/creators/9.jpeg";
// import fullprofileImage10 from "@/assets/images/creators/10.jpeg";
// import fullprofileImage11 from "@/assets/images/creators/11.jpeg";
// import fullprofileImage12 from "@/assets/images/creators/12.jpeg";
// import fullprofileImage13 from "@/assets/images/creators/13.jpeg";
// import fullprofileImage14 from "@/assets/images/creators/14.jpeg";

// Raw creator data with only creator IDs for similar creators
const rawCreatorsData = [
  {
    creatorId: "1",
    isApproved: true,
    firstName: "Bianca",
    lastName: "Williams",
    fullName: "Bianca Williams",
    avatarUrl: "",
    tier: CreatorTier.MACRO, // Gold tier maps to MACRO
    verifiedPlatforms: ["Instagram", "TikTok"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "bianca.williams",
        url: "https://instagram.com/bianca.williams",
      },
      {
        platform: "TikTok",
        handle: "@bianca.williams",
        url: "https://tiktok.com/@bianca.williams",
      },
    ],
    email: "bianca.williams@gmail.com",
    phone: "+971501234567",
    whatsappNumber: "+971501234567",
    nationality: "American",
    location: "Dubai, UAE",
    dateOfBirth: new Date("1995-06-15"),
    age: 28,
    gender: Gender.FEMALE,
    signUpDate: new Date("2023-01-15"),
    profileCompletion: 92,
    influencerTags: ["Food & Drinks", "Lifestyle", "Travel"],
    credibilityScore: 82,
    followerCount: 15000,
    reach: 45000,
    engagementRate: 4.2,
    totalRedemptionsValue: 1250,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 15,
    postsCount: 45,
    reviewsCount: 12,
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 15000,
        avgLikes: 650,
        engagementRate: 4.2,
        audienceCredibility: 82,
        avgComments: 45,
        avgReelsViews: 2500,
        sponsoredCount: 8,
        sponsoredPerformance: 3.8,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 60.3, color: "#00A4B6", label: "Real" }, // dark teal, full-circle track
          { value: 20.7, color: "#E97500", label: "Suspicious" }, // bright cyan, progress arc
          { value: 15.2, color: "#15A1FF", label: "Mass followers" }, // dark teal, full-circle track
          { value: 3.8, color: "#999999", label: "Influencers" }, // bright cyan, progress arc
        ],
        genderDist: [
          { label: "Female", value: 68, color: "#00A4B6" },
          { label: "Male", value: 32, color: "#E97500" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 2.5, color: "#00D2E9" },
            Female: { value: 2.5, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 14, color: "#00D2E9" },
            Female: { value: 20, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 16, color: "#00D2E9" },
            Female: { value: 24, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 9, color: "#00D2E9" },
            Female: { value: 15, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 5, color: "#00D2E9" },
            Female: { value: 6, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "USA", value: 20.0, color: "#00A4B6" },
          { country: "China", value: 15.0, color: "#00A4B6" },
          { country: "India", value: 12.0, color: "#00A4B6" },
          { country: "Brazil", value: 10.0, color: "#00A4B6" },
          { country: "Others", value: 43.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "New York", value: 20.0, color: "#00A4B6" },
          { city: "Boston", value: 15.0, color: "#00A4B6" },
          { city: "Dubai", value: 12.0, color: "#00A4B6" },
          { city: "Sao Paulo", value: 10.0, color: "#00A4B6" },
          { city: "others", value: 43.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "English",
            AudienceLanguage: { value: 62, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 53, color: "#00A4B6" },
          },
          {
            language: "Mandarin",
            AudienceLanguage: { value: 32, color: "#00A4B6" },
          },
          {
            language: "Hindi",
            AudienceLanguage: { value: 30, color: "#00A4B6" },
          },
          {
            language: "Russian",
            AudienceLanguage: { value: 14, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 62, color: "#00A4B6" },
          },
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 53, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 32, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 30, color: "#00A4B6" },
          },
          {
            ethnicity: "MENA",
            AudienceEthnicity: { value: 14, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: [
              "Jan 2023",
              "Apr 2023",
              "Jul 2023",
              "Oct 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [35000, 37500, 40000, 42500, 45000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [35500, 41700, 41800, 45000, 45500],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: [
              "Jan 2023",
              "Apr 2023",
              "Jul 2023",
              "Oct 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [3500, 4000, 4500, 5000, 5500],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [5100, 4300, 3800, 4200, 4490],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "Starbucks", value: 85, color: "#00A4B6" },
        { brand: "Nike", value: 72, color: "#00A4B6" },
        { brand: "Apple", value: 68, color: "#00A4B6" },
        { brand: "Zara", value: 65, color: "#00A4B6" },
        { brand: "McDonald's", value: 60, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        {
          topic: "Friends, Family & Relationships",
          value: 20.0,
          color: "#00A4B6",
        },
        { topic: "Restaurants, Food & Grocery", value: 15.0, color: "#00A4B6" },
        {
          topic: "Clothes, Shoes, Handbags & Accessories",
          value: 12.0,
          color: "#00A4B6",
        },
        { topic: "Technology & Gadgets", value: 10.0, color: "#00A4B6" },
        { topic: "Others", value: 43.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@dubai_food_guide",
        "@travel_uae",
        "@lifestyle_dubai",
        "@foodie_dubai",
        "@dubai_restaurants",
      ],
      frequentlyUsedHashtags: [
        "#dubaifood",
        "#foodie",
        "#travel",
        "#lifestyle",
        "#dubai",
        "#foodphotography",
        "#travelphotography",
        "#lifestyleblogger",
      ],
      audienceInterestsBrands: [
        { brand: "Starbucks", value: 78, color: "#00A4B6" },
        { brand: "McDonald's", value: 65, color: "#00A4B6" },
        { brand: "KFC", value: 58, color: "#00A4B6" },
        { brand: "Nike", value: 52, color: "#00A4B6" },
        { brand: "Adidas", value: 48, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Food & Dining", value: 85, color: "#00A4B6" },
        { topic: "Travel", value: 70, color: "#00A4B6" },
        { topic: "Lifestyle", value: 65, color: "#00A4B6" },
        { topic: "Fashion", value: 40, color: "#00A4B6" },
        { topic: "Fitness", value: 35, color: "#00A4B6" },
      ],
      similarCreators: ["1", "5", "9", "2", "3", "4"],
    },
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["0", "2", "3"],
    redemptionSegments: [
      { value: 25, color: "#1B9AAA", label: "Walk in" },
      { value: 13.5, color: "#FF9900", label: "Deliveries" },
      { value: 7.5, color: "#15A1FF", label: "Online" },
      { value: 4, color: "#B400FF", label: "Exclusive" },
    ],
    socialPlatforms: [
      { platform: "instagram", isActive: true },
      { platform: "tiktok", isActive: true },
      { platform: "snapchat", isActive: false },
      { platform: "twitch", isActive: false },
      { platform: "youtube", isActive: false },
    ],
  },
];

// Function to build similar creators with dynamic data
const buildSimilarCreators = (
  creatorIds: string[],
  allCreators: Creator[]
): Creator[] => {
  return creatorIds
    .map((creatorId) => allCreators.find((c) => c.creatorId === creatorId))
    .filter((creator): creator is Creator => creator !== null);
};

// Build the final creators data with dynamic similar creators
export const CreatorsData: Creator[] = rawCreatorsData.map((creator) => {
  // If creator has insights with similar creators, build them dynamically
  if (creator.insights?.similarCreators) {
    const dynamicSimilarCreators = buildSimilarCreators(
      creator.insights.similarCreators as string[],
      rawCreatorsData as unknown as Creator[]
    );
    return {
      ...creator,
      insights: {
        ...creator.insights,
        similarCreators: dynamicSimilarCreators.map(c => ({
          creatorId: c.creatorId,
          name: c.fullName,
          followerCount: c.followerCount,
          isVerified: c.verifiedPlatforms.length > 0,
          avatarUrl: c.avatarUrl,
        })),
      },
    };
  }

  return creator;
}) as Creator[];