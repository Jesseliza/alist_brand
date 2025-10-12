"use client";

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { Campaign } from "@/types/entities";
import Overview from "./tabs/Overview";
import Availabilites from "./tabs/Availabilites";
import Posts from "./tabs/Posts";
import VoucherCode from "./tabs/VoucherCode";
import Reviews from "./tabs/Reviews";

const tabs = [
  "Overview",
  "Availabilites",
  "Voucher Code",
  "Posts",
  "Reviews",
];

export default function CampaignDetails({
  campaign,
  campaignId,
}: {
  campaign: Campaign;
  campaignId: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedIndex, setSelectedIndex] = useState(0); // Default to Overview (index 0)

  const getTabFromURL = useCallback(() => {
    const tab = searchParams.get("tab");
    if (tab && tabs.includes(tab)) {
      return tabs.indexOf(tab);
    }
    return 0; // Default to Overview
  }, [searchParams]);

  const handleTabChange = (index: number) => {
    setSelectedIndex(index);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabs[index]);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    setSelectedIndex(getTabFromURL());
  }, [searchParams, getTabFromURL]);

  return (
    <div>
      <TabGroup selectedIndex={selectedIndex} onChange={handleTabChange}>
        <div className="max-w-[966px] mx-auto md:px-4 mt-4">
          <TabList className="flex bg-[#F8F8F8] rounded-[13px] p-[5px]">
            {tabs.map((tab) => (
              <Tab
                key={tab}
                className="
              w-full py-1.75 text-[18px] leading-[27px] font-medium rounded-[13px] transition
              text-[#7E7E7E]
              data-[selected]:bg-[#00A4B6] data-[selected]:text-white

              focus-visible:outline-none focus-visible:ring focus-visible:ring-[#54aeb8]
            "
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </div>
        <TabPanels className="md:px-4">
          {tabs.map((tab) => (
            <TabPanel key={tab}>
              {tab === "Overview" && <Overview campaign={campaign} />}
              {tab === "Availabilites" && (
                <Availabilites campaignId={campaignId} />
              )}
              {tab === "Posts" && <Posts />}
              {tab === "Reviews" && <Reviews campaignId={campaignId} />}
              {tab === "Voucher Code" && <VoucherCode />}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}