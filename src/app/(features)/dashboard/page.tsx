"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BarChart from "@/components/charts/BarChart";
import DonutChart from "@/components/charts/RingChart";
import LineChart from "@/components/charts/LineChart";
import DashboardStatCards from "@/components/features/dashboard/DashboardStatCards";
import LiveCampaigns from "@/components/features/dashboard/LiveCampaigns";
import InfluencerActivity from "@/components/features/dashboard/InfluencerAdctivity";
import { getDashboardDataStart } from "@/store/dashboard/DashboardSlice";
import { RootState } from "@/store/store";

const weeklyData = [
  {
    day: "Mon",
    active: { value: 5, color: "#00CDE4" },
    completed: { value: 1.7, color: "#446CCB" },
  },
  {
    day: "Tue",
    active: { value: 6.7, color: "#00CDE4" },
    completed: { value: 2.7, color: "#446CCB" },
  },
  {
    day: "Wed",
    active: { value: 5.6, color: "#00CDE4" },
    completed: { value: 3.6, color: "#446CCB" },
  },
  {
    day: "Thu",
    active: { value: 7.7, color: "#00CDE4" },
    completed: { value: 2.7, color: "#446CCB" },
  },
  {
    day: "Fri",
    active: { value: 8.7, color: "#00CDE4" },
    completed: { value: 4.7, color: "#446CCB" },
  },
  {
    day: "Sat",
    active: { value: 10.7, color: "#00CDE4" },
    completed: { value: 3.7, color: "#446CCB" },
  },
  {
    day: "Sun",
    active: { value: 9.7, color: "#00CDE4" },
    completed: { value: 5.7, color: "#446CCB" },
  },
];

const segments2 = [
  { value: 57.1, color: "#00CDE4", label: "Resolved" },
  { value: 21.4, color: "#446CCB", label: "Pending" },
  { value: 21.4, color: "#F36412", label: "Reported" },
];
const segments3 = [
  { value: 70, color: "#00CDE4", label: "Positive" },
  { value: 20, color: "#446CCB", label: "Neutral" },
  { value: 10, color: "#F36412", label: "Negative" },
];

const multiSeriesChartData = {
  xAxis: {
    values: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
  },
  yAxis: {
    values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500],
  },
  series: [
    {
      name: "Impressions",
      color: "#00CDE4",
      data: [1000, 2100, 1600, 2300, 2800, 2000, 2700],
    },
    {
      name: "Reach",
      color: "#446CCB",
      data: [600, 1600, 1200, 1800, 2200, 1700, 2100],
    },
  ],
};

// Legend Labels Component
const LegendLabels = ({
  segments,
}: {
  segments: Array<{ value: number; color: string; label: string }>;
}) => {
  return (
    <div className="flex items-center gap-2 justify-between mt-[45px]">
      {segments.map((segment, index) => (
        <div key={index} className="flex items-center gap-[4.5px]">
          <div
            className="w-[10px] h-[10px] rounded-[4px]"
            style={{ backgroundColor: segment.color }}
          ></div>
          <p className="text-[9px] leading-[13px] text-[#383838]">
            {segment.label}: {segment.value}%
          </p>
        </div>
      ))}
    </div>
  );
};

export default function Dashboard() {
  const dispatch = useDispatch();
  const { counts, loading, error } = useSelector(
    (state: RootState) => state.dashboard
  );

  useEffect(() => {
    dispatch(getDashboardDataStart());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="py-[13px] bg-white hidden md:block relative">
        <div
          className="absolute inset-0 bg-white h-[65px]"
          style={{ left: "-100vw", right: "-100vw" }}
        />
      </div>
      <div className="max-w-[1428px] mx-auto mt-[90px]">
        <div>
          <DashboardStatCards counts={counts} />
        </div>
        <div className="flex gap-[21px] items-stretch mt-[20px]">
          <div className="p-1 md:p-7 bg-white rounded-[13px] text-[#4F4F4F] text-[11px] flex-1">
            <h3 className="text-[18px] font-semibold leading-[27px] text-[#4F4F4F] mb-[30px]">
              Campaign Performance
            </h3>
            <div className="flex items-center justify-center gap-[48px]">
              <div className="flex items-center gap-1.5">
                <div className="w-[15.23px] h-[6.53px] rounded-[6px] bg-[#00CDE4]"></div>
                <p>Active campaigns</p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-[15.23px] h-[6.53px] rounded-[6px] bg-[#446CCB]"></div>
                <p>Completed campaigns</p>
              </div>
            </div>
            <BarChart
              data={weeklyData}
              xAxisKey="day"
              barKeys={["active", "completed"]}
              maxBarWidth={20.67}
              showYTicks={false}
              yAxisValues={["0", "2", "4", "6", "8", "10", "12"]} // 8 elements
              showGridLines={true} // Show default dotted grid lines
              heightPx={280}
            />
          </div>

          <div className="p-1 md:p-7 bg-white rounded-[13px] text-[#4F4F4F] text-[11px] flex-1">
            <h3 className="text-[18px] font-semibold leading-[27px] text-[#4F4F4F] mb-[30px]">
              Campaign Performance
            </h3>
            <div className="flex items-center justify-center gap-[48px]">
              <div className="flex items-center gap-1.5">
                <div className="w-[15.23px] h-[6.53px] rounded-[6px] bg-[#00CDE4]"></div>
                <p>Impressions</p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-[15.23px] h-[6.53px] rounded-[6px] bg-[#446CCB]"></div>
                <p>Reach</p>
              </div>
            </div>
            <LineChart
              chartData={multiSeriesChartData}
              showYTicks={false}
              heightPx={280}
              yAxisValues={[
                "0",
                "500",
                "1000",
                "1500",
                "2000",
                "2500",
                "3000",
                "3500",
              ]}
            />
          </div>
        </div>
        <div className="flex gap-[21px] items-stretch mt-[20px] text-[#4F4F4F]">
          <div className="p-1 md:p-7 bg-white rounded-[13px] flex-1">
            <h3 className="text-[18px] font-semibold leading-[27px]  mb-[30px]">
              Live campaigns
            </h3>
            <LiveCampaigns />
          </div>
          <div className="p-1 md:p-7 bg-white rounded-[13px] flex-1">
            <h3 className="text-[18px] font-semibold leading-[27px] mb-[30px]">
              Influencer Activity
            </h3>
            <InfluencerActivity />
          </div>
        </div>
        <div className="mt-[20px] p-1 md:p-7 bg-white rounded-[13px] text-[#4F4F4F] mb-8">
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
        </div>
      </div>
    </div>
  );
}
