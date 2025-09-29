"use client";

import CampaignsTable from "@/components/features/campaigns/CampaignsTable";
import CampaignCard from "@/components/features/campaigns/CampaignCard";
import CampaignMobileCard from "@/components/features/campaigns/CampaignMobileCard";
import TableCardsToggler from "@/components/general/TableCardsToggler";
import Pagination from "@/components/general/Pagination";
import { adaptCampaignSummaryToDisplay } from "@/utils/campaignAdapters";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import {
  getCampaignsStart,
  getMoreCampaignsStart,
  bulkDeleteCampaignsStart,
} from "@/store/campaigns/CampaignSlice";
import { setSearchTerm } from "@/store/search/searchSlice";
import { RootState } from "@/store/store";
import ActionDropdown from "@/components/general/dropdowns/ActionDropdown";
import SearchInputMobile from "@/components/general/SearchInputMobile";
import Link from "next/link";
import Loader from "@/components/general/Loader";
import InlineLoader from "@/components/general/InlineLoader";

export default function CampaignsPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { campaigns, pagination, loading, error } = useSelector(
    (state: RootState) => state.campaigns
  );

  const { searchTerm } = useSelector((state: RootState) => state.search);
  const [view, setView] = useState<"table" | "card">("table");
  const [mobilePage, setMobilePage] = useState(1);
  const [checkedRows, setCheckedRows] = useState<Set<string>>(new Set());

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    dispatch(getCampaignsStart({ page: 1, per_page: 10 }));
  }, [dispatch]);

  const isInitialSearchMount = useRef(true);
  useEffect(() => {
    if (isInitialSearchMount.current) {
      isInitialSearchMount.current = false;
      return;
    }

    setMobilePage(1);
    dispatch(
      getCampaignsStart({
        search: debouncedSearch,
        per_page: 10,
        page: 1,
      })
    );
  }, [debouncedSearch, dispatch]);

  const handleAddCampaignClick = () => {
    // TODO: Update this route when the create campaign page is available
    // router.push("/businesses/campaigns/create");
    console.log("Add Campaign clicked");
  };

  const handlePageChange = (page: number) => {
    dispatch(
      getCampaignsStart({
        page,
        search: searchTerm,
        per_page: pagination?.per_page,
      })
    );
  };

  const handleItemsPerPageChange = (items: number) => {
    dispatch(
      getCampaignsStart({ search: searchTerm, per_page: items, page: 1 })
    );
  };

  const handleSeeMore = () => {
    const nextPage = mobilePage + 1;
    dispatch(
      getMoreCampaignsStart({
        page: nextPage,
        search: debouncedSearch,
        per_page: 10,
      })
    );
    setMobilePage(nextPage);
  };

  const handleCheckboxChange = (campaignId: string) => {
    setCheckedRows((prevCheckedRows) => {
      const newCheckedRows = new Set(prevCheckedRows);
      if (newCheckedRows.has(campaignId)) {
        newCheckedRows.delete(campaignId);
      } else {
        newCheckedRows.add(campaignId);
      }
      return newCheckedRows;
    });
  };

  const handleActionSelect = (value: string) => {
    if (value === "delete") {
      if (checkedRows.size > 0) {
        const ids = Array.from(checkedRows);
        const promise = dispatch(bulkDeleteCampaignsStart({ ids }));
        toast.promise(promise, {
          loading: "Deleting campaigns...",
          success: "Campaigns deleted successfully!",
          error: "Failed to delete campaigns.",
        });
        setCheckedRows(new Set());
      }
    }
  };

  const displayCampaigns = campaigns.map(adaptCampaignSummaryToDisplay);

  return (
    <div>
      <div className="md:hidden pt-4 flex items-center gap-[7px]">
        <SearchInputMobile
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          placeholder="Search campaigns"
        />
      </div>
      <div className="py-5.5">
        <div className="max-w-[1428px] mx-auto">
          <div className="hidden md:flex justify-end items-center mb-5.5 space-x-4">
            <TableCardsToggler view={view} setView={setView} />
            <button
              onClick={handleAddCampaignClick}
              className="bg-blue-500 text-white rounded-[11px] text-[18px] leading-[27px] pt-1.25 pb-1.75 px-6"
            >
              Add Campaign
            </button>
            <div className="w-auto">
              <ActionDropdown
                actions={["delete"]}
                onSelect={handleActionSelect}
                disabled={checkedRows.size === 0}
              />
            </div>
          </div>
          <div className="md:hidden flex justify-end items-center mb-4 space-x-2">
            <button
              onClick={handleAddCampaignClick}
              className="bg-blue-500 text-white rounded-[11px] text-sm px-4 py-2"
            >
              Add Campaign
            </button>
          </div>

          {loading && displayCampaigns.length === 0 && <Loader />}
          {error && <p className="text-red-500">Error: {error}</p>}
          {!error && (
            <>
              <div className="md:hidden">
                {displayCampaigns.length === 0 && !loading ? (
                  <div className="bg-white text-center py-10 text-gray-500">
                    No records found.
                  </div>
                ) : (
                  displayCampaigns.map((campaign) => (
                    <div key={campaign.id} className="mb-4">
                      <Link href={`/businesses/campaigns/${campaign.id}`}>
                        <CampaignMobileCard campaign={campaign} />
                      </Link>
                    </div>
                  ))
                )}
                {pagination &&
                  pagination.current_page < pagination.last_page && (
                    <div className="text-center font-semibold text-[15px] text-gray-500 my-4 mb-8">
                      <button
                        onClick={handleSeeMore}
                        disabled={loading}
                        className="disabled:text-gray-400"
                      >
                        {loading ? <InlineLoader /> : "See More"}
                      </button>
                    </div>
                  )}
              </div>
              <div className="hidden md:block">
                {view === "table" ? (
                  <>
                    <CampaignsTable
                      campaigns={displayCampaigns}
                      checkedRows={checkedRows}
                      onCheckboxChange={handleCheckboxChange}
                    />
                    {pagination && displayCampaigns.length > 0 && (
                      <Pagination
                        totalItems={pagination.total}
                        itemsPerPage={pagination.per_page}
                        currentPage={pagination.current_page}
                        onPageChange={handlePageChange}
                        onItemsPerPageChange={handleItemsPerPageChange}
                      />
                    )}
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-[repeat(auto-fit,340px)] gap-x-[13px] gap-y-[20px] justify-center mb-8">
                      {displayCampaigns.length === 0 && !loading ? (
                        <div className="col-span-full text-center py-10 text-gray-500 bg-white">
                          No records found.
                        </div>
                      ) : (
                        displayCampaigns.map((campaign) => (
                          <Link
                            key={campaign.id}
                            href={`/businesses/campaigns/${campaign.id}`}
                          >
                            <CampaignCard
                              campaign={campaign}
                              checked={checkedRows.has(campaign.id.toString())}
                              onCheckboxChange={() =>
                                handleCheckboxChange(campaign.id.toString())
                              }
                            />
                          </Link>
                        ))
                      )}
                    </div>
                    {pagination && displayCampaigns.length > 0 && (
                      <Pagination
                        totalItems={pagination.total}
                        itemsPerPage={pagination.per_page}
                        currentPage={pagination.current_page}
                        onPageChange={handlePageChange}
                        onItemsPerPageChange={handleItemsPerPageChange}
                      />
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}