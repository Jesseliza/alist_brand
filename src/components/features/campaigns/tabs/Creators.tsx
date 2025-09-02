"use client";
import CampaignCreatorCard from "./Creators/CampaignCreatorCard";
import { useState } from "react";
import { CreatorsData } from "@/data/CreatorsData";
import { Campaign } from "@/types/entities";

export default function Creators({ campaign }: { campaign: Campaign }) {
  // Fetch creators that have this campaign ID in their campaignIds array
  const campaignCreators = CreatorsData.filter((creator) =>
    creator.campaignIds.includes(campaign.campaignId)
  );

  // Map creator data to match CampaignCreatorCard props
  const mappedCreators = campaignCreators.map((creator) => ({
    id: creator.creatorId,
    image: creator.avatarUrl,
    name: creator.fullName,
    instagramName:
      creator.socialHandles.find((handle) => handle.platform === "Instagram")
        ?.handle || creator.fullName.toLowerCase().replace(/\s+/g, "."),
    stats: {
      followers:
        creator.followerCount >= 1000
          ? `${(creator.followerCount / 1000).toFixed(0)}K`
          : creator.followerCount.toString(),
      credibility: `${creator.credibilityScore}%`,
      engagement: `${creator.engagementRate.toFixed(2)}%`,
    },
    approved: creator.isApproved,
  }));

  const [creators, setCreators] = useState(mappedCreators);

  const handleDelete = (id: string) => {
    setCreators((prevCreators) =>
      prevCreators.filter((creator) => creator.id !== id)
    );
  };

  return (
    <div>
      <div className="max-w-[966px] mx-auto">
        <h3 className="md:text-[18px] text-[15px] md:leading-[27px] leading-[23px]  text-[#4F4F4F] font-medium md:mt-10 mt-[25.5px] md:mb-8.5 mb-[9.5px] text-center">
          A minimum of 3 creators must be approved
        </h3>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center">
          <style jsx>{`
            @media (min-width: 768px) {
              .grid {
                grid-template-columns: repeat(auto-fit, 300px) !important;
              }
            }
          `}</style>
          {creators.map((creator) => (
            <CampaignCreatorCard
              key={creator.id}
              {...creator}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
