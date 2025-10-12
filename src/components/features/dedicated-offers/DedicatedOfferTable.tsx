"use client";

import { useState } from "react";
import Image from "next/image";
import { DedicatedOffer } from "@/types/entities/dedicated-offer";
import Link from "next/link";
import CheckBox from "@/components/general/CheckBox";

interface DedicatedOffersTableProps {
  dedicatedOffers: DedicatedOffer[];
  checkedRows: Set<string>;
  onCheckboxChange: (dedicatedOfferId: string) => void;
  onSelectAll: () => void;
  isAllSelected: boolean;
}

export default function DedicatedOffersTable({
  dedicatedOffers,
  checkedRows,
  onCheckboxChange,
  onSelectAll,
  isAllSelected,
}: DedicatedOffersTableProps) {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopyLink = (url: string, dedicatedOfferId: string) => {
    if (url) {
      navigator.clipboard.writeText(url);
      setCopiedLink(dedicatedOfferId);
      setTimeout(() => setCopiedLink(null), 2000);
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
              {/* <CheckBox checked={isAllSelected} onChange={onSelectAll} /> */}
            </th>
            <th
              scope="col"
              className="px-2 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Dedicated Offer
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
              Offer type
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
          {dedicatedOffers.map((dedicatedOffer) => (
            <tr key={dedicatedOffer.id} className="odd:bg-[#F8F8F8]">
              <td className="pl-3 pr-2 py-2.5 whitespace-nowrap">
                <CheckBox
                  checked={checkedRows.has(dedicatedOffer.id.toString())}
                  onChange={() => onCheckboxChange(dedicatedOffer.id.toString())}
                />
              </td>
              <td className="px-2 py-2.5 whitespace-nowrap">
                <div className="flex items-center">
                  <Link
                    href={`/businesses/dedicated-offers/${dedicatedOffer.id}`}
                    className="flex items-center cursor-pointer"
                  >
                    <div className="h-[33px] w-[70px] rounded-[6px] overflow-hidden relative flex-shrink-0">
                      <Image
                        src={dedicatedOffer.thumbnailUrl || "/images/no_image.png"}
                        alt={dedicatedOffer.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className={`ml-3 text-[#4F4F4F]`}>
                      {dedicatedOffer.title}
                    </span>
                  </Link>
                </div>
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                {dedicatedOffer.vendorName}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F] text-center">
                {dedicatedOffer.is_dedicated === 1 ? "Dedicated" : "Normal"}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F] text-center">
                {dedicatedOffer.offerType ?? "N/A"}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[13px] text-center">
                <div
                  className={`w-[98px] px-4.25 py-1 rounded-full text-white ${
                    dedicatedOffer.status === "Pending"
                      ? "bg-[#636363]"
                      : dedicatedOffer.status === "Rejected"
                      ? "bg-red-500"
                      : "bg-[#00CC86]"
                  }`}
                >
                  {dedicatedOffer.status}
                </div>
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[13px] text-center">
                <button
                  onClick={() =>
                    handleCopyLink(
                      dedicatedOffer.copyLinkUrl || "",
                      dedicatedOffer.id.toString()
                    )
                  }
                  className="w-[110px] px-4.25 py-1 bg-[#00A4B6] text-white rounded-full flex justify-center items-center gap-2"
                >
                  {copiedLink === dedicatedOffer.id.toString() ? (
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
                  href={`/businesses/dedicated-offers/${dedicatedOffer.id}`}
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