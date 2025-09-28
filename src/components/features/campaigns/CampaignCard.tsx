import Image from "next/image";
import { Campaign } from "@/types/entities";
import { generateColorFromString } from "@/utils/colorGenerator";
import { getInitials } from "@/utils/text";
import Checkbox from "@/components/general/CheckBox";
import Link from "next/link";

interface CampaignCardProps {
  campaign: Campaign;
  checked: boolean;
  onCheckboxChange: () => void;
}

export default function CampaignCard({ campaign, checked, onCheckboxChange }: CampaignCardProps) {
  const status = campaign.offer_status;
  const logoSrc = campaign.venue.logo;
  const headerSrc = campaign.banner_image;
  const isActive = status !== "Draft";

  const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleWrapperClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Link href={`/businesses/campaigns/${campaign.campaign_id}`} className="block cursor-pointer">
      <article className="w-full bg-white rounded-[13px] overflow-hidden relative">
        <div onClick={handleWrapperClick} className="absolute top-2 right-2 z-10">
          <Checkbox
            checked={checked}
            onChange={onCheckboxChange}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        <div className="h-[90px] w-full relative bg-[#E1E1E1]">
          {headerSrc && (
            <Image
              src={`${IMAGE_BASE_URL}storage/uploads/users/influencers/offers/${headerSrc}`}
              alt={`${campaign.offer_title} header`}
              fill
              className="object-cover"
            />
          )}
          <div className="w-[90px] h-[90px] absolute top-[39px] left-[24px] bg-white rounded-full border-5 border-[#E1E1E1] flex items-center justify-center overflow-hidden">
            {logoSrc ? (
              <Image
                src={`${IMAGE_BASE_URL}storage/uploads/venues/logo/${logoSrc}`}
                alt="Brand logo"
                fill
                className="object-cover rounded-full aspect-square"
              />
            ) : (
              <div
                className="h-full w-full flex items-center justify-center"
                style={{
                  backgroundColor: generateColorFromString(campaign.venue.venue_title),
                }}
              >
                <span className="text-white text-3xl font-semibold">
                  {getInitials(campaign.venue.venue_title)}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="pt-[55px] pb-[15px] px-[21px]">
          <div className="mb-[15px]">
            <h3 className="text-[15px] font-medium leading-[23px] text-[#4F4F4F] truncate">
              {campaign.offer_title}
            </h3>
          </div>
          <div className="flex items-center justify-between mb-[15px]">
            <p className="text-[13px] text-[#414141] leading-[20px] truncate">
              By {campaign.venue.venue_title}
            </p>
            {isActive ? (
              <div className="flex gap-[4.5px] items-center">
                <Image
                  src="/icons/campaign/card/active-light.svg"
                  alt="active"
                  width={11.6}
                  height={11.6}
                />
                <p className="text-[13px] text-[#787878] leading-[20px]">
                  Active
                </p>
              </div>
            ) : (
              <div className="flex gap-[4.5px] items-center">
                <Image
                  src="/icons/campaign/card/pending-light.svg"
                  alt="pending"
                  width={11.6}
                  height={11.6}
                />
                <p className="text-[13px] text-[#787878] leading-[20px]">
                  Draft
                </p>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}