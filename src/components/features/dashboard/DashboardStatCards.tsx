import Image from "next/image";
import { useSelector } from "react-redux";
import {
  selectDashboardData,
  selectDashboardLoading,
} from "@/store/dashboard/dashboardSlice";

const statCardIcons = {
  campaignsCount: {
    icon: "/icons/dashboard/campaigns.svg",
    iconWidth: 44.43,
    iconHeight: 39.55,
    title: "Total campaigns",
  },
  influencersCount: {
    icon: "/icons/dashboard/influencers.svg",
    iconWidth: 59.23,
    iconHeight: 41.46,
    title: "Influencers",
  },
  brandsCount: {
    icon: "/icons/dashboard/brands.svg",
    iconWidth: 52.89,
    iconHeight: 51.87,
    title: "Brands",
  },
  pendingCount: {
    icon: "/icons/dashboard/approvals.svg",
    iconWidth: 48.84,
    iconHeight: 39.07,
    title: "Pending Approvals",
  },
};

export default function DashboardStatCards() {
  const dashboardData = useSelector(selectDashboardData);
  const loading = useSelector(selectDashboardLoading);

  const statCards =
    !loading && dashboardData
      ? [
          {
            ...statCardIcons.campaignsCount,
            value: dashboardData.campaignsCount,
          },
          {
            ...statCardIcons.influencersCount,
            value: dashboardData.influencersCount,
          },
          { ...statCardIcons.brandsCount, value: dashboardData.brandsCount },
          {
            ...statCardIcons.pendingCount,
            value: dashboardData.pendingCount,
          },
        ]
      : [
          statCardIcons.campaignsCount,
          statCardIcons.influencersCount,
          statCardIcons.brandsCount,
          statCardIcons.pendingCount,
        ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[21px]">
      {statCards.map((card) => (
        <article
          key={card.title}
          className="bg-white rounded-[13px] flex-1 flex items-center gap-[30px] p-4 md:p-6"
        >
          <div className="w-[59.23px] flex items-center justify-center">
            <Image
              src={card.icon}
              alt={card.title}
              width={card.iconWidth}
              height={card.iconHeight}
            />
          </div>
          <div>
            <p className="text-md md:text-[18px] leading-tight md:leading-[27px] font-semibold text-[#4F4F4F]">
              {card.title}
            </p>
            {loading ? (
              <div className="mt-2">
                <Image
                  src="/icons/loader.gif"
                  alt="Loading..."
                  width={35}
                  height={35}
                />
              </div>
            ) : (
              <p className="text-xl md:text-[24px] font-medium text-[#00A4B6] leading-tight md:leading-[35px]">
                {(card as any).value}
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
