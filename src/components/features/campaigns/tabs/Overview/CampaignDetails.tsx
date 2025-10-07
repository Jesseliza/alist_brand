import { Campaign } from "@/types/entities";

export default function CampaignDetails({ campaign }: { campaign: Campaign }) {
  const details = [
    {
      label: "Walk In/Delivery",
      value: campaign?.venue?.category?.category ?? "N/A",
    },
    { label: "Barter/Paid", value: campaign?.offerType ?? "N/A" },
    {
      label: "Price",
      value: campaign?.amount ? `AED ${campaign.amount}` : "N/A",
    },
    { label: "Approval", value: campaign?.account_status ?? "N/A" },
    {
      label: "Restricted to",
      value: "N/A",
    },
    {
      label: "Date",
      value:
        campaign?.start_date && campaign?.end_date
          ? `${campaign.start_date} - ${campaign.end_date}`
          : "N/A",
    },
  ];

  return (
    <div className="mt-[11px] rounded-[11px] bg-[#F8F8F8] px-[35px] py-[30px]">
      <h3 className="text-[18px] font-semibold leading-[27px] text-[#4F4F4F] mb-4">
        Campaign Details
      </h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {details.map((detail, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-[15px] font-medium text-[#4F4F4F]">
              {detail.label}
            </span>
            <span className="text-[15px] text-[#4F4F4F]">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}