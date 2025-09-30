"use client";
import { useState, useMemo, useEffect } from "react";
import { Campaign, OfferUser } from "@/types/entities";
import CampaignCreatorCard from "./Creators/CampaignCreatorCard";
import Pagination from "@/components/general/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDedicatedPageStatusStart,
  resetDedicatedPageStatus,
} from "@/store/campaigns/CampaignSlice";
import { RootState } from "@/store/store";
import RejectReasonModal from "../RejectReasonModal";
import toast from "react-hot-toast";

const ITEMS_PER_PAGE = 6;

export default function Creators({ campaign }: { campaign: Campaign }) {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const [selectedCreatorId, setSelectedCreatorId] = useState<string | null>(
    null
  );
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  const {
    dedicatedPageStatusLoading,
    dedicatedPageStatusSuccess,
    dedicatedPageStatusError,
  } = useSelector((state: RootState) => state.campaigns);

  useEffect(() => {
    if (dedicatedPageStatusSuccess) {
      toast.success("Creator status updated successfully!");
      setIsRejectModalOpen(false);
      setSelectedCreatorId(null);
      dispatch(resetDedicatedPageStatus());
    }
    if (dedicatedPageStatusError) {
      toast.error(
        dedicatedPageStatusError || "Failed to update creator status."
      );
      dispatch(resetDedicatedPageStatus());
    }
  }, [dedicatedPageStatusSuccess, dedicatedPageStatusError, dispatch]);

  const creators = campaign?.dedicated_offer?.offer_users || [];

  const mappedCreators = useMemo(() => {
    return creators
      .filter((offerUser) => offerUser.user)
      .map((offerUser) => ({
        id: offerUser.id.toString(),
        image: offerUser.user.profile_picture || "",
        name: offerUser.user.name,
        instagramName: offerUser.user.instagram_url || "N/A",
        stats: {
          followers: offerUser.user.instagram_followers?.toString() || "N/A",
          credibility: offerUser.user.credibility || "N/A",
          engagement: "N/A", // As requested
        },
        status: offerUser.status,
      }));
  }, [creators]);

  const paginatedCreators = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return mappedCreators.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [mappedCreators, currentPage]);

  const handleApprove = (id: string) => {
    setSelectedCreatorId(id);
    dispatch(
      updateDedicatedPageStatusStart({
        id: id,
        status: 1,
        campaignId: campaign.id.toString(),
      })
    );
  };

  const handleReject = (id: string) => {
    setSelectedCreatorId(id);
    setIsRejectModalOpen(true);
  };

  const handleRejectSubmit = (rejectReason: string) => {
    if (!selectedCreatorId) return;
    dispatch(
      updateDedicatedPageStatusStart({
        id: selectedCreatorId,
        status: 0,
        rejectReason: rejectReason,
        campaignId: campaign.id.toString(),
      })
    );
  };

  if (campaign?.is_dedicated !== 1) {
    return (
      <div className="text-center py-10 text-gray-500">
        Creators Not Found
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-[966px] mx-auto">
        <h3 className="md:text-[18px] text-[15px] md:leading-[27px] leading-[23px] text-[#4F4F4F] font-medium md:mt-10 mt-[25.5px] md:mb-8.5 mb-[9.5px] text-center">
          A minimum of 3 creators must be approved
        </h3>
        {paginatedCreators.length > 0 ? (
          <>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center">
              <style jsx>{`
                @media (min-width: 768px) {
                  .grid {
                    grid-template-columns: repeat(auto-fit, 300px) !important;
                  }
                }
              `}</style>
              {paginatedCreators.map((creator) => (
                <CampaignCreatorCard
                  key={creator.id}
                  {...creator}
                  onApprove={handleApprove}
                  onReject={handleReject}
                  loading={
                    dedicatedPageStatusLoading && selectedCreatorId === creator.id
                  }
                />
              ))}
            </div>
            <div className="mt-8">
              <Pagination
                totalItems={mappedCreators.length}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </>
        ) : (
          <div className="text-center py-10 text-gray-500">
            No creators found for this campaign.
          </div>
        )}
      </div>
      <RejectReasonModal
        isOpen={isRejectModalOpen}
        onClose={() => setIsRejectModalOpen(false)}
        onSubmit={handleRejectSubmit}
        loading={dedicatedPageStatusLoading}
      />
    </div>
  );
}
