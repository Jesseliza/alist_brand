"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccountsData } from "@/data/AccountsData";
import { createAccountStart, searchBrandsRequest } from "@/store/account/accountSlice";
import { Account, Brand } from "@/types/entities";
import { RootState } from "@/store/store";
import { CreateAccountPayload } from "@/types/entities/createAccount";
import SearchableCheckboxDropdown from "@/components/general/dropdowns/SearchableCheckboxDropdown";

// Reusable InputField component
const InputField = ({
  label,
  value,
  name,
  onChange,
  type = "text",
  showIcon = false,
}: {
  label: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  showIcon?: boolean;
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
        className="w-full bg-[#F8F8F8] md:bg-[#F3F3F3] border md:border-0 border-[#E4E4E4] rounded-[11px] px-4 py-3 text-[#6E6E6E] placeholder:text-[#6E6E6E] outline-none"
      />
      {showIcon && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
          <Image
            src="/icons/edit-icon.svg"
            alt="edit"
            width={12.14}
            height={12.13}
            className="opacity-50 hover:opacity-100 transition-opacity"
          />
        </div>
      )}
    </div>
  </div>
);

export default function AccountDetails({
  accountId,
}: {
  accountId?: string;
}) {
  const dispatch = useDispatch();
  const { searchedBrands, searchedBrandsLoading } = useSelector((state: RootState) => state.account);
  const isEditMode = accountId !== "create";

  const [formData, setFormData] = useState<Omit<CreateAccountPayload, 'venues' | 'registration_type' | 'status'> & { venues: string[] }>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    pin: "",
    account_type: "individual",
    venues: [],
  });
  const [brandSearchTerm, setBrandSearchTerm] = useState('');
  const [originalAccount, setOriginalAccount] = useState<Account | null>(null);

  // Handle brand searching
  useEffect(() => {
    // Dispatch search request when search term changes
    dispatch(searchBrandsRequest(brandSearchTerm));
  }, [brandSearchTerm, dispatch]);

  // Fetch account data for edit mode
  useEffect(() => {
    if (isEditMode && accountId) {
      const foundAccount = AccountsData.find(
        (acc) => acc.accountId === accountId
      );
      if (foundAccount) {
        setFormData({
          first_name: foundAccount.firstName,
          last_name: foundAccount.lastName,
          email: foundAccount.emailAddress,
          phone: foundAccount.phoneNumber,
          pin: "", // PIN is not fetched for security
          account_type: "individual", // Assuming default, as it is not in Account data
          venues: [], // Assuming default, as it is not in Account data
        });
        setOriginalAccount(foundAccount);
      }
    }
  }, [accountId, isEditMode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value as any }));
  };

  const handleVenuesChange = (selectedIds: string[]) => {
    setFormData((prev) => ({ ...prev, venues: selectedIds }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload: CreateAccountPayload = {
      ...formData,
      venues: formData.venues.map(Number),
      registration_type: 'accounts',
      status: 'active',
    };

    if (isEditMode) {
      console.log("Updating account:", payload);
      // Dispatch update action here
    } else {
      dispatch(createAccountStart(payload));
    }
  };

  if (isEditMode && !originalAccount) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p className="text-gray-500">Account not found.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-[15px] pt-10 md:pt-11">
      <div className="max-w-[559px] mx-auto px-[15px]">
        <div className="bg-white rounded-[13px] md:px-10 md:pt-8 md:pb-3">
          <div className="grid grid-cols-2 gap-5 mb-1">
            <InputField
              label="First name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
            <InputField
              label="Last name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            showIcon
          />
          <InputField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            showIcon
          />
          <InputField
            label="PIN"
            name="pin"
            type="password"
            value={formData.pin}
            onChange={handleChange}
          />
          <div className="mb-5 md:mb-7">
            <label htmlFor="account_type" className="block text-[#4F4F4F] mb-2.5">
              Affiliation
            </label>
            <select
              id="account_type"
              name="account_type"
              value={formData.account_type}
              onChange={handleChange}
              className="w-full bg-[#F8F8F8] md:bg-[#F3F3F3] border md:border-0 border-[#E4E4E4] rounded-[11px] px-4 py-3 text-[#6E6E6E] outline-none"
            >
              <option value="individual">Individual</option>
              <option value="agency">Agency</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>
          <div className="mb-5 md:mb-7">
            <label className="block text-[#4F4F4F] mb-2.5">Brands</label>
            <SearchableCheckboxDropdown
              options={searchedBrands.map(b => ({ id: b.brandId, name: b.name }))}
              selectedOptions={formData.venues}
              onChange={handleVenuesChange}
              searchTerm={brandSearchTerm}
              onSearchChange={setBrandSearchTerm}
              placeholder="Search brands..."
              buttonText="Select Brands"
            />
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-[11px] hover:bg-blue-600"
            >
              {isEditMode ? "Save Changes" : "Create Account"}
            </button>
          </div>
        </div>
        {isEditMode && originalAccount && (
          <p className="text-sm text-[#4F4F4F] mt-4">
            Registration date: {originalAccount.signUpDate.toLocaleDateString()}
          </p>
        )}
      </div>
    </form>
  );
}
