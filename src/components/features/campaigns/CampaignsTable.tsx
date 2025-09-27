"use client";

import Checkbox from "@/components/general/CheckBox";
import Image from "next/image";
import { Campaign } from "@/types/entities";
import { useState } from "react";
import Link from "next/link";

interface CampaignsTableProps {
  campaigns: Campaign[];
  getAccountIdFromBrandId: (brandId: string) => string;
}

export default function CampaignsTable({
  campaigns,
  getAccountIdFromBrandId,
}: CampaignsTableProps) {
  const [checkedRows, setCheckedRows] = useState<Set<string>>(new Set());

  const handleCheckboxChange = (campaignId: string) => {
    const newCheckedRows = new Set(checkedRows);
    if (newCheckedRows.has(campaignId)) {
      newCheckedRows.delete(campaignId);
    } else {
      newCheckedRows.add(campaignId);
    }
    setCheckedRows(newCheckedRows);
  };

  // Helper function to get display name for campaign type
  const getCampaignTypeDisplay = (campaignType: string) => {
    switch (campaignType) {
      case "WalkIn":
        return "Walk in";
      case "Delivery":
        return "Delivery";
      case "Online":
        return "Online";
      case "Exclusive":
        return "Exclusive";
      default:
        return campaignType;
    }
  };

  // Helper function to get campaign status (using creatorApprovalType as proxy)
  const getCampaignStatus = (campaign: Campaign) => {
    // For now, using creatorApprovalType as status
    // In a real app, you'd have a separate status field
    return campaign.creatorApprovalType === "Manual" ? "Pending" : "Approved";
  };

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
              Campaign type
            </th>
            <th
              scope="col"
              className="px-6 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Offer type
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
          {campaigns.length === 0 ? (
            <tr>
              <td colSpan={7} className="py-10 text-center text-gray-500">
                No records found.
              </td>
            </tr>
          ) : (
            campaigns.map((campaign) => {
              const accountId = getAccountIdFromBrandId(campaign.brandId);
              return (
                <tr key={campaign.campaignId} className="odd:bg-[#F8F8F8]">
                <td className="px-4.75 py-2.5 whitespace-nowrap">
                  <div className="flex items-center">
                    <Checkbox
                      checked={checkedRows.has(campaign.campaignId)}
                      onChange={() => handleCheckboxChange(campaign.campaignId)}
                    />
                    <Link
                      href={`/businesses/accounts/${accountId}/${campaign.brandId}/${campaign.campaignId}`}
                      className="flex items-center ml-3 cursor-pointer"
                    >
                      <div className="h-[33px] w-[70px] rounded-[6px] overflow-hidden relative flex-shrink-0">
                        <Image
                          src={campaign.thumbnailUrl}
                          alt={campaign.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span
                        className={`ml-3 text-[#4F4F4F] ${
                          checkedRows.has(campaign.campaignId)
                            ? "font-semibold"
                            : ""
                        }`}
                      >
                        {campaign.title}
                      </span>
                    </Link>
                  </div>
                </td>
                <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                  {campaign.title}
                </td>
                <td className="px-6 py-2.5 whitespace-nowrap text-[13px] text-center">
                  <div
                    className={`w-[98px] max-w-[98px] truncate px-3 py-1 rounded-full text-white inline-flex items-center justify-center gap-1.5 ${
                      campaign.campaignType === "WalkIn"
                        ? "bg-[#00A4B6]"
                        : campaign.campaignType === "Delivery"
                        ? "bg-[#FF9900]"
                        : campaign.campaignType === "Online"
                        ? "bg-[#15A1FF]"
                        : campaign.campaignType === "Exclusive"
                        ? "bg-[#B400FF]"
                        : "bg-[#636363]"
                    }`}
                  >
                    {campaign.campaignType === "WalkIn" && (
                      <Image
                        src="/icons/general/walk-in-1.svg"
                        alt="walk in"
                        width={10.88}
                        height={17.88}
                      />
                    )}
                    {campaign.campaignType === "Delivery" && (
                      <Image
                        src="/icons/general/delivery-1.svg"
                        alt="delivery"
                        width={17}
                        height={16.54}
                      />
                    )}
                    {campaign.campaignType === "Online" && (
                      <Image
                        src="/icons/general/online-1.svg"
                        alt="online"
                        width={14.48}
                        height={14.48}
                      />
                    )}
                    {campaign.campaignType === "Exclusive" && (
                      <Image
                        src="/icons/general/exclusive-1.svg"
                        alt="exclusive"
                        width={15.35}
                        height={13.24}
                      />
                    )}
                    <span>{getCampaignTypeDisplay(campaign.campaignType)}</span>
                  </div>
                </td>
                <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                  {campaign.offerType}
                </td>
                <td className="px-6 py-2.5 whitespace-nowrap text-[13px] text-center">
                  <div
                    className={`w-[98px] px-4.25 py-1 rounded-full text-white ${
                      getCampaignStatus(campaign) === "Pending"
                        ? "bg-[#636363]"
                        : "bg-[#00CC86]"
                    }`}
                  >
                    {getCampaignStatus(campaign)}
                  </div>
                </td>
                <td className="px-6 py-2.5 whitespace-nowrap text-[13px] text-center">
                  <button className="w-[98px] px-4.25 py-1 bg-[#00A4B6] text-white rounded-full flex justify-center items-center gap-2">
                    <span>Copy link</span>
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
                    href={`/businesses/accounts/${accountId}/${campaign.brandId}/${campaign.campaignId}`}
                    className="w-[98px] px-4.25 py-1 bg-[#00A4B6] text-white rounded-full flex justify-center items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <span>View</span>
                    <Image
                      src={"/icons/general/view-1.svg"}
                      alt="view"
                      width={14.48}
                      height={14.48}
                    />
                  </Link>
                </td>
              </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
