import { CampaignDisplay } from "@/types/entities/campaign";

export default function CampaignsMobileCard({
  campaign,
}: {
  campaign: CampaignDisplay;
}) {
  const { title, vendorName, status, startDate, endDate } = campaign;

  return (
    <div className="bg-white rounded-[13px] p-3.5 cursor-pointer">
      <div className="flex gap-5 items-center">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[15px] font-semibold leading-[1.5] text-[#4F4F4F]">
              {title}
            </h3>
            <div
              className={`px-3 py-1 text-xs rounded-full text-white ${
                status !== "Pending" ? "bg-[#00CC86]" : "bg-[#636363]"
              }`}
            >
              {status}
            </div>
          </div>
          <p className="text-[13px] font-medium text-[#414141] leading-[1.5] mb-2">
            By {vendorName}
          </p>
          <div className="flex items-center justify-between text-[13px] text-[#757575]">
            <span>{startDate}</span>
            <span>-</span>
            <span>{endDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}