"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Campaign } from "@/types/entities";
import { updateDedicatedPageStatusStart } from "@/store/campaigns/CampaignSlice";
import CampaignCreatorCard from "./Creators/CampaignCreatorCard";
import RejectionModal from "@/components/general/modals/RejectionModal";

// Helper function to format follower count
const formatFollowers = (count: number = 0) => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(0)}K`;
  }
  return count.toString();
};

export default function Creators({ campaign }: { campaign: Campaign }) {
  const dispatch = useDispatch();
  const [isRejectionModalOpen, setRejectionModalOpen] = useState(false);
  const [selectedCreatorId, setSelectedCreatorId] = useState<string | null>(null);

  const handleApprove = (offerUserId: string) => {
    dispatch(updateDedicatedPageStatusStart({ id: offerUserId, status: 1 }));
  };

  const handleReject = (offerUserId: string) => {
    setSelectedCreatorId(offerUserId);
    setRejectionModalOpen(true);
  };

  const handleRejectSubmit = (reason: string) => {
    if (selectedCreatorId) {
      dispatch(
        updateDedicatedPageStatusStart({
          id: selectedCreatorId,
          status: 0,
          rejectReason: reason,
        })
      );
    }
    setRejectionModalOpen(false);
    setSelectedCreatorId(null);
  };

  const isDedicated = campaign?.is_dedicated === 1;
  const offerUsers = campaign?.dedicated_offer?.offer_users || [];

  if (!isDedicated) {
    return (
      <div className="text-center py-10 text-gray-500">
        This is not a dedicated offer. Creator approval is not required.
      </div>
    );
  }

  if (offerUsers.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No creators have been assigned to this dedicated offer yet.
      </div>
    );
  }

  const mappedCreators = offerUsers.map((offerUser) => ({
    id: offerUser.user.id.toString(), // Using the main user ID for the key
    offerUserId: offerUser.id, // This is the ID for the status update API
    image: offerUser.user.avatar || "/default-avatar.png",
    name: offerUser.user.name || "Unknown Creator",
    instagramName: offerUser.user.instagram_handle || "N/A",
    stats: {
      followers: formatFollowers(offerUser.user.followers_count),
      credibility: `${offerUser.user.credibility_score || 0}%`,
      engagement: `${(offerUser.user.engagement_rate || 0).toFixed(2)}%`,
    },
    // Assuming status is a string like "Approved", "Rejected", "Pending"
    status: offerUser.status,
  }));

  return (
    <div>
      <div className="max-w-[966px] mx-auto">
        <h3 className="md:text-[18px] text-[15px] md:leading-[27px] leading-[23px] text-[#4F4F4F] font-medium md:mt-10 mt-[25.5px] md:mb-8.5 mb-[9.5px] text-center">
          Approve or reject the following creators for this dedicated offer.
        </h3>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center">
          <style jsx>{`
            @media (min-width: 768px) {
              .grid {
                grid-template-columns: repeat(auto-fit, 300px) !important;
              }
            }
          `}</style>
          {mappedCreators.map((creator) => (
            <CampaignCreatorCard
              key={creator.id}
              id={creator.offerUserId.toString()}
              image={creator.image}
              name={creator.name}
              instagramName={creator.instagramName}
              stats={creator.stats}
              status={creator.status}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ))}
        </div>
      </div>
      <RejectionModal
        isOpen={isRejectionModalOpen}
        onClose={() => setRejectionModalOpen(false)}
        onSubmit={handleRejectSubmit}
      />
    </div>
  );
}