import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    "success": true,
    "message": "Published offers count fetched successfully",
    "data": {
      "campaignsCount": 53664,
      "influencersCount": 50568,
      "brandsCount": 1295,
      "pendingCount": 8512,
      "campaignPerformance": [
        {
          "day": "Monday",
          "date": "2025-10-06",
          "completed_count": 0,
          "active_count": 10
        },
        { "day": "Tuesday", "date": "2025-10-07", "completed_count": 0, "active_count": 6 },
        { "day": "Wednesday", "date": "2025-10-08", "completed_count": 0, "active_count": 3 },
        { "day": "Thursday", "date": "2025-10-09", "completed_count": 0, "active_count": 2 },
        { "day": "Friday", "date": "2025-10-10", "completed_count": 0, "active_count": 2 },
        { "day": "Saturday", "date": "2025-10-11", "completed_count": 0, "active_count": 1 },
        { "day": "Sunday", "date": "2025-10-12", "completed_count": 0, "active_count": 1 }
      ],
      "liveCampaigns": [
        {
          "id": 80994, "offer_title": "Store Voucher for Pre-Owned Items", "restaurant_name": 937, "campaign_id": "RETO_1742453686", "social_media_id": 1, "banner_image": "/images/dashboard/live campaigns/live-campaign-1.png", "start_date": "2025-10-03", "end_date": "2025-10-08", "offer_usage": 3, "description": "<p><span style=\"font-weight: bolder;\">12PM - 12AM<br>Advance booking is mandatory<br><br>Instagram:&nbsp;<a href=\"https://www.instagram.com/wickedcrabdubai/\" target=\"_blank\">@wickedcrabdubai</a>&nbsp;</span></p>", "email_text": "<p>some text</p>", "credibility_range": "0 - 100", "date_valid_text": "Only valid on ##DATE##", "rule_1": "<p>some rule</p>", "rule_2": "<p>some rule</p>", "rule_3": "<p>some rule</p>", "review_url": null, "restaurant_website": null, "whatsapp_no": null, "amount": "125", "currency_id": 1, "instagram_followers": "", "account_status": "Pending", "offer_status": "Published", "offer_notify": 0, "minimum_user_count": null, "no_of_tables": null, "offer_gender": "male,female,other", "user_types": "is_prive,special,instagram_verified,blogger", "is_offer_blogger": 1, "is_offer_instagram_verified": 1, "is_offer_special": 1, "is_offer_is_prive": 1, "max_age": 130, "min_age": 13, "influencer_types": "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28", "created_at": "2025-10-03T13:17:29.000000Z", "updated_at": "2025-10-03T13:18:02.000000Z", "reminder_custom_date": "2025-10-03", "skip_invitation": 0, "notification_text": null, "start_offer_block": null, "end_offer_block": null, "is_dedicated": 0, "dedicated_offer_id": null, "venue_offer_banner": 1, "custom_btn_url": null, "custom_btn_icon": null, "custom_btn_title": null, "insight_required": 0, "is_groupX": 0, "offer_location": null, "location_country_id": null, "calendar_custom_days": 5, "dress_code": null, "group_id": "6yUKIv", "mobile_redemption_title": "Advance booking is mandatory", "mobile_redemption_text": "some text", "schedule_publish_time": null, "phone_campaign_message": "some message", "phone_campaign_mentions": "some mentions", "phone_review_text": "some text", "phone_review_comments": "some comments", "offer_start_time": null, "offer_end_time": null, "offer_display_start_time": "00:00:00", "offer_display_end_time": "23:59:00", "offer_available_start_date": null, "offer_available_end_date": null, "skip_stories": 0, "is_offer_dummy": 0, "deleted_at": null,
          "food_offer_user": [
            { "id": 596273, "user_id": 50741, "offer_id": 81126, "food_offer_date_id": 143870, "offer_date": "2025-10-08", "offer_code": "ALISTRX3MI5", "tier": 0, "block": 4, "created_at": "2025-10-03T13:17:38.000000Z", "updated_at": "2025-10-06T18:58:17.000000Z", "redem_at": "2025-10-06 18:58:17", "used_at": null, "user": { "id": 50741, "name": "Akbar M", "profile_picture": "/assets/uploads/profilePhoto/1759724290.jpeg" } },
            { "id": 596274, "user_id": 50692, "offer_id": 81126, "food_offer_date_id": 143869, "offer_date": "2025-10-07", "user": { "id": 50692, "name": "User 2", "profile_picture": "/assets/uploads/profilePhoto/1759724290.jpeg" } },
            { "id": 596275, "user_id": 10, "offer_id": 81126, "food_offer_date_id": 143870, "offer_date": "2025-10-08", "user": { "id": 10, "name": "User 3", "profile_picture": "/assets/uploads/profilePhoto/1759724290.jpeg" } }
          ],
          "venue": { "id": 1, "venue_title": "Affordabowls", "category_id": 5, "category": { "id": 5, "category": "Exclusive Offer" } }
        }
      ],
      "influencers": [
        { "id": 50741, "name": "Akbar M", "profile_picture": "/assets/uploads/profilePhoto/1759724290.jpeg", "food_offers_users_count": 3 },
        { "id": 50743, "name": "aswathy test", "profile_picture": "/assets/uploads/profilePhoto/1759724290.jpeg", "food_offers_users_count": 5 },
        { "id": 50742, "name": "Rini Thomas", "profile_picture": "/assets/uploads/profilePhoto/1759724290.jpeg", "food_offers_users_count": 2 }
      ]
    }
  };
  return NextResponse.json(data);
}