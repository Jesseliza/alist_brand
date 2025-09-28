import { CampaignDisplay } from "@/types/entities/campaign";

export default function CampaignCard({ campaign }: { campaign: CampaignDisplay }) {
  const { title, vendorName, status } = campaign;
  const isActive = status !== "Pending";

  const handleEditClick = () => {
    // TODO: Implement edit functionality
    console.log("Edit clicked for campaign:", campaign.id);
  };

  const handleRemoveClick = () => {
    // TODO: Implement remove functionality
    console.log("Remove clicked for campaign:", campaign.id);
  };

  return (
    <article className="w-full bg-white rounded-[13px] overflow-hidden shadow-md p-4 flex flex-col h-full">
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-[15px] font-medium leading-[23px] text-[#4F4F4F] pr-2">
            {title}
          </h3>
          <div
            className={`px-3 py-1 text-xs rounded-full text-white flex-shrink-0 ${
              isActive ? "bg-[#00CC86]" : "bg-[#636363]"
            }`}
          >
            {status}
          </div>
        </div>
        <p className="text-[13px] text-[#414141] leading-[20px] mb-4">
          By {vendorName}
        </p>
      </div>
      <div className="flex gap-[9px] mt-auto">
        <button
          onClick={handleEditClick}
          className="flex-1 bg-[#00A4B6] text-[15px] text-white py-[9px] rounded-[11px] font-medium leading-[23px]"
        >
          Edit
        </button>
        <button
          onClick={handleRemoveClick}
          className="flex-1 bg-[#787878] text-[15px]  text-white py-[9px] rounded-[11px] font-medium leading-[23px]"
        >
          Remove
        </button>
      </div>
    </article>
  );
}
