"use client";

import DedicatedOffersTable from "@/components/features/dedicated-offers/DedicatedOffersTable";
import DedicatedOfferCard from "@/components/features/dedicated-offers/DedicatedOfferCard";
import DedicatedOfferMobileCard from "@/components/features/dedicated-offers/DedicatedOfferMobileCard";
import TableCardsToggler from "@/components/general/TableCardsToggler";
import Pagination from "@/components/general/Pagination";
import { adaptDedicatedOfferToDisplay } from "@/utils/campaignAdapters";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import {
  getDedicatedOffersStart,
  getMoreDedicatedOffersStart,
  bulkDeleteDedicatedOffersStart,
} from "@/store/dedicated-offers/dedicatedOffersSlice";
import { setSearchTerm } from "@/store/search/searchSlice";
import { RootState } from "@/store/store";
import ActionDropdown from "@/components/general/dropdowns/ActionDropdown";
import SearchInputMobile from "@/components/general/SearchInputMobile";
import Loader from "@/components/general/Loader";
import InlineLoader from "@/components/general/InlineLoader";

export default function DedicatedOffersPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    dedicatedOffers,
    pagination,
    loading,
    error,
  } = useSelector((state: RootState) => state.dedicatedOffers);

  const { searchTerm } = useSelector((state: RootState) => state.search);
  const [view, setView] = useState<"table" | "card">("table");
  const [mobilePage, setMobilePage] = useState(1);
  const [checkedRows, setCheckedRows] = useState<Set<string>>(new Set());

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    dispatch(getDedicatedOffersStart({ page: 1, per_page: 10, search: "" }));

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
      getDedicatedOffersStart({
        search: debouncedSearch,
        per_page: 10,
        page: 1,
      })
    );
  }, [debouncedSearch, dispatch]);

  const handlePageChange = (page: number) => {
    dispatch(
      getDedicatedOffersStart({
        page,
        search: searchTerm,
        per_page: pagination?.perPage,
      })
    );
  };

  const handleItemsPerPageChange = (items: number) => {
    dispatch(
      getDedicatedOffersStart({ search: searchTerm, per_page: items, page: 1 })
    );
  };

  const handleSeeMore = () => {
    const nextPage = mobilePage + 1;
    dispatch(
      getMoreDedicatedOffersStart({
        page: nextPage,
        search: debouncedSearch,
        per_page: 10,
      })
    );
    setMobilePage(nextPage);
  };

  const handleCheckboxChange = (offerId: string) => {
    setCheckedRows((prevCheckedRows) => {
      const newCheckedRows = new Set(prevCheckedRows);
      if (newCheckedRows.has(offerId)) {
        newCheckedRows.delete(offerId);
      } else {
        newCheckedRows.add(offerId);
      }
      return newCheckedRows;
    });
  };

  const handleSelectAll = () => {
    if (checkedRows.size === displayOffers.length) {
      setCheckedRows(new Set());
    } else {
      const allOfferIds = new Set(
        displayOffers.map((o) => o.id.toString())
      );
      setCheckedRows(allOfferIds);
    }
  };

  const handleActionSelect = (value: string) => {
    if (value === "delete") {
      if (checkedRows.size > 0) {
        toast(
          (t) => (
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4">
              <p className="font-semibold">
                Are you sure you want to delete the selected offers?
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
                    dispatch(bulkDeleteDedicatedOffersStart({ ids }));
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

  const displayOffers = dedicatedOffers.map((offer) => adaptDedicatedOfferToDisplay(offer, offer.venue_id.toString(), offer.venue_id.toString(), ''));

  const isAllSelected =
    displayOffers.length > 0 && checkedRows.size === displayOffers.length;

  return (
    <div>
      <div className="md:hidden pt-4 flex items-center gap-[7px]">
        <SearchInputMobile
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          placeholder="Search dedicated offers"
        />
      </div>
      <div className="py-5.5">
        <div className="max-w-[1428px] mx-auto">
          <div className="hidden md:flex justify-end items-center mb-5.5 space-x-4 px-6">
            <TableCardsToggler view={view} setView={setView} />
            <div className="w-auto">
              <ActionDropdown
                actions={["delete"]}
                onSelect={handleActionSelect}
                disabled={checkedRows.size === 0}
              />
            </div>
          </div>

          {loading && displayOffers.length === 0 && <Loader />}
          {error && <p className="text-red-500">Error: {error}</p>}
          {!error && (
            <>
              <div className="md:hidden">
                {displayOffers.length === 0 && !loading ? (
                  <div className="bg-white text-center py-10 text-gray-500">
                    No records found.
                  </div>
                ) : (
                  displayOffers.map((offer) => (
                    <div key={offer.id} className="mb-4">
                      <DedicatedOfferMobileCard
                        offer={offer}
                        onClick={() =>
                          router.push(
                            `/businesses/dedicated-offers/${offer.id}`
                          )
                        }
                      />
                    </div>
                  ))
                )}
                {pagination &&
                  pagination.currentPage < pagination.lastPage && (
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
                    <DedicatedOffersTable
                      offers={displayOffers}
                      checkedRows={checkedRows}
                      onCheckboxChange={handleCheckboxChange}
                      onSelectAll={handleSelectAll}
                      isAllSelected={isAllSelected}
                    />
                    {pagination && displayOffers.length > 0 && (
                      <Pagination
                        totalItems={pagination.total}
                        itemsPerPage={pagination.perPage}
                        currentPage={pagination.currentPage}
                        onPageChange={handlePageChange}
                        onItemsPerPageChange={handleItemsPerPageChange}
                      />
                    )}
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-[repeat(auto-fit,340px)] gap-x-[13px] gap-y-[20px] justify-center mb-8">
                      {displayOffers.length === 0 && !loading ? (
                        <div className="col-span-full text-center py-10 text-gray-500 bg-white">
                          No records found.
                        </div>
                      ) : (
                        displayOffers.map((offer) => (
                          <div
                            key={offer.id}
                            onClick={() =>
                              router.push(
                                `/businesses/dedicated-offers/${offer.id}`
                              )
                            }
                          >
                            <DedicatedOfferCard
                              campaign={offer}
                              onClick={() =>
                                router.push(
                                  `/businesses/dedicated-offers/${offer.id}`
                                )
                              }
                            />
                          </div>
                        ))
                      )}
                    </div>
                    {pagination && displayOffers.length > 0 && (
                      <Pagination
                        totalItems={pagination.total}
                        itemsPerPage={pagination.perPage}
                        currentPage={pagination.currentPage}
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