"use client";
// import MonthCalendar from "@/components/general/MonthCalendar";
import Image from "next/image";
import { useState } from "react";

interface Activity {
  date: string;
  name: string;
  hour: string;
  color: string;
  secondaryColor: string;
  hours?: string;
  location?: string;
}

const activities: Activity[] = [
  {
    date: "25/07/2025",
    name: "Dunkin'",
    hour: "10 AM",
    color: "#FF8800",
    secondaryColor: "#FFEBDD",
    hours: "10:00 - 11:00",
    location: " 123 Main St, Anytown, USA",
  },
  {
    date: "25/07/2025",
    name: "Brand",
    hour: "4 PM",
    color: "#00CFC8",
    secondaryColor: "#C6FCFC",
    hours: "10:00 - 11:00",
    location: " 123 Main St, Anytown, USA",
  },
  {
    date: "15/07/2025",
    name: "Dunkin'",
    hour: "10 AM",
    color: "#FF8800",
    secondaryColor: "#FFEBDD",
    hours: "10:00 - 11:00",
    location: " 123 Main St, Anytown, USA",
  },
  {
    date: "15/07/2025",
    name: "Brand",
    hour: "4 PM",
    color: "#00CFC8",
    secondaryColor: "#C6FCFC",
    hours: "10:00 - 11:00",
    location: " 123 Main St, Anytown, USA",
  },
  {
    date: "15/07/2025",
    name: "Dunkin'",
    hour: "10 AM",
    color: "#FF8800",
    secondaryColor: "#FFEBDD",
    hours: "10:00 - 11:00",
    location: " 123 Main St, Anytown, USA",
  },
  {
    date: "15/07/2025",
    name: "Brand",
    hour: "4 PM",
    color: "#00CFC8",
    secondaryColor: "#C6FCFC",
    hours: "10:00 - 11:00",
    location: " 123 Main St, Anytown, USA",
  },
  {
    date: "15/07/2025",
    name: "Brand",
    hour: "4 PM",
    color: "#00CFC8",
    secondaryColor: "#C6FCFC",
    location: " 123 Main St, Anytown, USA",
  },
];

export default function Activities() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedActivities, setSelectedActivities] = useState<Activity[]>([]);

  const handleDaySelect = (date: string, activities: Activity[]) => {
    setSelectedDate(date);
    setSelectedActivities(activities);
  };

  return (
    <div className="px-6 py-6">
      <div className=" max-w-[1428px] mx-auto flex gap-3.5">
        <div>
          <div className="bg-white mb-3 rounded-[13px] h-[55px]"></div>
          {/* <MonthCalendar
            activities={activities}
            onDaySelect={handleDaySelect}
          /> */}
        </div>
        <div className="flex-1 bg-white  rounded-[13px]">
          <div className="p-[14px] border-b border-[#F3F3F3]">
            <p>{selectedDate ? selectedDate : "Select a day"}</p>
          </div>
          <div className="p-[14px]">
            {selectedActivities.length === 0 ? (
              <p className="text-[#707070] text-sm">No activities</p>
            ) : (
              selectedActivities.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex gap-5 items-center bg-[#F8F8F8] px-[7px] mb-2 rounded"
                >
                  <div
                    className="w-[4px] h-[61.85px] rounded-full my-[9px]"
                    style={{ background: activity.color }}
                  />
                  <div className="flex-1">
                    <h3 className="text-[15px] leading-[23px] font-medium text-[#4F4F4F] mb-[6px] ">
                      {activity.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-[3px]">
                      <div className="w-[8.26px] flex justify-center items-center">
                        <Image
                          src="/icons/activities/time.svg"
                          alt="hour"
                          width={8.13}
                          height={9.36}
                        />
                      </div>

                      <p className="text-[11px] text-[#4F4F4F] ">
                        {activity.hours || activity.hour}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-[8.26px] flex justify-center items-center">
                        <Image
                          src="/icons/activities/place.svg"
                          alt="location"
                          width={8.13}
                          height={9.36}
                        />
                      </div>
                      <p className="text-[11px] text-[#4F4F4F]">
                        {activity.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
