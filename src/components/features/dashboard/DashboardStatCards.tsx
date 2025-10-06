import Image from "next/image";
import { useSelector } from "react-redux";
import {
  selectDashboardData,
  selectDashboardLoading,
} from "@/store/dashboard/dashboardSlice";
import Loader from "@/components/general/Loader";

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-24">
        <Image src="/icons/loader.gif" alt="Loading..." width={50} height={50} />
      </div>
    );
  }

  const statCards = dashboardData
    ? [
        { ...statCardIcons.campaignsCount, value: dashboardData.campaignsCount },
        { ...statCardIcons.influencersCount, value: dashboardData.influencersCount },
        { ...statCardIcons.brandsCount, value: dashboardData.brandsCount },
        { ...statCardIcons.pendingCount, value: dashboardData.pendingCount },
      ]
    : [];

  return (
    <div className="flex gap-[21px] justify-between">
      {statCards.map((card) => (
        <article
          key={card.title}
          className="bg-white rounded-[13px] flex-1 max-w-[350px] flex items-center gap-[30px] px-6 pt-7.25 pb-6.25"
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
            <p className="text-[18px] leading-[27px] font-semibold text-[#4F4F4F]">
              {card.title}
            </p>
            <p className="text-[24px] font-medium text-[#00A4B6] leading-[35px]">
              {card.value}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
