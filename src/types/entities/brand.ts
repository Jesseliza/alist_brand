export type Brand = {
  brandId: string;
  accountId: string; // FK to Account
  name: string; // Display name (e.g. "Dunkin'")
  logo: string; // Brand image URL
  phoneNumber: string; // Main contact number
  emailAddress: string; // Contact email
  industry: string; // Category (e.g. "Food & Drinks")
  companyName: string; // Legal name on trade license
  businessLocation: string; // City or region
  tradeLicenseCopy: string; // File reference (e.g. PDF)
  vatCertificate: string; // File reference (e.g. PDF)
  instagramHandle: string; // Social media username
  websiteUrl: string; // Public website
  associateFirstName: string; // On brand contact person's first name
  associateLastName: string; // On brand contact person's last name
  associateEmail: string; // On brand contact person's email
  associatePhone: string; // On brand contact person's phone
  associateInitials: string; // On brand contact person's initials
  associateBackground: string; // On brand contact person's avatar background color
  offersCount: number; // (Derived) Number of "offers" or activities scheduled under Brand
  campaignsCount: number; // (Derived) Number of Campaigns this Brand runs
  profileCompletion: number; // (Derived) How complete the Brand's profile is for the UI
};
