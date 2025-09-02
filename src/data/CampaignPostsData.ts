import { CampaignPost } from "@/types/entities";

export const CampaignPostsData: CampaignPost[] = [
  {
    campaignPostId: "post_1",
    campaignId: "campaign_1",
    creatorId: "1",
    postedAt: new Date("2024-01-15"),
    imageUrls: [
      "/images/campaign-details/posts/post1.png",
      "/images/campaign-details/posts/post2.png",
      "/images/campaign-details/posts/post3.png",
    ],
    likes: 150,
    comments: 25,
    status: "published",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    campaignPostId: "post_2",
    campaignId: "campaign_1",
    creatorId: "2",
    postedAt: new Date("2024-01-16"),
    imageUrls: [
      "/images/campaign-details/posts/post1.png",
      "/images/campaign-details/posts/post2.png",
    ],
    likes: 89,
    comments: 12,
    status: "published",
    createdAt: new Date("2024-01-16"),
    updatedAt: new Date("2024-01-16"),
  },
  {
    campaignPostId: "post_3",
    campaignId: "campaign_1",
    creatorId: "3",
    postedAt: new Date("2024-01-17"),
    imageUrls: [
      "/images/campaign-details/posts/post2.png",
      "/images/campaign-details/posts/post3.png",
      "/images/campaign-details/posts/post1.png",
    ],
    likes: 203,
    comments: 34,
    status: "published",
    createdAt: new Date("2024-01-17"),
    updatedAt: new Date("2024-01-17"),
  },
];