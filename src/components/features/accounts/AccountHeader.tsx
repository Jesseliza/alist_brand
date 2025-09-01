"use client";

import Image from "next/image";
import UnifiedTabs from "@/components/general/UnifiedTabs";
import menuIcon from "@/assets/icons/general/menu-dots.svg";
import { Account } from "@/types/entities";

interface AccountHeaderProps {
  account: Account;
  tabs?: string[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function AccountHeader({
  account,
  tabs = ["Details", "Brands", "Plans"],
  activeTab,
  onTabChange,
}: AccountHeaderProps) {
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
            <div
              className="flex items-center justify-center w-[74px] h-[74px] min-w-[45px] min-h-[45px] md:w-27 md:h-27 rounded-full border-5 border-[#EEEEEE] text-white text-[24px] md:text-[40px] font-semibold shrink-0"
              style={{ backgroundColor: account.avatarBackground }}
            >
              {account.avatarInitials}
            </div>
            <div>
              <h1 className="text-[18px] md:text-[25px] font-semibold ">
                {`${account.firstName} ${account.lastName}`}
              </h1>
              <p className="text-[15px] md:text-[18px] font-medium ">
                {account.affiliation}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <UnifiedTabs
            tabs={tabs}
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
