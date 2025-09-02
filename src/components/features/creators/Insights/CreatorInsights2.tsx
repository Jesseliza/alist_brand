import DonutChart from "@/components/charts/RingChart";
import MultiSegmentLineChart from "@/components/charts/MultiSegmentLineChart";
import Image from "next/image";
import styles from "./CreatorInsights2.module.css";
import { Creator } from "@/types/entities";

export default function CreatorInsights2({ creator }: { creator: Creator }) {
  // Get follower types data from creator insights
  const followerTypesData =
    creator.insights?.audienceBreakdown?.followerTypes || [];

  // Transform follower types to chart format
  const chartData = followerTypesData.map((followerType) => ({
    value: followerType.value,
    color: followerType.color,
    label: followerType.label,
  }));

  // Get similar creators (sliced to maximum 6)
  const similarCreatorsData = creator.insights?.similarCreators || [];
  const displaySimilarCreators = similarCreatorsData.slice(0, 6);

  return (
    <div className="bg-white  rounded-[13px]  pt-[42px] md:pb-25 pb-[28px]  md:px-[24px]">
      <div className="  flex flex-col md:flex-row gap-[28px] md:gap-2 md:px-[min(1.5vw,50px)]">
        <div className="px-[24px] md:px-[0] flex-1">
          <h3 className="font-medium text-[18px] leading-[27px] text-[#4F4F4F] md:mb-[62px] mb-[22px]">
            Follower types
          </h3>
          <div className="flex flex-col gap-[26px] xl:flex-row items-center xl:gap-[min(5vw,64px)]">
            {/* Mobile: MultiSegmentLineChart, Desktop: DonutChart */}
            <div className="w-full md:hidden">
              <MultiSegmentLineChart
                segments={chartData.map(({ value, color }) => ({
                  value,
                  color,
                }))}
                height={20.59}
                borderRadius={12}
                backgroundColor="#E0E0E0"
              />
            </div>
            <div className="hidden md:block min-w-[202.64px]">
              <DonutChart
                segments={chartData}
                size={202.64}
                thickness={7}
                gap={8}
              ></DonutChart>
            </div>
            <div className="hidden md:block">
              {chartData.map((item, index) => (
                <div key={index} className="flex items-center gap-4 mb-[6px]">
                  <div
                    className="w-[17.34px] h-[17.34px] rounded-[4px]"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="truncate w-[45px] text-right text-[15px] font-medium text-[#383838] leading-[23px]">
                    {item.value}%
                  </span>
                  <span className="truncate text-[15px] font-light text-[#383838] leading-[23px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="block md:hidden w-full">
              {chartData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-[6px]"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-[11.58px] h-[11.58px] rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="truncate text-[11px] text-[#383838] leading-[17px]">
                      {item.label}
                    </span>
                  </div>
                  <span className="truncate w-[45px] text-right text-[11px] text-[#383838] leading-[17px]">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className=" border-t border-[#E4E4E4] md:hidden mx-[26px] " />
        <div className="px-[24px] md:px-[0]  flex-1">
          <h3 className="font-medium text-[18px] leading-[27px] text-[#4F4F4F] mb-[20px] md:mb-[74px]">
            Creators with similar audience
          </h3>
          <ul
            className={`grid md:gap-y-[27px] md:gap-x-1 gap-[6px] ${styles["responsive-creator-grid"]}`}
            style={
              {
                "--min-col-width": "170px",
                gridTemplateColumns:
                  "repeat(2, minmax(var(--min-col-width), 1fr))",
              } as React.CSSProperties
            }
          >
            {displaySimilarCreators.map((creator, index) => (
              <li
                key={index}
                className="flex items-center gap-3 md:px-[0] px-[7px] md:py-[0] py-[8px] md:bg-white bg-[#F8F8F8] rounded-[11px]"
              >
                <div>
                  <Image
                    src={
                      creator.avatarUrl ||
                      "/icons/creator/insights/creators/creator1.png"
                    }
                    alt="avatar"
                    width={51.52}
                    height={51.52}
                    className="min-w-[51.52px] min-h-[51.52px] rounded-[50%]"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="truncate md:text-[15px] text-[10px] md:leading-[23px] leading-[16px] font-medium text-[#4F4F4F]">
                      {creator.name}
                    </p>
                    {creator.isVerified && (
                      <Image
                        src="/icons/creator/insights/verified.svg"
                        alt="verified"
                        width={12.18}
                        height={12.18}
                      />
                    )}
                  </div>
                  <p className="truncate md:text-[11px] text-[8px] md:leading-[17px] leading-[12px] text-[#4F4F4F] pt-[3px]">
                    {creator.followerCount >= 1000000
                      ? `${(creator.followerCount / 1000000).toFixed(1)}M`
                      : creator.followerCount >= 1000
                      ? `${(creator.followerCount / 1000).toFixed(0)}k`
                      : creator.followerCount.toString()}{" "}
                    followers
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
