import Image from "next/image";
import { Campaign } from "@/types/entities";
import Link from "next/link";
import Checkbox from "@/components/general/CheckBox";
import { generateColorFromString } from "@/utils/colorGenerator";
import { getInitials } from "@/utils/text";

interface CampaignsMobileCardProps {
  campaign: Campaign;
  checked: boolean;
  onCheckboxChange: () => void;
}

export default function CampaignsMobileCard({
  campaign,
  checked,
  onCheckboxChange,
}: CampaignsMobileCardProps) {
  // TODO: Replace with the actual base URL from environment variables
  const IMAGE_BASE_URL = "https://dev-partners.alist.ae/";

  const handleWrapperClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="bg-white rounded-[13px] p-3.5 relative">
      <div onClick={handleWrapperClick} className="absolute top-4 right-4 z-10">
        <Checkbox
          checked={checked}
          onChange={onCheckboxChange}
        />
      </div>
      <Link href={`/businesses/campaigns/${campaign.campaign_id}`} className="block cursor-pointer">
        <div className="flex gap-5 items-center">
          <div className="relative w-[86.31px] h-[86.31px] rounded-[10px] overflow-hidden flex-shrink-0">
            {campaign.banner_image ? (
              <Image
                src={`${IMAGE_BASE_URL}storage/uploads/users/influencers/offers/${campaign.banner_image}`}
                alt={campaign.offer_title}
                fill
                className="object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ backgroundColor: generateColorFromString(campaign.offer_title) }}
              >
                <span className="text-white text-3xl font-semibold">{getInitials(campaign.offer_title)}</span>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[15px] font-semibold leading-[1.5] text-[#4F4F4F] mb-1.5 truncate">
              {campaign.offer_title}
            </h3>
            <p className="text-[13px] font-medium text-[#414141] leading-[1.5] mb-2 truncate">
              {campaign.venue.venue_title}
            </p>
            <div className="flex items-center justify-between text-[13px] text-[#757575]">
              <span>{campaign.start_date}</span>
              <span>-</span>
              <span>{campaign.end_date}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}