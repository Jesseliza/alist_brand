"use client";

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { fetchBrandsRequest, fetchMoreBrandsRequest } from "@/store/brand/brandSlice";
import { setSearchTerm } from "@/store/search/searchSlice";
import { fetchIndustries } from "@/store/common/commonSlice";
import { RootState } from "@/store/store";
import BrandsTable from "@/components/features/brands/BrandsTable";
import BrandCard from "@/components/features/brands/BrandCard";
import BrandMobileCard from "@/components/features/brands/BrandMobileCard";
import Pagination from "@/components/general/Pagination";
import ActionDropdown from "@/components/general/dropdowns/ActionDropdown";
import SearchInputMobile from "@/components/general/SearchInputMobile";
import Image from "next/image";
import Loader from "@/components/general/Loader";
import InlineLoader from "@/components/general/InlineLoader";
import TableCardsToggler from "@/components/general/TableCardsToggler";

export default function BrandsPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    brands,
    pagination,
    loading,
    error,
  } = useSelector((state: RootState) => state.brand);

  const { searchTerm } = useSelector((state: RootState) => state.search);
  const [checkedRows, setCheckedRows] = useState<Set<string>>(new Set());
  const [view, setView] = useState<"table" | "card">("table");
  const [mobilePage, setMobilePage] = useState(1);

  const handleAddBrandClick = () => {
    router.push("/businesses/brands/create");
  };

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    dispatch(fetchBrandsRequest({ per_page: 12, page: 1 }));
    dispatch(fetchIndustries());
  }, [dispatch]);

  const isInitialSearchMount = useRef(true);
  useEffect(() => {
    if (isInitialSearchMount.current) {
      isInitialSearchMount.current = false;
      return;
    }

    setMobilePage(1);
    dispatch(fetchBrandsRequest({
      search: debouncedSearch,
      per_page: 12,
      page: 1
    }));
  }, [debouncedSearch, dispatch]);

  const handlePageChange = (page: number) => {
    dispatch(fetchBrandsRequest({
      page,
      search: searchTerm,
      per_page: pagination.perPage
    }));
  };

  const handleItemsPerPageChange = (items: number) => {
    dispatch(fetchBrandsRequest({ search: searchTerm, per_page: items, page: 1 }));
  };

  const handleActionSelect = (value: string) => {
    if (value === "update") {
      if (checkedRows.size === 1) {
        const brandId = checkedRows.values().next().value;
        router.push(`/businesses/brands/${brandId}`);
      }
    }
  };

  const handleCheckboxChange = (brandId: string) => {
    setCheckedRows((prevCheckedRows) => {
      const newCheckedRows = new Set(prevCheckedRows);
      if (newCheckedRows.has(brandId)) {
        newCheckedRows.delete(brandId);
      } else {
        newCheckedRows.add(brandId);
      }
      return newCheckedRows;
    });
  };

  const handleSeeMore = () => {
    const nextPage = mobilePage + 1;
    dispatch(fetchMoreBrandsRequest({
      page: nextPage,
      search: debouncedSearch,
      per_page: 12
    }));
    setMobilePage(nextPage);
  };

  return (
    <div>
      <div className="flex justify-between items-center pt-4">
        <div className="md:hidden flex items-center gap-[7px]">
          <SearchInputMobile
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
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
        <div className="hidden md:block">
          {/* This will be moved */}
        </div>
      </div>
      <div className="py-5.5">
        <div className="max-w-[1428px] mx-auto">
          <div className="hidden md:flex justify-end items-center mb-5.5 space-x-4">
            <TableCardsToggler view={view} setView={setView} />
            <button
              onClick={handleAddBrandClick}
              className="bg-blue-500 text-white rounded-[11px] text-[18px] leading-[27px] pt-1.25 pb-1.75 px-6"
            >
              Add Brand
            </button>
            <div className="w-auto">
              <ActionDropdown
                onSelect={handleActionSelect}
                actions={checkedRows.size === 1 ? ["update"] : []}
                disabled={checkedRows.size === 0}
              />
            </div>
          </div>
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
              <ActionDropdown
                onSelect={handleActionSelect}
                showUpdate={checkedRows.size === 1}
                disabled={checkedRows.size === 0}
                excludeActions={['delete', 'active', 'inactive']}
              />
            </div>
          </div>
          {loading && brands.length === 0 && <Loader />}
          {error && <p className="text-red-500">Error: {error}</p>}
          {!error && (
            <>
              <div className="hidden md:block">
                {view === "table" ? (
                  <BrandsTable
                    brands={brands}
                    checkedRows={checkedRows}
                    onCheckboxChange={handleCheckboxChange}
                  />
                ) : (
                  <>
                    {brands.length === 0 ? (
                      <div className="bg-white rounded-lg shadow-md text-center py-10 text-gray-500">
                        No records found.
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {brands.map((brand) => (
                          <BrandCard
                            key={brand.brandId}
                            brand={brand}
                            checked={checkedRows.has(brand.brandId)}
                            onCheckboxChange={() => handleCheckboxChange(brand.brandId)}
                          />
                        ))}
                      </div>
                    )}
                  </>
                )}
                {loading && brands.length > 0 && <div className="text-center py-4"><InlineLoader /></div>}
                {pagination && brands.length > 0 && (
                  <Pagination
                    totalItems={pagination.total}
                    itemsPerPage={pagination.perPage}
                    currentPage={pagination.currentPage}
                    onPageChange={handlePageChange}
                    onItemsPerPageChange={handleItemsPerPageChange}
                  />
                )}
              </div>
              <div className="md:hidden space-y-[7px]">
                {brands.length === 0 ? (
                  <div className="text-center py-10 text-gray-500">
                    No records found.
                  </div>
                ) : (
                  brands.map((brand) => (
                    <BrandMobileCard
                      key={brand.brandId}
                      brand={brand}
                      checked={checkedRows.has(brand.brandId)}
                      onCheckboxChange={() => handleCheckboxChange(brand.brandId)}
                    />
                  ))
                )}
                {loading && brands.length > 0 && <div className="text-center py-4"><InlineLoader /></div>}
                {brands.length > 0 && brands.length < pagination.total && !loading && (
                  <div className="text-center font-semibold text-[15px] text-gray-500 my-4 mb-8">
                    <button
                      onClick={handleSeeMore}
                      disabled={loading}
                      className="disabled:text-gray-400"
                    >
                      {loading ? <InlineLoader /> : 'See More'}
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}