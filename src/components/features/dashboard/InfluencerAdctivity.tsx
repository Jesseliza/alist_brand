import Image from "next/image";
import { useSelector } from "react-redux";
import {
  selectDashboardData,
  selectDashboardLoading,
} from "@/store/dashboard/dashboardSlice";
import { getInitials } from "@/utils/text";
// import Loader from '@/components/general/Loader';

export default function InfluencerActivity() {
  const dashboardData = useSelector(selectDashboardData);
  const loading = useSelector(selectDashboardLoading);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-24">
        <Image src="/icons/loader.gif" alt="Loading..." width={50} height={50} />
      </div>
    );
  }

  const influencers = dashboardData?.influencers || [];

  return (
    <div className="bg-white ">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#F8F8F8] rounded-t-[11px]">
            <tr className="rounded-l-[11px] text-left text-[#4F4F4F] px-4 text-[15px] leading-[23px]">
              <th className=" py-[7px] pl-4 font-medium  rounded-tl-[11px] ">
                Influencer
              </th>
              <th className="py-[7px] px-1 font-medium text-left">Campaigns</th>
              {/* <th className="py-[7px] px-1 font-medium  rounded-tr-[11px]">
                Engagement
              </th> */}
            </tr>
          </thead>
          <tbody>
            {influencers.map((influencer: any) => (
              <tr
                key={influencer.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-2 pl-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      {influencer.profile_picture ? (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${influencer.profile_picture}`}
                          alt={influencer.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white text-lg font-bold">
                          {getInitials(influencer.name)}
                        </div>
                      )}
                    </div>
                    <span className="font-medium text-gray-900">
                      {influencer.name}
                    </span>
                  </div>
                </td>
                <td className="py-2 px-1 text-left text-gray-700">
                  {influencer.food_offers_users_count}
                </td>
                {/* <td className="py-2 px-1 text-left text-gray-700">
                  {influencer.engagement}%
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
