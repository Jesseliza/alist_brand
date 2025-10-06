import Image from "next/image";
import { Campaign } from "@/types/entities";

export default function CampaignStats({ campaign }: { campaign: Campaign }) {
  // Format numbers for display
  const formatNumber = (num: number | string) => {
    const number = typeof num === "string" ? parseInt(num) : num;
    if (number >= 1000000) {
      return `${(number / 1000000).toFixed(1)}M`;
    } else if (number >= 1000) {
      return `${(number / 1000).toFixed(0)}K`;
    }
    return number.toString();
  };

  const statCards = [
    {
      imgSrc: "/icons/campaign/details/overview/creators.svg",
      imgWidth: 47.27,
      imgHeight: 33.09,
      title: campaign?.campaignStats?.creators?.toString() ?? "0",
      subtitle: "Creators",
    },
    // {
    //   imgSrc: "/icons/campaign/details/overview/impressions.svg",
    //   imgWidth: 31.11,
    //   imgHeight: 27.69,
    //   title: formatNumber(campaign?.campaignStats?.impressions ?? 0),
    //   subtitle: "Impressions",
    // },
    // {
    //   imgSrc: "/icons/campaign/details/overview/reach.svg",
    //   imgWidth: 38.62,
    //   imgHeight: 37.87,
    //   title: formatNumber(campaign?.campaignStats?.reach ?? 0),
    //   subtitle: "Reach",
    // },
    {
      imgSrc: "/icons/campaign/details/overview/posts.svg",
      imgWidth: 32,
      imgHeight: 31.57,
      title: campaign?.campaignStats?.posts?.toString() ?? "0",
      subtitle: "Posts",
    },
    // {
    //   imgSrc: "/icons/campaign/details/overview/reviews.svg",
    //   imgWidth: 34.48,
    //   imgHeight: 34.48,
    //   title: campaign?.campaignStats?.reviews?.toString() ?? "0",
    //   subtitle: "Reviews",
    // },
  ];

  return (
    <div className="flex items-center mx-auto gap-[14px] mt-[13px] border-b border-[#E2E2E2] pb-[25px]">
      {statCards.map(
        ({ imgSrc, imgWidth, imgHeight, title, subtitle }, idx) => (
          <div
            key={idx}
            className="bg-[#F8F8F8] flex-1 max-w-[144.18px] aspect-square rounded-xl px-6 py-4 flex flex-col items-center justify-center text-center"
          >
            <Image
              src={imgSrc}
              width={imgWidth}
              height={imgHeight}
              alt={subtitle}
            />
            <p className="text-[21px] leading-[31px] text-[#4F4F4F] font-semibold mt-2">
              {title}
            </p>
            <p className="text-[15px] text-[#4F4F4F] leading-[23px]">
              {subtitle}
            </p>
          </div>
        )
      )}
    </div>
  );
}