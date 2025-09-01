import Image from "next/image";
import CreatorHistoryOffer from "./CreatorHistoryOffer";
import { useState } from "react";
import CreatorHistoryOverview from "./CreatorHistoryOverview";
import { creatorHistoryOffers } from "@/data/CreatorHistoryOffersData";
import { Creator } from "@/types/entities";

const tabs = ["Overview"];

interface CreatorHistoryProps {
  creator: Creator;
}

export default function CreatorHistory({ creator }: CreatorHistoryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const creatorOffers = creatorHistoryOffers.filter(
    (offer) => offer.creatorId === creator.creatorId
  );

  function handleTabChange(tab: string) {
    setActiveTab(tab);
  }

  const selectedOffer =
    activeIndex !== null ? creatorOffers[activeIndex] : creatorOffers[0];

  return (
    <div className="text-[15px] pt-10 md:pt-11 md:px-[15px]">
      <div className="max-w-[1428px] mx-auto ">
        <div className="bg-white rounded-[13px] flex">
          <div className="flex-1 p-6">
            <div className="flex justify-between items-center">
              <p className="mb-[17px] w-[151px] border-1 border-[#E4E4E4] pt-[8.5px] pb-[10px] pl-[14px] rounded-[11px] text-[#6E6E6E] box-border">
                All offers
              </p>
              <div className="aspect-square w-[43px] h-[43px] rounded-[11px] border-1 border-[#E4E4E4] flex items-center justify-center">
                <Image
                  src="/icons/general/sort-1-light.svg"
                  alt="filter"
                  width={24.08}
                  height={14.61}
                />
              </div>
            </div>
            <div className="flex flex-col gap-0.5 max-h-[617px] overflow-y-auto">
              {creatorOffers.map((offer, index) => (
                <div
                  key={index}
                  className={`${index === 0 ? "mb-0.5" : ""} ${
                    activeIndex === index ? "bg-[#F8F8F8]" : "bg-white"
                  } rounded-[13px] cursor-pointer transition-colors`}
                  onClick={() => {
                    if (activeIndex !== index) {
                      setActiveIndex(index);
                    }
                  }}
                >
                  <CreatorHistoryOffer {...offer} />
                </div>
              ))}
            </div>
          </div>
          <div className="w-px bg-[#E2E2E2]" />
          <div className="flex-1 flex flex-col">
            <ul className=" flex md:gap-[60px] px-6 pt-6 border-b border-[#E2E2E2]">
              {tabs.map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => handleTabChange(tab)}
                    className={`relative pb-2 font-medium transition-colors  ${
                      activeTab === tab
                        ? "text-[#00A4B6]"
                        : "text-[#7E7E7E] hover:text-gray-700 cursor-pointer"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute left-0 right-0 bottom-0 h-1 bg-[#00A4B6] rounded-full" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <div className=" p-6 flex-1">
              {activeTab === "Overview" && selectedOffer && (
                <CreatorHistoryOverview offer={selectedOffer} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
