import Image from "next/image";

interface Influencer {
  id: string;
  name: string;
  profileImage: string;
  campaigns: number;
  engagement: number;
}

export default function InfluencerActivity() {
  // Dynamic data array for influencers
  const influencers: Influencer[] = [
    {
      id: "1",
      name: "Bianca Williams",
      profileImage: "/images/dashboard/Influencer activity/creator1.png",
      campaigns: 15,
      engagement: 78,
    },
    {
      id: "2",
      name: "Mason Wilson",
      profileImage: "/images/dashboard/Influencer activity/creator2.png",
      campaigns: 10,
      engagement: 82,
    },
    {
      id: "3",
      name: "Bianca Williams",
      profileImage: "/images/dashboard/Influencer activity/creator3.png",
      campaigns: 8,
      engagement: 65,
    },
    {
      id: "4",
      name: "Clara Johnson",
      profileImage: "/images/dashboard/Influencer activity/creator4.png",
      campaigns: 11,
      engagement: 72,
    },
    {
      id: "5",
      name: "Olivia Johnson",
      profileImage: "/images/dashboard/Influencer activity/creator1.png",
      campaigns: 13,
      engagement: 65,
    },
  ];

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
              <th className="py-[7px] px-1 font-medium  rounded-tr-[11px]">
                Engagement
              </th>
            </tr>
          </thead>
          <tbody>
            {influencers.map((influencer) => (
              <tr
                key={influencer.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-2 pl-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={influencer.profileImage}
                        alt={influencer.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-medium text-gray-900">
                      {influencer.name}
                    </span>
                  </div>
                </td>
                <td className="py-2 px-1 text-left text-gray-700">
                  {influencer.campaigns}
                </td>
                <td className="py-2 px-1 text-left text-gray-700">
                  {influencer.engagement}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
