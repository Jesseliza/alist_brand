"use client";
import Image from "next/image";
import BarChart from "@/components/charts/BarChart";
// import DonutChart from "@/components/charts/RingChart";
// import LineChart from "@/components/charts/LineChart";
import DashboardStatCards from "@/components/features/dashboard/DashboardStatCards";
import LiveCampaigns from "@/components/features/dashboard/LiveCampaigns";
import InfluencerActivity from "@/components/features/dashboard/InfluencerAdctivity";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardData, selectDashboardData } from "@/store/dashboard/dashboardSlice";
import { AppDispatch } from "@/store/store";

interface CampaignPerformanceData {
  day: string;
  active_count: number;
  completed_count: number;
}

// Legend Labels Component
// const LegendLabels = ({
//   segments,
// }: {
//   segments: Array<{ value: number; color: string; label: string }>;
// }) => {
//   return (
//     <div className="flex items-center gap-2 justify-between mt-[45px]">
//       {segments.map((segment, index) => (
//         <div key={index} className="flex items-center gap-[4.5px]">
//           <div
//             className="w-[10px] h-[10px] rounded-[4px]"
//             style={{ backgroundColor: segment.color }}
//           ></div>
//           <p className="text-[9px] leading-[13px] text-[#383838]">
//             {segment.label}: {segment.value}%
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

export default function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const dashboardData = useSelector(selectDashboardData);

  useEffect(() => {
    dispatch(getDashboardData());
  }, [dispatch]);

  const weeklyData = dashboardData?.campaignPerformance?.map((item: CampaignPerformanceData) => ({
    day: item.day.slice(0, 3),
    active: { value: item.active_count, color: "#00CDE4" },
    // completed: { value: item.completed_count, color: "#446CCB" },
  })) || [];

  return (
    <div>
      <div className="py-[13px] bg-white hidden md:block relative">
        <div
          className="absolute inset-0 bg-white h-[65px]"
          style={{ left: "-100vw", right: "-100vw" }}
        />
      </div>
      <div className="max-w-[1428px] mx-auto mt-[90px] mb-8">
        <div>
          <DashboardStatCards />
        </div>
        <div className="flex flex-col md:flex-row gap-[21px] items-stretch mt-[20px]">
          <div className="p-4 md:p-7 bg-white rounded-[13px] text-[#4F4F4F] text-[11px] flex-1">
            <h3 className="text-[18px] font-semibold leading-[27px] text-[#4F4F4F] mb-[30px]">
              Campaign Performance
            </h3>
            <div className="flex items-center justify-center gap-[48px]">
              <div className="flex items-center gap-1.5">
                <div className="w-[15.23px] h-[6.53px] rounded-[6px] bg-[#00CDE4]"></div>
                <p>Active campaigns</p>
              </div>
              {/* <div className="flex items-center gap-1.5">
                <div className="w-[15.23px] h-[6.53px] rounded-[6px] bg-[#446CCB]"></div>
                <p>Completed campaigns</p>
              </div> */}
            </div>
            {dashboardData?.campaignPerformance ? (
              <BarChart
                data={weeklyData}
                xAxisKey="day"
                barKeys={["active"]}
                maxBarWidth={20.67}
                showYTicks={true}
                yAxisValues={[]}
                showGridLines={true}
                heightPx={280}
              />
            ) : (
              <div className="flex justify-center items-center h-[280px]">
                <Image
                  src="/icons/loader.gif"
                  alt="Loading..."
                  width={50}
                  height={50}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[21px] items-stretch mt-[20px] text-[#4F4F4F]">
          <div className="p-4 md:p-7 bg-white rounded-[13px] flex-1">
            <h3 className="text-[18px] font-semibold leading-[27px]  mb-[30px]">
              Live campaigns
            </h3>
            <LiveCampaigns />
          </div>
          <div className="p-4 md:p-7 bg-white rounded-[13px] flex-1">
            <h3 className="text-[18px] font-semibold leading-[27px] mb-[30px]">
              Influencer Activity
            </h3>
            <InfluencerActivity />
          </div>
        </div>
        {/* <div className="mt-[20px] p-1 md:p-7 bg-white rounded-[13px] text-[#4F4F4F] mb-8">
          <h3 className="text-[18px] font-semibold leading-[27px]  mb-[42px]">
            System Health & Moderation Overview
          </h3>
          <div className="flex items-end gap-4">
            <div className="flex-1 flex items-center">
              <div className="flex-1">
                <div className="flex flex-col items-center mx-auto">
                  <p className="text-center text-[#4F4F4F] text-[15px] leading-[23px] mb-[43px]">
                    Moderation Cases
                  </p>
                  <DonutChart
                    segments={segments2}
                    size={180}
                    thickness={15}
                    backgroundColor="#F3F3F3"
                    gap={0}
                    cap="butt"
                  ></DonutChart>
                  <LegendLabels segments={segments2} />
                </div>
              </div>
              <div className=" w-[1px] bg-[#E2E2E2] h-[222px] "></div>
              <div className="flex-1">
                <div className="flex flex-col items-center mx-auto">
                  <p className="text-center text-[#4F4F4F] text-[15px] leading-[23px] mb-[43px]">
                    User Feedback
                  </p>
                  <DonutChart
                    segments={segments3}
                    size={180}
                    thickness={15}
                    backgroundColor="#F3F3F3"
                    gap={0}
                    cap="butt"
                  ></DonutChart>
                  <LegendLabels segments={segments3} />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="max-w-[530px] ml-auto">
                <p className="text-center text-[#4F4F4F] text-[15px] leading-[23px] mb-[43px]">
                  Moderation Activity Over Time
                </p>
                <BarChart
                  data={weeklyData}
                  xAxisKey="day"
                  barKeys={["active"]}
                  maxBarWidth={34}
                  barWidthPx={34}
                  showYTicks={false}
                  yAxisValues={["0", "2", "4", "6", "8", "10", "12"]} // 8 elements
                  showGridLines={true} // Show default dotted grid lines
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}