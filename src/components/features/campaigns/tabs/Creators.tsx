"use client";
import { useState, useMemo } from "react";
import { Campaign } from "@/types/entities";
import CampaignCreatorCard from "./Creators/CampaignCreatorCard";
import Pagination from "@/components/general/Pagination";

const ITEMS_PER_PAGE = 6;

export default function Creators({ campaign }: { campaign: Campaign }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [creators, setCreators] = useState(
    campaign?.dedicated_offer?.offer_users || []
  );

  const mappedCreators = useMemo(() => {
    return creators
      .filter((offerUser) => offerUser.user)
      .map((offerUser) => ({
        id: offerUser.user.id.toString(),
        image: offerUser.user.profile_photo || "/images/creators/profile.png",
        name: offerUser.user.name,
        instagramName: offerUser.user.instagram_handle || "N/A",
        stats: {
          followers: "0", // Placeholder
          credibility: "0%", // Placeholder
          engagement: "0%", // Placeholder
        },
        approved: offerUser.status === 1, // Assuming 1 is approved
      }));
  }, [creators]);

  const paginatedCreators = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return mappedCreators.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [mappedCreators, currentPage]);

  const handleDelete = (id: string) => {
    setCreators((prevCreators) =>
      prevCreators.filter((creator) => {
        if (!creator.user) {
          return true;
        }
        return creator.user.id.toString() !== id;
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
                  onDelete={handleDelete}
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
    </div>
  );
}
