import ProgressBar from "@/components/charts/ProgressBar";
import LineChart from "@/components/charts/LineChart";
import { Creator } from "@/types/entities";

export default function CreatorInsights4({ creator }: { creator: Creator }) {
  // Get data from creator insights
  const insights = creator.insights;

  // Growth trends data
  const followersGrowth = insights?.growthTrends?.followersGrowth
    ? {
        xAxis: {
          values: insights.growthTrends.followersGrowth.xAxis.values,
        },
        yAxis: {
          values: insights.growthTrends.followersGrowth.yAxis.values.map((v) =>
            typeof v === "number" ? v : Number(v)
          ),
        },
        series: insights.growthTrends.followersGrowth.series,
      }
    : {
        xAxis: {
          values: ["Nov 2023", "Dec 2023", "Jan 2024", "Feb 2024", "Mar 2024"],
        },
        yAxis: {
          values: [35000, 37500, 40000, 42500, 45000],
        },
        series: [
          {
            name: "Followers",
            color: "#00A4B6",
            data: [35500, 41700, 41800, 45000, 45500],
          },
        ],
      };

  const likesGrowth = insights?.growthTrends?.likesGrowth
    ? {
        xAxis: {
          values: insights.growthTrends.likesGrowth.xAxis.values,
        },
        yAxis: {
          values: insights.growthTrends.likesGrowth.yAxis.values.map((v) =>
            typeof v === "number" ? v : Number(v)
          ),
        },
        series: insights.growthTrends.likesGrowth.series,
      }
    : {
        xAxis: {
          values: ["Nov 2023", "Dec 2023", "Jan 2024", "Feb 2024", "Mar 2024"],
        },
        yAxis: {
          values: [3500, 4000, 4500, 5000, 5500],
        },
        series: [
          {
            name: "likes",
            color: "#00A4B6",
            data: [5100, 4300, 3800, 4200, 4490],
          },
        ],
      };

  // Creator interests data
  const creatorInterests = insights?.creatorInterestsBrands || [
    { brand: "Apple", value: 20.0, color: "#00A4B6" },
    { brand: "Netflix", value: 15.0, color: "#00A4B6" },
    { brand: "USA", value: 12.0, color: "#00A4B6" },
    { brand: "Sushi Nation", value: 10.0, color: "#00A4B6" },
    { brand: "Better Meal", value: 43.0, color: "#00A4B6" },
  ];

  // Creator brand affinity data
  const creatorBrandAffinity = insights?.creatorBrandAffinityTopics || [
    { topic: "Friends, Family & Relationships", value: 20.0, color: "#00A4B6" },
    { topic: "Restaurants, Food & Grocery", value: 15.0, color: "#00A4B6" },
    {
      topic: "Clothes, Shoes, Handbags & Accessories",
      value: 12.0,
      color: "#00A4B6",
    },
    {
      topic: "Clothes, Shoes, Handbags & Accessories",
      value: 10.0,
      color: "#00A4B6",
    },
    { topic: "Others", value: 43.0, color: "#00A4B6" },
  ];

  // Audience interests data
  const audienceInterests = insights?.audienceInterestsBrands || [
    { brand: "Apple", value: 20.0, color: "#00A4B6" },
    { brand: "Netflix", value: 15.0, color: "#00A4B6" },
    { brand: "USA", value: 12.0, color: "#00A4B6" },
    { brand: "Sushi Nation", value: 10.0, color: "#00A4B6" },
    { brand: "Better Meal", value: 43.0, color: "#00A4B6" },
  ];

  // Audience brand affinity data
  const audienceBrandAffinity = insights?.audienceBrandAffinityTopics || [
    { topic: "Friends, Family & Relationships", value: 20.0, color: "#00A4B6" },
    { topic: "Restaurants, Food & Grocery", value: 15.0, color: "#00A4B6" },
    {
      topic: "Clothes, Shoes, Handbags & Accessories",
      value: 12.0,
      color: "#00A4B6",
    },
    {
      topic: "Clothes, Shoes, Handbags & Accessories",
      value: 10.0,
      color: "#00A4B6",
    },
    { topic: "Others", value: 43.0, color: "#00A4B6" },
  ];

  return (
    <div className="bg-white  rounded-[13px] pt-[42px] md:pb-[75px] pb-[28px] md:px-[24px]">
      <div className="md:px-[min(1.5vw,50px)] px-[24px]">
        <div className="flex flex-col md:flex-row gap-[28px] md:gap-2 border-b border-[#E4E4E4] pb-[50px]">
          <div className="md:px-[0]  flex-1">
            <h3 className="font-medium text-[18px] leading-[27px] text-[#4F4F4F] md:mb-[13px] mb-[10px]">
              Followers Growth
            </h3>
            <h4 className="font-light text-[15px] leading-[18px] text-[#383838] md:mb-[60px] mb-[40px]">
              Monthly trend of total followers
            </h4>
            <div className="flex flex-col justify-between gap-[26px] xl:flex-row items-center xl:justify-start xl:gap-[min(5vw,64px)]">
              <div className="w-full md:max-w-[534.13px]">
                <LineChart
                  chartData={followersGrowth}
                  showYTicks={false}
                  showXTicks={false}
                  showXAxis={false}
                  showYAxis={false}
                  curveType="linear"
                  size={3}
                  heightPx={246.68}
                  fontSize="12px"
                />
              </div>
            </div>
          </div>

          <hr className=" border-t border-[#E4E4E4] md:hidden  " />
          <div className=" md:px-[0]  flex-1 flex flex-col justify-between">
            <h3 className="font-medium text-[18px] leading-[27px] text-[#4F4F4F] md:mb-[13px] mb-[10px]">
              Likes Growth
            </h3>
            <h4 className="font-light text-[15px] leading-[18px] text-[#383838] md:mb-[60px] mb-[40px]">
              Monthly trend of average likes per post
            </h4>
            <div className="flex flex-col justify-between gap-[26px] xl:flex-row items-center xl:justify-start xl:gap-[min(5vw,64px)]">
              <div className="w-full md:max-w-[534.13px]">
                <LineChart
                  chartData={likesGrowth}
                  showYTicks={false}
                  showXTicks={false}
                  showXAxis={false}
                  showYAxis={false}
                  curveType="linear"
                  size={3}
                  heightPx={246.68}
                  fontSize="12px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-[min(1.5vw,50px)] px-[24px]">
        <div className="flex flex-col md:flex-row gap-[28px] md:gap-2 border-b border-[#E4E4E4] pb-[50px]">
          <div className=" md:px-[0]  flex-1">
            <h3 className="font-medium text-[18px] leading-[27px] text-[#4F4F4F] md:mb-[12px] mb-[10px]">
              Creator interests
            </h3>
            <h4 className="font-light text-[15px] leading-[18px] text-[#383838] md:mb-[36px] mb-[26px]">
              Brands followed by the creator
            </h4>
            <div>
              {creatorInterests.map((item, index) => (
                <div
                  key={index}
                  className="mb-5 md:mr-[32px] md:max-w-[525.21px]"
                >
                  <div className="flex items-center justify-between gap-3 text-[15px] text-[#383838] leading-[23px] mb-2">
                    <span className="truncate">{item.brand}</span>
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
          <div className=" md:px-[0] flex-1">
            <h3 className="font-medium text-[18px] leading-[27px] text-[#4F4F4F] md:mb-[12px] mb-[10px]">
              Creator brand affinity
            </h3>
            <h4 className="font-light text-[15px] leading-[18px] text-[#383838] md:mb-[36px] mb-[26px]">
              Interests and topics that the creator posts about
            </h4>
            <div>
              {creatorBrandAffinity.map((item, index) => (
                <div
                  key={index}
                  className="mb-5 md:mr-[32px] md:max-w-[525.21px]"
                >
                  <div className="flex items-center justify-between gap-3 text-[15px] text-[#383838] leading-[23px] mb-2">
                    <span className="truncate">{item.topic}</span>
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
        <div className="">
          <div className="flex flex-col md:flex-row gap-[28px] md:gap-2 border-b border-[#E4E4E4]  ">
            <div className="md:px-[0]  flex-1">
              <h3 className="font-medium text-[18px] leading-[27px] text-[#4F4F4F] md:mb-[13px] mb-[10px] mt-[26px] md:mt-[56px]">
                Frequently tagged accounts
              </h3>
              <h4 className="font-light text-[15px] leading-[18px] h-11 text-[#383838] md:mb-[11px] mb-[6px]">
                Accounts frequently tagged by the creator in their content
              </h4>
              <div>
                <ul className="flex items-center gap-1 md:mb-[62px] mb-[30px] flex-wrap">
                  <li className="truncate md:text-[15px] text-[11px] md:leading-[23px] leading-[17px] text-white bg-[#00A4B6] rounded-full px-3 py-[6px] md:px-3 md:py-[6px]">
                    @BetterMeal
                  </li>
                  <li className="truncate md:text-[15px] text-[11px] md:leading-[23px] leading-[17px] text-white bg-[#00A4B6] rounded-full px-3 py-[6px] md:px-3 md:py-[6px]">
                    @sushination
                  </li>
                  <li className="truncate md:text-[15px] text-[11px] md:leading-[23px] leading-[17px] text-white bg-[#00A4B6] rounded-full px-3 py-[6px] md:px-3 md:py-[6px]">
                    @spa
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:px-[0]  flex-1">
              <h3 className="font-medium text-[18px] leading-[27px] text-[#4F4F4F] md:mb-[13px] mb-[10px] mt-[26px] md:mt-[56px]">
                Frequently used hashtags
              </h3>
              <h4 className="font-light text-[15px] leading-[18px] h-11 text-[#383838] md:mb-[11px] mb-[6px]">
                Hashtags frequently used by the creator
              </h4>
              <div>
                <ul className="flex items-center gap-1 md:mb-[62px] mb-[30px] flex-wrap">
                  <li className="truncate md:text-[15px] text-[11px] md:leading-[23px] leading-[17px] text-white bg-[#00A4B6] rounded-full px-3 py-[6px] md:px-3 md:py-[6px]">
                    Lifestyle
                  </li>
                  <li className="truncate md:text-[15px] text-[11px] md:leading-[23px] leading-[17px] text-white bg-[#00A4B6] rounded-full px-3 py-[6px] md:px-3 md:py-[6px]">
                    Travel
                  </li>
                  <li className="truncate md:text-[15px] text-[11px] md:leading-[23px] leading-[17px] text-white bg-[#00A4B6] rounded-full px-3 py-[6px] md:px-3 md:py-[6px]">
                    Food & Beverages
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[28px] md:gap-2 md:pb-[90px] pb-[59px]">
          <div className=" md:px-[0]  flex-1">
            <h3 className="font-medium text-[18px] md:mt-[74px] mt-[37px] leading-[27px] text-[#4F4F4F] md:mb-[12px] mb-[10px]">
              Audience interests
            </h3>
            <h4 className="font-light text-[15px] leading-[18px] text-[#383838] md:mb-[36px] mb-[26px]">
              Brands followed by the Audience
            </h4>
            <div>
              {audienceInterests.map((item, index) => (
                <div
                  key={index}
                  className="mb-5 md:mr-[32px] md:max-w-[525.21px]"
                >
                  <div className="flex items-center justify-between gap-3 text-[15px] text-[#383838] leading-[23px] mb-2">
                    <span className="truncate">{item.brand}</span>
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
          <div className=" md:px-[0] flex-1">
            <h3 className="font-medium text-[18px] md:mt-[74px] mt-[37px] leading-[27px] text-[#4F4F4F] md:mb-[12px] mb-[10px]">
              Audience brand affinity
            </h3>
            <h4 className="font-light text-[15px] leading-[18px] text-[#383838] md:mb-[36px] mb-[26px]">
              Interests and topics that the Audience post about
            </h4>
            <div>
              {audienceBrandAffinity.map((item, index) => (
                <div
                  key={index}
                  className="mb-5 md:mr-[32px] md:max-w-[525.21px]"
                >
                  <div className="flex items-center justify-between gap-3 text-[15px] text-[#383838] leading-[23px] mb-2">
                    <span className="truncate">{item.topic}</span>
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
      </div>
    </div>
  );
}
