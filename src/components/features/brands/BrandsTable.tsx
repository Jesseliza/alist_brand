"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import Checkbox from "@/components/general/CheckBox";
import { Brand } from "@/types/entities";
import { generateColorFromString } from "@/utils/colorGenerator";
import { getInitials } from "@/utils/text";
import Link from "next/link";
import Image from "next/image";
import { RootState } from "@/store/store";
import BrandFilesModal from "./BrandFilesModal";

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
  const { industries } = useSelector((state: RootState) => state.common);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBrandId, setSelectedBrandId] = useState<string | null>(null);

  const industryMap = new Map(industries.map((i) => [i.value, i.label]));

  const handleUploadClick = (brandId: string) => {
    setSelectedBrandId(brandId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBrandId(null);
  };

  return (
    <>
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
                Owner
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
                className="px-6 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
              >
                Industry
              </th>
              <th
                scope="col"
                className="px-6 pt-2.5 pb-4 text-center text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
              >
                Offers
              </th>
              <th
                scope="col"
                className="px-6 pt-2.5 pb-4 text-center text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
              >
                Files
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {brands.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-10 text-center text-gray-500">
                  No records found.
                </td>
              </tr>
            ) : (
              brands.map((brand) => (
                <tr key={brand.brandId} className="odd:bg-[#F8F8F8]">
                  <td className="px-4.75 py-2.5 whitespace-nowrap">
                    <div className="flex items-center">
                      <Checkbox
                        checked={checkedRows.has(brand.brandId)}
                        onChange={() => onCheckboxChange(brand.brandId)}
                      />
                      <Link href={`/businesses/brands/${brand.brandId}`}>
                        <div className="ml-3 flex items-center cursor-pointer">
                          {brand.logo ? (
                            <Image
                              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/assets/uploads/venues/${brand.logo}`}
                              alt={brand.name}
                              width={33}
                              height={33}
                              className="rounded-full"
                            />
                          ) : (
                            <div
                              className="h-[33px] w-[33px] rounded-full flex items-center justify-center"
                              style={{
                                backgroundColor: generateColorFromString(
                                  brand.name
                                ),
                              }}
                            >
                              <span className="text-white text-sm font-medium">
                                {getInitials(brand.name)}
                              </span>
                            </div>
                          )}
                          <span
                            className={`ml-4 text-[#4F4F4F] ${
                              checkedRows.has(brand.brandId)
                                ? "font-semibold"
                                : ""
                            }`}
                          >
                            {brand.name}
                          </span>
                        </div>
                      </Link>
                    </div>
                  </td>
                  <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                    {brand.owner}
                  </td>
                  <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                    {brand.phoneNumber}
                  </td>
                  <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                    {brand.emailAddress}
                  </td>
                  <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                    {industryMap.get(brand.industry ?? "") || "N/A"}
                  </td>
                  <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F] text-center">
                    {brand.food_offers_count}
                  </td>
                  <td className="px-4 py-[8.5px] whitespace-nowrap text-center text-[#4F4F4F]">
                    <button
                      onClick={() => handleUploadClick(brand.brandId)}
                      className="bg-[#636363] text-white flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full text-[13px]"
                    >
                      <Image
                        alt="upload"
                        loading="lazy"
                        width={13}
                        height={17}
                        decoding="async"
                        data-nimg="1"
                        src="/icons/general/upload-1.svg"
                        style={{ color: "transparent" }}
                      />
                      <span className="ml-1">Upload</span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <BrandFilesModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        brandId={selectedBrandId}
      />
    </>
  );
}