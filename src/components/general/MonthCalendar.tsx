import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampaignAvailabilityStart } from '../../store/campaigns/CampaignSlice';
import { RootState } from '../../store/store';
import { CampaignAvailability } from '../../types/entities/campaign';

interface Activity {
  date: string; // day/month/year
  name: string;
  hour: string;
  color: string; // main color (dot)
  secondaryColor: string; // background
}

interface MonthCalendarProps {
  campaignId: string;
  year?: number;
  month?: number; // 0 = January, 11 = December
  activities?: Activity[];
  onDaySelect?: (availability: CampaignAvailability) => void;
}

interface DayCell {
  date: number;
  currentMonth: boolean;
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function MonthCalendar({
  campaignId,
  year = new Date().getFullYear(),
  month = new Date().getMonth(),
  activities = [],
  onDaySelect,
}: MonthCalendarProps) {
  const dispatch = useDispatch();
  const { campaignAvailability } = useSelector(
    (state: RootState) => state.campaigns
  );

  useEffect(() => {
    if (campaignId) {
      const year_month = `${year}-${String(month + 1).padStart(2, '0')}`;
      dispatch(getCampaignAvailabilityStart({ campaign_id: campaignId, year_month }));
    }
  }, [campaignId, year, month, dispatch]);

  // 1st of month
  const firstOfMonth = new Date(year, month, 1);
  // JS: Sunday=0 → we want Monday=0 … Sunday=6
  const startOffset = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  // build 6×7 grid of cells
  const cells: DayCell[] = Array.from({ length: 6 * 7 }, (_, i) => {
    const dayNum = i - startOffset + 1;
    if (dayNum <= 0) {
      // trailing days of previous month
      return { date: daysInPrevMonth + dayNum, currentMonth: false };
    } else if (dayNum > daysInMonth) {
      // leading days of next month
      return { date: dayNum - daysInMonth, currentMonth: false };
    } else {
      // current month
      return { date: dayNum, currentMonth: true };
    }
  });

  // Get today's date for comparison
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  return (
    <div className="overflow-auto">
      <div className="rounded-[13px] overflow-hidden bg-white border-2 border-[#F3F3F3]">
        {/* Header row */}
        <div className="flex">
          {DAYS.map((day, idx) => (
            <div
              key={day}
              className={`w-[145px] py-2 px-1 text-left font-medium text-[#707070] leading-[27px] flex items-center justify-start ${
                idx !== DAYS.length - 1 ? " border-r-2 border-[#F3F3F3]" : ""
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        {/* Calendar grid */}
        {Array.from({ length: 6 }).map((_, weekIdx) => (
          <div key={weekIdx} className="flex">
            {cells.slice(weekIdx * 7, weekIdx * 7 + 7).map((cell, idx) => {
              // Calculate the real date for this cell
              let cellYear = year;
              let cellMonth = month;
              const cellDay = cell.date;
              if (!cell.currentMonth) {
                if (weekIdx === 0) {
                  // Previous month
                  cellMonth = month - 1;
                  if (cellMonth < 0) {
                    cellMonth = 11;
                    cellYear = year - 1;
                  }
                } else {
                  // Next month
                  cellMonth = month + 1;
                  if (cellMonth > 11) {
                    cellMonth = 0;
                    cellYear = year + 1;
                  }
                }
              }
              // Compare to today
              const isBeforeToday =
                cellYear < todayYear ||
                (cellYear === todayYear && cellMonth < todayMonth) ||
                (cellYear === todayYear &&
                  cellMonth === todayMonth &&
                  cellDay < todayDate);
              const isToday =
                cellYear === todayYear &&
                cellMonth === todayMonth &&
                cellDay === todayDate;
              // Find activities for this cell
              const cellDateStr = `${String(cellDay).padStart(2, "0")}/${String(
                cellMonth + 1
              ).padStart(2, "0")}/${cellYear}`;
              const cellDateYYYYMMDD = `${cellYear}-${String(
                cellMonth + 1
              ).padStart(2, '0')}-${String(cellDay).padStart(2, '0')}`;
              const availabilityItem = campaignAvailability.find(
                (item) => item.offer_date === cellDateYYYYMMDD
              );
              const isAvailable = !!availabilityItem;

              const cellActivities = activities.filter(
                (a) => a.date === cellDateStr
              );
              return (
                <div
                  key={idx}
                  className={`relative w-[145px] h-[150px] border-2 ${
                    isToday ? 'border-[#00A4B6]' : 'border-[#F3F3F3]'
                  } flex flex-col items-start justify-start`}
                  onClick={() => {
                    if (cell.currentMonth && onDaySelect && availabilityItem) {
                      onDaySelect(availabilityItem);
                    }
                  }}
                  style={{
                    cursor:
                      cell.currentMonth && onDaySelect && isAvailable ? 'pointer' : undefined,
                    backgroundColor: isAvailable
                      ? 'rgba(0, 164, 182, 0.1)'
                      : undefined,
                  }}
                >
                  {/* Mask overlay for days before today */}
                  {isBeforeToday && (
                    <div className="absolute inset-0 bg-[#F8F8F8]/50 z-10 pointer-events-none" />
                  )}
                  {/* Day number in a circle (always above mask) */}
                  <div className="absolute top-[5px] left-[5px] z-20">
                    <div
                      className={`w-6 h-6 flex items-center justify-center rounded-full ${
                        isToday ? "bg-[#00A4B6]" : ""
                      }`}
                    >
                      <span
                        className={isToday ? "text-white" : "text-[#707070]"}
                      >
                        {cell.date}
                      </span>
                    </div>
                  </div>
                  {/* Activities */}
                  <div className="relative z-0 flex flex-col gap-[3.5px] mt-10 w-full px-2">
                    {cellActivities.length <= 4 ? (
                      cellActivities.map((activity, i) => (
                        <div
                          key={i}
                          className="flex items-center rounded-[4px] py-[3px] px-[5.5px] text-[11px] leading-[17px]"
                          style={{ background: activity.secondaryColor }}
                        >
                          <span
                            className="inline-block w-1 h-full rounded-full mr-2"
                            style={{ background: activity.color }}
                          />
                          <span className="truncate text-[#4F4F4F]">
                            {activity.hour} | {activity.name}
                          </span>
                        </div>
                      ))
                    ) : (
                      <>
                        {cellActivities.slice(0, 3).map((activity, i) => (
                          <div
                            key={i}
                            className="flex items-center rounded-[4px] py-[3px] px-[5.5px] text-[11px] leading-[17px]"
                            style={{ background: activity.secondaryColor }}
                          >
                            <span
                              className="inline-block w-1 h-full rounded-full mr-2"
                              style={{ background: activity.color }}
                            />
                            <span className="truncate text-[#4F4F4F]">
                              {activity.hour} | {activity.name}
                            </span>
                          </div>
                        ))}
                        <div
                          className="flex items-center justify-center rounded-[4px] py-[3px] px-[5.5px] text-[11px] leading-[17px]"
                          style={{ background: "#F3F3F3", color: "#707070" }}
                        >
                          +{cellActivities.length - 3}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
