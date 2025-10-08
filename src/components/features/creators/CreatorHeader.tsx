"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import UnifiedTabs from "@/components/general/UnifiedTabs";
import { RootState } from "@/store/store";
const menuIcon = "/icons/common/menu-dots.svg";

interface CreatorHeaderProps {
  name: string;
  subtitle: string;
  avatarUrl?: string;
  isInstagramVerified?: boolean;
  isApproved?: boolean;
  tier?: string;
  tabs?: string[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function CreatorHeader({
  name,
  subtitle,
  avatarUrl,
  isInstagramVerified = false,
  isApproved = false,
  tier,
  tabs = ["Info", "Brands", "Insights", "History", "Change Phone Number"],
  activeTab,
  onTabChange,
}: CreatorHeaderProps) {
  const { user } = useSelector((state: RootState) => state.auth);
  const isAdmin = user?.registration_type === "admin";

  const displayTabs = isAdmin ? tabs.filter(tab => tab !== "Brands") : tabs;

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
            <div className="w-[74px] h-[74px] md:w-[108px] md:h-[108px] rounded-full shrink-0 relative">
              <Image
                src={avatarUrl || "/images/1.png"}
                alt="profile"
                width={108}
                height={108}
              />
              <div className="absolute bottom-0 right-0">
                <Image
                  src="/icons/creator/verified-2.svg"
                  alt="verified"
                  width={18}
                  height={18}
                  className="md:w-[26.71px] md:h-[26.71px]"
                />
              </div>
            </div>
            <div>
              <h1 className="text-[18px] md:text-[25px] font-semibold leading-[27px] md:leading-[38px] ">
                {name}
              </h1>
              <p className="text-[15px] md:text-[18px] font-medium md:leading-[27px] leading-[23px]">
                {subtitle}
              </p>
              <div className="flex items-center md:gap-2.5 gap-2 md:mt-3.25 mt-[7px]">
                {isApproved && (
                  <div className="bg-[#00CC86] text-white rounded-[14px] md:text-[13px] md:leading-[20px] text-[11px] leading-[17px] px-[11px] py-1">
                    Approved
                  </div>
                )}
                {tier && (
                  <div className="bg-[#B56576] text-white rounded-[14px] md:text-[13px] md:leading-[20px] text-[11px] leading-[17px] px-[12px] py-1">
                    {tier} <span className="hidden md:inline">(500k - 1M)</span>
                  </div>
                )}
                {isInstagramVerified && (
                  <div className="flex items-center bg-[#F8F8F8] rounded-[14px] text-[#4F4F4F] md:text-[13px] md:leading-[20px] text-[11px] leading-[17px] px-2 py-1 gap-1 truncate">
                    <div>
                      <Image
                        src="/icons/creator/instaverified-2.svg"
                        alt="instagram verified"
                        width={12.37}
                        height={12.37}
                        className="md:w-[15.47px] md:h-[15.47px]"
                      />
                    </div>
                    <div>Instagram verified</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <UnifiedTabs
            tabs={displayTabs}
            activeTab={activeTab}
            onTabChange={onTabChange}
          />
        </div>
        <div>
          <Image
            src={menuIcon}
            alt="MENU"
            width={21.48}
            height={4.67}
            className="w-[21.48px] h-[4.67px] md:w-[21.48px] md:h-[4.67px]"
          />
        </div>
      </div>
    </div>
  );
}
