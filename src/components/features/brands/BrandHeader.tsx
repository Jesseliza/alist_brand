"use client";

import Image from "next/image";
import UnifiedTabs from "@/components/general/UnifiedTabs";
import { getInitials } from "@/utils/text";
const menuIcon = "/icons/common/menu-dots.svg";

interface BrandHeaderProps {
  name: string;
  subtitle: string;
  logo?: string;
  tabs?: string[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  isCampaignPage?: boolean;
}

export default function BrandHeader({
  name,
  subtitle,
  logo,
  tabs = ["Business Details", "Campaigns"],
  activeTab,
  onTabChange,
  isCampaignPage = false,
}: BrandHeaderProps) {
  // When on campaign page, force "Campaigns" as active but keep all tabs visible
  const displayActiveTab = isCampaignPage ? "Campaigns" : activeTab;

  // Handle tab change - prevent navigation when on campaign page
  const handleTabChange = (tab: string) => {
    if (isCampaignPage) {
      // Don't allow tab changes when on campaign page
      return;
    }
    onTabChange?.(tab);
  };

  return (
    <div className="w-full bg-white px-6 border-b border-[#E2E2E2] relative">
      <div
        className="absolute inset-0 bg-white"
        style={{ left: "-100vw", right: "-100vw" }}
      />
      <div className="max-w-[1428px] mx-auto flex justify-between pt-10 text-[#4F4F4F] relative z-10">
        {/* Header */}
        <div>
          <div className="flex items-center md:gap-10 gap-6 ">
            <div className=" w-[108px] h-[108px] min-w-[45px] min-h-[45px] md:w-27 md:h-27 rounded-full  border-[#EEEEEE] border-[5px] text-white shrink-0 overflow-hidden">
              {logo ? (
                <Image
                  src={logo}
                  alt="Logo"
                  width={108}
                  height={108}
                  className="object-cover w-full h-full rounded-full"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-white text-4xl font-bold">
                  {getInitials(name)}
                </div>
              )}
            </div>
            <div>
              <h1 className="text-[18px] md:text-[25px] font-semibold ">
                {name}
              </h1>
              <p className="text-[15px] md:text-[18px] font-medium ">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <UnifiedTabs
            tabs={tabs}
            activeTab={displayActiveTab}
            onTabChange={handleTabChange}
          />
        </div>
        <div>
          <Image src={menuIcon} alt="MENU" width={21.48} height={4.67} />
        </div>
      </div>
    </div>
  );
}
