import { Brand } from "@/types/entities";

export const getDisplayName = (brand: Brand): string => {
  return brand.name || "Unnamed Brand";
};

interface ApiVenue {
  id: number;
  venue_title: string;
  company_name: string;
  accounts: { id: number }[];
  country_id: string;
  state_id: string;
  category_id: string;
  venue_instagram_url: string;
  venue_url: string;
  Venue_contact_name: string;
  venue_email: string;
  venue_contact_number: string;
  trade_license_file: string;
  vat_certificate_file: string;
  created_at: string;
}

export const transformApiVenueToBrand = (apiVenue: ApiVenue): Brand => {
  return {
    brandId: apiVenue.id.toString(),
    name: apiVenue.venue_title,
    companyName: apiVenue.company_name,
    accountId:
      apiVenue.accounts && apiVenue.accounts.length > 0
        ? apiVenue.accounts[0].id.toString()
        : "",
    country: apiVenue.country_id,
    state: apiVenue.state_id,
    industry: apiVenue.category_id,
    instagramHandle: apiVenue.venue_instagram_url,
    websiteUrl: apiVenue.venue_url,
    associateName: apiVenue.Venue_contact_name,
    associateEmail: apiVenue.venue_email,
    associatePhone: apiVenue.venue_contact_number,
    tradeLicenseCopy: apiVenue.trade_license_file,
    vatCertificate: apiVenue.vat_certificate_file,
    logo: "", // Placeholder for logo, as it's not in the API response
    owner: "", // Placeholder for owner, as it's not in the API response
    phoneNumber: "", // Placeholder for phone number, as it's not in the API response
    emailAddress: "", // Placeholder for email address, as it's not in the API response
    businessLocation: "", // Placeholder for business location, as it's not in the API response
    associateFirstName: "", // Placeholder
    associateLastName: "", // Placeholder
    associateInitials: "", // Placeholder
    associateBackground: "", // Placeholder
    registrationDate: apiVenue.created_at,
    offersCount: 0, // Placeholder
    campaignsCount: 0, // Placeholder
    profileCompletion: 0, // Placeholder
    files: 0, // Placeholder
  };
};