"use client";

import CampaignCard from "../campaigns/CampaignCard";
import CampaignsMobileCard from "../campaigns/CampaignMobileCard";
import { useRouter } from "next/navigation";
import { Campaign, Venue } from "@/types/entities";
import { FoodOffer } from "@/types/entities/brand";

interface BrandCampaignsProps {
  foodOffers: FoodOffer[];
  brandName: string;
  brandLogo: string;
  accountId: string;
  brandId: string;
}

const transformFoodOfferToCampaign = (
  offer: FoodOffer,
  brandName: string,
  brandLogo: string,
  brandId: string,
  accountId: string
): Campaign => {
  const venue: Venue = {
    id: parseInt(brandId, 10),
    venue_title: brandName,
    logo: brandLogo,
    account_id: accountId,
    company_name: '',
    banner: null,
    phone_number: null,
    email_address: null,
    trade_license: null,
    trade_license_expiry: null,
    vat_certificate: null,
    address: null,
    latitude: null,
    longitude: null,
    instagram_handle: null,
    website_url: null,
    status: null,
    contact_person_name: null,
    contact_person_email: null,
    contact_person_phone: null,
    city: null,
    state: null,
    country: null,
    created_at: '',
    updated_at: '',
    deleted_at: null,
    deleted_by: null,
    updated_by: null,
    created_by: null,
    account_manager: null,
    brand_id: 0,
    commission_rate: '',
    auto_payment: 0,
    auto_payment_card_id: null,
    auto_payment_day: null,
    auto_payment_fail_notif: 0,
    industry_id: 0,
    sub_industry_id: null,
    notif_new_offer: 0,
    notif_new_review: 0,
    notif_offer_no_show: 0,
    notif_offer_cancel: 0,
    notif_offer_remind: 0,
    notif_monthly_report: 0,
    contact_person_is_alist: 0,
    contact_person_ref_id: null,
    is_all_outlet_same: 0,
    is_contract_signed: 0,
    zomoato_url: null,
    talabat_url: null,
    deliveroo_url: null,
    google_map_url: null,
    other_map_url: null,
    account_type: '',
    sub_account_type: null,
    is_physical_signed: 0,
    is_digital_signed: 0,
    is_paid: 0,
    business_location: null,
    venue_code: '',
    start_date: null,
    end_date: null,
    contract_period: null,
    payment_terms: null,
    other_venue_documents: null,
    is_outlets_feature: 0,
    is_auto_renewal: 0,
    renewal_date: null,
    renewal_price: null,
    renewal_period: null,
    is_master_venue: 0,
    master_venue_id: null,
    is_sub_venue: 0,
    is_old_venue: 0,
    is_new_venue: 0
  };

  return {
    ...offer,
    id: offer.id,
    offer_title: offer.offer_title,
    restaurant_name: offer.restaurant_name,
    campaign_id: offer.campaign_id,
    social_media_id: offer.social_media_id,
    banner_image: offer.banner_image,
    start_date: offer.start_date,
    end_date: offer.end_date,
    offer_usage: offer.offer_usage,
    description: offer.description,
    email_text: offer.email_text,
    credibility_range: offer.credibility_range,
    date_valid_text: offer.date_valid_text,
    rule_1: offer.rule_1,
    rule_2: offer.rule_2,
    rule_3: offer.rule_3,
    review_url: offer.review_url,
    restaurant_website: offer.restaurant_website,
    whatsapp_no: offer.whatsapp_no,
    amount: offer.amount,
    currency_id: offer.currency_id,
    instagram_followers: offer.instagram_followers,
    account_status: offer.account_status,
    offer_status: offer.offer_status,
    offer_notify: offer.offer_notify,
    minimum_user_count: offer.minimum_user_count,
    no_of_tables: offer.no_of_tables,
    offer_gender: offer.offer_gender,
    user_types: offer.user_types,
    is_offer_blogger: offer.is_offer_blogger,
    is_offer_instagram_verified: offer.is_offer_instagram_verified,
    is_offer_special: offer.is_offer_special,
    is_offer_is_prive: offer.is_offer_is_prive,
    max_age: offer.max_age,
    min_age: offer.min_age,
    influencer_types: offer.influencer_types,
    created_at: offer.created_at,
    updated_at: offer.updated_at,
    reminder_custom_date: offer.reminder_custom_date,
    skip_invitation: offer.skip_invitation,
    notification_text: offer.notification_text,
    start_offer_block: offer.start_offer_block,
    end_offer_block: offer.end_offer_block,
    is_dedicated: offer.is_dedicated,
    dedicated_offer_id: offer.dedicated_offer_id,
    venue_offer_banner: offer.venue_offer_banner,
    custom_btn_url: offer.custom_btn_url,
    custom_btn_icon: offer.custom_btn_icon,
    custom_btn_title: offer.custom_btn_title,
    insight_required: offer.insight_required,
    is_groupX: offer.is_groupX,
    offer_location: offer.offer_location,
    location_country_id: offer.location_country_id,
    calendar_custom_days: offer.calendar_custom_days,
    dress_code: offer.dress_code,
    group_id: offer.group_id,
    mobile_redemption_title: offer.mobile_redemption_title,
    mobile_redemption_text: offer.mobile_redemption_text,
    schedule_publish_time: offer.schedule_publish_time,
    phone_campaign_message: offer.phone_campaign_message,
    phone_campaign_mentions: offer.phone_campaign_mentions,
    phone_review_text: offer.phone_review_text,
    phone_review_comments: offer.phone_review_comments,
    offer_start_time: offer.offer_start_time,
    offer_end_time: offer.offer_end_time,
    offer_display_start_time: offer.offer_display_start_time,
    offer_display_end_time: offer.offer_display_end_time,
    offer_available_start_date: offer.offer_available_start_date,
    offer_available_end_date: offer.offer_available_end_date,
    skip_stories: offer.skip_stories,
    is_offer_dummy: offer.is_offer_dummy,
    venue: venue,
  };
};

export default function BrandCampaigns({
  foodOffers,
  brandName,
  brandLogo,
  accountId,
  brandId,
}: BrandCampaignsProps) {
  const router = useRouter();

  const handleCampaignClick = (campaignId: string) => {
    router.push(`/businesses/accounts/${accountId}/${brandId}/${campaignId}`);
  };

  if (!foodOffers || foodOffers.length === 0) {
    return (
      <div className="py-6">
        <div className="max-w-[1428px] mx-auto">
          <div className="flex items-center justify-center min-h-[200px]">
            <p className="text-gray-500">No campaigns found for this brand.</p>
          </div>
        </div>
      </div>
    );
  }

  const brandCampaigns = foodOffers.map((offer) =>
    transformFoodOfferToCampaign(offer, brandName, brandLogo, brandId, accountId)
  );

  return (
    <div className="py-6">
      <div className="hidden md:block">
        <div className="max-w-[1428px] py-10 mx-auto grid grid-cols-[repeat(auto-fit,340px)] gap-x-[13px] gap-y-[20px] justify-center">
          {brandCampaigns.map((campaign, index) => (
            <div
              key={`${campaign.campaign_id}-${index}`}
              onClick={() => handleCampaignClick(campaign.campaign_id)}
              className="cursor-pointer"
            >
              <CampaignCard
                campaign={campaign}
                checked={false}
                onCheckboxChange={() => {}}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-1.25">
        {brandCampaigns.map((campaign, index) => (
          <div
            key={`${campaign.campaign_id}-${index}`}
            onClick={() => handleCampaignClick(campaign.campaign_id)}
            className="cursor-pointer"
          >
            <CampaignsMobileCard
              campaign={campaign}
              checked={false}
              onCheckboxChange={() => {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
}