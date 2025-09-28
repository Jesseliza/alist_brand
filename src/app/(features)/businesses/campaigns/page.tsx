"use client";

import CampaignsTable from "@/components/features/campaigns/CampaignsTable";
import CampaignCard from "@/components/features/campaigns/CampaignCard";
import CampaignsMobileCard from "@/components/features/campaigns/CampaignMobileCard";
import TableCardsToggler from "@/components/general/TableCardsToggler";
import Pagination from "@/components/general/Pagination";
import { CampaignsData } from "@/data/CampaignsData";
import { brandsData } from "@/data/BrandsData";
import { useState } from "react";
import SearchInputMobile from "@/components/general/SearchInputMobile";
import SortDropdown from "@/components/general/dropdowns/SortDropdown";
import ActionDropdown from "@/components/general/dropdowns/ActionDropdown";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CampaignsPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [view, setView] = useState<"table" | "card">("table");
  const [search, setSearch] = useState("");

  const handleAddCampaignClick = () => {
    // TODO: Update this route when the create campaign page is available
    // router.push("/businesses/campaigns/create");
    console.log("Add Campaign clicked");
  };

  // Function to get accountId from brandId
  const getAccountIdFromBrandId = (brandId: string): string => {
    const brand = brandsData.find((b) => b.brandId === brandId);
    return brand?.accountId || "0"; // fallback to "0" if brand not found
  };

  // Calculate pagination for desktop view only
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCampaigns = CampaignsData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
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
      <div className="md:hidden pt-4 flex items-center gap-[7px]">
        <SearchInputMobile
          value={search}
          onChange={handleSearchChange}
          placeholder="Search brand"
        />
        {/*
        <div className="bg-white rounded-[11px] w-10 h-10  flex items-center justify-center aspect-square">
          <Image
            src="/icons/general/sort-1-light.svg"
            alt="sort"
            width={24.08}
            height={14.61}
          />
        </div>
        */}
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
              <ActionDropdown onSelect={handleActionSelect} />
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
          <div className="md:hidden space-y-[7px]">
            {CampaignsData.length === 0 ? (
              <div className="text-center py-10 text-gray-500">
                No records found.
              </div>
            ) : (
              CampaignsData.map((campaign) => {
                const accountId = getAccountIdFromBrandId(campaign.brandId);
                return (
                  <Link
                    key={campaign.campaignId}
                    href={`/businesses/accounts/${accountId}/${campaign.brandId}/${campaign.campaignId}`}
                  >
                    <CampaignsMobileCard campaign={campaign} />
                  </Link>
                );
              })
            )}
          </div>
          <div className="hidden md:block">
            {view === "table" ? (
              <>
                <CampaignsTable
                  campaigns={currentCampaigns}
                  getAccountIdFromBrandId={getAccountIdFromBrandId}
                />
                {currentCampaigns.length > 0 && (
                  <Pagination
                    totalItems={CampaignsData.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    onItemsPerPageChange={handleItemsPerPageChange}
                  />
                )}
              </>
            ) : (
              <>
                <div className="grid grid-cols-[repeat(auto-fit,340px)] gap-x-[13px] gap-y-[20px] justify-center mb-8">
                  {CampaignsData.length === 0 ? (
                    <div className="col-span-full text-center py-10 text-gray-500">
                      No records found.
                    </div>
                  ) : (
                    CampaignsData.map((campaign) => {
                      const accountId = getAccountIdFromBrandId(campaign.brandId);
                      return (
                        <Link
                          key={campaign.campaignId}
                          href={`/businesses/accounts/${accountId}/${campaign.brandId}/${campaign.campaignId}`}
                        >
                          <CampaignCard campaign={campaign} />
                        </Link>
                      );
                    })
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}