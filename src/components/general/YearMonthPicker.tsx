"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface YearMonthPickerProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const YearMonthPicker = ({ selectedDate, onChange }: YearMonthPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<"months" | "years">("months");
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pickerRef]);

  const handleMonthSelect = (monthIndex: number) => {
    onChange(new Date(currentYear, monthIndex, 1));
    setIsOpen(false);
    setView("months");
  };

  const handleYearSelect = (year: number) => {
    setCurrentYear(year);
    setView("months");
  };

  const handleNextYear = () => {
    if (currentYear < new Date().getFullYear()) {
      setCurrentYear(currentYear + 1);
    }
  };

  const handlePrevYear = () => {
    setCurrentYear(currentYear - 1);
  };

  const handleNextDecade = () => {
    if (Math.floor(currentYear / 10) * 10 + 10 <= new Date().getFullYear()) {
      setCurrentYear(currentYear + 10);
    }
  };

  const handlePrevDecade = () => {
    setCurrentYear(currentYear - 10);
  };

  const renderYears = () => {
    const years = [];
    const decadeStart = Math.floor(currentYear / 10) * 10;
    for (let i = 0; i < 12; i++) {
      const yearToDisplay = decadeStart + i;
      const isFutureYear = yearToDisplay > new Date().getFullYear();
      years.push(
        <div
          key={yearToDisplay}
          onClick={() => !isFutureYear && handleYearSelect(yearToDisplay)}
          className={`p-2 text-center rounded-md ${
            isFutureYear
              ? "text-gray-400 cursor-not-allowed"
              : "cursor-pointer hover:bg-gray-200"
          } ${
            selectedDate.getFullYear() === yearToDisplay ? "bg-blue-500 text-white" : ""
          }`}
        >
          {yearToDisplay}
        </div>
      );
    }
    return years;
  };

  return (
    <div className="relative" ref={pickerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[55px] border border-[#E2E2E2] rounded-[11px] flex items-center justify-between px-4"
      >
        <span>{`${MONTHS[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`}</span>
        <Image src="/icons/general/dropdownarrow-1-light.svg" alt="arrow" width={15} height={15} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-50 p-2">
          {view === "months" && (
            <>
              <div className="flex justify-between items-center mb-2">
                <button onClick={handlePrevYear} className="p-1 rounded-full hover:bg-gray-200">
                  <Image src="/icons/general/arrow-left.svg" alt="prev" width={20} height={20} />
                </button>
                <button onClick={() => setView("years")} className="font-semibold hover:underline">
                  {currentYear}
                </button>
                <button
                  onClick={handleNextYear}
                  className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
                  disabled={currentYear === new Date().getFullYear()}
                >
                  <Image src="/icons/general/arrow-right.svg" alt="next" width={20} height={20} />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {MONTHS.map((month, index) => (
                  <div
                    key={month}
                    onClick={() => handleMonthSelect(index)}
                    className={`p-2 text-center rounded-md cursor-pointer hover:bg-gray-200 ${
                      selectedDate.getMonth() === index && selectedDate.getFullYear() === currentYear
                        ? "bg-blue-500 text-white"
                        : ""
                    }`}
                  >
                    {month.substring(0, 3)}
                  </div>
                ))}
              </div>
            </>
          )}

          {view === "years" && (
            <>
              <div className="flex justify-between items-center mb-2">
                <button onClick={handlePrevDecade} className="p-1 rounded-full hover:bg-gray-200">
                  <Image src="/icons/general/arrow-left.svg" alt="prev" width={20} height={20} />
                </button>
                <span className="font-semibold">{`${Math.floor(currentYear / 10) * 10} - ${Math.floor(currentYear / 10) * 10 + 11}`}</span>
                <button
                  onClick={handleNextDecade}
                  className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
                  disabled={Math.floor(currentYear / 10) * 10 + 10 > new Date().getFullYear()}
                >
                  <Image src="/icons/general/arrow-right.svg" alt="next" width={20} height={20} />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {renderYears()}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default YearMonthPicker;