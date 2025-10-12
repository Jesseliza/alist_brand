"use client";

import DedicatedOffersTable from "@/components/features/dedicated-offers/DedicatedOfferTable";
import DedicatedOfferCard from "@/components/features/dedicated-offers/DedicatedOfferCard";
import DedicatedOfferMobileCard from "@/components/features/dedicated-offers/DedicatedOfferMobileCard";
import TableCardsToggler from "@/components/general/TableCardsToggler";
import Pagination from "@/components/general/Pagination";
import { adaptDedicatedOfferSummaryToDisplay } from "@/utils/dedicatedOfferAdapters";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import {
  getDedicatedOffersStart,
  getMoreDedicatedOffersStart,
  bulkDeleteDedicatedOffersStart,
} from "@/store/dedicated-offers/DedicatedOfferSlice";
import { setSearchTerm } from "@/store/search/searchSlice";
import { RootState } from "@/store/store";
import ActionDropdown from "@/components/general/dropdowns/ActionDropdown";
import SearchInputMobile from "@/components/general/SearchInputMobile";
import Link from "next/link";
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
    bulkDeleteLoading,
    bulkDeleteError,
  } = useSelector((state: RootState) => state.dedicatedOffers);

  const { searchTerm } = useSelector((state: RootState) => state.search);
  const [view, setView] = useState<"table" | "card">("table");
  const [mobilePage, setMobilePage] = useState(1);
  const [checkedRows, setCheckedRows] = useState<Set<string>>(new Set());

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    dispatch(getDedicatedOffersStart({ page: 1, per_page: 10 }));

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


  const handleAddDedicatedOfferClick = () => {
    // TODO: Update this route when the create dedicated offer page is available
    // router.push("/businesses/dedicated-offers/create");
    console.log("Add Dedicated Offer clicked");
  };

  const handlePageChange = (page: number) => {
    dispatch(
      getDedicatedOffersStart({
        page,
        search: searchTerm,
        per_page: pagination?.per_page,
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

  const handleCheckboxChange = (dedicatedOfferId: string) => {
    setCheckedRows((prevCheckedRows) => {
      const newCheckedRows = new Set(prevCheckedRows);
      if (newCheckedRows.has(dedicatedOfferId)) {
        newCheckedRows.delete(dedicatedOfferId);
      } else {
        newCheckedRows.add(dedicatedOfferId);
      }
      return newCheckedRows;
    });
  };

  const handleSelectAll = () => {
    if (checkedRows.size === displayDedicatedOffers.length) {
      setCheckedRows(new Set());
    } else {
      const allDedicatedOfferIds = new Set(
        displayDedicatedOffers.map((c) => c.id.toString())
      );
      setCheckedRows(allDedicatedOfferIds);
    }
  };

  const handleActionSelect = (value: string) => {
    if (value === "delete") {
      if (checkedRows.size > 0) {
        toast(
          (t) => (
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4">
              <p className="font-semibold">
                Are you sure you want to delete the selected dedicated offers?
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

  const handleRemove = (id: string) => {
    toast(
      (t) => (
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4">
          <p className="font-semibold">
            Are you sure you want to delete this dedicated offer?
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
                dispatch(bulkDeleteDedicatedOffersStart({ ids: [id] }));
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

  const displayDedicatedOffers = dedicatedOffers.map((offer) => adaptDedicatedOfferSummaryToDisplay(offer));

  const isAllSelected =
    displayDedicatedOffers.length > 0 && checkedRows.size === displayDedicatedOffers.length;

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
            {/* <button
              onClick={handleAddDedicatedOfferClick}
              className="bg-blue-500 text-white rounded-[11px] text-[18px] leading-[27px] pt-1.25 pb-1.75 px-6"
            >
              Add Dedicated Offer
            </button> */}
            {/* <div className="w-auto">
              <ActionDropdown
                actions={["delete"]}
                onSelect={handleActionSelect}
                disabled={checkedRows.size === 0}
              />
            </div> */}
          </div>
          {/* <div className="md:hidden flex justify-end items-center mb-4 space-x-2">
            <button
              onClick={handleAddDedicatedOfferClick}
              className="bg-blue-500 text-white rounded-[11px] text-sm px-4 py-2"
            >
              Add Dedicated Offer
            </button>
          </div> */}

          {loading && displayDedicatedOffers.length === 0 && <Loader />}
          {error && <p className="text-red-500">Error: {error}</p>}
          {!error && (
            <>
              <div className="md:hidden">
                {displayDedicatedOffers.length === 0 && !loading ? (
                  <div className="bg-white text-center py-10 text-gray-500">
                    No records found.
                  </div>
                ) : (
                  displayDedicatedOffers.map((dedicatedOffer) => (
                    <div key={dedicatedOffer.id} className="mb-4">
                      <Link href={`/businesses/dedicated-offers/${dedicatedOffer.id}`}>
                        <DedicatedOfferMobileCard dedicatedOffer={dedicatedOffer} />
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
                    <DedicatedOffersTable
                      dedicatedOffers={displayDedicatedOffers}
                      checkedRows={checkedRows}
                      onCheckboxChange={handleCheckboxChange}
                      onSelectAll={handleSelectAll}
                      isAllSelected={isAllSelected}
                    />
                    {pagination && displayDedicatedOffers.length > 0 && (
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
                      {displayDedicatedOffers.length === 0 && !loading ? (
                        <div className="col-span-full text-center py-10 text-gray-500 bg-white">
                          No records found.
                        </div>
                      ) : (
                        displayDedicatedOffers.map((dedicatedOffer) => (
                          <Link
                            key={dedicatedOffer.id}
                            href={`/businesses/dedicated-offers/${dedicatedOffer.id}`}
                          >
                            <DedicatedOfferCard
                              dedicatedOffer={dedicatedOffer}
                              checked={checkedRows.has(dedicatedOffer.id.toString())}
                              onCheckboxChange={() =>
                                handleCheckboxChange(dedicatedOffer.id.toString())
                              }
                              onRemove={handleRemove}
                            />
                          </Link>
                        ))
                      )}
                    </div>
                    {pagination && displayDedicatedOffers.length > 0 && (
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