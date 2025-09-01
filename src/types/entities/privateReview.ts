/**
 * PrivateReview Entity Type
 * Represents a private review about a Creator (internal feedback)
 */
export type PrivateReview = {
  /** Unique identifier for the private review */
  privateReviewId: string; // UUID / string - Primary key

  /** FK to Creator.creatorId */
  creatorId: string; // FK → Creator.creatorId

  /** When the review was written */
  reviewDate: Date; // date

  /** The review text content */
  text: string; // text which is the review

  /** Optional: who wrote this review (admin, manager, etc.) */
  reviewerId?: string;

  /** Optional: review category or type */
  category?:
    | "performance"
    | "communication"
    | "quality"
    | "professionalism"
    | "other";

  /** Optional: rating (1-5 stars) */
  rating?: number; // 1-5

  /** When this record was created */
  createdAt: Date;

  /** When this record was last updated */
  updatedAt: Date;
};
