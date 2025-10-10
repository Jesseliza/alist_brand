"use client";

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DedicatedOffer } from "@/types/entities/brand";
import { RootState } from "@/store/store";
import Overview from "./tabs/Overview";
// import Creators from "./tabs/Creators"; // This will be created later

const tabs = [
  // "Creators", // To be added later
  "Overview",
];

export default function DedicatedOfferDetails({
  offer,
  offerId,
}: {
  offer: DedicatedOffer;
  offerId: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  const [selectedIndex, setSelectedIndex] = useState(0); // Default to Overview

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
              {/* {tab === "Creators" && <Creators offer={offer} />} */}
              {tab === "Overview" && <Overview offer={offer} />}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}