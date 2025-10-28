"use client";

import Image from "next/image";
import { DedicatedOfferDisplay } from "@/types/entities/dedicated-offer";
import Link from "next/link";
import TruncatedText from "@/components/general/TruncatedText";
// import CheckBox from "@/components/general/CheckBox";

interface DedicatedOffersTableProps {
  dedicatedOffers: DedicatedOfferDisplay[];
  checkedRows: Set<string>;
  onCheckboxChange: (dedicatedOfferId: string) => void;
  onSelectAll: () => void;
  isAllSelected: boolean;
}

export default function DedicatedOffersTable({
  dedicatedOffers,
  // checkedRows,
  // onCheckboxChange,
}: DedicatedOffersTableProps) {
console.log(dedicatedOffers);


  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-[13px]">
        <thead>
          <tr>
            {/* <th
              scope="col"
              className="pl-3 pr-2 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            > */}
            {/* <CheckBox checked={isAllSelected} onChange={onSelectAll} /> */}
            {/* </th> */}
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
              Status
            </th>
            <th
              scope="col"
              className="px-6 pt-2.5 pb-4 text-center text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Offer Status
            </th>

          </tr>
        </thead>

        <tbody className="bg-white">
          {dedicatedOffers.map((dedicatedOffer) => (
            <tr key={dedicatedOffer.id} className="odd:bg-[#F8F8F8]">
              {/* <td className="pl-3 pr-2 py-2.5 whitespace-nowrap">
                <CheckBox
                  checked={checkedRows.has(dedicatedOffer.id.toString())}
                  onChange={() => onCheckboxChange(dedicatedOffer.id.toString())}
                />
              </td> */}
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
                      <TruncatedText text={dedicatedOffer.title} maxLength={40} />
                    </span>
                  </Link>
                </div>
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                <TruncatedText text={dedicatedOffer.vendorName} maxLength={40} />
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F] text-center">
                {dedicatedOffer.category ?? "N/A"}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F] text-center">
                {dedicatedOffer.offerDate ?? "N/A"}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[13px] text-center">
                <div
                  className={`w-[98px] px-4.25 py-1 rounded-full text-white ${dedicatedOffer.account_status === "Pending"
                    ? "bg-[#636363]"
                    : dedicatedOffer.account_status === "Rejected"
                      ? "bg-red-500"
                      : "bg-[#00CC86]"
                    }`}
                >
                  {dedicatedOffer.account_status}
                </div>
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[13px] text-center">
                <div
                  className={`w-[98px] px-4.25 py-1 rounded-full text-white ${dedicatedOffer.offer_status === 0
                    ? "bg-[#636363]"
                    : "bg-[#00CC86]"
                    }`}
                >
                  {dedicatedOffer.offer_status === 0 ? "Draft" : "Published"}
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}