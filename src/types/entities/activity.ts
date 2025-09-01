/**
 * Activity Repeat Enum
 */
export enum ActivityRepeat {
  NONE = "none",
  DAILY = "daily",
  WEEKLY = "weekly",
  MONTHLY = "monthly",
}

/**
 * Gender Filter Enum
 */
export enum GenderFilter {
  ALL = "all",
  MALE = "male",
  FEMALE = "female",
}

/**
 * Booking Methods Type
 */
export type BookingMethods = {
  phone: boolean;
  whatsapp: boolean;
  email: boolean;
};

/**
 * Activity Entity Type (a.k.a. Availability Slot)
 * Defines individual activity/availability slots within a Campaign
 */
export type Activity = {
  /** Unique identifier for the activity */
  activityId: string; // UUID / string - Primary key

  /** Which Campaign this activity belongs to */
  campaignId: string; // FK to Campaign

  /** Optional name or label */
  title?: string;

  /** Start of availability */
  startDateTime: Date;

  /** End of availability (ignored if allDay) */
  endDateTime: Date;

  /** Toggles full day vs timed slot */
  allDay: boolean;

  /** Free form text or address */
  location: string;

  /** Defaults to the Brand's business location */
  useBusinessLocation: boolean;

  /** Repeat pattern for recurring activities */
  repeat: ActivityRepeat;

  /** Number of vouchers available */
  vouchersCount: number;

  /** Gender filter for this activity */
  genderFilter: GenderFilter;

  /** Allowed booking channels */
  bookingMethods: BookingMethods;

  /** Calendar dot color (e.g. hex or enum) */
  colorCode: string;

  /** Free form text (dress code, notes, etc.) */
  additionalInstructions?: string;

  /** When activity was created */
  createdAt: Date;

  /** When activity was last modified */
  updatedAt: Date;
};
