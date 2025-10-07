import Image from "next/image";
import { useSelector } from "react-redux";
import {
  selectDashboardData,
  selectDashboardLoading,
} from "@/store/dashboard/dashboardSlice";
import Loader from "@/components/general/Loader";

export default function LiveCampaigns() {
  const dashboardData = useSelector(selectDashboardData);
  const loading = useSelector(selectDashboardLoading);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-24">
        <Image src="/icons/loader.gif" alt="Loading..." width={50} height={50} />
      </div>
    );
  }

  const campaigns = dashboardData?.liveCampaigns || [];

  return (
    <div>
      {campaigns.map((campaign: any, index: number) => (
        <article key={index} className="p-[6px]">
          <div className="flex items-center gap-[22px]">
            <div className="w-[96.31px] h-[96.31px] rounded-[11px] overflow-hidden bg-gray-200 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-500">
                {campaign.venue?.venue_title?.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
              </span>
            </div>
            <div className="flex-1 flex items-end justify-between">
              <div>
                <p className="text-[15px] font-semibold leading-[23px] mb-1 text-[#4F4F4F]">
                  {campaign.offer_title}
                </p>
                <p className="text-[15px] leading-[23px] text-[#4F4F4F] mb-2">
                  {campaign.venue?.venue_title} {campaign.offer_location?"-"+ campaign.offer_location : ""}
                </p>
                <div className="flex items-center gap-[15px]">
                  <div className="flex items-center gap-[7.5px]">
                    <div className="w-[10.85px] flex items-center justify-center">
                      <Image
                        src="/icons/dashboard/price.svg"
                        alt="price"
                        width={14.11}
                        height={10.85}
                      />
                    </div>
                    <p className="text-[#686868] text-[13px] leading-[20px]">
                      AED {campaign.amount}
                    </p>
                  </div>
                  <div className="flex items-center gap-[7.5px]">
                    <div className="w-[10.85px] flex items-center justify-center">
                      <Image
                        src="/icons/dashboard/walk-in.svg"
                        alt="walk in"
                        width={8.42}
                        height={13.85}
                      />
                    </div>
                    <p className="text-[#686868] text-[13px] leading-[20px]">
                      {campaign.venue?.category?.category}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[7.5px]">
                {campaign.food_offer_user
                  ?.filter((u: any) => u.user)
                  .map((user: any, userIndex: number) => {
                    const userInfo = user.user;
                    const hasProfilePic = !!userInfo?.profile_picture;
                    const initials = userInfo?.name
                      ? userInfo.name
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()
                      : "";

                    return (
                      <div
                        key={userIndex}
                        className="w-[20.25px] h-[20.25px] flex items-center justify-center relative group"
                      >
                        {hasProfilePic ? (
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${userInfo.profile_picture}`}
                            alt={userInfo.name}
                            width={20.25}
                            height={20.25}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-[9px] font-semibold text-gray-700">
                            {initials}
                          </div>
                        )}

                        {/* Tooltip */}
                        <div className="absolute bottom-full mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {userInfo?.name ?? "Unknown"}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
