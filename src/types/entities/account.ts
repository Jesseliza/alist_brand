/**
 * Account Type Enum
 */
export enum AccountType {
  INDIVIDUAL = "individual",
  AGENCY = "agency",
  ENTERPRISE = "enterprise",
}

/**
 * Account Entity Type
 * Represents a user account in the system
 */
import { Brand } from "./brand";

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

  /** Country code for the phone number */
  country_code?: string;

  /** Primary contact phone number */
  phoneNumber: string;

  /** Agency name or "individual" label */
  // affiliation: string;

  /** List of associated brands */
  brands?: Brand[];

  /** Account type - Individual or Agency */
  accountType: AccountType;

  /** Registration type - e.g., "admin", "account" */
  registration_type: string;

  /** When the account was created */
  signUpDate: string | null;

  /** Timestamp of most recent login (optional) */
  lastLogin?: Date;

  /** Number of active plan subscriptions (derived) */
  subscriptionCount: number;

  /** Number of brands owned (derived) */
  brandsCount: number;

  /** Total campaigns across all owned brands (derived) */
  campaignsCount: number;

  food_offers_count: number;

  /** Account status */
  status: "active" | "inactive";
};
