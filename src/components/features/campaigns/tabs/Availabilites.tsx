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

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 10 }, (_, i) => {
  const year = currentYear + i;
  return { label: year.toString(), value: year };
});

export default function Availabilites({ campaignId }: { campaignId: string }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedAvailabilities, setSelectedAvailabilities] =
    useState<CampaignAvailability[] | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTodayClick = () => {
    setCurrentDate(new Date());
  };

  const handleMonthSelect = (month: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), month, 1));
  };

  const handleYearSelect = (year: number) => {
    setCurrentDate(new Date(year, currentDate.getMonth(), 1));
  };

  const handleDaySelect = (availabilities: CampaignAvailability[]) => {
    setSelectedAvailabilities(availabilities);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedAvailabilities(null);
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
          <div className="ml-4 w-32">
            <Dropdown
              title="Year"
              options={yearOptions}
              onSelect={handleYearSelect}
              selected={currentDate.getFullYear()}
            />
          </div>
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
      {isPopupOpen &&
        selectedAvailabilities &&
        selectedAvailabilities.length > 0 && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-transparent">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
              <h2 className="text-xl font-bold mb-2 text-center">
                Voucher Codes
              </h2>
              <p className="mb-4 text-center text-gray-600">
                Date:{" "}
                {new Date(
                  selectedAvailabilities[0].offer_date
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="overflow-auto max-h-[60vh]">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Sl.No
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Voucher Code
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Voucher Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedAvailabilities.map((voucher, index) => (
                      <tr
                        key={voucher.id}
                        className="bg-white border-b hover:bg-gray-50"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {index + 1}
                        </th>
                        <td className="px-6 py-4">{voucher.offer_code}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              voucher.user_id
                                ? "bg-red-100 text-red-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {voucher.user_id ? "Used" : "Available"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                onClick={closePopup}
                className="mt-6 w-full bg-[#00A4B6] text-white py-2 rounded hover:bg-[#0090a6] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
    </div>
  );
}