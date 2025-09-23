"use client";

import BrandsTable from "@/components/features/brands/BrandsTable";
import BrandCard from "@/components/features/brands/BrandCard";
import BrandCardMobile from "@/components/features/brands/BrandMobileCard";
import Pagination from "@/components/general/Pagination";
import { brandsData } from "@/data/BrandsData";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TableCardsToggler from "@/components/general/TableCardsToggler";
import SortDropdown from "@/components/general/dropdowns/SortDropdown";
import ActionDropdown from "@/components/general/dropdowns/ActionDropdown";
import SearchInputMobile from "@/components/general/SearchInputMobile";
import Image from "next/image";
import Link from "next/link";

export default function BrandsPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [view, setView] = useState<"table" | "cards">("table");
  const [search, setSearch] = useState("");
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBrands = brandsData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
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

  const handleAddBrandClick = () => {
    router.push("/businesses/brands/create");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
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

          <div className="md:hidden space-y-[7px]">
            {brandsData.map((brand) => (
              <Link
                key={brand.brandId}
                href={`/businesses/accounts/${brand.accountId}/${brand.brandId}`}
              >
                <BrandCardMobile brand={brand} />
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            {view === "table" ? (
              <>
                <BrandsTable brands={currentBrands} />
                <Pagination
                  totalItems={brandsData.length}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  onItemsPerPageChange={handleItemsPerPageChange}
                />
              </>
            ) : (
              <>
                <div className="grid grid-cols-[repeat(auto-fit,340px)] gap-x-[13px] gap-y-[20px] justify-center mb-8">
                  {brandsData.map((brand) => (
                    <Link
                      key={brand.brandId}
                      href={`/businesses/accounts/${brand.accountId}/${brand.brandId}`}
                    >
                      <BrandCard brand={brand} />
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
