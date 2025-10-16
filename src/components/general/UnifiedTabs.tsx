"use client";

import { useState, useEffect } from "react";
import { TabGroup, TabList, Tab } from "@headlessui/react";

interface UnifiedTabsProps {
  tabs: string[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  className?: string;
}

export interface TabContentProps {
  activeTab: string;
}

export default function UnifiedTabs({
  tabs,
  activeTab,
  onTabChange,
  className = "",
}: UnifiedTabsProps) {
  const [internalActiveTab, setInternalActiveTab] = useState<string>(
    activeTab || tabs[0]
  );

  // Update internal state when activeTab prop changes
  useEffect(() => {
    if (activeTab) {
      setInternalActiveTab(activeTab);
    }
  }, [activeTab]);

  const currentActiveTab = activeTab || internalActiveTab;

  const handleTabChange = (tab: string) => {
    setInternalActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <nav
      className={`mt-6 text-[15px] md:text-[18px] md:font-medium px-2 ${className}`}
    >
      <TabGroup
        selectedIndex={tabs.findIndex((tab) => tab === currentActiveTab)}
        onChange={(index) => handleTabChange(tabs[index])}
      >
        <TabList className="-mb-px flex flex-col md:flex-row gap-x-8 md:gap-x-16 gap-y-2 md:gap-y-0">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `relative pb-2 font-medium transition-colors focus:outline-none ${
                  selected ? "text-[#00A4B6]" : "text-[#7E7E7E] cursor-pointer"
                }`
              }
            >
              {({ selected }) => (
                <>
                  {tab}
                  {selected && (
                    <span className="absolute left-0 right-0 bottom-0.5 h-1 bg-[#00A4B6] rounded-full" />
                  )}
                </>
              )}
            </Tab>
          ))}
        </TabList>
      </TabGroup>
    </nav>
  );
}
