"use client";
import { useState, useMemo } from "react";
import { Campaign } from "@/types/entities/campaign";
import CampaignCreatorCard from "./Creators/CampaignCreatorCard";
import Pagination from "@/components/general/Pagination";
import { useSelector } from "react-redux";
// import { updateDedicatedPageStatusStart } from "@/store/campaigns/CampaignSlice";
import { RootState } from "@/store/store";

export default function Creators({ campaign, searchTerm }: { campaign: Campaign, searchTerm?: string }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  // const dispatch = useDispatch();
  // const [selectedCreatorId, setSelectedCreatorId] = useState<string | null>(
  //   null
  // );
  // const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  const { dedicatedPageStatusLoading } = useSelector(
    (state: RootState) => state.campaigns
  );
  // const prevLoading = useRef(dedicatedPageStatusLoading);

  // useEffect(() => {
  //   if (prevLoading.current && !dedicatedPageStatusLoading) {
  //     setIsRejectModalOpen(false);
  //     setSelectedCreatorId(null);
  //   }
  //   prevLoading.current = dedicatedPageStatusLoading;
  // }, [dedicatedPageStatusLoading]);

  const creators = useMemo(() => campaign?.food_offer_user || [], [campaign]);

  const mappedCreators = useMemo(() => {
    const filteredCreators = searchTerm
      ? creators.filter((offerUser) =>
          offerUser.user?.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : creators;

    return filteredCreators
      .filter((offerUser) => offerUser.user)
      .map((offerUser) => ({
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

  // const handleApprove = (id: string) => {
  //   setSelectedCreatorId(id);
  //   dispatch(updateDedicatedPageStatusStart({ id: id, status: 1 }));
  // };

  // const handleReject = (id: string) => {
  //   setSelectedCreatorId(id);
  //   setIsRejectModalOpen(true);
  // };

  // const handleRejectSubmit = (rejectReason: string) => {
  //   if (!selectedCreatorId) return;
  //   dispatch(
  //     updateDedicatedPageStatusStart({
  //       id: selectedCreatorId,
  //       status: 0,
  //       rejectReason: rejectReason,
  //     })
  //   );
  // };

  return (
    <div>
      <div className="max-w-[966px] mx-auto">
        <h3 className="md:text-[18px] text-[15px] md:leading-[27px] leading-[23px] text-[#4F4F4F] font-medium md:mt-10 mt-[25.5px] md:mb-8.5 mb-[9.5px] text-center">
          {/* A minimum of 3 creators must be approved */}
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
                  // onApprove={handleApprove}
                  // onReject={handleReject}
                  // loading={
                  //   dedicatedPageStatusLoading && selectedCreatorId === creator.id
                  // }
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
            No creators found for this campaign.
          </div>
        )}
      </div>
    </div>
  );
}
