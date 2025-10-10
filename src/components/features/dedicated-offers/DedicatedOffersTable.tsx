"use client";

import Image from "next/image";
import { DedicatedOffer } from "@/types/entities/dedicatedOffer";
import Link from "next/link";
import CheckBox from "@/components/general/CheckBox";
import { getInitials } from "@/utils/getInitials";
import { formatDate } from "@/utils/date";

interface DedicatedOffersTableProps {
  offers: DedicatedOffer[];
  checkedRows: Set<string>;
  onCheckboxChange: (offerId: string) => void;
}

export default function DedicatedOffersTable({
  offers,
  checkedRows,
  onCheckboxChange,
}: DedicatedOffersTableProps) {
  const getImageUrl = (imageName: string | null | undefined) => {
    if (!imageName) return null;
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}/assets/uploads/foodoffers/thumbnail/${imageName}`;
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
              <CheckBox checked={isAllSelected} onChange={onSelectAll} />
            </th>
            <th
              scope="col"
              className="px-2 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Offer Name
            </th>
            <th
              scope="col"
              className="px-6 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Vendor
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
              Offer Date
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
          {offers.map((offer) => (
            <tr key={offer.id} className="odd:bg-[#F8F8F8]">
              <td className="pl-3 pr-2 py-2.5 whitespace-nowrap">
                <CheckBox
                  checked={checkedRows.has(offer.id.toString())}
                  onChange={() => onCheckboxChange(offer.id.toString())}
                />
              </td>
              <td className="px-2 py-2.5 whitespace-nowrap">
                <div className="flex items-center">
                  <Link
                    href={`/businesses/dedicated-offers/${offer.id}`}
                    className="flex items-center cursor-pointer"
                  >
                    <div className="h-[33px] w-[70px] rounded-[6px] overflow-hidden relative flex-shrink-0 flex items-center justify-center bg-gray-200">
                      {offer.banner_image ? (
                        <Image
                          src={getImageUrl(offer.banner_image) || "/images/no_image.png"}
                          alt={offer.offer_title}
                          layout="fill"
                          className="object-cover"
                        />
                      ) : (
                        <span className="text-lg font-bold text-gray-500">
                          {getInitials(offer.offer_title)}
                        </span>
                      )}
                    </div>
                    <span className={`ml-3 text-[#4F4F4F]`}>
                      {offer.offer_title}
                    </span>
                  </Link>
                </div>
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                {offer.venue?.venue_title ?? "N/A"}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F] text-center">
                {offer.venue?.category?.category ?? "N/A"}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[13px] text-center">
                {formatDate(offer.offer_date)}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[13px] text-center">
                <Link
                  href={`/businesses/dedicated-offers/${offer.id}`}
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