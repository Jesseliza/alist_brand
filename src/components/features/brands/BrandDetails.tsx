"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Brand } from "@/types/entities";
import SearchableDropdown from "@/components/general/dropdowns/SearchableDropdown";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { fetchAllAccounts, fetchCountries, fetchIndustries, fetchStates } from "@/store/common/commonSlice";

interface BrandDetailsProps {
  brand: Partial<Brand>;
  isEditMode: boolean;
  onFieldChange: (field: keyof Brand, value: string) => void;
  onFileChange: (field: keyof Brand, file: File) => void;
  onSave: () => void;
  isSaving: boolean;
  isCreateMode: boolean;
}

interface IconProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface InputFieldProps {
  label: string;
  value: string;
  name: keyof Brand;
  icon?: IconProps;
  isEditMode: boolean;
  onChange: (field: keyof Brand, value: string) => void;
}

const InputField = ({ label, value, name, icon, isEditMode, onChange }: InputFieldProps) => (
  <div>
    <label
      htmlFor={name}
      className="block text-[#4F4F4F] mb-2.5 truncate"
      title={label}
    >
      {label}
    </label>
    <div className="relative">
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        readOnly={!isEditMode}
        onChange={(e) => onChange(name, e.target.value)}
        title={value}
        className={`w-full bg-[#F8F8F8] md:bg-[#F3F3F3] border md:border-0 border-[#E4E4E4] rounded-[11px] px-4 py-3 text-[#6E6E6E] placeholder:text-[#6E6E6E] outline-none truncate ${
          icon ? "pr-12" : ""
        }`}
      />
      {icon && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex-shrink-0">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
          />
        </div>
      )}
    </div>
  </div>
);

export default function BrandDetails({
  brand,
  isEditMode,
  onFieldChange,
  onFileChange,
  onSave,
  isSaving,
  isCreateMode,
}: BrandDetailsProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { countries, states, industries, allAccounts, loading, error } = useSelector(
    (state: RootState) => state.common
  );

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchIndustries());
    dispatch(fetchAllAccounts());
  }, [dispatch]);

  useEffect(() => {
    if (brand.country) {
      dispatch(fetchStates(brand.country));
    }
  }, [brand.country, dispatch]);

  return (
    <div className="text-[15px] pt-10 md:pt-11">
      <div className="max-w-[1148px] mx-auto md:px-[15px] ">
        <div className="bg-white rounded-[13px] md:px-10 md:pt-8 md:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Vertical border in the middle - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#E4E4E4] transform -translate-x-1/2"></div>

            {/* Left Column */}
            <div className="border-b border-[#E2E2E2] md:border-b-0 md:pr-4 md:pl-0">
              <h3 className="px-4 mb-6 text-[18px] text-[#4F4F4F] font-medium">
                Business Details
              </h3>
              <div className="px-4 ">
                <div className="mb-5 md:mb-7">
                  <label
                    htmlFor="account"
                    className="block text-[#4F4F4F] mb-2.5 truncate"
                  >
                    Account
                  </label>
                  <SearchableDropdown
                    options={allAccounts}
                    selectedValue={brand.accountId || ""}
                    onValueChange={(value) => onFieldChange("accountId", value)}
                    placeholder="Select an account"
                    disabled={loading.allAccounts}
                  />
                </div>
                <div className="mb-5 md:mb-7">
                  <InputField
                    label="Business name"
                    value={brand.name || ""}
                    name="name"
                    isEditMode={isEditMode}
                    onChange={onFieldChange}
                    icon={{
                      src: "/icons/edit-icon-2.svg",
                      width: 16.69,
                      height: 16.26,
                      alt: "copy",
                    }}
                  />
                </div>
                <div className="mb-5 md:mb-7">
                  <InputField
                    label="Company Name (as on trade license)"
                    value={brand.companyName || ""}
                    name="companyName"
                    isEditMode={isEditMode}
                    onChange={onFieldChange}
                    icon={{
                      src: "/icons/edit-icon-2.svg",
                      width: 16.69,
                      height: 16.26,
                      alt: "copy",
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-5 mb-5 md:mb-7">
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-[#4F4F4F] mb-2.5 truncate"
                    >
                      Country
                    </label>
                    <SearchableDropdown
                      options={countries}
                      selectedValue={brand.country || ""}
                      onValueChange={(value) => {
                        onFieldChange("country", value);
                        onFieldChange("state", ""); // Clear state when country changes
                      }}
                      placeholder="Select a country"
                      disabled={loading.countries}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="block text-[#4F4F4F] mb-2.5 truncate"
                    >
                      State
                    </label>
                    <SearchableDropdown
                      options={states}
                      selectedValue={brand.state || ""}
                      onValueChange={(value) => onFieldChange("state", value)}
                      placeholder="Select a state"
                      disabled={!brand.country || loading.states}
                    />
                  </div>
                </div>
                <div className="mb-5 md:mb-7">
                  <label
                    htmlFor="industry"
                    className="block text-[#4F4F4F] mb-2.5 truncate"
                  >
                    Industry
                  </label>
                  <SearchableDropdown
                    options={industries}
                    selectedValue={brand.industry || ""}
                    onValueChange={(value) => onFieldChange("industry", value)}
                    placeholder="Select an industry"
                    disabled={loading.industries}
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="tradeLicenseCopy"
                      className="block text-[#4F4F4F] mb-2.5 truncate"
                    >
                      Trade License Copy
                    </label>
                    {typeof brand.tradeLicenseCopy === 'string' && brand.tradeLicenseCopy ? (
                      <a href={brand.tradeLicenseCopy} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Download</a>
                    ) : (
                      <input
                        type="file"
                        id="tradeLicenseCopy"
                        name="tradeLicenseCopy"
                        disabled={!isEditMode}
                        onChange={(e) => e.target.files && onFileChange("tradeLicenseCopy", e.target.files[0])}
                        className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                      />
                    )}
                    {brand.tradeLicenseCopy instanceof File && <p className="text-sm text-gray-500 mt-1">{brand.tradeLicenseCopy.name}</p>}
                  </div>
                  <div>
                    <label
                      htmlFor="vatCertificate"
                      className="block text-[#4F4F4F] mb-2.5 truncate"
                    >
                      VAT Certificate
                    </label>
                    {typeof brand.vatCertificate === 'string' && brand.vatCertificate ? (
                      <a href={brand.vatCertificate} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Download</a>
                    ) : (
                      <input
                        type="file"
                        id="vatCertificate"
                        name="vatCertificate"
                        disabled={!isEditMode}
                        onChange={(e) => e.target.files && onFileChange("vatCertificate", e.target.files[0])}
                        className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                      />
                    )}
                    {brand.vatCertificate instanceof File && <p className="text-sm text-gray-500 mt-1">{brand.vatCertificate.name}</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className=" md:pl-4 md:pr-0">
              <h3 className="px-4 mb-6 text-[18px] text-[#4F4F4F] font-medium">
                Links
              </h3>
              <div className="pb-8 border-b border-[#E2E2E2] mb-6">
                <div className="px-4 grid grid-cols-2 gap-5 mb-5 md:mb-7">
                  <InputField
                    label="Instagram"
                    value={brand.instagramHandle || ""}
                    name="instagramHandle"
                    isEditMode={isEditMode}
                    onChange={onFieldChange}
                    icon={{
                      src: "/icons/edit-icon.svg",
                      width: 12.14,
                      height: 12.13,
                      alt: "copy",
                    }}
                  />
                  <InputField
                    label="Website"
                    value={brand.websiteUrl || ""}
                    name="websiteUrl"
                    isEditMode={isEditMode}
                    onChange={onFieldChange}
                    icon={{
                      src: "/icons/edit-icon.svg",
                      width: 12.14,
                      height: 12.13,
                      alt: "copy",
                    }}
                  />
                </div>
              </div>
              <div className="px-4">
                <h3 className="mb-6 text-[18px] text-[#4F4F4F] font-medium">
                  Associate details
                </h3>
                <div className="mb-5 md:mb-7">
                  <InputField
                    label="Name"
                    value={brand.associateName || ""}
                    name="associateName"
                    isEditMode={isEditMode}
                    onChange={onFieldChange}
                  />
                </div>
                <div className="mb-5 md:mb-7">
                  <InputField
                    label="Email"
                    value={brand.associateEmail || ""}
                    name="associateEmail"
                    isEditMode={isEditMode}
                    onChange={onFieldChange}
                    icon={{
                      src: "/icons/edit-icon.svg",
                      width: 12.14,
                      height: 12.13,
                      alt: "copy",
                    }}
                  />
                </div>

                <InputField
                  label="Phone"
                  value={brand.associatePhone || ""}
                  name="associatePhone"
                  isEditMode={isEditMode}
                  onChange={onFieldChange}
                  icon={{
                    src: "/icons/edit-icon.svg",
                    width: 12.14,
                    height: 12.13,
                    alt: "copy",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-4 px-4 pb-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              disabled={isSaving}
              className="bg-blue-500 text-white rounded-[11px] text-[18px] leading-[27px] pt-1.25 pb-1.75 px-6"
            >
              {isSaving ? "Saving..." : isCreateMode ? "Save" : "Save Changes"}
            </button>
          </div>
        </div>
        <p className="text-sm text-[#4F4F4F] mt-4">
          Registration date: {brand.registrationDate || "N/A"}
        </p>
      </div>
    </div>
  );
}
