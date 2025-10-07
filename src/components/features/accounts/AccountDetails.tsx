"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
import { Account, AccountType, Brand } from "@/types/entities";
import BrandSearchCombobox from "./BrandSearchCombobox";
import CountryCodeDropdown from "@/components/general/CountryCodeDropdown";

import Image from "next/image";

// Define InputField as a standalone component outside of AccountDetails
const InputField = ({
  label,
  value,
  name,
  type = "text",
  icon,
  onChange,
  error,
}: {
  label: string;
  value: string;
  name: string;
  type?: string;
  icon?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
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
        onChange={onChange}
        className="w-full bg-[#F8F8F8] md:bg-[#F3F3F3] border md:border-0 border-[#E4E4E4] rounded-[11px] px-4 py-3 text-[#6E6E6E] placeholder:text-[#6E6E6E] outline-none pr-10"
      />
      {icon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Image src={icon} alt="icon" width={12} height={12} />
        </div>
      )}
    </div>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

interface AccountDetailsProps {
  account: Partial<Account> | null;
  onSave: (account: Partial<Account>) => void;
  isCreateMode: boolean;
}

export default function AccountDetails({ account, onSave, isCreateMode }: AccountDetailsProps) {
  const [formData, setFormData] = useState<Partial<Account>>(
    account || {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      accountType: AccountType.INDIVIDUAL,
      brands: [],
    }
  );
  const [countryCode, setCountryCode] = useState("+971");
  const [errors, setErrors] = useState<Partial<Record<keyof Account, string>>>({});
  const router = useRouter();

  useEffect(() => {
    if (account) {
      if (account.country_code) {
        setCountryCode(account.country_code);
      }
      setFormData({ ...account });
    }
  }, [account]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phoneNumber") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleBrandChange = (selectedBrands: Brand[]) => {
    setFormData((prev) => ({ ...prev, brands: selectedBrands }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof Account, string>> = {};

    const requiredFields: (keyof Account)[] = [
      "firstName",
      "lastName",
      "emailAddress",
      "phoneNumber",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        const label = field.replace(/([A-Z])/g, " $1");
        const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
        newErrors[field] = `${capitalizedLabel} is required.`;
      }
    });

    if (formData.emailAddress && !/^\S+@\S+\.\S+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Invalid email format.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSave({ ...formData, country_code: countryCode });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-[15px] pt-10 md:pt-11">
      <div className="max-w-[559px] mx-auto">
        <div className="bg-white rounded-[13px] px-4 md:px-10 pt-8 pb-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-1">
            <InputField
              label="First name"
              value={formData.firstName || ""}
              name="firstName"
              onChange={handleChange}
              error={errors.firstName}
            />
            <InputField
              label="Last name"
              value={formData.lastName || ""}
              name="lastName"
              onChange={handleChange}
              error={errors.lastName}
            />
          </div>
          <InputField
            label="Email"
            value={formData.emailAddress || ""}
            name="emailAddress"
            type="email"
            icon="/icons/edit-icon.svg"
            onChange={handleChange}
            error={errors.emailAddress}
          />
          <div className="mb-5 md:mb-7">
            <label htmlFor="phoneNumber" className="block text-[#4F4F4F] mb-2.5">
              Phone
            </label>
            <div className="flex gap-2">
              <CountryCodeDropdown selectedCode={countryCode} onCodeChange={setCountryCode} />
              <div className="relative w-full">
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber || ""}
                  onChange={handleChange}
                  className="w-full bg-[#F8F8F8] md:bg-[#F3F3F3] border md:border-0 border-[#E4E4E4] rounded-[11px] px-4 py-3 text-[#6E6E6E] placeholder:text-[#6E6E6E] outline-none pr-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Image src="/icons/edit-icon.svg" alt="icon" width={12} height={12} />
                </div>
              </div>
              <button
                type="button"
                className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 whitespace-nowrap"
              >
                Send OTP
              </button>
            </div>
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
          </div>
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
          <BrandSearchCombobox
            initialSelectedBrands={formData.brands || []}
            onChange={handleBrandChange}
          />
          <div className="flex justify-end gap-4 mt-6 px-4 pb-6">
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
              {isCreateMode ? "Save" : "Save Changes"}
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
