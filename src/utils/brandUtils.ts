import { Brand } from "@/types/entities";

export const getDisplayName = (brand: Brand): string => {
  return brand.name || "Unnamed Brand";
};

export const transformApiVenueToBrand = (apiVenue: any): Brand => {
  return {
    brandId: apiVenue.id.toString(),
    name: apiVenue.venue_title,
    companyName: apiVenue.company_name,
    accountId:
      apiVenue.accounts && apiVenue.accounts.length > 0
        ? apiVenue.accounts[0].id.toString()
        : null,
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
    logo: null,
    owner: "",
    phoneNumber: null,
    emailAddress: null,
    businessLocation: null,
    associateFirstName: "",
    associateLastName: "",
    associateInitials: "",
    associateBackground: "",
    registrationDate: apiVenue.created_at,
    offersCount: 0,
    campaignsCount: 0,
    profileCompletion: 0,
    files: 0,
    Venue_contact_name: apiVenue.Venue_contact_name,
    venue_email: apiVenue.venue_email,
    Venue: {
      food_offers: apiVenue.food_offers || [],
      dedicated_offers: apiVenue.dedicated_offers || [],
    },
    food_offers_count: apiVenue.food_offers_count || 0,
  };
};