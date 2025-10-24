"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import { DedicatedOfferDisplay, OfferUser } from "@/types/entities/dedicated-offer";
import DedicatedOfferCreatorCard from "./Creators/DedicatedOfferCreatorCard";
import Pagination from "@/components/general/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { updateDedicatedPageStatusStart } from "@/store/dedicated-offers/DedicatedOfferSlice";
import { RootState } from "@/store/store";
import RejectReasonModal from "../RejectReasonModal";

export default function Creators({ dedicatedOffer, searchTerm }: { dedicatedOffer: DedicatedOfferDisplay, searchTerm?: string }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const dispatch = useDispatch();
  const [selectedCreatorId, setSelectedCreatorId] = useState<string | null>(
    null
  );
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [actionType, setActionType] = useState<"approve" | "reject" | null>(
    null
  );

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
    const filteredCreators = searchTerm
      ? creators.filter((offerUser) =>
          offerUser.user?.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : creators;

    return filteredCreators
      .filter((offerUser: OfferUser) => offerUser.user)
      .map((offerUser: OfferUser) => ({
        id: offerUser.id.toString(),
        image: offerUser.user.profile_picture || "",
        name: offerUser.user.name,
        instagramName: offerUser.user.instagram_url || "N/A",
        stats: {
          followers:
            offerUser.user.instagram_follower_range?.followers?.toString() ||
            "N/A",
          credibility: offerUser.user.credibility || "N/A",
          engagement: "N/A", // As requested
        },
        status: offerUser.status,
      }));
  }, [creators, searchTerm]);

  const paginatedCreators = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return mappedCreators.slice(startIndex, startIndex + itemsPerPage);
  }, [mappedCreators, currentPage, itemsPerPage]);

  const approvedCreatorsCount = useMemo(() => {
    return creators.filter((c) => c.status === 6).length;
  }, [creators]);

  const hideCreatorActions = useMemo(() => {
    if (dedicatedOffer.offer_usage === null) return true;
    return approvedCreatorsCount >= dedicatedOffer.offer_usage * 2;
  }, [approvedCreatorsCount, dedicatedOffer.offer_usage]);

  const handleApprove = (id: string) => {
    setSelectedCreatorId(id);
    setActionType("approve");
    dispatch(
      updateDedicatedPageStatusStart({
        id: id,
        status: 6,
        offerId: dedicatedOffer.id.toString(),
      })
    );
  };

  const handleReject = (id: string) => {
    setSelectedCreatorId(id);
    setActionType("reject");
    setIsRejectModalOpen(true);
  };

  const handleRejectSubmit = (rejectReason: string) => {
    if (!selectedCreatorId) return;
    dispatch(
      updateDedicatedPageStatusStart({
        id: selectedCreatorId,
        status: 7,
        rejectReason: rejectReason,
        offerId: dedicatedOffer.id.toString(),
      })
    );
  };

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
                <DedicatedOfferCreatorCard
                  key={creator.id}
                  {...creator}
                  onApprove={handleApprove}
                  onReject={handleReject}
                  loading={
                    dedicatedPageStatusLoading &&
                    selectedCreatorId === creator.id
                      ? actionType
                      : null
                  }
                  hideCreatorActions={hideCreatorActions}
                />
              ))}
            </div>
            <div className="mt-8">
              <Pagination
                totalItems={mappedCreators.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                onItemsPerPageChange={(items) => {
                  setItemsPerPage(items);
                  setCurrentPage(1);
                }}
                isLoading={dedicatedPageStatusLoading}
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
