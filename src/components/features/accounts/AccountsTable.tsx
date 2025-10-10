"use client";

import Checkbox from "@/components/general/CheckBox";
import { Account } from "@/types/entities";
import { getDisplayName } from "@/utils/accountUtils";
import Link from "next/link";
import { formatDate } from "@/utils/date";

interface AccountsTableProps {
  accounts: Account[];
  checkedRows: Set<string>;
  onCheckboxChange: (accountId: string) => void;
}

export default function AccountsTable({
  accounts,
  checkedRows,
  onCheckboxChange,
}: AccountsTableProps) {

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
              Account
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
              Account type
            </th>

            <th
              scope="col"
              className="px-6 pt-2.5 pb-4 text-left text-lg font-medium text-[#4F4F4F] whitespace-nowrap"
            >
              Status
            </th>

            <th
              scope="col"
              className="px-6 pt-2.5 pb-4 text-center text-lg font-medium text-[#4F4F4F] whitespace-nowrap "
            >
              Brands
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
          {accounts.length === 0 ? (
            <tr>
              <td colSpan={8} className="py-10 text-center text-gray-500">
                No records found.
              </td>
            </tr>
          ) : (
            accounts.map((account) => (
              <tr key={account.accountId} className="odd:bg-[#F8F8F8]">
              <td className="px-4.75 py-2.5 whitespace-nowrap">
                <div className="flex items-center">
                  <Checkbox
                    checked={checkedRows.has(account.accountId)}
                    onChange={() => onCheckboxChange(account.accountId)}
                  />
                  <Link href={`/businesses/accounts/${account.accountId}`}>
                    <div className="ml-3 flex items-center cursor-pointer">
                      <div
                        className="h-[33px] w-[33px] rounded-full flex items-center justify-center"
                        style={{ backgroundColor: account.avatarBackground }}
                      >
                        <span className="text-white text-sm font-medium">
                          {account.avatarInitials}
                        </span>
                      </div>
                      <span
                        className={`ml-4 text-[#4F4F4F] ${
                          checkedRows.has(account.accountId)
                            ? "font-semibold"
                            : ""
                        }`}
                      >
                        {getDisplayName(account)}
                      </span>
                    </div>
                  </Link>
                </div>
              </td>

              {/* PHONE */}
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                {account.country_code} {account.phoneNumber}
              </td>

              {/* EMAIL */}
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                {account.emailAddress}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                {account.accountType}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                <span
                  className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    account.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {account.status}
                </span>
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F] text-center">
                {account.brandsCount}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F] text-center">
                {account.food_offers_count}
              </td>
              <td className="px-6 py-2.5 whitespace-nowrap text-[15px] text-[#4F4F4F]">
                {account.signUpDate ? formatDate(account.signUpDate) : 'N/A'}
              </td>
            </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}