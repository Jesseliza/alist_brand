"use client";

import { useState } from "react";
import CreatorsTable from "@/components/features/creators/CreatorsTable";
import CreatorCard from "@/components/features/creators/CreatorCard";
import CreatorMobileCard from "@/components/features/creators/CreatorMobileCard";
import { CreatorsData } from "@/data/CreatorsData";
import Pagination from "@/components/general/Pagination";
import TableCardsToggler from "@/components/general/TableCardsToggler";
import SearchInputMobile from "@/components/general/SearchInputMobile";
import SortDropdown from "@/components/general/dropdowns/SortDropdown";
import ActionDropdown from "@/components/general/dropdowns/ActionDropdown";
import Image from "next/image";
import Link from "next/link";

export default function CreatorsProfilesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [view, setView] = useState<"table" | "cards">("table");
  const [search, setSearch] = useState("");
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCreators = CreatorsData.slice(indexOfFirstItem, indexOfLastItem);

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSortSelect = (value: string) => {
    console.log("Sort selected:", value);
    // Add your sort logic here
  };

  const handleActionSelect = (value: string) => {
    console.log("Action selected:", value);
    // Add your action logic here
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
          {view === "table" && (
            <div className="w-[137px] ml-auto mb-5.5 hidden md:block">
              <ActionDropdown onSelect={handleActionSelect} />
            </div>
          )}
          <div className="md:hidden space-y-[7px]">
            {CreatorsData.map((creator) => (
              <Link
                key={creator.creatorId}
                href={`/creators/profiles/${creator.creatorId}`}
              >
                <CreatorMobileCard creator={creator} />
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            {view === "table" ? (
              <>
                <CreatorsTable creators={currentCreators} />
                <Pagination
                  totalItems={CreatorsData.length}
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
                  onItemsPerPageChange={handleItemsPerPageChange}
                />
              </>
            ) : (
              <>
                <div className="grid grid-cols-[repeat(auto-fit,340px)] gap-x-[13px] gap-y-[20px] justify-center mb-8">
                  {CreatorsData.map((creator) => (
                    <Link
                      key={creator.creatorId}
                      href={`/creators/profiles/${creator.creatorId}`}
                    >
                      <CreatorCard creator={creator} />
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
