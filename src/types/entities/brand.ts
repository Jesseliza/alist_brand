export type Brand = {
  brandId: string;
  accountId: string; // FK to Account
  name: string; // Display name (e.g. "Dunkin'")
  logo: string; // Brand image URL
  phoneNumber: string; // Main contact number
  emailAddress: string; // Contact email
  industry: string; // Category (e.g. "Food & Drinks")
  companyName: string; // Legal name on trade license
  country: string; // Country code
  state: string; // State or province
  businessLocation: string; // Business location
  tradeLicenseCopy: string | File; // File reference (e.g. PDF)
  vatCertificate: string | File; // File reference (e.g. PDF)
  instagramHandle: string; // Social media username
  websiteUrl: string; // Public website
  associateName: string; // On brand contact person's name
  associateEmail: string; // On brand contact person's email
  associatePhone: string; // On brand contact person's phone
  associateFirstName: string;
  associateLastName: string;
  associateInitials: string;
  associateBackground: string;
  registrationDate: string;
  offersCount: number; // (Derived) Number of "offers" or activities scheduled under Brand
  campaignsCount: number; // (Derived) Number of Campaigns this Brand runs
  profileCompletion: number; // (Derived) How complete the Brand's profile is for the UI
};