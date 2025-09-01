"use client";

import Checkbox from "@/components/general/CheckBox";
import Image from "next/image";
import Link from "next/link";
import { Creator } from "@/types/entities";
import { useState } from "react";

export default function CreatorsTable({ creators }: { creators: Creator[] }) {
  const [checkedRows, setCheckedRows] = useState<Set<string>>(new Set());

  const handleCheckboxChange = (creatorId: string) => {
    const newCheckedRows = new Set(checkedRows);
    if (newCheckedRows.has(creatorId)) {
      newCheckedRows.delete(creatorId);
    } else {
      newCheckedRows.add(creatorId);
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
              Creator name
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
              Tier
            </th>
            <th
              scope="col"
              className="px-6 pt-2.5 pb-4 text-center text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Followers
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
          {creators.map((creator) => (
            <tr key={creator.creatorId} className="odd:bg-[#F8F8F8]">
              <td className="px-4.75 py-2.5 whitespace-nowrap">
                <div className="flex items-center">
                  <Checkbox
                    checked={checkedRows.has(creator.creatorId)}
                    onChange={() => handleCheckboxChange(creator.creatorId)}
                  />
                  <Link href={`/creators/profiles/${creator.creatorId}`}>
                    <div className="flex items-center ml-3 cursor-pointer">
                      <div className="h-[33px] w-[33px] rounded-full overflow-hidden relative flex-shrink-0">
                        <Image
                          src={creator.avatarUrl}
                          alt={creator.fullName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span
                        className={`ml-3 text-[#4F4F4F] ${
                          checkedRows.has(creator.creatorId)
                            ? "font-semibold"
                            : ""
                        }`}
                      >
                        {creator.fullName}
                      </span>
                    </div>
                  </Link>
                </div>
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                {creator.phone}
              </td>
              <td className="px-6 py-2.5 text-[15px] text-[#4F4F4F]">
                <div className="max-w-[140px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {creator.email}
                </div>
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                {creator.tier}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F] text-center">
                {creator.followerCount.toLocaleString()}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F] text-center">
                {creator.campaignsCount}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F] text-center">
                {creator.signUpDate.toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
