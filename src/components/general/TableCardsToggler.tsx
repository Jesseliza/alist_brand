"use client";
import Image from "next/image";
import { useState } from "react";

type ViewType = "table" | "cards";

interface TableCardsTogglerProps {
  onViewChange?: (view: ViewType) => void;
  defaultView?: ViewType;
}

export default function TableCardsToggler({
  onViewChange,
  defaultView = "table",
}: TableCardsTogglerProps) {
  const [activeView, setActiveView] = useState<ViewType>(defaultView);

  const handleViewChange = (view: ViewType) => {
    setActiveView(view);
    onViewChange?.(view);
  };

  const getButtonClasses = (view: ViewType) => {
    const isActive = activeView === view;
    return `flex items-center gap-4 py-[9px] px-4 rounded-[11px] cursor-pointer transition-colors ${
      isActive ? "bg-[#F3F3F3] text-[#4F4F4F]" : "text-[#838383]"
    }`;
  };

  return (
    <div className="flex items-center gap-2 text-[15px] leading-[23px]">
      <div
        className={getButtonClasses("table")}
        onClick={() => handleViewChange("table")}
      >
        <span>
          <Image
            src={
              activeView === "table"
                ? "/icons/navbar/table-active-light.svg"
                : "/icons/navbar/table-inactive-light.svg"
            }
            alt="table"
            width={13.49}
            height={14.04}
          />
        </span>
        <span>Table</span>
      </div>
      <div
        className={getButtonClasses("cards")}
        onClick={() => handleViewChange("cards")}
      >
        <span>
          <Image
            src={
              activeView === "cards"
                ? "/icons/navbar/cards-active-light.svg"
                : "/icons/navbar/cards-inactive-light.svg"
            }
            alt="cards"
            width={13.47}
            height={13.81}
          />
        </span>
        <span>Cards</span>
      </div>
    </div>
  );
}
