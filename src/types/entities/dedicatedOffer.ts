import { Pagination } from './api';

export interface DedicatedOffer {
    id: number;
    offer_title: string;
    venue_id: number;
    social_media_id: number;
    banner_image: string;
    offer_date: string;
    offer_usage: number;
    description: string;
    credibility_range: string;
    review_url: string | null;
    restaurant_website: string | null;
    whatsapp_no: string | null;
    amount: string;
    currency_id: number;
    instagram_followers: string;
    offer_status: number;
    offer_notify: number;
    minimum_user_count: number | null;
    no_of_tables: number | null;
    offer_gender: string;
    influencer_types: string;
    reminder_custom_date: string | null;
    skip_invitation: number;
    venue_update: number;
    is_published: number;
    min_age: number;
    max_age: number;
    user_types: string;
    is_offer_is_prive: number;
    is_offer_special: number;
    is_offer_instagram_verified: number;
    is_offer_blogger: number;
    offer_id: number | null;
    created_at: string;
    updated_at: string;
    offer_location: string;
    location_country_id: number | null;
    confirmation_message: string;
    schedule_publish_time: string | null;
    offer_start_time: string;
    offer_end_time: string;
    offer_display_start_time: string;
    offer_display_end_time: string;
    venue_offer_banner: number;
    is_offer_dummy: number;
    venue: {
        id: number;
        account_id: number | null;
        venue_title: string;
        company_name: string | null;
        category?: {
            category?: string;
        };
    };
}

export interface DedicatedOfferDisplay {
    id: number | string;
    title: string;
    vendorName: string;
    status: string;
    brandLogo?: string | null;
    brandName?: string;
    startDate?: string;
    endDate?: string;
    category?: string;
    banner_image?: string;
}

export interface DedicatedOffersState {
    dedicatedOffers: DedicatedOffer[];
    dedicatedOffer: DedicatedOffer | null;
    loading: boolean;
    error: string | null;
    pagination: Pagination | null;
    bulkDeleteLoading: boolean;
    bulkDeleteError: string | null;
}

export interface GetDedicatedOffersPayload {
    search?: string;
    per_page: number;
    page: number;
}

export interface GetDedicatedOfferDetailsPayload {
    id: string;
}

export interface BulkDeleteDedicatedOffersPayload {
    ids: string[];
}