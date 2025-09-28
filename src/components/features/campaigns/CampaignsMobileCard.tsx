import { CampaignSummary } from "@/types/entities/campaign";

export default function CampaignsMobileCard({
  campaign,
}: {
  campaign: CampaignSummary;
}) {
  const { offer_title, venue, account_status, start_date, end_date } = campaign;

  return (
    <div className="bg-white rounded-[13px] p-3.5 cursor-pointer">
      <div className="flex gap-5 items-center">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[15px] font-semibold leading-[1.5] text-[#4F4F4F]">
              {offer_title}
            </h3>
            <div
              className={`px-3 py-1 text-xs rounded-full text-white ${
                account_status !== "Pending" ? "bg-[#00CC86]" : "bg-[#636363]"
              }`}
            >
              {account_status}
            </div>
          </div>
          <p className="text-[13px] font-medium text-[#414141] leading-[1.5] mb-2">
            By {venue.venue_title}
          </p>
          <div className="flex items-center justify-between text-[13px] text-[#757575]">
            <span>{start_date}</span>
            <span>-</span>
            <span>{end_date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}