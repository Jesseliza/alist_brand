"use client";

import { useParams, useRouter } from "next/navigation";
import { CampaignsData } from "@/data/CampaignsData";
import { Campaign } from "@/types/entities";
import { useState, useEffect } from "react";
import CampaignDetails from "@/components/features/campaigns/CampaignDetails";
import Image from "next/image";
import Loader from "@/components/general/Loader";

export default function CampaignDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [campaign, setCampaign] = useState<Campaign | null>(null);

  // Fetch campaign data based on campaignId from URL
  useEffect(() => {
    const campaignId = params.campaignId as string;
    const foundCampaign = CampaignsData.find(
      (c) => c.campaignId === campaignId
    );
    setCampaign(foundCampaign || null);
  }, [params.campaignId]);

  const handleBackClick = () => {
    router.push(
      `/businesses/accounts/${params.accountId}/${params.brandId}?tab=Campaigns`
    );
  };

  // Show loading state while campaign data is being fetched
  if (!campaign) {
    return <Loader />;
  }

  return (
    <div className="py-6">
      <div className="max-w-[1428px] mx-auto bg-white rounded-[13px]">
        <div className="flex items-center justify-between py-[20.5px] px-[27px] border-b border-[#E2E2E2]">
          <button onClick={handleBackClick} className="cursor-pointer">
            <Image
              src="/icons/campaign/details/back-arrow.svg"
              alt="back"
              width={35}
              height={35}
            />
          </button>
          <h4 className="text-[18px] leading-[27px] font-semibold text-[#4F4F4F]">
            {campaign.title}
          </h4>
          <button className="cursor-pointer">
            <Image
              src="/icons/campaign/details/menu-dots.svg"
              alt="share"
              width={35}
              height={35}
            />
          </button>
        </div>

        <CampaignDetails campaign={campaign} />
      </div>
    </div>
  );
}
