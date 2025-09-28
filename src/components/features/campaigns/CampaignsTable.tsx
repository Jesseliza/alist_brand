"use client";

import Checkbox from "@/components/general/CheckBox";
import Image from "next/image";
import { Campaign } from "@/types/entities";
import Link from "next/link";

interface CampaignsTableProps {
  campaigns: Campaign[];
  checkedRows: Set<string>;
  onCheckboxChange: (campaignId: string) => void;
}

export default function CampaignsTable({
  campaigns,
  checkedRows,
  onCheckboxChange,
}: CampaignsTableProps) {
  const getCampaignStatus = (campaign: Campaign) => {
    return campaign.offer_status;
  };

  // TODO: Replace with the actual base URL from environment variables
  const IMAGE_BASE_URL = "https://dev-partners.alist.ae/";

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-[13px]">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-4.75 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Campaign
            </th>
            <th
              scope="col"
              className="px-6 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Vendor
            </th>
            <th
              scope="col"
              className="px-6 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Start Date
            </th>
            <th
              scope="col"
              className="px-6 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              End Date
            </th>
            <th
              scope="col"
              className="px-6 pt-2.5 pb-4 text-center text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 pt-2.5 pb-4 text-center text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Offer link
            </th>
            <th
              scope="col"
              className="px-6 pt-2.5 pb-4 text-center text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              View
            </th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {campaigns.map((campaign) => (
            <tr key={campaign.id} className="odd:bg-[#F8F8F8]">
              <td className="px-4.75 py-2.5 whitespace-nowrap">
                <div className="flex items-center">
                  <Checkbox
                    checked={checkedRows.has(campaign.campaign_id)}
                    onChange={() => onCheckboxChange(campaign.campaign_id)}
                  />
                  <Link
                    href={`/businesses/campaigns/${campaign.campaign_id}`}
                    className="flex items-center ml-3 cursor-pointer"
                  >
                    <div className="h-[33px] w-[70px] rounded-[6px] overflow-hidden relative flex-shrink-0">
                      <Image
                        src={`${IMAGE_BASE_URL}storage/uploads/users/influencers/offers/${campaign.banner_image}`}
                        alt={campaign.offer_title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span
                      className={`ml-3 text-[#4F4F4F] ${
                        checkedRows.has(campaign.campaign_id)
                          ? "font-semibold"
                          : ""
                      }`}
                    >
                      {campaign.offer_title}
                    </span>
                  </Link>
                </div>
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                {campaign.venue.venue_title}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                {campaign.start_date}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                {campaign.end_date}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[13px] text-center">
                <div
                  className={`w-[98px] px-4.25 py-1 rounded-full text-white ${
                    getCampaignStatus(campaign) === "Draft"
                      ? "bg-[#636363]"
                      : "bg-[#00CC86]"
                  }`}
                >
                  {getCampaignStatus(campaign)}
                </div>
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[13px] text-center">
                <button className="w-[98px] px-4.25 py-1 bg-[#00A4B6] text-white rounded-full flex justify-center items-center gap-2">
                  <div>Copy link</div>
                  <Image
                    src={"/icons/general/copy-white-1.svg"}
                    alt="copy"
                    width={14.48}
                    height={14.48}
                  />
                </button>
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[13px] text-center">
                <Link
                  href={`/businesses/campaigns/${campaign.campaign_id}`}
                  className="w-[98px] px-4.25 py-1 bg-[#00A4B6] text-white rounded-full flex justify-center items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div>View</div>
                  <Image
                    src={"/icons/general/view-1.svg"}
                    alt="view"
                    width={14.48}
                    height={14.48}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}