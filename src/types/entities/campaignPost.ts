/**
 * CampaignPost Entity Type
 * Represents an individual post created by a Creator as part of a Campaign (used in the Campaigns → Posts tab)
 */
export type CampaignPost = {
  /** Unique identifier for the campaign post */
  campaignPostId: string; // UUID / string - Primary key

  /** FK to Campaign.campaignId */
  campaignId: string; // FK → Campaign.campaignId

  /** FK to Creator.creatorId */
  creatorId: string; // FK → Creator.creatorId

  /** When this campaign specific post was published */
  postedAt: Date; // datetime

  /** Array of media URLs (e.g. 3 images in the card) */
  imageUrls: string[];

  /** Optional text or description */
  caption?: string;

  /** Likes on this post */
  likes: number; // integer

  /** Comments on this post */
  comments: number; // integer

  /** Optional impressions or reach from this post */
  reach?: number; // integer

  /** Optional engagement % for this post */
  engagementRate?: number; // number (0–100)

  /** Optional: views for video content */
  views?: number;

  /** Optional: shares/retweets */
  shares?: number;

  /** Optional: post URL */
  postUrl?: string;

  /** Post status (draft, published, archived, etc.) */
  status: "draft" | "published" | "archived" | "rejected";

  /** Optional: approval status for campaign posts */
  approvalStatus?: "pending" | "approved" | "rejected";

  /** Optional: feedback from brand/campaign manager */
  feedback?: string;

  /** When this record was created */
  createdAt: Date;

  /** When this record was last updated */
  updatedAt: Date;
};
