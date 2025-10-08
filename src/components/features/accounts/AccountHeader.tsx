"use client";

import Image from "next/image";
import UnifiedTabs from "@/components/general/UnifiedTabs";
const menuIcon = "/icons/common/menu-dots.svg";
import { Account } from "@/types/entities";

interface AccountHeaderProps {
  account?: Partial<Account>;
  loggedInUser?: Account | null;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  isCreateMode?: boolean;
  isProfilePage?: boolean;
}

export default function AccountHeader({
  account,
  loggedInUser,
  activeTab,
  onTabChange,
  isCreateMode = false,
  isProfilePage = false,
}: AccountHeaderProps) {
  const getDisplayTabs = () => {
    if (isCreateMode) {
      return ["Details"];
    }

    const tabs = ["Details"];

    const isAdminProfile = isProfilePage && loggedInUser?.registration_type === 'admin';
    if (!isAdminProfile) {
      tabs.push("Brands");
    }

    if (isProfilePage) {
      tabs.push("Change Phone Number");
    }

    return tabs;
  };

  const displayTabs = getDisplayTabs();

  return (
    <div className="w-full bg-white border-b border-[#E2E2E2]">
      <div className="max-w-[1428px] mx-auto flex justify-between pt-10 text-[#4F4F4F] px-6">
        {/* Header */}
        <div>
          <div className="flex items-center md:gap-10 gap-6 ">
            {isCreateMode ? (
              <div>
                <h1 className="text-[18px] md:text-[25px] font-semibold ">
                  Create New Account
                </h1>
              </div>
            ) : (
              <>
                <div
                  className="flex items-center justify-center w-[74px] h-[74px] min-w-[45px] min-h-[45px] md:w-27 md:h-27 rounded-full border-5 border-[#EEEEEE] text-white text-[24px] md:text-[40px] font-semibold shrink-0"
                  style={{ backgroundColor: account?.avatarBackground }}
                >
                  {account?.avatarInitials}
                </div>
                <div>
                  <div>
                    <h1 className="text-[18px] md:text-[25px] font-semibold ">
                      {`${account?.firstName || ""} ${account?.lastName || ""}`}
                    </h1>
                    {account?.status === "inactive" && (
                      <span className="text-red-500 text-sm">(Inactive)</span>
                    )}
                  </div>
                  {/* <p className="text-[15px] md:text-[18px] font-medium ">
                    {account?.affiliation}
                  </p> */}
                </div>
              </>
            )}
          </div>

          {/* Tabs */}
          <UnifiedTabs
            tabs={displayTabs}
            activeTab={activeTab}
            onTabChange={onTabChange}
          />
        </div>
        <div>
          <Image src={menuIcon} alt="MENU" width={21.48} height={4.67} />
        </div>
      </div>
    </div>
  );
}
