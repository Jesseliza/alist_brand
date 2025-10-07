"use client";

import { useState } from "react";
import MonthCalendar from "@/components/general/MonthCalendar";
import { Dropdown } from "@/components/general/dropdowns/Dropdown";
import { CampaignAvailability } from "@/types/entities/campaign";

const monthOptions = [
  { label: "January", value: 0 },
  { label: "February", value: 1 },
  { label: "March", value: 2 },
  { label: "April", value: 3 },
  { label: "May", value: 4 },
  { label: "June", value: 5 },
  { label: "July", value: 6 },
  { label: "August", value: 7 },
  { label: "September", value: 8 },
  { label: "October", value: 9 },
  { label: "November", value: 10 },
  { label: "December", value: 11 },
];

export default function Availabilites({ campaignId }: { campaignId: string }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedAvailability, setSelectedAvailability] =
    useState<CampaignAvailability | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTodayClick = () => {
    setCurrentDate(new Date());
  };

  const handleMonthSelect = (month: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), month, 1));
  };

  const handleDaySelect = (availability: CampaignAvailability) => {
    setSelectedAvailability(availability);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedAvailability(null);
  };

  return (
    <div>
      <div className="max-w-[1021px] mx-auto py-[54px]">
        <div className="h-[55px] border border-[#E2E2E2] rounded-[11px] mb-3 flex items-center px-4">
          <button
            onClick={handleTodayClick}
            className="px-4 py-2 text-sm font-medium text-white bg-[#00A4B6] rounded-md hover:bg-[#0090a6] transition"
          >
            Today
          </button>
          <div className="ml-4 w-48">
            <Dropdown
              title="Month"
              options={monthOptions}
              onSelect={handleMonthSelect}
              selected={currentDate.getMonth()}
            />
          </div>
        </div>
        <div>
          <MonthCalendar
            campaignId={campaignId}
            year={currentDate.getFullYear()}
            month={currentDate.getMonth()}
            onDaySelect={handleDaySelect}
          />
        </div>
      </div>
      {isPopupOpen && selectedAvailability && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white/80 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">Voucher Code</h2>
            <p className="mb-4">
              Here is the voucher code for the selected date:
            </p>
            <p className="text-2xl font-bold text-center text-[#00A4B6] bg-gray-100 p-4 rounded">
              {selectedAvailability.offer_code}
            </p>
            <button
              onClick={closePopup}
              className="mt-6 w-full bg-[#00A4B6] text-white py-2 rounded hover:bg-[#0090a6]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}