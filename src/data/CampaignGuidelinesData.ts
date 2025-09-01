export interface CampaignGuideline {
  platform: string;
  platformIcon: string;
  requirements: string;
  rules: {
    label: string;
    value: string;
    highlight?: string;
  }[];
}

export interface CampaignGuidelinesData {
  [campaignId: string]: CampaignGuideline[];
}

export const campaignGuidelinesData: CampaignGuidelinesData = {
  "0": [
    {
      platform: "3 Instagram Stories",
      platformIcon: "/icons/campaign/details/overview/instagram.svg",
      requirements: "Create engaging Instagram stories content",
      rules: [
        {
          label: "Visible Tag:",
          value: "@starbucks",
          highlight: "@starbucks",
        },
        {
          label: "Visible Tag:",
          value: "@starbucks",
          highlight: "@starbucks",
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
  "1": [
    {
      platform: "2 Instagram Posts",
      platformIcon: "/icons/campaign/details/overview/instagram.svg",
      requirements: "Create engaging Instagram posts content",
      rules: [
        {
          label: "Visible Tag:",
          value: "@mcdonalds",
          highlight: "@mcdonalds",
        },
        {
          label: "Hashtags:",
          value: "#McDonalds #Food #Lifestyle",
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
  "2": [
    {
      platform: "Instagram Stories",
      platformIcon: "/icons/campaign/details/overview/instagram.svg",
      requirements: "Create engaging Instagram stories content",
      rules: [
        {
          label: "Visible Tag:",
          value: "@nike",
          highlight: "@nike",
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
  "3": [
    {
      platform: "Instagram Posts",
      platformIcon: "/icons/campaign/details/overview/instagram.svg",
      requirements: "Create engaging Instagram posts content",
      rules: [
        {
          label: "Visible Tag:",
          value: "@adidas",
          highlight: "@adidas",
        },
        {
          label: "Hashtags:",
          value: "#Adidas #Sports #Lifestyle",
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
  "4": [
    {
      platform: "Instagram Stories",
      platformIcon: "/icons/campaign/details/overview/instagram.svg",
      requirements: "Create engaging Instagram stories content",
      rules: [
        {
          label: "Visible Tag:",
          value: "@apple",
          highlight: "@apple",
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
};

// Default guidelines for campaigns without specific data
export const defaultCampaignGuidelines: CampaignGuideline[] = [
  {
    platform: "3 Instagram Stories",
    platformIcon: "/icons/campaign/details/overview/instagram.svg",
    requirements: "Create engaging Instagram stories content",
    rules: [
      {
        label: "Visible Tag:",
        value: "@brand",
        highlight: "@brand",
      },
      {
        label: "Visible Tag:",
        value: "@brand",
        highlight: "@brand",
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
];
