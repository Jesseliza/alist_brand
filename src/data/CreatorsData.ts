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

const fullprofileImage = { src: "" };
const fullprofileImage2 = { src: "" };
const fullprofileImage3 = { src: "" };
const fullprofileImage4 = { src: "" };
const fullprofileImage5 = { src: "" };
const fullprofileImage6 = { src: "" };
const fullprofileImage7 = { src: "" };
const fullprofileImage8 = { src: "" };
const fullprofileImage9 = { src: "" };
const fullprofileImage10 = { src: "" };
const fullprofileImage11 = { src: "" };
const fullprofileImage12 = { src: "" };
const fullprofileImage13 = { src: "" };
const fullprofileImage14 = { src: "" };

// Raw creator data with only creator IDs for similar creators
const rawCreatorsData = [
  {
    creatorId: "1",
    isApproved: true,
    firstName: "Bianca",
    lastName: "Williams",
    fullName: "Bianca Williams",
    avatarUrl: fullprofileImage.src,
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
  {
    creatorId: "2",
    isApproved: true,
    firstName: "Mason",
    lastName: "Wilson",
    fullName: "Mason Wilson",
    avatarUrl: fullprofileImage2.src,
    tier: CreatorTier.MICRO, // Silver tier maps to MICRO
    verifiedPlatforms: ["Instagram"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "mason.wilson",
        url: "https://instagram.com/mason.wilson",
      },
    ],
    email: "mason.wilson@yahoo.com",
    phone: "+971529876543",
    whatsappNumber: "+971529876543",
    nationality: "British",
    location: "Abu Dhabi, UAE",
    dateOfBirth: new Date("1992-03-20"),
    age: 31,
    gender: Gender.MALE,
    signUpDate: new Date("2023-03-10"),
    profileCompletion: 65,
    influencerTags: ["Travel", "Photography"],
    credibilityScore: 75,
    followerCount: 8500,
    reach: 25500,
    engagementRate: 3.8,
    totalRedemptionsValue: 680,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 10,
    postsCount: 32,
    reviewsCount: 8,
    createdAt: new Date("2023-03-10"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["0", "2", "3"],
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 8500,
        avgLikes: 320,
        engagementRate: 3.8,
        audienceCredibility: 75,
        avgComments: 28,
        avgReelsViews: 1800,
        sponsoredCount: 5,
        sponsoredPerformance: 2.8,
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
              "Mar 2023",
              "Jun 2023",
              "Sep 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [5000, 6500, 7500, 8200, 8500],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [5000, 6500, 7500, 8200, 8500],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: [
              "Mar 2023",
              "Jun 2023",
              "Sep 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [280, 300, 310, 315, 320],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [280, 300, 310, 315, 320],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "Nike", value: 80, color: "#00A4B6" },
        { brand: "Adidas", value: 75, color: "#00A4B6" },
        { brand: "Apple", value: 65, color: "#00A4B6" },
        { brand: "Samsung", value: 60, color: "#00A4B6" },
        { brand: "Sony", value: 55, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Travel & Adventure", value: 25.0, color: "#00A4B6" },
        { topic: "Photography & Art", value: 20.0, color: "#00A4B6" },
        { topic: "Technology & Gadgets", value: 15.0, color: "#00A4B6" },
        { topic: "Sports & Fitness", value: 12.0, color: "#00A4B6" },
        { topic: "Others", value: 28.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@travel_uae",
        "@photography_dubai",
        "@adventure_uae",
        "@nature_photography",
        "@culture_dubai",
      ],
      frequentlyUsedHashtags: [
        "#travel",
        "#photography",
        "#adventure",
        "#nature",
        "#dubai",
        "#photooftheday",
        "#travelphotography",
        "#adventuretime",
      ],
      audienceInterestsBrands: [
        { brand: "Nike", value: 75, color: "#00A4B6" },
        { brand: "Adidas", value: 70, color: "#00A4B6" },
        { brand: "Apple", value: 60, color: "#00A4B6" },
        { brand: "Samsung", value: 55, color: "#00A4B6" },
        { brand: "Sony", value: 50, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Travel & Adventure", value: 80, color: "#00A4B6" },
        { topic: "Photography & Art", value: 75, color: "#00A4B6" },
        { topic: "Technology & Gadgets", value: 60, color: "#00A4B6" },
        { topic: "Sports & Fitness", value: 55, color: "#00A4B6" },
        { topic: "Nature & Outdoors", value: 45, color: "#00A4B6" },
      ],
      similarCreators: ["1", "3", "5", "9", "10"],
    },
    redemptionSegments: [
      { value: 20, color: "#1B9AAA", label: "Walk in" },
      { value: 18.5, color: "#FF9900", label: "Deliveries" },
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
  {
    creatorId: "3",
    isApproved: true,
    firstName: "Emily",
    lastName: "Johnson",
    fullName: "Emily Johnson",
    avatarUrl: fullprofileImage3.src,
    tier: CreatorTier.MEGA, // Platinum tier maps to MEGA
    verifiedPlatforms: ["Instagram", "TikTok", "YouTube"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "emily.johnson",
        url: "https://instagram.com/emily.johnson",
      },
      {
        platform: "TikTok",
        handle: "@emily.johnson",
        url: "https://tiktok.com/@emily.johnson",
      },
      {
        platform: "YouTube",
        handle: "Emily Johnson",
        url: "https://youtube.com/@emilyjohnson",
      },
    ],
    email: "emily.johnson@outlook.com",
    phone: "+971551112222",
    whatsappNumber: "+971551112222",
    nationality: "Canadian",
    location: "Sharjah, UAE",
    dateOfBirth: new Date("1990-08-12"),
    age: 33,
    gender: Gender.FEMALE,
    signUpDate: new Date("2022-11-20"),
    profileCompletion: 88,
    influencerTags: ["Beauty", "Fashion", "Lifestyle"],
    credibilityScore: 95,
    followerCount: 22000,
    reach: 66000,
    engagementRate: 5.2,
    totalRedemptionsValue: 2100,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 25,
    postsCount: 78,
    reviewsCount: 18,
    createdAt: new Date("2022-11-20"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["0", "2", "3"],
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 22000,
        avgLikes: 1150,
        engagementRate: 5.2,
        audienceCredibility: 95,
        avgComments: 115,
        avgReelsViews: 4200,
        sponsoredCount: 12,
        sponsoredPerformance: 4.8,
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
          { country: "USA", value: 12.0, color: "#00A4B6" },
          { country: "China", value: 10.0, color: "#00A4B6" },
          { country: "USA", value: 43.0, color: "#00A4B6" },
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
              "Nov 2022",
              "Feb 2023",
              "May 2023",
              "Aug 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [12000, 15000, 18000, 20000, 22000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [12000, 15000, 18000, 20000, 22000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: [
              "Nov 2022",
              "Feb 2023",
              "May 2023",
              "Aug 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [850, 920, 980, 1050, 1150],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [850, 920, 980, 1050, 1150],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "Zara", value: 85, color: "#00A4B6" },
        { brand: "H&M", value: 80, color: "#00A4B6" },
        { brand: "Sephora", value: 75, color: "#00A4B6" },
        { brand: "MAC", value: 70, color: "#00A4B6" },
        { brand: "Nike", value: 65, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Beauty & Fashion", value: 30.0, color: "#00A4B6" },
        { topic: "Lifestyle & Wellness", value: 25.0, color: "#00A4B6" },
        { topic: "Makeup & Skincare", value: 20.0, color: "#00A4B6" },
        { topic: "Shopping & Retail", value: 15.0, color: "#00A4B6" },
        { topic: "Others", value: 10.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@beauty_dubai",
        "@fashion_uae",
        "@lifestyle_dubai",
        "@makeup_artist",
        "@skincare_expert",
      ],
      frequentlyUsedHashtags: [
        "#beauty",
        "#fashion",
        "#lifestyle",
        "#makeup",
        "#skincare",
        "#beautyblogger",
        "#fashionblogger",
        "#lifestyleblogger",
      ],
      audienceInterestsBrands: [
        { brand: "Zara", value: 80, color: "#00A4B6" },
        { brand: "H&M", value: 75, color: "#00A4B6" },
        { brand: "Sephora", value: 70, color: "#00A4B6" },
        { brand: "MAC", value: 65, color: "#00A4B6" },
        { brand: "Nike", value: 60, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Beauty & Fashion", value: 85, color: "#00A4B6" },
        { topic: "Lifestyle & Wellness", value: 80, color: "#00A4B6" },
        { topic: "Makeup & Skincare", value: 75, color: "#00A4B6" },
        { topic: "Shopping & Retail", value: 70, color: "#00A4B6" },
        { topic: "Health & Fitness", value: 65, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "7", "9", "11"],
    },
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
  {
    creatorId: "4",
    isApproved: true,
    firstName: "Michael",
    lastName: "Brown",
    fullName: "Michael Brown",
    avatarUrl: fullprofileImage4.src,
    tier: CreatorTier.NANO, // Bronze tier maps to NANO
    verifiedPlatforms: ["Instagram"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "michael.brown",
        url: "https://instagram.com/michael.brown",
      },
    ],
    email: "michael.brown@example.com",
    phone: "+971563334444",
    whatsappNumber: "+971563334444",
    nationality: "American",
    location: "Ajman, UAE",
    dateOfBirth: new Date("1998-11-05"),
    age: 25,
    gender: Gender.MALE,
    signUpDate: new Date("2023-06-05"),
    profileCompletion: 55,
    influencerTags: ["Gaming", "Tech"],
    credibilityScore: 68,
    followerCount: 5000,
    reach: 15000,
    engagementRate: 2.8,
    totalRedemptionsValue: 320,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 5,
    postsCount: 18,
    reviewsCount: 3,
    createdAt: new Date("2023-06-05"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["0", "2", "3"],
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 5000,
        avgLikes: 140,
        engagementRate: 2.8,
        audienceCredibility: 68,
        avgComments: 12,
        avgReelsViews: 800,
        sponsoredCount: 2,
        sponsoredPerformance: 2.2,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 55.2, color: "#00A4B6", label: "Real" },
          { value: 25.3, color: "#E97500", label: "Suspicious" },
          { value: 15.1, color: "#15A1FF", label: "Mass followers" },
          { value: 4.4, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Male", value: 75, color: "#00A4B6" },
          { label: "Female", value: 25, color: "#E97500" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 15, color: "#00D2E9" },
            Female: { value: 5, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 35, color: "#00D2E9" },
            Female: { value: 15, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 25, color: "#00D2E9" },
            Female: { value: 10, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 15, color: "#00D2E9" },
            Female: { value: 8, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 10, color: "#00D2E9" },
            Female: { value: 2, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "USA", value: 35.0, color: "#00A4B6" },
          { country: "China", value: 20.0, color: "#00A4B6" },
          { country: "India", value: 15.0, color: "#00A4B6" },
          { country: "Brazil", value: 12.0, color: "#00A4B6" },
          { country: "Others", value: 18.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "New York", value: 25.0, color: "#00A4B6" },
          { city: "Los Angeles", value: 20.0, color: "#00A4B6" },
          { city: "Dubai", value: 15.0, color: "#00A4B6" },
          { city: "Mumbai", value: 12.0, color: "#00A4B6" },
          { city: "others", value: 28.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "English",
            AudienceLanguage: { value: 75, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 45, color: "#00A4B6" },
          },
          {
            language: "Mandarin",
            AudienceLanguage: { value: 25, color: "#00A4B6" },
          },
          {
            language: "Hindi",
            AudienceLanguage: { value: 20, color: "#00A4B6" },
          },
          {
            language: "Russian",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 65, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 45, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 25, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 20, color: "#00A4B6" },
          },
          {
            ethnicity: "MENA",
            AudienceEthnicity: { value: 15, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: ["Jun 2023", "Sep 2023", "Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [3000, 4000, 4500, 5000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [3000, 4000, 4500, 5000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: ["Jun 2023", "Sep 2023", "Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [80, 100, 120, 140],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [80, 100, 120, 140],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "PlayStation", value: 85, color: "#00A4B6" },
        { brand: "Xbox", value: 80, color: "#00A4B6" },
        { brand: "Nintendo", value: 75, color: "#00A4B6" },
        { brand: "Apple", value: 70, color: "#00A4B6" },
        { brand: "Samsung", value: 65, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Gaming & Entertainment", value: 40.0, color: "#00A4B6" },
        { topic: "Technology & Gadgets", value: 30.0, color: "#00A4B6" },
        { topic: "Esports & Gaming", value: 20.0, color: "#00A4B6" },
        { topic: "Software & Apps", value: 15.0, color: "#00A4B6" },
        { topic: "Others", value: 5.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@playstation",
        "@xbox",
        "@nintendo",
        "@gaming_dubai",
        "@tech_reviews",
      ],
      frequentlyUsedHashtags: [
        "#gaming",
        "#tech",
        "#esports",
        "#gamingcommunity",
        "#technology",
        "#gaminglife",
        "#techreview",
        "#gamingchannel",
      ],
      audienceInterestsBrands: [
        { brand: "PlayStation", value: 80, color: "#00A4B6" },
        { brand: "Xbox", value: 75, color: "#00A4B6" },
        { brand: "Nintendo", value: 70, color: "#00A4B6" },
        { brand: "Apple", value: 65, color: "#00A4B6" },
        { brand: "Samsung", value: 60, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Gaming & Entertainment", value: 85, color: "#00A4B6" },
        { topic: "Technology & Gadgets", value: 80, color: "#00A4B6" },
        { topic: "Esports & Gaming", value: 75, color: "#00A4B6" },
        { topic: "Software & Apps", value: 70, color: "#00A4B6" },
        { topic: "Hardware & Devices", value: 65, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "5", "6"],
    },
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
  {
    creatorId: "5",
    isApproved: true,
    firstName: "Olivia",
    lastName: "Davis",
    fullName: "Olivia Davis",
    avatarUrl: fullprofileImage5.src,
    tier: CreatorTier.MACRO, // Gold tier maps to MACRO
    verifiedPlatforms: ["Instagram", "TikTok"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "olivia.davis",
        url: "https://instagram.com/olivia.davis",
      },
      {
        platform: "TikTok",
        handle: "@olivia.davis",
        url: "https://tiktok.com/@olivia.davis",
      },
    ],
    email: "olivia.davis@gmail.com",
    phone: "+971545556666",
    whatsappNumber: "+971545556666",
    nationality: "Australian",
    location: "Ras Al Khaimah, UAE",
    dateOfBirth: new Date("1994-12-25"),
    age: 29,
    gender: Gender.FEMALE,
    signUpDate: new Date("2022-12-25"),
    profileCompletion: 72,
    influencerTags: ["Food & Drinks", "Cooking", "Recipes"],
    credibilityScore: 79,
    followerCount: 18000,
    reach: 54000,
    engagementRate: 4.1,
    totalRedemptionsValue: 1450,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 13,
    postsCount: 52,
    reviewsCount: 11,
    createdAt: new Date("2022-12-25"),
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 18000,
        avgLikes: 750,
        engagementRate: 4.1,
        audienceCredibility: 79,
        avgComments: 35,
        avgReelsViews: 3200,
        sponsoredCount: 10,
        sponsoredPerformance: 4.0,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 65.2, color: "#00A4B6", label: "Real" },
          { value: 18.3, color: "#E97500", label: "Suspicious" },
          { value: 12.1, color: "#15A1FF", label: "Mass followers" },
          { value: 4.4, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Female", value: 72, color: "#00A4B6" },
          { label: "Male", value: 28, color: "#E97500" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 8, color: "#00D2E9" },
            Female: { value: 12, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 20, color: "#00D2E9" },
            Female: { value: 35, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 18, color: "#00D2E9" },
            Female: { value: 28, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 12, color: "#00D2E9" },
            Female: { value: 15, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 8, color: "#00D2E9" },
            Female: { value: 10, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "Australia", value: 40.0, color: "#00A4B6" },
          { country: "USA", value: 25.0, color: "#00A4B6" },
          { country: "UK", value: 15.0, color: "#00A4B6" },
          { country: "Canada", value: 12.0, color: "#00A4B6" },
          { country: "Others", value: 8.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Sydney", value: 30.0, color: "#00A4B6" },
          { city: "Melbourne", value: 25.0, color: "#00A4B6" },
          { city: "Dubai", value: 20.0, color: "#00A4B6" },
          { city: "London", value: 15.0, color: "#00A4B6" },
          { city: "others", value: 10.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "English",
            AudienceLanguage: { value: 85, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 35, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 20, color: "#00A4B6" },
          },
          {
            language: "Italian",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "German",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 75, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 35, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 20, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 15, color: "#00A4B6" },
          },
          {
            ethnicity: "MENA",
            AudienceEthnicity: { value: 10, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: [
              "Dec 2022",
              "Mar 2023",
              "Jun 2023",
              "Sep 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [12000, 14000, 15500, 16500, 17500, 18000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [12000, 14000, 15500, 16500, 17500, 18000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: [
              "Dec 2022",
              "Mar 2023",
              "Jun 2023",
              "Sep 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [500, 600, 650, 700, 720, 750],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [500, 600, 650, 700, 720, 750],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "KitchenAid", value: 90, color: "#00A4B6" },
        { brand: "Le Creuset", value: 85, color: "#00A4B6" },
        { brand: "All-Clad", value: 80, color: "#00A4B6" },
        { brand: "Cuisinart", value: 75, color: "#00A4B6" },
        { brand: "Breville", value: 70, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Food & Cooking", value: 45.0, color: "#00A4B6" },
        { topic: "Recipe Sharing", value: 35.0, color: "#00A4B6" },
        { topic: "Kitchen & Appliances", value: 25.0, color: "#00A4B6" },
        { topic: "Culinary Arts", value: 20.0, color: "#00A4B6" },
        { topic: "Food Photography", value: 15.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@kitchenaid",
        "@lecreuset",
        "@allclad",
        "@cuisinart",
        "@breville",
      ],
      frequentlyUsedHashtags: [
        "#cooking",
        "#recipes",
        "#foodie",
        "#kitchen",
        "#cookingtips",
        "#recipe",
        "#foodphotography",
        "#homecooking",
      ],
      audienceInterestsBrands: [
        { brand: "KitchenAid", value: 85, color: "#00A4B6" },
        { brand: "Le Creuset", value: 80, color: "#00A4B6" },
        { brand: "All-Clad", value: 75, color: "#00A4B6" },
        { brand: "Cuisinart", value: 70, color: "#00A4B6" },
        { brand: "Breville", value: 65, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Food & Cooking", value: 90, color: "#00A4B6" },
        { topic: "Recipe Sharing", value: 85, color: "#00A4B6" },
        { topic: "Kitchen & Appliances", value: 80, color: "#00A4B6" },
        { topic: "Culinary Arts", value: 75, color: "#00A4B6" },
        { topic: "Food Photography", value: 70, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "6"],
    },
  },
  {
    creatorId: "6",
    isApproved: true,
    firstName: "David",
    lastName: "Wilson",
    fullName: "David Wilson",
    avatarUrl: fullprofileImage6.src,
    tier: CreatorTier.MICRO, // Silver tier maps to MICRO
    verifiedPlatforms: ["Instagram"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "david.wilson",
        url: "https://instagram.com/david.wilson",
      },
    ],
    email: "david.wilson@yahoo.com",
    phone: "+971587778888",
    whatsappNumber: "+971587778888",
    nationality: "South African",
    location: "Fujairah, UAE",
    dateOfBirth: new Date("1991-07-18"),
    age: 32,
    gender: Gender.MALE,
    signUpDate: new Date("2023-02-12"),
    profileCompletion: 60,
    influencerTags: ["Fitness", "Health", "Nutrition"],
    credibilityScore: 62,
    followerCount: 9500,
    reach: 28500,
    engagementRate: 3.2,
    totalRedemptionsValue: 480,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 7,
    postsCount: 28,
    reviewsCount: 5,
    createdAt: new Date("2023-02-12"),
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 9500,
        avgLikes: 300,
        engagementRate: 3.2,
        audienceCredibility: 62,
        avgComments: 15,
        avgReelsViews: 1200,
        sponsoredCount: 5,
        sponsoredPerformance: 3.0,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 70.5, color: "#00A4B6", label: "Real" },
          { value: 15.2, color: "#E97500", label: "Suspicious" },
          { value: 10.8, color: "#15A1FF", label: "Mass followers" },
          { value: 3.5, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Male", value: 65, color: "#00A4B6" },
          { label: "Female", value: 35, color: "#E97500" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 5, color: "#00D2E9" },
            Female: { value: 3, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 25, color: "#00D2E9" },
            Female: { value: 15, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 30, color: "#00D2E9" },
            Female: { value: 20, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 20, color: "#00D2E9" },
            Female: { value: 12, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 15, color: "#00D2E9" },
            Female: { value: 10, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "South Africa", value: 35.0, color: "#00A4B6" },
          { country: "USA", value: 25.0, color: "#00A4B6" },
          { country: "UK", value: 15.0, color: "#00A4B6" },
          { country: "Australia", value: 12.0, color: "#00A4B6" },
          { country: "Others", value: 13.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Cape Town", value: 25.0, color: "#00A4B6" },
          { city: "Johannesburg", value: 20.0, color: "#00A4B6" },
          { city: "Dubai", value: 15.0, color: "#00A4B6" },
          { city: "London", value: 12.0, color: "#00A4B6" },
          { city: "others", value: 28.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "English",
            AudienceLanguage: { value: 90, color: "#00A4B6" },
          },
          {
            language: "Afrikaans",
            AudienceLanguage: { value: 25, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "German",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 8, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 65, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 25, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 15, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 10, color: "#00A4B6" },
          },
          {
            ethnicity: "MENA",
            AudienceEthnicity: { value: 5, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: [
              "Feb 2023",
              "May 2023",
              "Aug 2023",
              "Nov 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [6000, 7200, 8000, 8800, 9500],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [6000, 7200, 8000, 8800, 9500],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: [
              "Feb 2023",
              "May 2023",
              "Aug 2023",
              "Nov 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [200, 240, 260, 280, 300],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [200, 240, 260, 280, 300],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "Nike", value: 85, color: "#00A4B6" },
        { brand: "Adidas", value: 80, color: "#00A4B6" },
        { brand: "Under Armour", value: 75, color: "#00A4B6" },
        { brand: "Lululemon", value: 70, color: "#00A4B6" },
        { brand: "Gymshark", value: 65, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Fitness & Health", value: 50.0, color: "#00A4B6" },
        { topic: "Nutrition & Diet", value: 35.0, color: "#00A4B6" },
        { topic: "Workout Routines", value: 30.0, color: "#00A4B6" },
        { topic: "Sports & Athletics", value: 25.0, color: "#00A4B6" },
        { topic: "Wellness & Lifestyle", value: 20.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@nike",
        "@adidas",
        "@underarmour",
        "@lululemon",
        "@gymshark",
      ],
      frequentlyUsedHashtags: [
        "#fitness",
        "#health",
        "#nutrition",
        "#workout",
        "#gym",
        "#fitnessmotivation",
        "#healthy",
        "#lifestyle",
      ],
      audienceInterestsBrands: [
        { brand: "Nike", value: 80, color: "#00A4B6" },
        { brand: "Adidas", value: 75, color: "#00A4B6" },
        { brand: "Under Armour", value: 70, color: "#00A4B6" },
        { brand: "Lululemon", value: 65, color: "#00A4B6" },
        { brand: "Gymshark", value: 60, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Fitness & Health", value: 85, color: "#00A4B6" },
        { topic: "Nutrition & Diet", value: 75, color: "#00A4B6" },
        { topic: "Workout Routines", value: 70, color: "#00A4B6" },
        { topic: "Sports & Athletics", value: 65, color: "#00A4B6" },
        { topic: "Wellness & Lifestyle", value: 60, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "7",
    isApproved: true,
    firstName: "Sophia",
    lastName: "Thompson",
    fullName: "Sophia Thompson",
    avatarUrl: fullprofileImage7.src,
    tier: CreatorTier.MEGA, // Platinum tier maps to MEGA
    verifiedPlatforms: ["Instagram", "TikTok", "YouTube"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "sophia.thompson",
        url: "https://instagram.com/sophia.thompson",
      },
      {
        platform: "TikTok",
        handle: "@sophia.thompson",
        url: "https://tiktok.com/@sophia.thompson",
      },
      {
        platform: "YouTube",
        handle: "Sophia Thompson",
        url: "https://youtube.com/@sophiathompson",
      },
    ],
    email: "sophia.thompson@outlook.com",
    phone: "+971509990000",
    whatsappNumber: "+971509990000",
    nationality: "French",
    location: "Dubai, UAE",
    dateOfBirth: new Date("1989-04-15"),
    age: 34,
    gender: Gender.FEMALE,
    signUpDate: new Date("2023-04-01"),
    profileCompletion: 95,
    influencerTags: ["Fashion", "Style", "Luxury"],
    credibilityScore: 98,
    followerCount: 25000,
    reach: 75000,
    engagementRate: 5.8,
    totalRedemptionsValue: 2800,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 30,
    postsCount: 95,
    reviewsCount: 22,
    createdAt: new Date("2023-04-01"),
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 25000,
        avgLikes: 1450,
        engagementRate: 5.8,
        audienceCredibility: 98,
        avgComments: 120,
        avgReelsViews: 8500,
        sponsoredCount: 25,
        sponsoredPerformance: 4.8,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Female", value: 75, color: "#00A4B6" },
          { label: "Male", value: 25, color: "#E97500" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 3, color: "#00D2E9" },
            Female: { value: 8, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 12, color: "#00D2E9" },
            Female: { value: 35, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 15, color: "#00D2E9" },
            Female: { value: 40, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 8, color: "#00D2E9" },
            Female: { value: 12, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 5, color: "#00D2E9" },
            Female: { value: 5, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "France", value: 40.0, color: "#00A4B6" },
          { country: "USA", value: 25.0, color: "#00A4B6" },
          { country: "UK", value: 20.0, color: "#00A4B6" },
          { country: "UAE", value: 10.0, color: "#00A4B6" },
          { country: "Others", value: 5.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Paris", value: 30.0, color: "#00A4B6" },
          { city: "Dubai", value: 10.0, color: "#00A4B6" },
          { city: "New York", value: 15.0, color: "#00A4B6" },
          { city: "London", value: 12.0, color: "#00A4B6" },
          { city: "others", value: 33.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "French",
            AudienceLanguage: { value: 85, color: "#00A4B6" },
          },
          {
            language: "English",
            AudienceLanguage: { value: 75, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 20, color: "#00A4B6" },
          },
          {
            language: "Italian",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "German",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 75, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 15, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 8, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 2, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: [
              "Apr 2023",
              "Jul 2023",
              "Oct 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [15000, 18000, 21000, 23000, 25000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [15000, 18000, 21000, 23000, 25000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: [
              "Apr 2023",
              "Jul 2023",
              "Oct 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [800, 1000, 1200, 1350, 1450],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [800, 1000, 1200, 1350, 1450],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "Chanel", value: 95, color: "#00A4B6" },
        { brand: "Louis Vuitton", value: 90, color: "#00A4B6" },
        { brand: "Gucci", value: 85, color: "#00A4B6" },
        { brand: "Hermès", value: 80, color: "#00A4B6" },
        { brand: "Dior", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Fashion & Style", value: 85.0, color: "#00A4B6" },
        { topic: "Luxury & Premium", value: 75.0, color: "#00A4B6" },
        { topic: "Beauty & Cosmetics", value: 65.0, color: "#00A4B6" },
        { topic: "Travel & Lifestyle", value: 55.0, color: "#00A4B6" },
        { topic: "Art & Culture", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@chanel",
        "@louisvuitton",
        "@gucci",
        "@hermes",
        "@dior",
      ],
      frequentlyUsedHashtags: [
        "#fashion",
        "#style",
        "#luxury",
        "#fashionista",
        "#ootd",
        "#fashionblogger",
        "#luxurylifestyle",
        "#fashionstyle",
      ],
      audienceInterestsBrands: [
        { brand: "Chanel", value: 90, color: "#00A4B6" },
        { brand: "Louis Vuitton", value: 85, color: "#00A4B6" },
        { brand: "Gucci", value: 80, color: "#00A4B6" },
        { brand: "Hermès", value: 75, color: "#00A4B6" },
        { brand: "Dior", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Fashion & Style", value: 90, color: "#00A4B6" },
        { topic: "Luxury & Premium", value: 80, color: "#00A4B6" },
        { topic: "Beauty & Cosmetics", value: 70, color: "#00A4B6" },
        { topic: "Travel & Lifestyle", value: 60, color: "#00A4B6" },
        { topic: "Art & Culture", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "8",
    isApproved: true,
    firstName: "Ethan",
    lastName: "Miller",
    fullName: "Ethan Miller",
    avatarUrl: fullprofileImage8.src,
    tier: CreatorTier.NANO, // Bronze tier maps to NANO
    verifiedPlatforms: ["Instagram"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "ethan.miller",
        url: "https://instagram.com/ethan.miller",
      },
    ],
    email: "ethan.miller@example.com",
    phone: "+971522223333",
    whatsappNumber: "+971522223333",
    nationality: "German",
    location: "Abu Dhabi, UAE",
    dateOfBirth: new Date("1997-09-08"),
    age: 26,
    gender: Gender.MALE,
    signUpDate: new Date("2023-07-20"),
    profileCompletion: 48,
    influencerTags: ["DIY", "Crafts", "Home Decor"],
    credibilityScore: 55,
    followerCount: 4000,
    reach: 12000,
    engagementRate: 2.5,
    totalRedemptionsValue: 180,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 3,
    postsCount: 15,
    reviewsCount: 2,
    createdAt: new Date("2023-07-20"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["1", "2", "3"],
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 4000,
        avgLikes: 100,
        engagementRate: 2.5,
        audienceCredibility: 55,
        avgComments: 8,
        avgReelsViews: 500,
        sponsoredCount: 3,
        sponsoredPerformance: 2.8,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Female", value: 65, color: "#00A4B6" },
          { label: "Male", value: 35, color: "#E97500" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 5, color: "#00D2E9" },
            Female: { value: 10, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 15, color: "#00D2E9" },
            Female: { value: 30, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 20, color: "#00D2E9" },
            Female: { value: 35, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 10, color: "#00D2E9" },
            Female: { value: 15, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 5, color: "#00D2E9" },
            Female: { value: 10, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "Germany", value: 40.0, color: "#00A4B6" },
          { country: "UAE", value: 30.0, color: "#00A4B6" },
          { country: "USA", value: 15.0, color: "#00A4B6" },
          { country: "UK", value: 10.0, color: "#00A4B6" },
          { country: "Others", value: 5.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Abu Dhabi", value: 30.0, color: "#00A4B6" },
          { city: "Berlin", value: 25.0, color: "#00A4B6" },
          { city: "Dubai", value: 15.0, color: "#00A4B6" },
          { city: "Munich", value: 10.0, color: "#00A4B6" },
          { city: "others", value: 20.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "German",
            AudienceLanguage: { value: 85, color: "#00A4B6" },
          },
          {
            language: "English",
            AudienceLanguage: { value: 75, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 30, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 80, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 10, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 7, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 3, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: [
              "Jul 2023",
              "Sep 2023",
              "Nov 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [2000, 2500, 3200, 3600, 4000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [2000, 2500, 3200, 3600, 4000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: [
              "Jul 2023",
              "Sep 2023",
              "Nov 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [50, 65, 80, 90, 100],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [50, 65, 80, 90, 100],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "IKEA", value: 95, color: "#00A4B6" },
        { brand: "Home Depot", value: 90, color: "#00A4B6" },
        { brand: "Lowe's", value: 85, color: "#00A4B6" },
        { brand: "Michaels", value: 80, color: "#00A4B6" },
        { brand: "Hobby Lobby", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "DIY & Crafts", value: 85.0, color: "#00A4B6" },
        { topic: "Home Decor", value: 75.0, color: "#00A4B6" },
        { topic: "Home Improvement", value: 65.0, color: "#00A4B6" },
        { topic: "Art & Creativity", value: 55.0, color: "#00A4B6" },
        { topic: "Lifestyle & Organization", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@ikea",
        "@homedepot",
        "@lowes",
        "@michaels",
        "@hobbylobby",
      ],
      frequentlyUsedHashtags: [
        "#diy",
        "#crafts",
        "#homedecor",
        "#diyproject",
        "#crafting",
        "#homediy",
        "#diycrafts",
        "#homedecoration",
      ],
      audienceInterestsBrands: [
        { brand: "IKEA", value: 90, color: "#00A4B6" },
        { brand: "Home Depot", value: 85, color: "#00A4B6" },
        { brand: "Lowe's", value: 80, color: "#00A4B6" },
        { brand: "Michaels", value: 75, color: "#00A4B6" },
        { brand: "Hobby Lobby", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "DIY & Crafts", value: 90, color: "#00A4B6" },
        { topic: "Home Decor", value: 80, color: "#00A4B6" },
        { topic: "Home Improvement", value: 70, color: "#00A4B6" },
        { topic: "Art & Creativity", value: 60, color: "#00A4B6" },
        { topic: "Lifestyle & Organization", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "9",
    isApproved: true,
    firstName: "Ava",
    lastName: "Garcia",
    fullName: "Ava Garcia",
    avatarUrl: fullprofileImage9.src,
    tier: CreatorTier.MACRO, // Gold tier maps to MACRO
    verifiedPlatforms: ["Instagram", "TikTok"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "ava.garcia",
        url: "https://instagram.com/ava.garcia",
      },
      {
        platform: "TikTok",
        handle: "@ava.garcia",
        url: "https://tiktok.com/@ava.garcia",
      },
    ],
    email: "ava.garcia@gmail.com",
    phone: "+971554445555",
    whatsappNumber: "+971554445555",
    nationality: "Spanish",
    location: "Sharjah, UAE",
    dateOfBirth: new Date("1993-12-03"),
    age: 30,
    gender: Gender.FEMALE,
    signUpDate: new Date("2023-05-18"),
    profileCompletion: 80,
    influencerTags: ["Travel", "Adventure", "Nature"],
    credibilityScore: 85,
    followerCount: 19000,
    reach: 57000,
    engagementRate: 4.5,
    totalRedemptionsValue: 1520,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 16,
    postsCount: 58,
    reviewsCount: 14,
    createdAt: new Date("2023-05-18"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["1", "2", "3"],
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 19000,
        avgLikes: 855,
        engagementRate: 4.5,
        audienceCredibility: 85,
        avgComments: 68,
        avgReelsViews: 5700,
        sponsoredCount: 16,
        sponsoredPerformance: 4.2,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Female", value: 70, color: "#00A4B6" },
          { label: "Male", value: 30, color: "#E97500" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 4, color: "#00D2E9" },
            Female: { value: 8, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 12, color: "#00D2E9" },
            Female: { value: 28, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 18, color: "#00D2E9" },
            Female: { value: 42, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 10, color: "#00D2E9" },
            Female: { value: 15, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 6, color: "#00D2E9" },
            Female: { value: 7, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "Spain", value: 35.0, color: "#00A4B6" },
          { country: "UAE", value: 25.0, color: "#00A4B6" },
          { country: "USA", value: 20.0, color: "#00A4B6" },
          { country: "UK", value: 15.0, color: "#00A4B6" },
          { country: "Others", value: 5.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Sharjah", value: 25.0, color: "#00A4B6" },
          { city: "Madrid", value: 20.0, color: "#00A4B6" },
          { city: "Dubai", value: 15.0, color: "#00A4B6" },
          { city: "Barcelona", value: 12.0, color: "#00A4B6" },
          { city: "others", value: 28.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "Spanish",
            AudienceLanguage: { value: 85, color: "#00A4B6" },
          },
          {
            language: "English",
            AudienceLanguage: { value: 75, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 25, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 20, color: "#00A4B6" },
          },
          {
            language: "Italian",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 75, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 15, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 7, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 3, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: [
              "May 2023",
              "Aug 2023",
              "Oct 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [12000, 14500, 16500, 18000, 19000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [12000, 14500, 16500, 18000, 19000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: [
              "May 2023",
              "Aug 2023",
              "Oct 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [600, 700, 780, 830, 855],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [600, 700, 780, 830, 855],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "National Geographic", value: 95, color: "#00A4B6" },
        { brand: "Patagonia", value: 90, color: "#00A4B6" },
        { brand: "The North Face", value: 85, color: "#00A4B6" },
        { brand: "REI", value: 80, color: "#00A4B6" },
        { brand: "Columbia", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Travel & Adventure", value: 85.0, color: "#00A4B6" },
        { topic: "Nature & Outdoors", value: 75.0, color: "#00A4B6" },
        { topic: "Photography", value: 65.0, color: "#00A4B6" },
        { topic: "Eco-Tourism", value: 55.0, color: "#00A4B6" },
        { topic: "Cultural Exploration", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@natgeo",
        "@patagonia",
        "@thenorthface",
        "@rei",
        "@columbia",
      ],
      frequentlyUsedHashtags: [
        "#travel",
        "#adventure",
        "#nature",
        "#travelphotography",
        "#adventuretime",
        "#naturephotography",
        "#travelblogger",
        "#outdoors",
      ],
      audienceInterestsBrands: [
        { brand: "National Geographic", value: 90, color: "#00A4B6" },
        { brand: "Patagonia", value: 85, color: "#00A4B6" },
        { brand: "The North Face", value: 80, color: "#00A4B6" },
        { brand: "REI", value: 75, color: "#00A4B6" },
        { brand: "Columbia", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Travel & Adventure", value: 90, color: "#00A4B6" },
        { topic: "Nature & Outdoors", value: 80, color: "#00A4B6" },
        { topic: "Photography", value: 70, color: "#00A4B6" },
        { topic: "Eco-Tourism", value: 60, color: "#00A4B6" },
        { topic: "Cultural Exploration", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "10",
    isApproved: true,
    firstName: "Alexander",
    lastName: "Rodriguez",
    fullName: "Alexander Rodriguez",
    avatarUrl: fullprofileImage10.src,
    tier: CreatorTier.MICRO, // Silver tier maps to MICRO
    verifiedPlatforms: ["Instagram", "YouTube"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "alexander.rodriguez",
        url: "https://instagram.com/alexander.rodriguez",
      },
      {
        platform: "YouTube",
        handle: "Alexander Rodriguez",
        url: "https://youtube.com/@alexanderrodriguez",
      },
    ],
    email: "alexander.rodriguez@yahoo.com",
    phone: "+971566667777",
    whatsappNumber: "+971566667777",
    nationality: "Mexican",
    location: "Ajman, UAE",
    dateOfBirth: new Date("1991-05-22"),
    age: 32,
    gender: Gender.MALE,
    signUpDate: new Date("2023-09-03"),
    profileCompletion: 68,
    influencerTags: ["Tech", "Gadgets", "Reviews"],
    credibilityScore: 70,
    followerCount: 11000,
    reach: 33000,
    engagementRate: 3.9,
    totalRedemptionsValue: 660,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 9,
    postsCount: 35,
    reviewsCount: 7,
    createdAt: new Date("2023-09-03"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["1", "2", "3"],
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 11000,
        avgLikes: 429,
        engagementRate: 3.9,
        audienceCredibility: 70,
        avgComments: 34,
        avgReelsViews: 3300,
        sponsoredCount: 9,
        sponsoredPerformance: 3.5,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Male", value: 75, color: "#E97500" },
          { label: "Female", value: 25, color: "#00A4B6" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 8, color: "#00D2E9" },
            Female: { value: 3, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 25, color: "#00D2E9" },
            Female: { value: 8, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 35, color: "#00D2E9" },
            Female: { value: 12, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 20, color: "#00D2E9" },
            Female: { value: 7, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 12, color: "#00D2E9" },
            Female: { value: 5, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "Mexico", value: 35.0, color: "#00A4B6" },
          { country: "UAE", value: 25.0, color: "#00A4B6" },
          { country: "USA", value: 20.0, color: "#00A4B6" },
          { country: "Canada", value: 10.0, color: "#00A4B6" },
          { country: "Others", value: 10.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Ajman", value: 25.0, color: "#00A4B6" },
          { city: "Mexico City", value: 20.0, color: "#00A4B6" },
          { city: "Dubai", value: 15.0, color: "#00A4B6" },
          { city: "Guadalajara", value: 10.0, color: "#00A4B6" },
          { city: "others", value: 30.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "Spanish",
            AudienceLanguage: { value: 85, color: "#00A4B6" },
          },
          {
            language: "English",
            AudienceLanguage: { value: 75, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 25, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "Portuguese",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 60, color: "#00A4B6" },
          },
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 25, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 10, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 5, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: [
              "Sep 2023",
              "Oct 2023",
              "Nov 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [7000, 8500, 9500, 10300, 11000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [7000, 8500, 9500, 10300, 11000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: [
              "Sep 2023",
              "Oct 2023",
              "Nov 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [280, 320, 360, 400, 429],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [280, 320, 360, 400, 429],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "Apple", value: 95, color: "#00A4B6" },
        { brand: "Samsung", value: 90, color: "#00A4B6" },
        { brand: "Google", value: 85, color: "#00A4B6" },
        { brand: "Microsoft", value: 80, color: "#00A4B6" },
        { brand: "Sony", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Tech & Gadgets", value: 85.0, color: "#00A4B6" },
        { topic: "Product Reviews", value: 75.0, color: "#00A4B6" },
        { topic: "Gaming", value: 65.0, color: "#00A4B6" },
        { topic: "Software & Apps", value: 55.0, color: "#00A4B6" },
        { topic: "Digital Lifestyle", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@apple",
        "@samsung",
        "@google",
        "@microsoft",
        "@sony",
      ],
      frequentlyUsedHashtags: [
        "#tech",
        "#gadgets",
        "#reviews",
        "#techreview",
        "#gadgetreview",
        "#technews",
        "#gadgetnews",
        "#techyoutuber",
      ],
      audienceInterestsBrands: [
        { brand: "Apple", value: 90, color: "#00A4B6" },
        { brand: "Samsung", value: 85, color: "#00A4B6" },
        { brand: "Google", value: 80, color: "#00A4B6" },
        { brand: "Microsoft", value: 75, color: "#00A4B6" },
        { brand: "Sony", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Tech & Gadgets", value: 90, color: "#00A4B6" },
        { topic: "Product Reviews", value: 80, color: "#00A4B6" },
        { topic: "Gaming", value: 70, color: "#00A4B6" },
        { topic: "Software & Apps", value: 60, color: "#00A4B6" },
        { topic: "Digital Lifestyle", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "11",
    isApproved: true,
    firstName: "Chloe",
    lastName: "Martinez",
    fullName: "Chloe Martinez",
    avatarUrl: fullprofileImage11.src,
    tier: CreatorTier.MEGA, // Platinum tier maps to MEGA
    verifiedPlatforms: ["Instagram", "TikTok", "YouTube"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "chloe.martinez",
        url: "https://instagram.com/chloe.martinez",
      },
      {
        platform: "TikTok",
        handle: "@chloe.martinez",
        url: "https://tiktok.com/@chloe.martinez",
      },
      {
        platform: "YouTube",
        handle: "Chloe Martinez",
        url: "https://youtube.com/@chloemartinez",
      },
    ],
    email: "chloe.martinez@outlook.com",
    phone: "+971548889999",
    whatsappNumber: "+971548889999",
    nationality: "Italian",
    location: "Ras Al Khaimah, UAE",
    dateOfBirth: new Date("1990-11-14"),
    age: 33,
    gender: Gender.FEMALE,
    signUpDate: new Date("2023-08-22"),
    profileCompletion: 90,
    influencerTags: ["Food & Drinks", "Restaurants", "Recipes"],
    credibilityScore: 92,
    followerCount: 23000,
    reach: 69000,
    engagementRate: 5.1,
    totalRedemptionsValue: 2200,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 22,
    postsCount: 82,
    reviewsCount: 19,
    createdAt: new Date("2023-08-22"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["1", "2", "3"],
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 23000,
        avgLikes: 1173,
        engagementRate: 5.1,
        audienceCredibility: 92,
        avgComments: 94,
        avgReelsViews: 6900,
        sponsoredCount: 22,
        sponsoredPerformance: 4.9,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Female", value: 75, color: "#00A4B6" },
          { label: "Male", value: 25, color: "#E97500" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 3, color: "#00D2E9" },
            Female: { value: 8, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 10, color: "#00D2E9" },
            Female: { value: 30, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 15, color: "#00D2E9" },
            Female: { value: 40, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 8, color: "#00D2E9" },
            Female: { value: 15, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 4, color: "#00D2E9" },
            Female: { value: 7, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "Italy", value: 35.0, color: "#00A4B6" },
          { country: "UAE", value: 25.0, color: "#00A4B6" },
          { country: "USA", value: 20.0, color: "#00A4B6" },
          { country: "UK", value: 15.0, color: "#00A4B6" },
          { country: "Others", value: 5.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Ras Al Khaimah", value: 25.0, color: "#00A4B6" },
          { city: "Rome", value: 20.0, color: "#00A4B6" },
          { city: "Dubai", value: 15.0, color: "#00A4B6" },
          { city: "Milan", value: 12.0, color: "#00A4B6" },
          { city: "others", value: 28.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "Italian",
            AudienceLanguage: { value: 85, color: "#00A4B6" },
          },
          {
            language: "English",
            AudienceLanguage: { value: 75, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 25, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 20, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 80, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 10, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 7, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 3, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: [
              "Aug 2023",
              "Oct 2023",
              "Nov 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [15000, 18000, 20000, 21500, 23000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [15000, 18000, 20000, 21500, 23000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: [
              "Aug 2023",
              "Oct 2023",
              "Nov 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [800, 950, 1050, 1120, 1173],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [800, 950, 1050, 1120, 1173],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "Gordon Ramsay", value: 95, color: "#00A4B6" },
        { brand: "Jamie Oliver", value: 90, color: "#00A4B6" },
        { brand: "Food Network", value: 85, color: "#00A4B6" },
        { brand: "MasterChef", value: 80, color: "#00A4B6" },
        { brand: "Bon Appétit", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Food & Drinks", value: 85.0, color: "#00A4B6" },
        { topic: "Restaurants & Dining", value: 75.0, color: "#00A4B6" },
        { topic: "Cooking & Recipes", value: 65.0, color: "#00A4B6" },
        { topic: "Culinary Arts", value: 55.0, color: "#00A4B6" },
        { topic: "Food Culture", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@gordonramsay",
        "@jamieoliver",
        "@foodnetwork",
        "@masterchef",
        "@bonappetit",
      ],
      frequentlyUsedHashtags: [
        "#food",
        "#drinks",
        "#restaurants",
        "#recipes",
        "#foodie",
        "#cooking",
        "#foodphotography",
        "#foodblogger",
      ],
      audienceInterestsBrands: [
        { brand: "Gordon Ramsay", value: 90, color: "#00A4B6" },
        { brand: "Jamie Oliver", value: 85, color: "#00A4B6" },
        { brand: "Food Network", value: 80, color: "#00A4B6" },
        { brand: "MasterChef", value: 75, color: "#00A4B6" },
        { brand: "Bon Appétit", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Food & Drinks", value: 90, color: "#00A4B6" },
        { topic: "Restaurants & Dining", value: 80, color: "#00A4B6" },
        { topic: "Cooking & Recipes", value: 70, color: "#00A4B6" },
        { topic: "Culinary Arts", value: 60, color: "#00A4B6" },
        { topic: "Food Culture", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "12",
    isApproved: true,
    firstName: "James",
    lastName: "Anderson",
    fullName: "James Anderson",
    avatarUrl: fullprofileImage12.src,
    tier: CreatorTier.NANO, // Bronze tier maps to NANO
    verifiedPlatforms: ["Instagram"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "james.anderson",
        url: "https://instagram.com/james.anderson",
      },
    ],
    email: "james.anderson@example.com",
    phone: "+971580001111",
    whatsappNumber: "+971580001111",
    nationality: "Scottish",
    location: "Fujairah, UAE",
    dateOfBirth: new Date("1996-02-28"),
    age: 27,
    gender: Gender.MALE,
    signUpDate: new Date("2023-10-15"),
    profileCompletion: 50,
    influencerTags: ["Music", "Art", "Culture"],
    credibilityScore: 60,
    followerCount: 6000,
    reach: 18000,
    engagementRate: 2.8,
    totalRedemptionsValue: 240,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 4,
    postsCount: 22,
    reviewsCount: 3,
    createdAt: new Date("2023-10-15"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["1", "2", "3"],
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 6000,
        avgLikes: 168,
        engagementRate: 2.8,
        audienceCredibility: 60,
        avgComments: 13,
        avgReelsViews: 1800,
        sponsoredCount: 4,
        sponsoredPerformance: 2.5,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Male", value: 60, color: "#E97500" },
          { label: "Female", value: 40, color: "#00A4B6" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 6, color: "#00D2E9" },
            Female: { value: 4, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 20, color: "#00D2E9" },
            Female: { value: 15, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 25, color: "#00D2E9" },
            Female: { value: 20, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 15, color: "#00D2E9" },
            Female: { value: 12, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 10, color: "#00D2E9" },
            Female: { value: 8, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "UK", value: 35.0, color: "#00A4B6" },
          { country: "UAE", value: 25.0, color: "#00A4B6" },
          { country: "USA", value: 20.0, color: "#00A4B6" },
          { country: "Canada", value: 10.0, color: "#00A4B6" },
          { country: "Others", value: 10.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Fujairah", value: 25.0, color: "#00A4B6" },
          { city: "London", value: 20.0, color: "#00A4B6" },
          { city: "Dubai", value: 15.0, color: "#00A4B6" },
          { city: "Manchester", value: 10.0, color: "#00A4B6" },
          { city: "others", value: 30.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "English",
            AudienceLanguage: { value: 90, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 30, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "German",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 8, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 75, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 15, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 7, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 3, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: ["Oct 2023", "Nov 2023", "Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [4000, 4800, 5400, 6000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [4000, 4800, 5400, 6000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: ["Oct 2023", "Nov 2023", "Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [120, 140, 155, 168],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [120, 140, 155, 168],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "Spotify", value: 95, color: "#00A4B6" },
        { brand: "Apple Music", value: 90, color: "#00A4B6" },
        { brand: "YouTube Music", value: 85, color: "#00A4B6" },
        { brand: "SoundCloud", value: 80, color: "#00A4B6" },
        { brand: "Bandcamp", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Music & Culture", value: 85.0, color: "#00A4B6" },
        { topic: "Art & Creativity", value: 75.0, color: "#00A4B6" },
        { topic: "Cultural Events", value: 65.0, color: "#00A4B6" },
        { topic: "Music Production", value: 55.0, color: "#00A4B6" },
        { topic: "Artistic Expression", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@spotify",
        "@applemusic",
        "@youtubemusic",
        "@soundcloud",
        "@bandcamp",
      ],
      frequentlyUsedHashtags: [
        "#music",
        "#art",
        "#culture",
        "#musicculture",
        "#artculture",
        "#musicart",
        "#culturalmusic",
        "#artisticmusic",
      ],
      audienceInterestsBrands: [
        { brand: "Spotify", value: 90, color: "#00A4B6" },
        { brand: "Apple Music", value: 85, color: "#00A4B6" },
        { brand: "YouTube Music", value: 80, color: "#00A4B6" },
        { brand: "SoundCloud", value: 75, color: "#00A4B6" },
        { brand: "Bandcamp", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Music & Culture", value: 90, color: "#00A4B6" },
        { topic: "Art & Creativity", value: 80, color: "#00A4B6" },
        { topic: "Cultural Events", value: 70, color: "#00A4B6" },
        { topic: "Music Production", value: 60, color: "#00A4B6" },
        { topic: "Artistic Expression", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "13",
    isApproved: true,
    firstName: "Abigail",
    lastName: "Taylor",
    fullName: "Abigail Taylor",
    avatarUrl: fullprofileImage13.src,
    tier: CreatorTier.MACRO, // Gold tier maps to MACRO
    verifiedPlatforms: ["Instagram", "TikTok"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "abigail.taylor",
        url: "https://instagram.com/abigail.taylor",
      },
      {
        platform: "TikTok",
        handle: "@abigail.taylor",
        url: "https://tiktok.com/@abigail.taylor",
      },
    ],
    email: "abigail.taylor@gmail.com",
    phone: "+971502223333",
    whatsappNumber: "+971502223333",
    nationality: "Irish",
    location: "Umm Al Quwain, UAE",
    dateOfBirth: new Date("1992-09-14"),
    age: 31,
    gender: Gender.FEMALE,
    signUpDate: new Date("2023-07-01"),
    profileCompletion: 85,
    influencerTags: ["Parenting", "Family", "Kids"],
    credibilityScore: 88,
    followerCount: 20000,
    reach: 60000,
    engagementRate: 4.8,
    totalRedemptionsValue: 1600,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 18,
    postsCount: 68,
    reviewsCount: 15,
    createdAt: new Date("2023-07-01"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["1", "2", "3"],
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 20000,
        avgLikes: 960,
        engagementRate: 4.8,
        audienceCredibility: 88,
        avgComments: 77,
        avgReelsViews: 6000,
        sponsoredCount: 18,
        sponsoredPerformance: 4.5,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Female", value: 85, color: "#00A4B6" },
          { label: "Male", value: 15, color: "#E97500" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 2, color: "#00D2E9" },
            Female: { value: 8, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 5, color: "#00D2E9" },
            Female: { value: 25, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 8, color: "#00D2E9" },
            Female: { value: 45, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 5, color: "#00D2E9" },
            Female: { value: 15, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 2, color: "#00D2E9" },
            Female: { value: 7, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "Ireland", value: 35.0, color: "#00A4B6" },
          { country: "UAE", value: 25.0, color: "#00A4B6" },
          { country: "USA", value: 20.0, color: "#00A4B6" },
          { country: "UK", value: 15.0, color: "#00A4B6" },
          { country: "Others", value: 5.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Umm Al Quwain", value: 25.0, color: "#00A4B6" },
          { city: "Dublin", value: 20.0, color: "#00A4B6" },
          { city: "Dubai", value: 15.0, color: "#00A4B6" },
          { city: "Cork", value: 12.0, color: "#00A4B6" },
          { city: "others", value: 28.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "English",
            AudienceLanguage: { value: 90, color: "#00A4B6" },
          },
          {
            language: "Irish",
            AudienceLanguage: { value: 25, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 20, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 80, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 10, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 7, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 3, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: [
              "Jul 2023",
              "Sep 2023",
              "Nov 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [12000, 14500, 17000, 18500, 20000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [12000, 14500, 17000, 18500, 20000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: [
              "Jul 2023",
              "Sep 2023",
              "Nov 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [600, 720, 840, 900, 960],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [600, 720, 840, 900, 960],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "Fisher-Price", value: 95, color: "#00A4B6" },
        { brand: "LEGO", value: 90, color: "#00A4B6" },
        { brand: "Mattel", value: 85, color: "#00A4B6" },
        { brand: "Hasbro", value: 80, color: "#00A4B6" },
        { brand: "Disney", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Parenting & Family", value: 85.0, color: "#00A4B6" },
        { topic: "Kids & Children", value: 75.0, color: "#00A4B6" },
        { topic: "Family Activities", value: 65.0, color: "#00A4B6" },
        { topic: "Educational Content", value: 55.0, color: "#00A4B6" },
        { topic: "Family Lifestyle", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@fisherprice",
        "@lego",
        "@mattel",
        "@hasbro",
        "@disney",
      ],
      frequentlyUsedHashtags: [
        "#parenting",
        "#family",
        "#kids",
        "#parentinglife",
        "#familytime",
        "#kidsactivities",
        "#parentingtips",
        "#familyfun",
      ],
      audienceInterestsBrands: [
        { brand: "Fisher-Price", value: 90, color: "#00A4B6" },
        { brand: "LEGO", value: 85, color: "#00A4B6" },
        { brand: "Mattel", value: 80, color: "#00A4B6" },
        { brand: "Hasbro", value: 75, color: "#00A4B6" },
        { brand: "Disney", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Parenting & Family", value: 90, color: "#00A4B6" },
        { topic: "Kids & Children", value: 80, color: "#00A4B6" },
        { topic: "Family Activities", value: 70, color: "#00A4B6" },
        { topic: "Educational Content", value: 60, color: "#00A4B6" },
        { topic: "Family Lifestyle", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "14",
    isApproved: true,
    firstName: "Daniel",
    lastName: "Thomas",
    fullName: "Daniel Thomas",
    avatarUrl: fullprofileImage14.src,
    tier: CreatorTier.MICRO, // Silver tier maps to MICRO
    verifiedPlatforms: ["Instagram", "YouTube"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "daniel.thomas",
        url: "https://instagram.com/daniel.thomas",
      },
      {
        platform: "YouTube",
        handle: "Daniel Thomas",
        url: "https://youtube.com/@danielthomas",
      },
    ],
    email: "daniel.thomas@yahoo.com",
    phone: "+971524445555",
    whatsappNumber: "+971524445555",
    nationality: "Welsh",
    location: "Dubai, UAE",
    dateOfBirth: new Date("1990-12-03"),
    age: 33,
    gender: Gender.MALE,
    signUpDate: new Date("2023-11-08"),
    profileCompletion: 70,
    influencerTags: ["Automotive", "Cars", "Vehicles"],
    credibilityScore: 73,
    followerCount: 12000,
    reach: 36000,
    engagementRate: 3.9,
    totalRedemptionsValue: 720,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 11,
    postsCount: 42,
    reviewsCount: 8,
    createdAt: new Date("2023-11-08"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["1", "2", "3"],
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 12000,
        avgLikes: 468,
        engagementRate: 3.9,
        audienceCredibility: 73,
        avgComments: 37,
        avgReelsViews: 3600,
        sponsoredCount: 11,
        sponsoredPerformance: 3.6,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Male", value: 80, color: "#E97500" },
          { label: "Female", value: 20, color: "#00A4B6" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 8, color: "#00D2E9" },
            Female: { value: 2, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 25, color: "#00D2E9" },
            Female: { value: 6, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 35, color: "#00D2E9" },
            Female: { value: 9, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 20, color: "#00D2E9" },
            Female: { value: 5, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 12, color: "#00D2E9" },
            Female: { value: 3, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "UK", value: 35.0, color: "#00A4B6" },
          { country: "UAE", value: 25.0, color: "#00A4B6" },
          { country: "USA", value: 20.0, color: "#00A4B6" },
          { country: "Canada", value: 10.0, color: "#00A4B6" },
          { country: "Others", value: 10.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Dubai", value: 25.0, color: "#00A4B6" },
          { city: "Cardiff", value: 20.0, color: "#00A4B6" },
          { city: "London", value: 15.0, color: "#00A4B6" },
          { city: "Swansea", value: 10.0, color: "#00A4B6" },
          { city: "others", value: 30.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "English",
            AudienceLanguage: { value: 90, color: "#00A4B6" },
          },
          {
            language: "Welsh",
            AudienceLanguage: { value: 25, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 20, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "German",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 80, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 12, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 5, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 3, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: ["Nov 2023", "Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [8000, 10000, 12000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [8000, 10000, 12000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: ["Nov 2023", "Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [320, 400, 468],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [320, 400, 468],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "BMW", value: 95, color: "#00A4B6" },
        { brand: "Mercedes-Benz", value: 90, color: "#00A4B6" },
        { brand: "Audi", value: 85, color: "#00A4B6" },
        { brand: "Tesla", value: 80, color: "#00A4B6" },
        { brand: "Porsche", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Automotive & Cars", value: 85.0, color: "#00A4B6" },
        { topic: "Vehicle Reviews", value: 75.0, color: "#00A4B6" },
        { topic: "Car Technology", value: 65.0, color: "#00A4B6" },
        { topic: "Luxury Vehicles", value: 55.0, color: "#00A4B6" },
        { topic: "Auto Industry", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@bmw",
        "@mercedesbenz",
        "@audi",
        "@tesla",
        "@porsche",
      ],
      frequentlyUsedHashtags: [
        "#automotive",
        "#cars",
        "#vehicles",
        "#carreview",
        "#automotiveindustry",
        "#luxurycars",
        "#cartech",
        "#autoreview",
      ],
      audienceInterestsBrands: [
        { brand: "BMW", value: 90, color: "#00A4B6" },
        { brand: "Mercedes-Benz", value: 85, color: "#00A4B6" },
        { brand: "Audi", value: 80, color: "#00A4B6" },
        { brand: "Tesla", value: 75, color: "#00A4B6" },
        { brand: "Porsche", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Automotive & Cars", value: 90, color: "#00A4B6" },
        { topic: "Vehicle Reviews", value: 80, color: "#00A4B6" },
        { topic: "Car Technology", value: 70, color: "#00A4B6" },
        { topic: "Luxury Vehicles", value: 60, color: "#00A4B6" },
        { topic: "Auto Industry", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "15",
    isApproved: true,
    firstName: "Madison",
    lastName: "Hall",
    fullName: "Madison Hall",
    avatarUrl: fullprofileImage.src,
    tier: CreatorTier.MEGA, // Platinum tier maps to MEGA
    verifiedPlatforms: ["Instagram", "TikTok", "LinkedIn"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "madison.hall",
        url: "https://instagram.com/madison.hall",
      },
      {
        platform: "TikTok",
        handle: "@madison.hall",
        url: "https://tiktok.com/@madison.hall",
      },
      {
        platform: "LinkedIn",
        handle: "Madison Hall",
        url: "https://linkedin.com/in/madisonhall",
      },
    ],
    email: "madison.hall@outlook.com",
    phone: "+971556667777",
    whatsappNumber: "+971556667777",
    nationality: "New Zealander",
    location: "Abu Dhabi, UAE",
    dateOfBirth: new Date("1988-05-22"),
    age: 35,
    gender: Gender.FEMALE,
    signUpDate: new Date("2023-06-15"),
    profileCompletion: 82,
    influencerTags: ["Finance", "Investment", "Business"],
    credibilityScore: 90,
    followerCount: 24000,
    reach: 72000,
    engagementRate: 5.4,
    totalRedemptionsValue: 2600,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 20,
    postsCount: 88,
    reviewsCount: 24,
    createdAt: new Date("2023-06-15"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["1", "2", "3"],
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 24000,
        avgLikes: 1296,
        engagementRate: 5.4,
        audienceCredibility: 90,
        avgComments: 104,
        avgReelsViews: 7200,
        sponsoredCount: 20,
        sponsoredPerformance: 5.1,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Female", value: 60, color: "#00A4B6" },
          { label: "Male", value: 40, color: "#E97500" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 3, color: "#00D2E9" },
            Female: { value: 5, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 10, color: "#00D2E9" },
            Female: { value: 15, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 20, color: "#00D2E9" },
            Female: { value: 30, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 15, color: "#00D2E9" },
            Female: { value: 20, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 10, color: "#00D2E9" },
            Female: { value: 15, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "New Zealand", value: 35.0, color: "#00A4B6" },
          { country: "UAE", value: 25.0, color: "#00A4B6" },
          { country: "Australia", value: 20.0, color: "#00A4B6" },
          { country: "USA", value: 15.0, color: "#00A4B6" },
          { country: "Others", value: 5.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Abu Dhabi", value: 25.0, color: "#00A4B6" },
          { city: "Auckland", value: 20.0, color: "#00A4B6" },
          { city: "Dubai", value: 15.0, color: "#00A4B6" },
          { city: "Wellington", value: 12.0, color: "#00A4B6" },
          { city: "others", value: 28.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "English",
            AudienceLanguage: { value: 95, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 25, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "German",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 8, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 75, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 15, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 7, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 3, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: [
              "Jun 2023",
              "Aug 2023",
              "Oct 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [15000, 18000, 21000, 22500, 24000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [15000, 18000, 21000, 22500, 24000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: [
              "Jun 2023",
              "Aug 2023",
              "Oct 2023",
              "Dec 2023",
              "Jan 2024",
            ],
          },
          yAxis: {
            values: [810, 972, 1134, 1215, 1296],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [810, 972, 1134, 1215, 1296],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "Goldman Sachs", value: 95, color: "#00A4B6" },
        { brand: "Morgan Stanley", value: 90, color: "#00A4B6" },
        { brand: "JP Morgan", value: 85, color: "#00A4B6" },
        { brand: "BlackRock", value: 80, color: "#00A4B6" },
        { brand: "Vanguard", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Finance & Investment", value: 85.0, color: "#00A4B6" },
        { topic: "Business & Entrepreneurship", value: 75.0, color: "#00A4B6" },
        { topic: "Financial Planning", value: 65.0, color: "#00A4B6" },
        { topic: "Investment Strategies", value: 55.0, color: "#00A4B6" },
        { topic: "Wealth Management", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@goldmansachs",
        "@morganstanley",
        "@jpmorgan",
        "@blackrock",
        "@vanguard",
      ],
      frequentlyUsedHashtags: [
        "#finance",
        "#investment",
        "#business",
        "#financialplanning",
        "#investmentstrategies",
        "#wealthmanagement",
        "#businessfinance",
        "#financialadvice",
      ],
      audienceInterestsBrands: [
        { brand: "Goldman Sachs", value: 90, color: "#00A4B6" },
        { brand: "Morgan Stanley", value: 85, color: "#00A4B6" },
        { brand: "JP Morgan", value: 80, color: "#00A4B6" },
        { brand: "BlackRock", value: 75, color: "#00A4B6" },
        { brand: "Vanguard", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Finance & Investment", value: 90, color: "#00A4B6" },
        { topic: "Business & Entrepreneurship", value: 80, color: "#00A4B6" },
        { topic: "Financial Planning", value: 70, color: "#00A4B6" },
        { topic: "Investment Strategies", value: 60, color: "#00A4B6" },
        { topic: "Wealth Management", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "16",
    isApproved: true,
    firstName: "Christopher",
    lastName: "Clark",
    fullName: "Christopher Clark",
    avatarUrl: fullprofileImage2.src,
    tier: CreatorTier.NANO, // Bronze tier maps to NANO
    verifiedPlatforms: ["Instagram"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "christopher.clark",
        url: "https://instagram.com/christopher.clark",
      },
    ],
    email: "christopher.clark@example.com",
    phone: "+971568889999",
    whatsappNumber: "+971568889999",
    nationality: "English",
    location: "Sharjah, UAE",
    dateOfBirth: new Date("1995-03-17"),
    age: 28,
    gender: Gender.MALE,
    signUpDate: new Date("2023-12-01"),
    profileCompletion: 58,
    influencerTags: ["Books", "Literature", "Writing"],
    credibilityScore: 65,
    followerCount: 7000,
    reach: 21000,
    engagementRate: 3.1,
    totalRedemptionsValue: 280,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 6,
    postsCount: 25,
    reviewsCount: 4,
    createdAt: new Date("2023-12-01"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["1", "2", "3"],
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 7000,
        avgLikes: 217,
        engagementRate: 3.1,
        audienceCredibility: 65,
        avgComments: 22,
        avgReelsViews: 1300,
        sponsoredCount: 6,
        sponsoredPerformance: 2.8,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Male", value: 55, color: "#E97500" },
          { label: "Female", value: 45, color: "#00A4B6" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 4, color: "#00D2E9" },
            Female: { value: 3, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 15, color: "#00D2E9" },
            Female: { value: 12, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 20, color: "#00D2E9" },
            Female: { value: 18, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 12, color: "#00D2E9" },
            Female: { value: 10, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 4, color: "#00D2E9" },
            Female: { value: 2, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "UK", value: 35.0, color: "#00A4B6" },
          { country: "UAE", value: 25.0, color: "#00A4B6" },
          { country: "USA", value: 20.0, color: "#00A4B6" },
          { country: "Canada", value: 10.0, color: "#00A4B6" },
          { country: "Others", value: 10.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Sharjah", value: 25.0, color: "#00A4B6" },
          { city: "London", value: 20.0, color: "#00A4B6" },
          { city: "Dubai", value: 15.0, color: "#00A4B6" },
          { city: "Manchester", value: 10.0, color: "#00A4B6" },
          { city: "others", value: 30.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "English",
            AudienceLanguage: { value: 90, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 30, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "German",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 8, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 75, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 15, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 7, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 3, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: ["Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [6000, 7000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [6000, 7000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: ["Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [186, 217],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [186, 217],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "Penguin Books", value: 95, color: "#00A4B6" },
        { brand: "HarperCollins", value: 90, color: "#00A4B6" },
        { brand: "Random House", value: 85, color: "#00A4B6" },
        { brand: "Simon & Schuster", value: 80, color: "#00A4B6" },
        { brand: "Macmillan", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Literature & Books", value: 85.0, color: "#00A4B6" },
        { topic: "Writing & Authors", value: 75.0, color: "#00A4B6" },
        { topic: "Reading Culture", value: 65.0, color: "#00A4B6" },
        { topic: "Book Reviews", value: 55.0, color: "#00A4B6" },
        { topic: "Literary Discussion", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@penguinbooks",
        "@harpercollins",
        "@randomhouse",
        "@simonandschuster",
        "@macmillan",
      ],
      frequentlyUsedHashtags: [
        "#books",
        "#literature",
        "#reading",
        "#bookreview",
        "#literaturebooks",
        "#readingculture",
        "#bookdiscussion",
        "#literarybooks",
      ],
      audienceInterestsBrands: [
        { brand: "Penguin Books", value: 90, color: "#00A4B6" },
        { brand: "HarperCollins", value: 85, color: "#00A4B6" },
        { brand: "Random House", value: 80, color: "#00A4B6" },
        { brand: "Simon & Schuster", value: 75, color: "#00A4B6" },
        { brand: "Macmillan", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Literature & Books", value: 90, color: "#00A4B6" },
        { topic: "Writing & Authors", value: 80, color: "#00A4B6" },
        { topic: "Reading Culture", value: 70, color: "#00A4B6" },
        { topic: "Book Reviews", value: 60, color: "#00A4B6" },
        { topic: "Literary Discussion", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "17",
    isApproved: true,
    firstName: "Lily",
    lastName: "Baker",
    fullName: "Lily Baker",
    avatarUrl: fullprofileImage3.src,
    tier: CreatorTier.MACRO, // Gold tier maps to MACRO
    verifiedPlatforms: ["Instagram", "TikTok"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "lily.baker",
        url: "https://instagram.com/lily.baker",
      },
      {
        platform: "TikTok",
        handle: "@lily.baker",
        url: "https://tiktok.com/@lily.baker",
      },
    ],
    email: "lily.baker@gmail.com",
    phone: "+971540001111",
    whatsappNumber: "+971540001111",
    nationality: "Australian",
    location: "Ajman, UAE",
    dateOfBirth: new Date("1993-07-22"),
    age: 30,
    gender: Gender.FEMALE,
    signUpDate: new Date("2024-01-05"),
    profileCompletion: 78,
    influencerTags: ["Pets", "Animals", "Wildlife"],
    credibilityScore: 87,
    followerCount: 21000,
    reach: 63000,
    engagementRate: 4.3,
    totalRedemptionsValue: 1680,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 19,
    postsCount: 72,
    reviewsCount: 16,
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["1", "2", "3"],
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 21000,
        avgLikes: 903,
        engagementRate: 4.3,
        audienceCredibility: 87,
        avgComments: 72,
        avgReelsViews: 5400,
        sponsoredCount: 19,
        sponsoredPerformance: 4.1,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Female", value: 70, color: "#00A4B6" },
          { label: "Male", value: 30, color: "#E97500" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 3, color: "#00D2E9" },
            Female: { value: 7, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 8, color: "#00D2E9" },
            Female: { value: 18, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 12, color: "#00D2E9" },
            Female: { value: 28, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 5, color: "#00D2E9" },
            Female: { value: 12, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 2, color: "#00D2E9" },
            Female: { value: 5, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "Australia", value: 35.0, color: "#00A4B6" },
          { country: "UAE", value: 25.0, color: "#00A4B6" },
          { country: "USA", value: 20.0, color: "#00A4B6" },
          { country: "UK", value: 15.0, color: "#00A4B6" },
          { country: "Others", value: 5.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Ajman", value: 25.0, color: "#00A4B6" },
          { city: "Sydney", value: 20.0, color: "#00A4B6" },
          { city: "Dubai", value: 15.0, color: "#00A4B6" },
          { city: "Melbourne", value: 12.0, color: "#00A4B6" },
          { city: "others", value: 28.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "English",
            AudienceLanguage: { value: 95, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 25, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "German",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 8, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 80, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 12, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 5, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 3, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: ["Jan 2024"],
          },
          yAxis: {
            values: [21000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [21000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: ["Jan 2024"],
          },
          yAxis: {
            values: [903],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [903],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "PetSmart", value: 95, color: "#00A4B6" },
        { brand: "Purina", value: 90, color: "#00A4B6" },
        { brand: "Royal Canin", value: 85, color: "#00A4B6" },
        { brand: "Hill's Science Diet", value: 80, color: "#00A4B6" },
        { brand: "Iams", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Pets & Animals", value: 85.0, color: "#00A4B6" },
        { topic: "Pet Care & Health", value: 75.0, color: "#00A4B6" },
        { topic: "Wildlife Conservation", value: 65.0, color: "#00A4B6" },
        { topic: "Animal Welfare", value: 55.0, color: "#00A4B6" },
        { topic: "Pet Training", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@petsmart",
        "@purina",
        "@royalcanin",
        "@hillssciencediet",
        "@iams",
      ],
      frequentlyUsedHashtags: [
        "#pets",
        "#animals",
        "#wildlife",
        "#petcare",
        "#animalwelfare",
        "#wildlifeconservation",
        "#pettraining",
        "#animalcare",
      ],
      audienceInterestsBrands: [
        { brand: "PetSmart", value: 90, color: "#00A4B6" },
        { brand: "Purina", value: 85, color: "#00A4B6" },
        { brand: "Royal Canin", value: 80, color: "#00A4B6" },
        { brand: "Hill's Science Diet", value: 75, color: "#00A4B6" },
        { brand: "Iams", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Pets & Animals", value: 90, color: "#00A4B6" },
        { topic: "Pet Care & Health", value: 80, color: "#00A4B6" },
        { topic: "Wildlife Conservation", value: 70, color: "#00A4B6" },
        { topic: "Animal Welfare", value: 60, color: "#00A4B6" },
        { topic: "Pet Training", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "18",
    isApproved: true,
    firstName: "Andrew",
    lastName: "Wright",
    fullName: "Andrew Wright",
    avatarUrl: fullprofileImage4.src,
    tier: CreatorTier.MICRO, // Silver tier maps to MICRO
    verifiedPlatforms: ["Instagram", "YouTube"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "andrew.wright",
        url: "https://instagram.com/andrew.wright",
      },
      {
        platform: "YouTube",
        handle: "Andrew Wright",
        url: "https://youtube.com/@andrewwright",
      },
    ],
    email: "andrew.wright@yahoo.com",
    phone: "+971582223333",
    whatsappNumber: "+971582223333",
    nationality: "Canadian",
    location: "Ras Al Khaimah, UAE",
    dateOfBirth: new Date("1991-11-08"),
    age: 32,
    gender: Gender.MALE,
    signUpDate: new Date("2023-04-10"),
    profileCompletion: 63,
    influencerTags: ["Sports", "Outdoors", "Adventure"],
    credibilityScore: 71,
    followerCount: 13000,
    reach: 39000,
    engagementRate: 3.6,
    totalRedemptionsValue: 780,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 12,
    postsCount: 45,
    reviewsCount: 9,
    createdAt: new Date("2023-04-10"),
    updatedAt: new Date("2024-01-15"),
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
    campaignIds: ["1", "2", "3"],
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 13000,
        avgLikes: 468,
        engagementRate: 3.6,
        audienceCredibility: 71,
        avgComments: 37,
        avgReelsViews: 2800,
        sponsoredCount: 12,
        sponsoredPerformance: 3.2,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Male", value: 75, color: "#E97500" },
          { label: "Female", value: 25, color: "#00A4B6" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 6, color: "#00D2E9" },
            Female: { value: 2, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 20, color: "#00D2E9" },
            Female: { value: 7, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 30, color: "#00D2E9" },
            Female: { value: 10, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 15, color: "#00D2E9" },
            Female: { value: 5, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 4, color: "#00D2E9" },
            Female: { value: 1, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "Canada", value: 35.0, color: "#00A4B6" },
          { country: "UAE", value: 25.0, color: "#00A4B6" },
          { country: "USA", value: 20.0, color: "#00A4B6" },
          { country: "UK", value: 15.0, color: "#00A4B6" },
          { country: "Others", value: 5.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Ras Al Khaimah", value: 25.0, color: "#00A4B6" },
          { city: "Toronto", value: 20.0, color: "#00A4B6" },
          { city: "Dubai", value: 15.0, color: "#00A4B6" },
          { city: "Vancouver", value: 12.0, color: "#00A4B6" },
          { city: "others", value: 28.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "English",
            AudienceLanguage: { value: 95, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 25, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 20, color: "#00A4B6" },
          },
          {
            language: "German",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 80, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 12, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 5, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 3, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: ["Apr 2023", "Aug 2023", "Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [8000, 10000, 12000, 13000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [8000, 10000, 12000, 13000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: ["Apr 2023", "Aug 2023", "Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [288, 360, 432, 468],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [288, 360, 432, 468],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "Nike", value: 95, color: "#00A4B6" },
        { brand: "Adidas", value: 90, color: "#00A4B6" },
        { brand: "Under Armour", value: 85, color: "#00A4B6" },
        { brand: "The North Face", value: 80, color: "#00A4B6" },
        { brand: "Patagonia", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Sports & Athletics", value: 85.0, color: "#00A4B6" },
        { topic: "Outdoor Activities", value: 75.0, color: "#00A4B6" },
        { topic: "Adventure Sports", value: 65.0, color: "#00A4B6" },
        { topic: "Fitness & Training", value: 55.0, color: "#00A4B6" },
        { topic: "Extreme Sports", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@nike",
        "@adidas",
        "@underarmour",
        "@thenorthface",
        "@patagonia",
      ],
      frequentlyUsedHashtags: [
        "#sports",
        "#outdoors",
        "#adventure",
        "#fitness",
        "#outdooractivities",
        "#adventuresports",
        "#sportstraining",
        "#outdoorlife",
      ],
      audienceInterestsBrands: [
        { brand: "Nike", value: 90, color: "#00A4B6" },
        { brand: "Adidas", value: 85, color: "#00A4B6" },
        { brand: "Under Armour", value: 80, color: "#00A4B6" },
        { brand: "The North Face", value: 75, color: "#00A4B6" },
        { brand: "Patagonia", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Sports & Athletics", value: 90, color: "#00A4B6" },
        { topic: "Outdoor Activities", value: 80, color: "#00A4B6" },
        { topic: "Adventure Sports", value: 70, color: "#00A4B6" },
        { topic: "Fitness & Training", value: 60, color: "#00A4B6" },
        { topic: "Extreme Sports", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "19",
    isApproved: true,
    firstName: "Isabella",
    lastName: "Green",
    fullName: "Isabella Green",
    avatarUrl: fullprofileImage3.src,
    tier: CreatorTier.MEGA, // Platinum tier maps to MEGA
    verifiedPlatforms: ["Instagram", "TikTok", "YouTube"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "isabella.green",
        url: "https://instagram.com/isabella.green",
      },
      {
        platform: "TikTok",
        handle: "@isabella.green",
        url: "https://tiktok.com/@isabella.green",
      },
      {
        platform: "YouTube",
        handle: "Isabella Green",
        url: "https://youtube.com/@isabellagreen",
      },
    ],
    email: "isabella.green@outlook.com",
    phone: "+971501112222",
    whatsappNumber: "+971501112222",
    nationality: "British",
    location: "Fujairah, UAE",
    dateOfBirth: new Date("1989-03-15"),
    age: 34,
    gender: Gender.FEMALE,
    signUpDate: new Date("2022-10-28"),
    profileCompletion: 93,
    influencerTags: ["Movies", "TV Shows", "Entertainment"],
    credibilityScore: 94,
    followerCount: 26000,
    reach: 78000,
    engagementRate: 5.6,
    totalRedemptionsValue: 2400,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 24,
    postsCount: 96,
    reviewsCount: 28,
    createdAt: new Date("2022-10-28"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["1", "2", "3"],
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 26000,
        avgLikes: 1456,
        engagementRate: 5.6,
        audienceCredibility: 94,
        avgComments: 116,
        avgReelsViews: 8700,
        sponsoredCount: 24,
        sponsoredPerformance: 5.3,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Female", value: 65, color: "#00A4B6" },
          { label: "Male", value: 35, color: "#E97500" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 3, color: "#00D2E9" },
            Female: { value: 5, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 10, color: "#00D2E9" },
            Female: { value: 18, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 15, color: "#00D2E9" },
            Female: { value: 27, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 5, color: "#00D2E9" },
            Female: { value: 10, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 2, color: "#00D2E9" },
            Female: { value: 5, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "UK", value: 35.0, color: "#00A4B6" },
          { country: "UAE", value: 25.0, color: "#00A4B6" },
          { country: "USA", value: 20.0, color: "#00A4B6" },
          { country: "Canada", value: 15.0, color: "#00A4B6" },
          { country: "Others", value: 5.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Fujairah", value: 25.0, color: "#00A4B6" },
          { city: "London", value: 20.0, color: "#00A4B6" },
          { city: "Dubai", value: 15.0, color: "#00A4B6" },
          { city: "Manchester", value: 12.0, color: "#00A4B6" },
          { city: "others", value: 28.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "English",
            AudienceLanguage: { value: 95, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 30, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "German",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 8, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 75, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 15, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 7, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 3, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: ["Oct 2022", "Apr 2023", "Oct 2023", "Jan 2024"],
          },
          yAxis: {
            values: [15000, 20000, 24000, 26000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [15000, 20000, 24000, 26000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: ["Oct 2022", "Apr 2023", "Oct 2023", "Jan 2024"],
          },
          yAxis: {
            values: [840, 1120, 1344, 1456],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [840, 1120, 1344, 1456],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "Netflix", value: 95, color: "#00A4B6" },
        { brand: "Disney+", value: 90, color: "#00A4B6" },
        { brand: "HBO Max", value: 85, color: "#00A4B6" },
        { brand: "Amazon Prime", value: 80, color: "#00A4B6" },
        { brand: "Hulu", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Movies & TV Shows", value: 85.0, color: "#00A4B6" },
        { topic: "Entertainment Industry", value: 75.0, color: "#00A4B6" },
        { topic: "Film Reviews", value: 65.0, color: "#00A4B6" },
        { topic: "Celebrity Culture", value: 55.0, color: "#00A4B6" },
        { topic: "Streaming Content", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@netflix",
        "@disneyplus",
        "@hbomax",
        "@amazonprime",
        "@hulu",
      ],
      frequentlyUsedHashtags: [
        "#movies",
        "#tvshows",
        "#entertainment",
        "#filmreviews",
        "#celebrityculture",
        "#streamingcontent",
        "#moviecritics",
        "#entertainmentindustry",
      ],
      audienceInterestsBrands: [
        { brand: "Netflix", value: 90, color: "#00A4B6" },
        { brand: "Disney+", value: 85, color: "#00A4B6" },
        { brand: "HBO Max", value: 80, color: "#00A4B6" },
        { brand: "Amazon Prime", value: 75, color: "#00A4B6" },
        { brand: "Hulu", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Movies & TV Shows", value: 90, color: "#00A4B6" },
        { topic: "Entertainment Industry", value: 80, color: "#00A4B6" },
        { topic: "Film Reviews", value: 70, color: "#00A4B6" },
        { topic: "Celebrity Culture", value: 60, color: "#00A4B6" },
        { topic: "Streaming Content", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "20",
    isApproved: true,
    firstName: "Joshua",
    lastName: "King",
    fullName: "Joshua King",
    avatarUrl: fullprofileImage4.src,
    tier: CreatorTier.NANO, // Bronze tier maps to NANO
    verifiedPlatforms: ["Instagram"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "joshua.king",
        url: "https://instagram.com/joshua.king",
      },
    ],
    email: "joshua.king@example.com",
    phone: "+971523334444",
    whatsappNumber: "+971523334444",
    nationality: "American",
    location: "Umm Al Quwain, UAE",
    dateOfBirth: new Date("1996-08-30"),
    age: 27,
    gender: Gender.MALE,
    signUpDate: new Date("2023-03-05"),
    profileCompletion: 52,
    influencerTags: ["History", "Politics", "Current Events"],
    credibilityScore: 67,
    followerCount: 8000,
    reach: 24000,
    engagementRate: 2.9,
    totalRedemptionsValue: 320,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 7,
    postsCount: 28,
    reviewsCount: 5,
    createdAt: new Date("2023-03-05"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["1", "2", "3"],
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 8000,
        avgLikes: 232,
        engagementRate: 2.9,
        audienceCredibility: 67,
        avgComments: 18,
        avgReelsViews: 1200,
        sponsoredCount: 4,
        sponsoredPerformance: 2.1,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Male", value: 65, color: "#E97500" },
          { label: "Female", value: 35, color: "#00A4B6" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 4, color: "#00D2E9" },
            Female: { value: 2, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 18, color: "#00D2E9" },
            Female: { value: 10, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 25, color: "#00D2E9" },
            Female: { value: 15, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 12, color: "#00D2E9" },
            Female: { value: 6, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 6, color: "#00D2E9" },
            Female: { value: 2, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "UAE", value: 35.0, color: "#00A4B6" },
          { country: "USA", value: 25.0, color: "#00A4B6" },
          { country: "UK", value: 20.0, color: "#00A4B6" },
          { country: "Canada", value: 15.0, color: "#00A4B6" },
          { country: "Others", value: 5.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Umm Al Quwain", value: 25.0, color: "#00A4B6" },
          { city: "Dubai", value: 20.0, color: "#00A4B6" },
          { city: "Abu Dhabi", value: 15.0, color: "#00A4B6" },
          { city: "Sharjah", value: 12.0, color: "#00A4B6" },
          { city: "others", value: 28.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "English",
            AudienceLanguage: { value: 95, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 30, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "German",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 8, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 75, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 15, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 7, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 3, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: ["Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [7500, 8000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [7500, 8000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: ["Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [215, 232],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [215, 232],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "BBC News", value: 95, color: "#00A4B6" },
        { brand: "CNN", value: 90, color: "#00A4B6" },
        { brand: "Reuters", value: 85, color: "#00A4B6" },
        { brand: "The Guardian", value: 80, color: "#00A4B6" },
        { brand: "Al Jazeera", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Politics & Current Events", value: 85.0, color: "#00A4B6" },
        { topic: "History & Culture", value: 75.0, color: "#00A4B6" },
        { topic: "International Affairs", value: 65.0, color: "#00A4B6" },
        { topic: "Social Issues", value: 55.0, color: "#00A4B6" },
        { topic: "Economic Analysis", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@bbcnews",
        "@cnn",
        "@reuters",
        "@guardian",
        "@aljazeera",
      ],
      frequentlyUsedHashtags: [
        "#politics",
        "#currentevents",
        "#history",
        "#internationalaffairs",
        "#socialissues",
        "#economicanalysis",
        "#politicalnews",
        "#worldnews",
      ],
      audienceInterestsBrands: [
        { brand: "BBC News", value: 90, color: "#00A4B6" },
        { brand: "CNN", value: 85, color: "#00A4B6" },
        { brand: "Reuters", value: 80, color: "#00A4B6" },
        { brand: "The Guardian", value: 75, color: "#00A4B6" },
        { brand: "Al Jazeera", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Politics & Current Events", value: 90, color: "#00A4B6" },
        { topic: "History & Culture", value: 80, color: "#00A4B6" },
        { topic: "International Affairs", value: 70, color: "#00A4B6" },
        { topic: "Social Issues", value: 60, color: "#00A4B6" },
        { topic: "Economic Analysis", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "21",
    isApproved: true,
    firstName: "Mia",
    lastName: "Scott",
    fullName: "Mia Scott",
    avatarUrl: fullprofileImage.src,
    tier: CreatorTier.MACRO, // Gold tier maps to MACRO
    verifiedPlatforms: ["Instagram", "TikTok"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "mia.scott",
        url: "https://instagram.com/mia.scott",
      },
      {
        platform: "TikTok",
        handle: "@mia.scott",
        url: "https://tiktok.com/@mia.scott",
      },
    ],
    email: "mia.scott@gmail.com",
    phone: "+971555556666",
    whatsappNumber: "+971555556666",
    nationality: "Irish",
    location: "Dubai, UAE",
    dateOfBirth: new Date("1992-12-10"),
    age: 31,
    gender: Gender.FEMALE,
    signUpDate: new Date("2023-02-14"),
    profileCompletion: 87,
    influencerTags: ["Home Improvement", "Gardening", "Design"],
    credibilityScore: 89,
    followerCount: 22000,
    reach: 66000,
    engagementRate: 4.7,
    totalRedemptionsValue: 1760,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 21,
    postsCount: 85,
    reviewsCount: 18,
    createdAt: new Date("2023-02-14"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["1", "2", "3"],
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 22000,
        avgLikes: 1034,
        engagementRate: 4.7,
        audienceCredibility: 89,
        avgComments: 78,
        avgReelsViews: 6200,
        sponsoredCount: 15,
        sponsoredPerformance: 4.2,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Female", value: 75, color: "#00A4B6" },
          { label: "Male", value: 25, color: "#E97500" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 2, color: "#00D2E9" },
            Female: { value: 6, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 6, color: "#00D2E9" },
            Female: { value: 18, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 10, color: "#00D2E9" },
            Female: { value: 30, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 5, color: "#00D2E9" },
            Female: { value: 15, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 2, color: "#00D2E9" },
            Female: { value: 6, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "Ireland", value: 35.0, color: "#00A4B6" },
          { country: "UAE", value: 25.0, color: "#00A4B6" },
          { country: "UK", value: 20.0, color: "#00A4B6" },
          { country: "USA", value: 15.0, color: "#00A4B6" },
          { country: "Others", value: 5.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Dubai", value: 25.0, color: "#00A4B6" },
          { city: "Dublin", value: 20.0, color: "#00A4B6" },
          { city: "Abu Dhabi", value: 15.0, color: "#00A4B6" },
          { city: "Cork", value: 12.0, color: "#00A4B6" },
          { city: "others", value: 28.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "English",
            AudienceLanguage: { value: 95, color: "#00A4B6" },
          },
          {
            language: "Irish",
            AudienceLanguage: { value: 25, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 20, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "German",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 85, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 10, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 3, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 2, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: ["Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [21000, 22000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [21000, 22000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: ["Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [980, 1034],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [980, 1034],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "IKEA", value: 95, color: "#00A4B6" },
        { brand: "Home Depot", value: 90, color: "#00A4B6" },
        { brand: "Lowe's", value: 85, color: "#00A4B6" },
        { brand: "Wayfair", value: 80, color: "#00A4B6" },
        { brand: "Pottery Barn", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Home Improvement & DIY", value: 85.0, color: "#00A4B6" },
        { topic: "Gardening & Plants", value: 75.0, color: "#00A4B6" },
        { topic: "Interior Design", value: 65.0, color: "#00A4B6" },
        { topic: "Home Decor", value: 55.0, color: "#00A4B6" },
        { topic: "Renovation Projects", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@ikea",
        "@homedepot",
        "@lowes",
        "@wayfair",
        "@potterybarn",
      ],
      frequentlyUsedHashtags: [
        "#homeimprovement",
        "#diy",
        "#gardening",
        "#interiordesign",
        "#homedecor",
        "#renovation",
        "#diyprojects",
        "#homeinspiration",
      ],
      audienceInterestsBrands: [
        { brand: "IKEA", value: 90, color: "#00A4B6" },
        { brand: "Home Depot", value: 85, color: "#00A4B6" },
        { brand: "Lowe's", value: 80, color: "#00A4B6" },
        { brand: "Wayfair", value: 75, color: "#00A4B6" },
        { brand: "Pottery Barn", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Home Improvement & DIY", value: 90, color: "#00A4B6" },
        { topic: "Gardening & Plants", value: 80, color: "#00A4B6" },
        { topic: "Interior Design", value: 70, color: "#00A4B6" },
        { topic: "Home Decor", value: 60, color: "#00A4B6" },
        { topic: "Renovation Projects", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "22",
    isApproved: true,
    firstName: "Benjamin",
    lastName: "Adams",
    fullName: "Benjamin Adams",
    avatarUrl: fullprofileImage2.src,
    tier: CreatorTier.MICRO, // Silver tier maps to MICRO
    verifiedPlatforms: ["Instagram", "LinkedIn"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "benjamin.adams",
        url: "https://instagram.com/benjamin.adams",
      },
      {
        platform: "LinkedIn",
        handle: "Benjamin Adams",
        url: "https://linkedin.com/in/benjaminadams",
      },
    ],
    email: "benjamin.adams@yahoo.com",
    phone: "+971567778888",
    whatsappNumber: "+971567778888",
    nationality: "American",
    location: "Abu Dhabi, UAE",
    dateOfBirth: new Date("1990-06-12"),
    age: 33,
    gender: Gender.MALE,
    signUpDate: new Date("2023-09-18"),
    profileCompletion: 66,
    influencerTags: ["Personal Finance", "Investing", "Saving"],
    credibilityScore: 74,
    followerCount: 14000,
    reach: 42000,
    engagementRate: 3.8,
    totalRedemptionsValue: 840,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 13,
    postsCount: 48,
    reviewsCount: 10,
    createdAt: new Date("2023-09-18"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["1", "2", "3"],
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 14000,
        avgLikes: 532,
        engagementRate: 3.8,
        audienceCredibility: 74,
        avgComments: 35,
        avgReelsViews: 3200,
        sponsoredCount: 9,
        sponsoredPerformance: 3.1,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Male", value: 70, color: "#E97500" },
          { label: "Female", value: 30, color: "#00A4B6" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 3, color: "#00D2E9" },
            Female: { value: 1, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 15, color: "#00D2E9" },
            Female: { value: 7, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 30, color: "#00D2E9" },
            Female: { value: 13, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 18, color: "#00D2E9" },
            Female: { value: 7, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 4, color: "#00D2E9" },
            Female: { value: 2, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "USA", value: 35.0, color: "#00A4B6" },
          { country: "UAE", value: 25.0, color: "#00A4B6" },
          { country: "Canada", value: 20.0, color: "#00A4B6" },
          { country: "UK", value: 15.0, color: "#00A4B6" },
          { country: "Others", value: 5.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Abu Dhabi", value: 25.0, color: "#00A4B6" },
          { city: "New York", value: 20.0, color: "#00A4B6" },
          { city: "Dubai", value: 15.0, color: "#00A4B6" },
          { city: "Toronto", value: 12.0, color: "#00A4B6" },
          { city: "others", value: 28.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "English",
            AudienceLanguage: { value: 95, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 25, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "German",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 8, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 80, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 12, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 5, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 3, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: ["Sep 2023", "Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [12000, 13000, 14000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [12000, 13000, 14000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: ["Sep 2023", "Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [456, 494, 532],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [456, 494, 532],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "Vanguard", value: 95, color: "#00A4B6" },
        { brand: "Fidelity", value: 90, color: "#00A4B6" },
        { brand: "Charles Schwab", value: 85, color: "#00A4B6" },
        { brand: "Robinhood", value: 80, color: "#00A4B6" },
        { brand: "TD Ameritrade", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        {
          topic: "Personal Finance & Investing",
          value: 85.0,
          color: "#00A4B6",
        },
        { topic: "Financial Planning", value: 75.0, color: "#00A4B6" },
        { topic: "Stock Market", value: 65.0, color: "#00A4B6" },
        { topic: "Retirement Planning", value: 55.0, color: "#00A4B6" },
        { topic: "Budgeting & Saving", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@vanguard",
        "@fidelity",
        "@charlesschwab",
        "@robinhood",
        "@tdameritrade",
      ],
      frequentlyUsedHashtags: [
        "#personalfinance",
        "#investing",
        "#financialplanning",
        "#stockmarket",
        "#retirementplanning",
        "#budgeting",
        "#saving",
        "#financialfreedom",
      ],
      audienceInterestsBrands: [
        { brand: "Vanguard", value: 90, color: "#00A4B6" },
        { brand: "Fidelity", value: 85, color: "#00A4B6" },
        { brand: "Charles Schwab", value: 80, color: "#00A4B6" },
        { brand: "Robinhood", value: 75, color: "#00A4B6" },
        { brand: "TD Ameritrade", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Personal Finance & Investing", value: 90, color: "#00A4B6" },
        { topic: "Financial Planning", value: 80, color: "#00A4B6" },
        { topic: "Stock Market", value: 70, color: "#00A4B6" },
        { topic: "Retirement Planning", value: 60, color: "#00A4B6" },
        { topic: "Budgeting & Saving", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "23",
    isApproved: true,
    firstName: "Ella",
    lastName: "Nelson",
    fullName: "Ella Nelson",
    avatarUrl: fullprofileImage3.src,
    tier: CreatorTier.MEGA, // Platinum tier maps to MEGA
    verifiedPlatforms: ["Instagram", "TikTok", "YouTube"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "ella.nelson",
        url: "https://instagram.com/ella.nelson",
      },
      {
        platform: "TikTok",
        handle: "@ella.nelson",
        url: "https://tiktok.com/@ella.nelson",
      },
      {
        platform: "YouTube",
        handle: "Ella Nelson",
        url: "https://youtube.com/@ellanelson",
      },
    ],
    email: "ella.nelson@outlook.com",
    phone: "+971549990000",
    whatsappNumber: "+971549990000",
    nationality: "Swedish",
    location: "Sharjah, UAE",
    dateOfBirth: new Date("1988-11-25"),
    age: 35,
    gender: Gender.FEMALE,
    signUpDate: new Date("2023-08-05"),
    profileCompletion: 91,
    influencerTags: ["Sustainable", "Eco-Friendly", "Environment"],
    credibilityScore: 96,
    followerCount: 27000,
    reach: 81000,
    engagementRate: 5.9,
    totalRedemptionsValue: 3000,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 26,
    postsCount: 102,
    reviewsCount: 32,
    createdAt: new Date("2023-08-05"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["1", "2", "3"],
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 27000,
        avgLikes: 1593,
        engagementRate: 5.9,
        audienceCredibility: 96,
        avgComments: 127,
        avgReelsViews: 9500,
        sponsoredCount: 22,
        sponsoredPerformance: 5.4,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Female", value: 70, color: "#00A4B6" },
          { label: "Male", value: 30, color: "#E97500" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 2, color: "#00D2E9" },
            Female: { value: 5, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 8, color: "#00D2E9" },
            Female: { value: 20, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 12, color: "#00D2E9" },
            Female: { value: 28, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 6, color: "#00D2E9" },
            Female: { value: 15, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 2, color: "#00D2E9" },
            Female: { value: 5, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "Sweden", value: 35.0, color: "#00A4B6" },
          { country: "UAE", value: 25.0, color: "#00A4B6" },
          { country: "Norway", value: 20.0, color: "#00A4B6" },
          { country: "Denmark", value: 15.0, color: "#00A4B6" },
          { country: "Others", value: 5.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Sharjah", value: 25.0, color: "#00A4B6" },
          { city: "Stockholm", value: 20.0, color: "#00A4B6" },
          { city: "Dubai", value: 15.0, color: "#00A4B6" },
          { city: "Gothenburg", value: 12.0, color: "#00A4B6" },
          { city: "others", value: 28.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "Swedish",
            AudienceLanguage: { value: 40, color: "#00A4B6" },
          },
          {
            language: "English",
            AudienceLanguage: { value: 95, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 25, color: "#00A4B6" },
          },
          {
            language: "Norwegian",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "Danish",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 85, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 10, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 3, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 2, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: ["Aug 2023", "Oct 2023", "Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [20000, 23000, 25000, 27000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [20000, 23000, 25000, 27000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: ["Aug 2023", "Oct 2023", "Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [1180, 1357, 1475, 1593],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [1180, 1357, 1475, 1593],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "Patagonia", value: 95, color: "#00A4B6" },
        { brand: "The North Face", value: 90, color: "#00A4B6" },
        { brand: "REI", value: 85, color: "#00A4B6" },
        { brand: "Columbia", value: 80, color: "#00A4B6" },
        { brand: "Arc'teryx", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        {
          topic: "Sustainability & Environment",
          value: 85.0,
          color: "#00A4B6",
        },
        { topic: "Eco-Friendly Living", value: 75.0, color: "#00A4B6" },
        { topic: "Climate Action", value: 65.0, color: "#00A4B6" },
        { topic: "Green Technology", value: 55.0, color: "#00A4B6" },
        { topic: "Conservation", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@patagonia",
        "@thenorthface",
        "@rei",
        "@columbia",
        "@arcteryx",
      ],
      frequentlyUsedHashtags: [
        "#sustainability",
        "#environment",
        "#ecofriendly",
        "#climateaction",
        "#greenliving",
        "#conservation",
        "#sustainableliving",
        "#environmentalprotection",
      ],
      audienceInterestsBrands: [
        { brand: "Patagonia", value: 90, color: "#00A4B6" },
        { brand: "The North Face", value: 85, color: "#00A4B6" },
        { brand: "REI", value: 80, color: "#00A4B6" },
        { brand: "Columbia", value: 75, color: "#00A4B6" },
        { brand: "Arc'teryx", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Sustainability & Environment", value: 90, color: "#00A4B6" },
        { topic: "Eco-Friendly Living", value: 80, color: "#00A4B6" },
        { topic: "Climate Action", value: 70, color: "#00A4B6" },
        { topic: "Green Technology", value: 60, color: "#00A4B6" },
        { topic: "Conservation", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
  },
  {
    creatorId: "24",
    isApproved: true,
    firstName: "William",
    lastName: "Carter",
    fullName: "William Carter",
    avatarUrl: fullprofileImage4.src,
    tier: CreatorTier.NANO, // Bronze tier maps to NANO
    verifiedPlatforms: ["Instagram"],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "william.carter",
        url: "https://instagram.com/william.carter",
      },
    ],
    email: "william.carter@example.com",
    phone: "+971581112222",
    whatsappNumber: "+971581112222",
    nationality: "Canadian",
    location: "Ajman, UAE",
    dateOfBirth: new Date("1997-04-08"),
    age: 26,
    gender: Gender.MALE,
    signUpDate: new Date("2023-05-22"),
    profileCompletion: 57,
    influencerTags: ["Science", "Technology", "Innovation"],
    credibilityScore: 69,
    followerCount: 9000,
    reach: 27000,
    engagementRate: 3.2,
    totalRedemptionsValue: 360,
    totalRedemptionsCurrency: "AED",
    campaignsCount: 8,
    postsCount: 32,
    reviewsCount: 6,
    createdAt: new Date("2023-05-22"),
    updatedAt: new Date("2024-01-15"),
    campaignIds: ["1", "2", "3"],
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
    insights: {
      analyticsUpdatedAt: new Date("2024-01-15"),
      analyticsMetrics: {
        followers: 9000,
        avgLikes: 288,
        engagementRate: 3.2,
        audienceCredibility: 69,
        avgComments: 23,
        avgReelsViews: 1800,
        sponsoredCount: 5,
        sponsoredPerformance: 2.8,
      },
      audienceBreakdown: {
        followerTypes: [
          { value: 85.2, color: "#00A4B6", label: "Real" },
          { value: 8.5, color: "#E97500", label: "Suspicious" },
          { value: 4.2, color: "#15A1FF", label: "Mass followers" },
          { value: 2.1, color: "#999999", label: "Influencers" },
        ],
        genderDist: [
          { label: "Male", value: 75, color: "#E97500" },
          { label: "Female", value: 25, color: "#00A4B6" },
        ],
        engagementByAge: [
          {
            age: "13 - 17",
            Male: { value: 5, color: "#00D2E9" },
            Female: { value: 2, color: "#00A4B6" },
          },
          {
            age: "18 - 24",
            Male: { value: 20, color: "#00D2E9" },
            Female: { value: 7, color: "#00A4B6" },
          },
          {
            age: "25 - 34",
            Male: { value: 30, color: "#00D2E9" },
            Female: { value: 10, color: "#00A4B6" },
          },
          {
            age: "35 - 44",
            Male: { value: 15, color: "#00D2E9" },
            Female: { value: 5, color: "#00A4B6" },
          },
          {
            age: "45 - 64",
            Male: { value: 5, color: "#00D2E9" },
            Female: { value: 1, color: "#00A4B6" },
          },
        ],
        locationByCountry: [
          { country: "Canada", value: 35.0, color: "#00A4B6" },
          { country: "UAE", value: 25.0, color: "#00A4B6" },
          { country: "USA", value: 20.0, color: "#00A4B6" },
          { country: "UK", value: 15.0, color: "#00A4B6" },
          { country: "Others", value: 5.0, color: "#00A4B6" },
        ],
        locationByCity: [
          { city: "Ajman", value: 25.0, color: "#00A4B6" },
          { city: "Toronto", value: 20.0, color: "#00A4B6" },
          { city: "Dubai", value: 15.0, color: "#00A4B6" },
          { city: "Vancouver", value: 12.0, color: "#00A4B6" },
          { city: "others", value: 28.0, color: "#00A4B6" },
        ],
        languageDist: [
          {
            language: "English",
            AudienceLanguage: { value: 95, color: "#00A4B6" },
          },
          {
            language: "French",
            AudienceLanguage: { value: 25, color: "#00A4B6" },
          },
          {
            language: "Arabic",
            AudienceLanguage: { value: 20, color: "#00A4B6" },
          },
          {
            language: "German",
            AudienceLanguage: { value: 15, color: "#00A4B6" },
          },
          {
            language: "Spanish",
            AudienceLanguage: { value: 10, color: "#00A4B6" },
          },
        ],
        ethnicityDist: [
          {
            ethnicity: "White",
            AudienceEthnicity: { value: 80, color: "#00A4B6" },
          },
          {
            ethnicity: "Asian",
            AudienceEthnicity: { value: 12, color: "#00A4B6" },
          },
          {
            ethnicity: "Hispanic",
            AudienceEthnicity: { value: 5, color: "#00A4B6" },
          },
          {
            ethnicity: "African",
            AudienceEthnicity: { value: 3, color: "#00A4B6" },
          },
        ],
      },
      growthTrends: {
        followersGrowth: {
          xAxis: {
            values: ["May 2023", "Aug 2023", "Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [6000, 7500, 8500, 9000],
          },
          series: [
            {
              name: "Followers",
              color: "#00A4B6",
              data: [6000, 7500, 8500, 9000],
            },
          ],
        },
        likesGrowth: {
          xAxis: {
            values: ["May 2023", "Aug 2023", "Dec 2023", "Jan 2024"],
          },
          yAxis: {
            values: [192, 240, 264, 288],
          },
          series: [
            {
              name: "Likes",
              color: "#00A4B6",
              data: [192, 240, 264, 288],
            },
          ],
        },
      },
      creatorInterestsBrands: [
        { brand: "Tesla", value: 95, color: "#00A4B6" },
        { brand: "SpaceX", value: 90, color: "#00A4B6" },
        { brand: "Apple", value: 85, color: "#00A4B6" },
        { brand: "Google", value: 80, color: "#00A4B6" },
        { brand: "Microsoft", value: 75, color: "#00A4B6" },
      ],
      creatorBrandAffinityTopics: [
        { topic: "Science & Technology", value: 85.0, color: "#00A4B6" },
        { topic: "Innovation & Research", value: 75.0, color: "#00A4B6" },
        { topic: "Artificial Intelligence", value: 65.0, color: "#00A4B6" },
        { topic: "Space Exploration", value: 55.0, color: "#00A4B6" },
        { topic: "Future Technology", value: 45.0, color: "#00A4B6" },
      ],
      frequentlyTaggedAccounts: [
        "@tesla",
        "@spacex",
        "@apple",
        "@google",
        "@microsoft",
      ],
      frequentlyUsedHashtags: [
        "#science",
        "#technology",
        "#innovation",
        "#artificialintelligence",
        "#spaceexploration",
        "#futuretech",
        "#research",
        "#techinnovation",
      ],
      audienceInterestsBrands: [
        { brand: "Tesla", value: 90, color: "#00A4B6" },
        { brand: "SpaceX", value: 85, color: "#00A4B6" },
        { brand: "Apple", value: 80, color: "#00A4B6" },
        { brand: "Google", value: 75, color: "#00A4B6" },
        { brand: "Microsoft", value: 70, color: "#00A4B6" },
      ],
      audienceBrandAffinityTopics: [
        { topic: "Science & Technology", value: 90, color: "#00A4B6" },
        { topic: "Innovation & Research", value: 80, color: "#00A4B6" },
        { topic: "Artificial Intelligence", value: 70, color: "#00A4B6" },
        { topic: "Space Exploration", value: 60, color: "#00A4B6" },
        { topic: "Future Technology", value: 50, color: "#00A4B6" },
      ],
      similarCreators: ["1", "2", "3", "4", "5"],
    },
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
