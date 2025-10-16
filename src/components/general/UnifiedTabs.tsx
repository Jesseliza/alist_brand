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
    <div className={`mt-6 md:px-2 ${className}`}>
      <TabGroup
        selectedIndex={tabs.findIndex((tab) => tab === currentActiveTab)}
        onChange={(index) => handleTabChange(tabs[index])}
        vertical
        className="md:hidden"
      >
        <TabList className="flex flex-col gap-y-2">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `px-4 py-2 text-left text-sm font-medium transition-colors focus:outline-none ${
                  selected
                    ? "bg-[#00A4B6] text-white rounded-md"
                    : "text-[#7E7E7E]"
                }`
              }
            >
              {tab}
            </Tab>
          ))}
        </TabList>
      </TabGroup>
      <nav
        className={`hidden md:block text-[15px] md:text-[18px] md:font-medium overflow-x-auto`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          nav::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <TabGroup
          selectedIndex={tabs.findIndex((tab) => tab === currentActiveTab)}
          onChange={(index) => handleTabChange(tabs[index])}
        >
          <TabList className="-mb-px flex gap-x-8 md:gap-x-16">
            {tabs.map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  `relative pb-2 font-medium transition-colors focus:outline-none whitespace-nowrap ${
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
    </div>
  );
}
