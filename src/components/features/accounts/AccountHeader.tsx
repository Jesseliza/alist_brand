"use client";

import Image from "next/image";
import UnifiedTabs from "@/components/general/UnifiedTabs";
const menuIcon = "/icons/common/menu-dots.svg";
import { useRouter } from "next/navigation"; // Import useRouter
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
  const router = useRouter(); 

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
      tabs.push("Reset PIN");
    }

    return tabs;
  };

  const displayTabs = getDisplayTabs();

  return (
    <div className="w-full bg-white px-6 border-b border-[#E2E2E2] relative z-10">
      <div
        className="absolute inset-0 bg-white z-0"
        style={{ left: "-100vw", right: "-100vw" }}
      />
      <div className="max-w-[1428px] mx-auto flex justify-between pt-10 text-[#4F4F4F] relative">
        {/* Header */}
        <div>
          {!isProfilePage && (
            <button onClick={() => (router.push("/businesses/accounts"))} className="cursor-pointer mb-4">
              <Image
                src="/icons/campaign/details/back-arrow.svg"
                alt="back"
                width={35}
                height={35}
              />
            </button>
          )}
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
      </div>
    </div>
  );
}
