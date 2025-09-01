"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AccountsData } from "@/data/AccountsData";
import { Account } from "@/types/entities";

export default function AccountDetails({
  accountId = "0",
}: {
  accountId?: string;
}) {
  const [account, setAccount] = useState<Account | null>(null);

  // Fetch account data based on accountId
  useEffect(() => {
    const foundAccount = AccountsData.find(
      (acc) => acc.accountId === accountId
    );
    setAccount(foundAccount || null);
  }, [accountId]);

  if (!account) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p className="text-gray-500">Account not found.</p>
      </div>
    );
  }
  const InputField = ({
    label,
    value,
    showIcon = false,
    name,
  }: {
    label: string;
    value: string;
    showIcon?: boolean;
    name: string;
  }) => (
    <div className="mb-5 md:mb-7">
      <label htmlFor={name} className="block text-[#4F4F4F] mb-2.5">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          readOnly
          className="w-full bg-[#F8F8F8] md:bg-[#F3F3F3] border md:border-0 border-[#E4E4E4] rounded-[11px] px-4 py-3 text-[#6E6E6E] placeholder:text-[#6E6E6E] outline-none"
        />
        {showIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Image
              src="/icons/edit-icon.svg"
              alt="copy"
              width={12.14}
              height={12.13}
              className="opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="text-[15px] pt-10 md:pt-11">
      <div className="max-w-[559px] mx-auto px-[15px]">
        <div className="bg-white rounded-[13px] md:px-10 md:pt-8 md:pb-3">
          <div className="grid grid-cols-2 gap-5 mb-1">
            <InputField
              label="First name"
              value={account.firstName}
              name="firstName"
            />
            <InputField
              label="Last name"
              value={account.lastName}
              name="lastName"
            />
          </div>
          <InputField
            label="Email"
            value={account.emailAddress}
            showIcon
            name="email"
          />
          <InputField
            label="Phone"
            value={account.phoneNumber}
            showIcon
            name="phone"
          />
          <InputField
            label="Affiliation"
            value={account.affiliation}
            name="affiliation"
          />
        </div>
        <p className="text-sm text-[#4F4F4F] mt-4">
          Registration date: {account.signUpDate.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
