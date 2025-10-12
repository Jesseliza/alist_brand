"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import { DedicatedOffer } from "@/types/entities/dedicated-offer";
import CampaignCreatorCard from "./Creators/DedicatedOfferCreatorCard";
import Pagination from "@/components/general/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { updateDedicatedPageStatusStart } from "@/store/dedicated-offers/DedicatedOfferSlice";
import { RootState } from "@/store/store";
import RejectReasonModal from "../RejectReasonModal";

const ITEMS_PER_PAGE = 6;

export default function Creators({ dedicatedOffer }: { dedicatedOffer: DedicatedOffer }) {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const [selectedCreatorId, setSelectedCreatorId] = useState<string | null>(
    null
  );
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  const { dedicatedPageStatusLoading } = useSelector(
    (state: RootState) => state.dedicatedOffers
  );
  const prevLoading = useRef(dedicatedPageStatusLoading);

  useEffect(() => {
    if (prevLoading.current && !dedicatedPageStatusLoading) {
      setIsRejectModalOpen(false);
      setSelectedCreatorId(null);
    }
    prevLoading.current = dedicatedPageStatusLoading;
  }, [dedicatedPageStatusLoading]);

  const creators = useMemo(() => dedicatedOffer?.offer_users || [], [dedicatedOffer]);

  const mappedCreators = useMemo(() => {
    return (
      dedicatedOffer?.offer_users
        ?.filter((offerUser) => offerUser.user)
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
        })) || []
    );
  }, [dedicatedOffer]);

  const paginatedCreators = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return mappedCreators.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [mappedCreators, currentPage]);

  const handleApprove = (id: string) => {
    setSelectedCreatorId(id);
    dispatch(updateDedicatedPageStatusStart({ id: id, status: 1 }));
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
      })
    );
  };

  if (dedicatedOffer?.is_dedicated !== 1) {
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
          A maximum of {dedicatedOffer.offer_usage * 2} creators must be approved
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
            No creators found for this dedicated offer.
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
