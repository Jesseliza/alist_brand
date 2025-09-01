import DonutChart from "@/components/charts/RingChart";
import MultiSegmentLineChart from "@/components/charts/MultiSegmentLineChart";
import BarChart from "@/components/charts/BarChart";
import ProgressBar from "@/components/charts/ProgressBar";
import { Creator } from "@/types/entities";

export default function CreatorInsights3({ creator }: { creator: Creator }) {
  // Get data from creator insights
  const audienceBreakdown = creator.insights?.audienceBreakdown;

  // Gender distribution data
  const genderData = audienceBreakdown?.genderDist || [
    { label: "Male", value: 53.3, color: "#00A4B6" },
    { label: "Female", value: 46.7, color: "#00D2E9" },
  ];

  // Engagement by age data
  const engagementByAge = audienceBreakdown?.engagementByAge || [
    {
      age: "13 - 17",
      Male: { value: 2.5, color: "#00D2E9" },
      Female: { value: 2.5, color: "#00A4B6" },
    },
    {
      age: "18 - 24",
      Male: { value: 14, color: "#00D2E9" },
      Female: { value: 20, color: "#00A4B6" },
    },
    {
      age: "25 - 34",
      Male: { value: 16, color: "#00D2E9" },
      Female: { value: 24, color: "#00A4B6" },
    },
    {
      age: "35 - 44",
      Male: { value: 9, color: "#00D2E9" },
      Female: { value: 15, color: "#00A4B6" },
    },
    {
      age: "45 - 64",
      Male: { value: 5, color: "#00D2E9" },
      Female: { value: 6, color: "#00A4B6" },
    },
  ];

  // Location by country data
  const topAudienceLocationByCountry = audienceBreakdown?.locationByCountry || [
    { country: "USA", value: 20.0, color: "#00A4B6" },
    { country: "China", value: 15.0, color: "#00A4B6" },
    { country: "USA", value: 12.0, color: "#00A4B6" },
    { country: "China", value: 10.0, color: "#00A4B6" },
    { country: "USA", value: 43.0, color: "#00A4B6" },
  ];

  // Location by city data
  const topAudienceLocationByCity = audienceBreakdown?.locationByCity || [
    { city: "New York", value: 20.0, color: "#00A4B6" },
    { city: "Boston", value: 15.0, color: "#00A4B6" },
    { city: "Dubai", value: 12.0, color: "#00A4B6" },
    { city: "Sao Paulo", value: 10.0, color: "#00A4B6" },
    { city: "others", value: 43.0, color: "#00A4B6" },
  ];

  // Language distribution data
  const audienceLanguage = audienceBreakdown?.languageDist || [
    {
      language: "English",
      AudienceLanguage: { value: 62, color: "#00A4B6" },
    },
    {
      language: "Spanish",
      AudienceLanguage: { value: 53, color: "#00A4B6" },
    },
    {
      language: "Mandarin",
      AudienceLanguage: { value: 32, color: "#00A4B6" },
    },
    {
      language: "Hindi",
      AudienceLanguage: { value: 30, color: "#00A4B6" },
    },
    {
      language: "Russian",
      AudienceLanguage: { value: 14, color: "#00A4B6" },
    },
  ];

  // Ethnicity distribution data
  const audienceEthnicity = audienceBreakdown?.ethnicityDist || [
    {
      ethnicity: "Hispanic",
      AudienceEthnicity: { value: 62, color: "#00A4B6" },
    },
    {
      ethnicity: "White",
      AudienceEthnicity: { value: 53, color: "#00A4B6" },
    },
    {
      ethnicity: "Asian",
      AudienceEthnicity: { value: 32, color: "#00A4B6" },
    },
    {
      ethnicity: "African",
      AudienceEthnicity: { value: 30, color: "#00A4B6" },
    },
    {
      ethnicity: "MENA",
      AudienceEthnicity: { value: 14, color: "#00A4B6" },
    },
  ];
  return (
    <div className="bg-white  rounded-[13px] pt-[42px] md:pb-[75px] pb-[28px] md:px-[24px]">
      <div className="md:px-[min(1.5vw,50px)] px-[24px]">
        <div className="flex flex-col md:flex-row gap-[28px] md:gap-2 border-b border-[#E4E4E4] pb-[50px]">
          <div className="md:px-[0]  flex-1">
            <h3 className="font-medium text-[18px] leading-[27px] text-[#4F4F4F] md:mb-[62px] mb-[22px]">
              Gender distribution
            </h3>
            <div className="flex flex-col justify-between gap-[26px] xl:flex-row items-center xl:justify-start xl:gap-[min(5vw,64px)]">
              {/* Mobile: MultiSegmentLineChart, Desktop: DonutChart */}
              <div className="w-full md:hidden">
                <MultiSegmentLineChart
                  segments={genderData.map(({ value, color }) => ({
                    value,
                    color,
                  }))}
                  height={20.59}
                  borderRadius={12}
                  backgroundColor="#E0E0E0"
                />
              </div>
              <div className="hidden md:block">
                <DonutChart
                  segments={genderData}
                  size={202.64}
                  thickness={7}
                  gap={8}
                ></DonutChart>
              </div>
              <div className="hidden md:block">
                {genderData.map((item, index) => (
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
                {genderData.map((item, index) => (
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

          <hr className=" border-t border-[#E4E4E4] md:hidden  " />
          <div className=" md:px-[0]  flex-1 flex flex-col justify-between">
            <h3 className="font-medium text-[18px] leading-[27px] text-[#4F4F4F] md:mb-[62px] mb-[22px]">
              Gender distribution
            </h3>
            <div className="">
              <div className="xl:min-w-[400.64px] md:min-w-[300px] md:max-w-[527.48px] ">
                <BarChart
                  data={engagementByAge}
                  xAxisKey="age"
                  showXAxis={false}
                  showYAxis={false}
                  barKeys={["Male", "Female"]}
                  maxBarWidth={22.23}
                  barWidthPx={22.23}
                  barInnerGapPx={4}
                  showYTicks={false}
                  showXTicks={false}
                  yAxisValues={["0.0", "5.0", "10.0", "15.0", "20.0", "25.0"]}
                  showGridLines={true}
                  barRadius={2}
                  heightPx={226.61}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-[min(1.5vw,50px)] px-[24px]">
        <div className="flex flex-col md:flex-row gap-[28px] md:gap-2 border-b border-[#E4E4E4] pb-[50px]">
          <div className=" md:px-[0]  flex-1">
            <h3 className="mt-5 md:mt-11 font-medium text-[18px] leading-[27px] text-[#4F4F4F] md:mb-[62px] mb-[22px]">
              Top audience Location by country
            </h3>
            <div>
              {topAudienceLocationByCountry.map((item, index) => (
                <div
                  key={index}
                  className="mb-5 md:mr-[32px] md:max-w-[525.21px]"
                >
                  <div className="flex items-center justify-between gap-3 text-[15px] text-[#383838] leading-[23px] mb-2">
                    <span className="truncate">{item.country}</span>
                    <span>{item.value}%</span>
                  </div>
                  <ProgressBar
                    value={item.value}
                    color={item.color}
                    height={5}
                  />
                </div>
              ))}
            </div>
          </div>
          <hr className=" border-t border-[#E4E4E4] md:hidden  " />
          <div className=" md:px-[0]  flex-1">
            {" "}
            <h3 className="md:mt-11 font-medium text-[18px] leading-[27px] text-[#4F4F4F] md:mb-[62px] mb-[22px]">
              Top audience Location by city
            </h3>
            <div>
              {topAudienceLocationByCity.map((item, index) => (
                <div
                  key={index}
                  className="mb-5 md:mr-[32px] md:max-w-[525.21px]"
                >
                  <div className="flex items-center justify-between gap-3 text-[15px] text-[#383838] leading-[23px] mb-2">
                    <span className="truncate">{item.city}</span>
                    <span>{item.value}%</span>
                  </div>
                  <ProgressBar
                    value={item.value}
                    color={item.color}
                    height={5}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[28px] md:gap-2">
          <div className=" md:px-[0]  flex-1">
            <h3 className="mt-5 md:mt-11 font-medium text-[18px] leading-[27px] text-[#4F4F4F] md:mb-[62px] mb-[22px]">
              Audience language
            </h3>
            <div className="">
              <div className="xl:min-w-[400.64px] md:min-w-[300px] md:max-w-[527.48px] ">
                <BarChart
                  data={audienceLanguage}
                  xAxisKey="language"
                  showXAxis={false}
                  showYAxis={false}
                  barKeys={["AudienceLanguage"]}
                  maxBarWidth={48.3}
                  barWidthPx={48.3}
                  barInnerGapPx={4}
                  showYTicks={false}
                  showXTicks={false}
                  yAxisValues={["0.0", "15.0", "30.0", "45.0", "60.0"]}
                  showGridLines={true}
                  barRadius={2}
                  heightPx={183.88}
                />
              </div>
            </div>
          </div>
          <hr className=" border-t border-[#E4E4E4] md:hidden  " />
          <div className=" md:px-[0]  flex-1">
            {" "}
            <h3 className="md:mt-11 font-medium text-[18px] leading-[27px] text-[#4F4F4F] md:mb-[62px] mb-[22px]">
              Audience ethnicity
            </h3>
            <div className="">
              <div className="xl:min-w-[400.64px] md:min-w-[300px] md:max-w-[527.48px] ">
                <BarChart
                  data={audienceEthnicity}
                  xAxisKey="ethnicity"
                  showXAxis={false}
                  showYAxis={false}
                  barKeys={["AudienceEthnicity"]}
                  maxBarWidth={48.3}
                  barWidthPx={48.3}
                  barInnerGapPx={4}
                  showYTicks={false}
                  showXTicks={false}
                  yAxisValues={["0.0", "15.0", "30.0", "45.0", "60.0"]}
                  showGridLines={true}
                  barRadius={2}
                  heightPx={183.88}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
