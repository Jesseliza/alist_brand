"use client";

import Image from "next/image";
import UnifiedTabs from "@/components/general/UnifiedTabs";
import { getInitials } from "@/utils/text";
import { useRouter } from "next/navigation"; // Import useRouter

const menuIcon = "/icons/common/menu-dots.svg";

interface BrandHeaderProps {
  name: string;
  subtitle?: string;
  logo?: string;
  tabs?: string[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  isCampaignPage?: boolean;
  backPath?: string;
  pageFrom?: string;
  isCreateMode?: boolean;
}

export default function BrandHeader({
  name,
  subtitle,
  logo,
  tabs = ["Business Details", "Campaigns"],
  activeTab,
  onTabChange,
  isCampaignPage = false,
  backPath,
  pageFrom,
  isCreateMode
}: BrandHeaderProps) {
  const router = useRouter(); // Initialize router

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
    <div className="w-full bg-white px-6 border-b border-[#E2E2E2] relative z-40">
      <div
        className="absolute inset-0 bg-white z-0"
        style={{ left: "-100vw", right: "-100vw" }}
      />
      <div className="max-w-[1428px] mx-auto flex justify-between pt-10 text-[#4F4F4F] relative">
        {/* Header */}
        <div>
          {(pageFrom === "brand" || pageFrom === "accounts") &&
            <button onClick={() => (backPath ? router.push(backPath) : router.back())} className="cursor-pointer mb-4">
              <Image
                src="/icons/campaign/details/back-arrow.svg"
                alt="back"
                width={35}
                height={35}
              />
            </button>
          }
          <div className="flex items-center md:gap-10 gap-6 ">
            {isCreateMode ? (
              <div>
                <h1 className="text-[18px] md:text-[25px] font-semibold ">
                  Create New Brand
                </h1>
              </div>
            ) : (
              <>
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
                  <h1 className="text-[18px] md:text-[25px] font-semibold whitespace-normal max-w-lg">
                    {name}
                  </h1>
                  {subtitle && (
                    <p className="text-[15px] md:text-[18px] font-medium ">
                      {subtitle}
                    </p>
                  )}
                </div>
              </>
            )}
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
