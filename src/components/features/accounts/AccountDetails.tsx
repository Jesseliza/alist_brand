"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Account, AccountType } from "@/types/entities";

interface AccountDetailsProps {
  account: Partial<Account> | null;
  onSave: (account: Partial<Account>) => void;
}

export default function AccountDetails({ account, onSave }: AccountDetailsProps) {
  const [formData, setFormData] = useState<Partial<Account>>(
    account || {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      pin: "",
      accountType: AccountType.INDIVIDUAL,
    }
  );
  const router = useRouter();

  useEffect(() => {
    if (account) {
      setFormData(account);
    }
  }, [account]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.emailAddress) {
      alert("First name and email are required.");
      return;
    }
    onSave(formData);
  };

  const InputField = ({
    label,
    value,
    name,
    type = "text",
  }: {
    label: string;
    value: string;
    name: string;
    type?: string;
  }) => (
    <div className="mb-5 md:mb-7">
      <label htmlFor={name} className="block text-[#4F4F4F] mb-2.5">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className="w-full bg-[#F8F8F8] md:bg-[#F3F3F3] border md:border-0 border-[#E4E4E4] rounded-[11px] px-4 py-3 text-[#6E6E6E] placeholder:text-[#6E6E6E] outline-none"
        />
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="text-[15px] pt-10 md:pt-11">
      <div className="max-w-[559px] mx-auto px-[15px]">
        <div className="bg-white rounded-[13px] md:px-10 md:pt-8 md:pb-3">
          <div className="grid grid-cols-2 gap-5 mb-1">
            <InputField
              label="First name"
              value={formData.firstName || ""}
              name="firstName"
            />
            <InputField
              label="Last name"
              value={formData.lastName || ""}
              name="lastName"
            />
          </div>
          <InputField
            label="Email"
            value={formData.emailAddress || ""}
            name="emailAddress"
            type="email"
          />
          <InputField
            label="Phone"
            value={formData.phoneNumber || ""}
            name="phoneNumber"
            type="tel"
          />
          {/* <InputField
            label="Affiliation"
            value={formData.affiliation || ""}
            name="affiliation"
          /> */}
          <InputField label="PIN" value={formData.pin || ""} name="pin" />
          <div className="mb-5 md:mb-7">
            <label
              htmlFor="accountType"
              className="block text-[#4F4F4F] mb-2.5"
            >
              Account Type
            </label>
            <select
              id="accountType"
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              className="w-full bg-[#F8F8F8] md:bg-[#F3F3F3] border md:border-0 border-[#E4E4E4] rounded-[11px] px-4 py-3 text-[#6E6E6E] outline-none"
            >
              <option value={AccountType.INDIVIDUAL}>Individual</option>
              <option value={AccountType.AGENCY}>Agency</option>
              <option value={AccountType.ENTERPRISE}>Enterprise</option>
            </select>
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save Account
            </button>
          </div>
        </div>
        {account?.signUpDate && (
          <p className="text-sm text-[#4F4F4F] mt-4">
            Registration date:{" "}
            {new Date(account.signUpDate).toLocaleDateString()}
          </p>
        )}
      </div>
    </form>
  );
}
