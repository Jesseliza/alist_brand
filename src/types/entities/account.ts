/**
 * Account Type Enum
 */
export enum AccountType {
  INDIVIDUAL = "individual",
  AGENCY = "agency",
}

/**
 * Account Entity Type
 * Represents a user account in the system
 */
export type Account = {
  /** Unique identifier for the account */
  accountId: string;

  /** Given name */
  firstName: string;

  /** Family name */
  lastName: string;

  /** Avatar initials */
  avatarInitials: string;

  /** Avatar background color */
  avatarBackground: string;

  /** Primary contact email address */
  emailAddress: string;

  /** Primary contact phone number */
  phoneNumber: string;

  /** Agency name or "individual" label */
  affiliation: string;

  /** Account type - Individual or Agency */
  accountType: AccountType;

  /** When the account was created */
  signUpDate: Date;

  /** Timestamp of most recent login (optional) */
  lastLogin?: Date;

  /** Number of active plan subscriptions (derived) */
  subscriptionCount: number;

  /** Number of brands owned (derived) */
  brandsCount: number;

  /** Total campaigns across all owned brands (derived) */
  campaignsCount: number;
};
