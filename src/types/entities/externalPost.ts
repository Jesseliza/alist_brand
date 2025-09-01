export type ExternalPost = {
  /** Unique identifier for the external post */
  externalPostId: string; // UUID / string - Primary key

  /** FK to Creator.creatorId */
  creatorId: string; // FK → Creator.creatorId

  /** When the post went live */
  postedAt: Date; // datetime

  /** Thumbnail or media URL */
  imageUrl: string;

  /** Number of likes */
  likes: number; // integer

  /** Number of comments */
  comments: number; // integer
};
