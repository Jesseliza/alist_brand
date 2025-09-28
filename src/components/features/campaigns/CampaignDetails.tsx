"use client";

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Campaign } from "@/types/entities";
import { updateCampaignStatusStart } from "@/store/campaigns/CampaignSlice";
import Overview from "./tabs/Overview";
import Creators from "./tabs/Creators";
import Availabilites from "./tabs/Availabilites";
import Posts from "./tabs/Posts";
import Reviews from "./tabs/Reviews";

const tabs = ["Creators", "Overview", "Availabilites", "Posts", "Reviews"];

export default function CampaignDetails({ campaign, campaignId }: { campaign: Campaign, campaignId: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState(1); // Default to Overview (index 1)

  const handleApprove = () => {
    dispatch(updateCampaignStatusStart({ id: campaignId, status: "Approved" }));
  };

  const handleReject = () => {
    dispatch(updateCampaignStatusStart({ id: campaignId, status: "Rejected" }));
  };

  // Get tab from URL or default to Overview
  const getTabFromURL = useCallback(() => {
    const tab = searchParams.get("tab");
    if (tab && tabs.includes(tab)) {
      return tabs.indexOf(tab);
    }
    return 1; // Default to Overview
  }, [searchParams]);

  // Update URL when tab changes
  const handleTabChange = (index: number) => {
    setSelectedIndex(index);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabs[index]);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Update selected index when URL changes
  useEffect(() => {
    setSelectedIndex(getTabFromURL());
  }, [searchParams, getTabFromURL]);

  return (
    <div>
      {campaign.offer_status === "Draft" && (
        <div className="max-w-[966px] mx-auto md:px-4 mt-4">
          <div className="flex justify-end space-x-2 mb-2">
            <button
              onClick={handleApprove}
              className="bg-green-500 text-white px-3 py-1 text-sm rounded-md hover:bg-green-600"
            >
              Approve
            </button>
            <button
              onClick={handleReject}
              className="bg-red-500 text-white px-3 py-1 text-sm rounded-md hover:bg-red-600"
            >
              Reject
            </button>
          </div>
        </div>
      )}
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
              {tab === "Creators" && <Creators campaign={campaign} />}
              {tab === "Overview" && <Overview campaign={campaign} campaignId={campaignId} />}
              {tab === "Availabilites" && <Availabilites />}
              {tab === "Posts" && <Posts campaign={campaign} />}
              {tab === "Reviews" && <Reviews campaign={campaign} />}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
