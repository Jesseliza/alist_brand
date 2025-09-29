"use client";

import { useState } from "react";
import { CampaignDisplay } from "@/types/entities/campaign";
import CampaignRow from "./CampaignRow";
import CheckBox from "@/components/general/CheckBox";

interface CampaignsTableProps {
  campaigns: CampaignDisplay[];
  checkedRows: Set<string>;
  onCheckboxChange: (campaignId: string) => void;
}

export default function CampaignsTable({
  campaigns,
  checkedRows,
  onCheckboxChange,
}: CampaignsTableProps) {
  const [copiedLinkId, setCopiedLinkId] = useState<string | null>(null);

  const handleCopyLink = (url: string, campaignId: string) => {
    if (url) {
      navigator.clipboard.writeText(url);
      setCopiedLinkId(campaignId);
      setTimeout(() => setCopiedLinkId(null), 2000);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-[13px]">
        <thead>
          <tr>
            <th
              scope="col"
              className="pl-3 pr-2 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              <CheckBox
                // This would be for a "select all" functionality
                // onChange={handleSelectAll}
                // checked={checkedRows.size > 0 && checkedRows.size === campaigns.length}
              />
            </th>
            <th
              scope="col"
              className="px-2 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
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
              className="px-6 pt-2.5 pb-4 text-center text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Category
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
            <CampaignRow
              key={campaign.id}
              campaign={campaign}
              checked={checkedRows.has(campaign.id.toString())}
              onCheckboxChange={onCheckboxChange}
              onCopyLink={handleCopyLink}
              copiedLinkId={copiedLinkId}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}