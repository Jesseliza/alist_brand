import Image from "next/image";
import { useState } from "react";

interface CampaignCreatorCardProps {
  id: string;
  image: string;
  name: string;
  instagramName: string;
  stats: {
    followers: string;
    credibility: string;
    engagement: string;
  };
  approved?: boolean;
  onDelete?: (id: string) => void;
}

export default function CampaignCreatorCard({
  id,
  image,
  name,
  instagramName,
  stats,
  approved = false,
  onDelete,
}: CampaignCreatorCardProps) {
  const [isApproved, setIsApproved] = useState(approved);

  const handleApprove = () => {
    setIsApproved(true);
  };

  const handleReject = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <article className="min-w-[300px] w-full md:block flex items-center gap-5  md:shadow-[0_0_4px_rgba(0,0,0,0.23)]  rounded-[13px] md:bg-white bg-[#F8F8F8] md:border-none border border-[#E4E4E4]">
      {/* Top gray section with overlapping profile picture */}
      <div className="relative ">
        <div className="h-[86.54px] bg-[#E7E7E7] rounded-t-[13px] hidden md:block"></div>
        <div className="md:pl-0 md:py-0 py-6 pl-5.5  md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-bottom-9">
          <Image
            src={image}
            alt={name}
            width={81.71}
            height={81.71}
            className="rounded-full border border-white"
          />
        </div>
      </div>

      {/* Profile information */}
      <div className="flex-1">
        <div className="md:pt-10 md:pb-4 md:text-center md:px-[9px]">
          <h3 className="md:text-[15px] text-[18px] font-medium text-[#4F4F4F] mb-0.5 leading-[23px]">
            {name}
          </h3>
          <div className="flex items-center md:justify-center gap-1 md:mb-0 mb-2 md:mt-0 mt-1">
            <Image
              src="/icons/campaign/details/creators-and-posts/instagram.svg"
              alt="Instagram"
              width={8.83}
              height={8.83}
            />
            <span className="text-[11px] text-[#4F4F4F] leading-[17px] ">
              {instagramName}
            </span>
          </div>
        </div>

        {/* Statistics section */}
        <div className="md:flex items-center justify-center  py-4 hidden">
          <div className="flex-1 text-center">
            <p className="text-[18px] font-medium text-[#383838] leading-[33px]">
              {stats.followers}
            </p>
            <p className="text-[11px] text-[#4F4F4F]">Followers</p>
          </div>
          <div className="w-[1px] h-[36.97px] bg-[#4F4F4F]"></div>
          <div className="flex-1 text-center">
            <p className="text-[18px] font-medium text-[#383838] leading-[33px]">
              {stats.credibility}
            </p>
            <p className="text-[11px] text-[#4F4F4F]">Credibility</p>
          </div>
          <div className="w-[1px] h-[36.97px] bg-[#4F4F4F]"></div>
          <div className="flex-1 text-center">
            <p className="text-[18px] font-medium text-[#383838] leading-[33px]">
              {stats.engagement}
            </p>
            <p className="text-[11px] text-[#4F4F4F]">Engagement</p>
          </div>
        </div>

        {/* Action buttons or Approved text */}
        <div className="flex md:gap-[9px] gap-2 md:pb-[9px] md:pl-[9px] md:pr-[9px] pr-3">
          {isApproved ? (
            <div className="flex-1 flex items-center md:justify-center gap-2  text-[#00A4B6] py-[7px] md:rounded-[13px] rounded-[11px]  text-[13px] leading-[20px] font-medium h-[38px]">
              <Image
                src="/icons/campaign/details/creators-and-posts/verified-check.svg"
                alt="Approved"
                width={10.62}
                height={9.09}
              />
              <p>Approved</p>
            </div>
          ) : (
            <>
              <button
                onClick={handleApprove}
                className="flex-1 bg-[#00A4B6] text-white py-[7px] md:rounded-[13px] rounded-[11px] md:text-[16px] text-[15px] leading-[23px] h-[38px]"
              >
                Approve
              </button>
              <button
                onClick={handleReject}
                className="flex-1 bg-[#747474] text-white py-[7px] md:rounded-[13px] rounded-[11px] md:text-[16px] text-[15px] leading-[23px] h-[38px]"
              >
                Reject
              </button>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
