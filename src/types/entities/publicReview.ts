/**
 * Review Platform Enum
 */
export enum ReviewPlatform {
  GOOGLE = "google",
  // Can add more platforms later
}

/**
 * PublicReview Entity Type
 * Represents a public review about a Creator (external feedback from platforms)
 */
export type PublicReview = {
  /** Unique identifier for the public review */
  publicReviewId: string; // UUID / string - Primary key

  /** FK to Creator.creatorId */
  creatorId: string; // FK → Creator.creatorId

  /** Platform where the review was posted */
  platform: ReviewPlatform; // google for now

  /** Rating (1-5 stars, whole numbers only) */
  rating: number; // 1-5, no fractions

  /** When the review was posted */
  date: string; // date as string

  /** The review text content */
  text: string; // text which is the review

  /** When this record was created */
  createdAt: Date;

  /** When this record was last updated */
  updatedAt: Date;
};
