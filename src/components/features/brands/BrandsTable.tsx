"use client";

import Checkbox from "@/components/general/CheckBox";
import { Brand } from "@/types/entities";
import Link from "next/link";
import Image from "next/image";

interface BrandsTableProps {
  brands: Brand[];
  checkedRows: Set<string>;
  onCheckboxChange: (brandId: string) => void;
}

export default function BrandsTable({
  brands,
  checkedRows,
  onCheckboxChange,
}: BrandsTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
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
              Brand
            </th>
            <th
              scope="col"
              className="px-6 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Phone
            </th>
            <th
              scope="col"
              className="px-6 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 pt-2.5 pb-4 text-center text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Campaigns
            </th>
            <th
              scope="col"
              className="px-6 pt-2.5 pb-4 text-center text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Sign up date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {brands.map((brand) => (
            <tr key={brand.brandId} className="odd:bg-[#F8F8F8]">
              <td className="px-4.75 py-2.5 whitespace-nowrap">
                <div className="flex items-center">
                  <Checkbox
                    checked={checkedRows.has(brand.brandId)}
                    onChange={() => onCheckboxChange(brand.brandId)}
                  />
                  <Link href={`/businesses/brands/${brand.brandId}`}>
                    <div className="ml-3 flex items-center cursor-pointer">
                      <Image
                        src={brand.logo || '/images/default-brand.png'}
                        alt={brand.name}
                        width={33}
                        height={33}
                        className="rounded-full"
                      />
                      <span
                        className={`ml-4 text-[#4F4F4F] ${
                          checkedRows.has(brand.brandId) ? "font-semibold" : ""
                        }`}
                      >
                        {brand.name}
                      </span>
                    </div>
                  </Link>
                </div>
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                {brand.phoneNumber}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                {brand.emailAddress}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F] text-center">
                {brand.campaignsCount}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                {brand.registrationDate ? formatDate(brand.registrationDate) : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}