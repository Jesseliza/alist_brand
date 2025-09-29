"use client";

import { useState } from "react";
import Image from "next/image";
import { CampaignDisplay } from "@/types/entities/campaign";
import Link from "next/link";
import CheckBox from "@/components/general/CheckBox";

interface CampaignRowProps {
  campaign: CampaignDisplay;
  checked: boolean;
  onCheckboxChange: (campaignId: string) => void;
  onCopyLink: (url: string, campaignId: string) => void;
  copiedLinkId: string | null;
}

export default function CampaignRow({
  campaign,
  checked,
  onCheckboxChange,
  onCopyLink,
  copiedLinkId,
}: CampaignRowProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <tr className="odd:bg-[#F8F8F8]">
      <td className="pl-3 pr-2 py-2.5 whitespace-nowrap">
        <CheckBox
          checked={checked}
          onChange={() => onCheckboxChange(campaign.id.toString())}
        />
      </td>
      <td className="px-2 py-2.5 whitespace-nowrap">
        <div className="flex items-center">
          <Link
            href={`/businesses/campaigns/${campaign.id}`}
            className="flex items-center cursor-pointer"
          >
            <div className="h-[33px] w-[70px] rounded-[6px] overflow-hidden relative flex-shrink-0">
              <Image
                src={imageError || !campaign.banner_image ? '/images/no_image.png' : campaign.banner_image}
                alt={campaign.title}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
              />
            </div>
            <span className={`ml-3 text-[#4F4F4F]`}>{campaign.title}</span>
          </Link>
        </div>
      </td>
      <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
        {campaign.vendorName}
      </td>
      <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F] text-center">
        {campaign.is_dedicated === 1 ? "Dedicated" : "Normal"}
      </td>
      <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F] text-center">
        {campaign.offerType ?? 'N/A'}
      </td>
      <td className="px-6 py-2.5 whitespace-nowrap text-[13px] text-center">
        <div
          className={`w-[98px] px-4.25 py-1 rounded-full text-white ${
            campaign.status === "Pending"
              ? "bg-[#636363]"
              : campaign.status === "Rejected"
              ? "bg-red-500"
              : "bg-[#00CC86]"
          }`}
        >
          {campaign.status}
        </div>
      </td>
      <td className="px-6 py-2.5 whitespace-nowrap text-[13px] text-center">
        <button
          onClick={() => onCopyLink(campaign.copyLinkUrl || '', campaign.id.toString())}
          className="w-[110px] px-4.25 py-1 bg-[#00A4B6] text-white rounded-full flex justify-center items-center gap-2"
        >
          {copiedLinkId === campaign.id.toString() ? (
            <div>Copied!</div>
          ) : (
            <>
              <div>Copy link</div>
              <Image
                src={"/icons/general/copy-white-1.svg"}
                alt="copy"
                width={14.48}
                height={14.48}
              />
            </>
          )}
        </button>
      </td>
      <td className="px-6 py-2.5 whitespace-nowrap text-[13px] text-center">
        <Link
          href={`/businesses/campaigns/${campaign.id}`}
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
  );
}