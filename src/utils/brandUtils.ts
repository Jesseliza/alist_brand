import { Brand } from "@/types/entities";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transformApiVenueToBrand = (venue: any): Brand => {
  return {
    brandId: venue.id.toString(),
    name: venue.venue_title,
    accountId: venue.accountId || 'N/A',
    logo: venue.logo || '',
    phoneNumber: venue.phoneNumber || '',
    emailAddress: venue.emailAddress || '',
    industry: venue.industry || 'N/A',
    companyName: venue.companyName || '',
    businessLocation: venue.businessLocation || '',
    country: venue.country || '',
    state: venue.state || '',
    tradeLicenseCopy: venue.tradeLicenseCopy || '',
    vatCertificate: venue.vatCertificate || '',
    instagramHandle: venue.instagramHandle || '',
    websiteUrl: venue.venue_url || '',
    associateName: venue.associateName || '',
    associateEmail: venue.associateEmail || '',
    associatePhone: venue.associatePhone || '',
    associateFirstName: venue.associateFirstName || '',
    associateLastName: venue.associateLastName || '',
    associateInitials: venue.associateInitials || '',
    associateBackground: venue.associateBackground || '#CCCCCC',
    registrationDate: venue.registrationDate || '',
    offersCount: venue.offersCount || 0,
    campaignsCount: venue.campaignsCount || 0,
    profileCompletion: venue.profileCompletion || 0,
  };
};