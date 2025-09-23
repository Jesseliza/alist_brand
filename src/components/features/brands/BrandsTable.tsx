"use client";

import Checkbox from "@/components/general/CheckBox";
import Image from "next/image";
import Link from "next/link";
import { Brand } from "@/types/entities";
import { useState } from "react";

export type { Brand };

interface BrandsTableProps {
  brands: Brand[];
  onDownloadClick: (brandId: string, fileType: 'tradeLicense' | 'vatCertificate') => void;
}

export default function BrandsTable({ brands, onDownloadClick }: BrandsTableProps) {
  const [checkedRows, setCheckedRows] = useState<Set<string>>(new Set());

  const handleCheckboxChange = (brandId: string) => {
    const newCheckedRows = new Set(checkedRows);
    if (newCheckedRows.has(brandId)) {
      newCheckedRows.delete(brandId);
    } else {
      newCheckedRows.add(brandId);
    }
    setCheckedRows(newCheckedRows);
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
              Brand name
            </th>
            <th
              scope="col"
              className="px-4 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Owner
            </th>
            <th
              scope="col"
              className="px-4 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Phone
            </th>
            <th
              scope="col"
              className="px-4 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-4 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Industry
            </th>
            <th
              scope="col"
              className="px-4 pt-2.5 pb-4 text-center text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Offers
            </th>
            <th
              scope="col"
              className="px-4 pt-2.5 pb-4 text-center text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Profile completion
            </th>
            <th
              scope="col"
              className="px-4 pt-2.5 pb-4 text-center text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Files
            </th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {brands.map((brand) => (
            <tr key={brand.brandId} className="odd:bg-[#F8F8F8]">
              <td className="px-4.75 py-[8.5px] whitespace-nowrap">
                <div className="flex items-center">
                  <Checkbox
                    checked={checkedRows.has(brand.brandId)}
                    onChange={() => handleCheckboxChange(brand.brandId)}
                  />
                  <Link
                    href={`/businesses/brands/${brand.brandId}`}
                  >
                    <div className="flex items-center ml-3 cursor-pointer">
                      <div className="h-[33px] w-[33px] rounded-full overflow-hidden relative flex-shrink-0">
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span
                        className={`ml-3 text-[#4F4F4F] ${
                          checkedRows.has(brand.brandId)
                            ? "font-semibold"
                            : "font-medium"
                        }`}
                      >
                        {brand.name}
                      </span>
                    </div>
                  </Link>
                </div>
              </td>
              <td className="px-4 py-[8.5px] whitespace-nowrap text-[#4F4F4F]">
                {`${brand.associateFirstName} ${brand.associateLastName}`}
              </td>
              <td className="px-4 py-[8.5px] whitespace-nowrap text-[#4F4F4F]">
                {brand.phoneNumber}
              </td>
              <td className="px-4 py-[8.5px] whitespace-nowrap text-[#4F4F4F] truncate text-ellipsis max-w-[200px]">
                {brand.emailAddress}
              </td>
              <td className="px-4 py-[8.5px] whitespace-nowrap text-[#4F4F4F] truncate text-ellipsis max-w-[170px]">
                {brand.industry}
              </td>
              <td className="px-4 py-[8.5px] whitespace-nowrap text-center text-[#4F4F4F]">
                {brand.offersCount}
              </td>
              <td className="px-4 py-[8.5px] whitespace-nowrap text-center text-[#4F4F4F]">
                <div className="flex items-center justify-center gap-2.5">
                  <p className="w-[38px] ">{brand.profileCompletion}%</p>
                  <div className="bg-[#D6D6D6] rounded-full h-4 flex-1 relative overflow-hidden">
                    <div
                      className="bg-[#00A4B6] h-full rounded-full transition-all duration-300"
                      style={{ width: `${brand.profileCompletion}%` }}
                    ></div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-[8.5px] whitespace-nowrap text-center text-[#4F4F4F]">
                <div className="flex items-center justify-center space-x-2">
                  {brand.tradeLicenseCopy && (
                    <button
                      onClick={() => onDownloadClick(brand.brandId, 'tradeLicense')}
                      className="bg-[#636363] text-white flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full text-[13px]"
                    >
                      <Image
                        src="/icons/download.svg"
                        alt="download"
                        width={13.15}
                        height={16.99}
                      />
                      <span className="ml-1">License</span>
                    </button>
                  )}
                  {brand.vatCertificate && (
                    <button
                      onClick={() => onDownloadClick(brand.brandId, 'vatCertificate')}
                      className="bg-[#636363] text-white flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full text-[13px]"
                    >
                      <Image
                        src="/icons/download.svg"
                        alt="download"
                        width={13.15}
                        height={16.99}
                      />
                      <span className="ml-1">VAT</span>
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
