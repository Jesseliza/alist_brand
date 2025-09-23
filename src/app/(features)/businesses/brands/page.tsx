"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { fetchBrandsRequest, verifyPinAndDownloadRequest, fetchMoreBrandsRequest } from "@/store/brand/brandSlice";
import { RootState } from "@/store/store";
import BrandsTable from "@/components/features/brands/BrandsTable";
import BrandCard from "@/components/features/brands/BrandCard";
import BrandCardMobile from "@/components/features/brands/BrandMobileCard";
import Pagination from "@/components/general/Pagination";
import TableCardsToggler from "@/components/general/TableCardsToggler";
import SortDropdown from "@/components/general/dropdowns/SortDropdown";
import ActionDropdown from "@/components/general/dropdowns/ActionDropdown";
import SearchInputMobile from "@/components/general/SearchInputMobile";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/general/Loader";
import PinModal from "@/components/general/PinModal";

export default function BrandsPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    brands,
    pagination,
    loading,
    error,
    pinVerificationInProgress,
    pinVerificationError,
  } = useSelector((state: RootState) => state.brand);

  const [view, setView] = useState<"table" | "cards">("table");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [isPinModalOpen, setPinModalOpen] = useState(false);
  const [downloadFileInfo, setDownloadFileInfo] = useState<{
    brandId: string;
    fileType: string;
  } | null>(null);

  const observer = useRef<IntersectionObserver>();
  const lastBrandElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && brands.length < pagination.total) {
        dispatch(fetchMoreBrandsRequest({ page: pagination.currentPage + 1, per_page: 10, search: debouncedSearch }));
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, pagination, brands, debouncedSearch, dispatch]);

  useEffect(() => {
    dispatch(fetchBrandsRequest({ page: 1, per_page: 10, search: debouncedSearch }));
  }, [dispatch, debouncedSearch]);

  const handlePageChange = (page: number) => {
    dispatch(fetchBrandsRequest({ page, per_page: pagination.perPage, search }));
  };

  const handleItemsPerPageChange = (items: number) => {
    dispatch(fetchBrandsRequest({ page: 1, per_page: items, search }));
  };

  const handleViewChange = (newView: "table" | "cards") => {
    setView(newView);
  };

  const handleSortSelect = (value: string) => {
    console.log("Sort selected:", value);
    // Add your sort logic here
  };

  const handleActionSelect = (value: string) => {
    console.log("Action selected:", value);
    // Add your action logic here
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleAddBrandClick = () => {
    router.push("/businesses/brands/create");
  };

  const handleDownloadClick = (brandId: string, fileType: string) => {
    setDownloadFileInfo({ brandId, fileType });
    setPinModalOpen(true);
  };

  const handlePinSubmit = (pin: string) => {
    if (downloadFileInfo) {
      dispatch(
        verifyPinAndDownloadRequest({
          ...downloadFileInfo,
          pin,
        })
      );
    }
  };

  useEffect(() => {
    if (!pinVerificationInProgress && !pinVerificationError) {
      setPinModalOpen(false);
    }
  }, [pinVerificationInProgress, pinVerificationError]);

  return (
    <div>
      <PinModal
        isOpen={isPinModalOpen}
        onClose={() => setPinModalOpen(false)}
        onSubmit={handlePinSubmit}
        loading={pinVerificationInProgress}
        error={pinVerificationError}
      />
      <div className="py-[13px] bg-white hidden md:block relative">
        <div
          className="absolute inset-0 bg-white"
          style={{ left: "-100vw", right: "-100vw" }}
        />
        <div className="max-w-[1428px] mx-auto flex items-center justify-between relative z-10">
          <div className="text-[18px] leading-[27px] w-[147px]">
            <SortDropdown onSelect={handleSortSelect} />
          </div>
          <div>
            <TableCardsToggler
              onViewChange={handleViewChange}
              defaultView="table"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden pt-4 flex items-center gap-[7px]">
        <SearchInputMobile
          value={search}
          onChange={handleSearchChange}
          placeholder="Search brand"
        />
        <div className="bg-white rounded-[11px] w-10 h-10  flex items-center justify-center aspect-square">
          <Image
            src="/icons/general/sort-1-light.svg"
            alt="sort"
            width={24.08}
            height={14.61}
          />
        </div>
      </div>
      <div className="py-5.5">
        <div className="max-w-[1428px] mx-auto">
          <div className="hidden md:flex justify-end items-center mb-5.5 space-x-4">
            <button
              onClick={handleAddBrandClick}
              className="bg-blue-500 text-white rounded-[11px] text-[18px] leading-[27px] pt-1.25 pb-1.75 px-6"
            >
              Add Brand
            </button>
            <div className="w-auto">
              <ActionDropdown onSelect={handleActionSelect} />
            </div>
          </div>
          {/* Mobile buttons */}
          <div className="md:hidden flex justify-end items-center mb-4 space-x-2">
            <div className="relative">
              <button
                onClick={handleAddBrandClick}
                className="bg-blue-500 text-white rounded-[11px] text-sm px-4 py-2"
              >
                Add Brand
              </button>
            </div>
            <div className="w-auto">
              <ActionDropdown onSelect={handleActionSelect} />
            </div>
          </div>
          {loading ? (
            <Loader />
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <>
              <div className="md:hidden space-y-[7px]">
                {brands.map((brand) => (
                  <div key={brand.brandId}>
                    <Link href={`/businesses/brands/${brand.brandId}`}>
                      <BrandCardMobile brand={brand} onDownloadClick={handleDownloadClick} />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="hidden md:block">
                {view === "table" ? (
                  <>
                    <BrandsTable brands={brands} onDownloadClick={handleDownloadClick} />
                    <Pagination
                      totalItems={pagination.total}
                      itemsPerPage={pagination.perPage}
                      currentPage={pagination.currentPage}
                      onPageChange={handlePageChange}
                      onItemsPerPageChange={handleItemsPerPageChange}
                    />
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-[repeat(auto-fit,340px)] gap-x-[13px] gap-y-[20px] justify-center mb-8">
                      {brands.map((brand, index) => {
                        if (brands.length === index + 1) {
                          return (
                            <div ref={lastBrandElementRef} key={brand.brandId}>
                              <Link href={`/businesses/brands/${brand.brandId}`}>
                                <BrandCard brand={brand} onDownloadClick={handleDownloadClick} />
                              </Link>
                            </div>
                          );
                        } else {
                          return (
                            <Link
                              key={brand.brandId}
                              href={`/businesses/brands/${brand.brandId}`}
                            >
                              <BrandCard brand={brand} onDownloadClick={handleDownloadClick} />
                            </Link>
                          );
                        }
                      })}
                    </div>
                    {loading && <Loader />}
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
