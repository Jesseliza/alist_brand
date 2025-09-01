import MonthCalendar from "@/components/general/MonthCalendar";

export default function Availabilites() {
  return (
    <div>
      <div className="max-w-[1021px] mx-auto py-[54px] ">
        <div className="h-[55px] border border-[#E2E2E2] rounded-[11px] mb-3"></div>
        <div>
          <MonthCalendar />
        </div>
      </div>
    </div>
  );
}
