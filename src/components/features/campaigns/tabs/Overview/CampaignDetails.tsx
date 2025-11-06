import Image from "next/image";
import { Campaign } from "@/types/entities";

// interface CampaignDetailsProps {
//   campaign: Campaign;
// }

export default function CampaignDetails({ campaign }: { campaign: Campaign }) {
  const campaignCards = [
    {
      imgSource: "/icons/campaign/details/overview/walkin-1-light.svg",
      imgWidth: 24.88,
      imgWidthMobile: 40.89,
      imgHeight: 19.47,
      imgHeightMobile: 32,
      text: campaign?.venue?.category?.category ?? "N/A",
    },
    {
      imgSource: "/icons/campaign/details/overview/barter-1-light.svg",
      imgWidth: 33.18,
      imgWidthMobile: 35.71,
      imgHeight: 28.47,
      imgHeightMobile: 30.64,
      text: campaign?.is_dedicated === 1 ? "Dedicated" : "Normal",
    },
    {
      imgSource: "/icons/campaign/details/overview/price-1-light.svg",
      imgWidth: 39.24,
      imgWidthMobile: 30.32,
      imgHeight: 26.08,
      imgHeightMobile: 20.15,
      text: campaign?.amount ? `${campaign.amount} AED` : "N/A",
    },
    {
      imgSource: "/icons/campaign/details/overview/automated-1-light.svg",
      imgWidth: 41.03,
      imgWidthMobile: 34.14,
      imgHeight: 30.39,
      imgHeightMobile: 25.28,
      text: campaign?.account_status ?? "N/A",
    },
    // {
    //   imgSource: "/icons/campaign/details/overview/restricted-1-light.svg",
    //   imgWidth: 34.14,
    //   imgWidthMobile: 34.14,
    //   imgHeight: 28.47,
    //   imgHeightMobile: 28.47,
    //   text: campaign.campaignDetails.restricted,
    // },
    {
      imgSource: "/icons/campaign/details/overview/date-1-light.svg",
      imgWidth: 31.29,
      imgWidthMobile: 30.63,
      imgHeight: 25.87,
      imgHeightMobile: 25.25,
      text: campaign?.start_date && campaign?.end_date
        ? `${campaign.start_date} - ${campaign.end_date}`
        : "N/A",
    },
  ];

  return (
    <div>
      <div className=" mt-[13px] ">
        <h4 className="text-center text-[15px] text-[#7E7E7E] leading-[23px] mb-5 ">
          Campaign details
        </h4>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-3">
        {campaignCards.map((card, index) => (
          <div
            key={index}
            className="flex-1 aspect-square w-full bg-[#FAFAFA] rounded-[11px] "
          >
            <div className="h-[42px] flex items-center justify-center mb-[9px]  mt-6">
              <Image
                src={card.imgSource}
                width={card.imgWidth}
                height={card.imgHeight}
                alt={card.text}
                className="mx-auto"
              />
            </div>
            <p className="text-center text-[13px] leading-[20px] text-[#4F4F4F] p-2">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
