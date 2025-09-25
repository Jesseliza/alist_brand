"use client";
import Image from "next/image";

type ViewType = "table" | "card";

interface TableCardsTogglerProps {
  view: ViewType;
  setView: (view: ViewType) => void;
}

export default function TableCardsToggler({
  view,
  setView,
}: TableCardsTogglerProps) {
  const getButtonClasses = (buttonView: ViewType) => {
    const isActive = view === buttonView;
    return `flex items-center gap-4 py-[9px] px-4 rounded-[11px] cursor-pointer transition-colors ${
      isActive ? "bg-gray-200 text-gray-800" : "text-gray-500"
    }`;
  };

  return (
    <div className="flex items-center gap-2 text-[15px] leading-[23px] bg-white p-1 rounded-lg">
      <div
        className={getButtonClasses("table")}
        onClick={() => setView("table")}
      >
        <span>
          <Image
            src={
              view === "table"
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
        className={getButtonClasses("card")}
        onClick={() => setView("card")}
      >
        <span>
          <Image
            src={
              view === "card"
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
