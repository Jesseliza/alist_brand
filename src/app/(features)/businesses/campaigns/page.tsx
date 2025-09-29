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
  const {
    campaigns,
    pagination,
    loading,
    error,
    bulkDeleteLoading,
    bulkDeleteError,
  } = useSelector((state: RootState) => state.campaigns);

  const { searchTerm } = useSelector((state: RootState) => state.search);
  const [view, setView] = useState<"table" | "card">("table");
  const [mobilePage, setMobilePage] = useState(1);
  const [checkedRows, setCheckedRows] = useState<Set<string>>(new Set());

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    dispatch(getCampaignsStart({ page: 1, per_page: 10 }));

    return () => {
      dispatch(setSearchTerm(""));
    };
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

  const handleSelectAll = () => {
    if (checkedRows.size === displayCampaigns.length) {
      setCheckedRows(new Set());
    } else {
      const allCampaignIds = new Set(
        displayCampaigns.map((c) => c.id.toString())
      );
      setCheckedRows(allCampaignIds);
    }
  };

  const handleActionSelect = (value: string) => {
    if (value === "delete") {
      if (checkedRows.size > 0) {
        toast(
          (t) => (
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4">
              <p className="font-semibold">
                Are you sure you want to delete the selected campaigns?
              </p>
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-200 rounded-md"
                  onClick={() => toast.dismiss(t.id)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                  onClick={() => {
                    const ids = Array.from(checkedRows);
                    dispatch(bulkDeleteCampaignsStart({ ids }));
                    setCheckedRows(new Set());
                    toast.dismiss(t.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ),
          {
            duration: 6000,
          }
        );
      }
    }
  };

  const handleRemove = (id: string) => {
    toast(
      (t) => (
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4">
          <p className="font-semibold">
            Are you sure you want to delete this campaign?
          </p>
          <div className="flex justify-end gap-2">
            <button
              className="px-4 py-2 bg-gray-200 rounded-md"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md"
              onClick={() => {
                dispatch(bulkDeleteCampaignsStart({ ids: [id] }));
                toast.dismiss(t.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ),
      {
        duration: 6000,
      }
    );
  };

  const displayCampaigns = campaigns.map(adaptCampaignSummaryToDisplay);

  const isAllSelected =
    displayCampaigns.length > 0 && checkedRows.size === displayCampaigns.length;

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
                      onSelectAll={handleSelectAll}
                      isAllSelected={isAllSelected}
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
                              onRemove={handleRemove}
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