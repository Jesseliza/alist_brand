"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Brand } from "@/types/entities";
import SearchableDropdown from "@/components/general/dropdowns/SearchableDropdown";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { fetchAllAccounts, fetchCountries, fetchIndustries, fetchStates, validatePinRequest, resetPinStatus } from "@/store/common/commonSlice";
import PinModal from "@/components/general/PinModal";

interface BrandDetailsProps {
  brand: Partial<Brand>;
  isEditMode: boolean;
  onFieldChange: (field: keyof Brand, value: string) => void;
  onSave: (files: {
    tradeLicenseFile: File | null;
    vatCertificateFile: File | null;
  }) => void;
  isSaving: boolean;
  isCreateMode: boolean;
  errors?: Partial<Record<keyof Brand, string>>;
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
  error?: string;
}

const InputField = ({ label, value, name, icon, isEditMode, onChange, error }: InputFieldProps) => (
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
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

interface FileUploadFieldProps {
  label: string;
  file: string | File | null | undefined;
  name: keyof Brand;
  onFileChange: (file: File) => void;
  onDownloadRequest: (fileUrl: string) => void;
  error?: string;
}

const FileUploadField = ({ label, file, name, onFileChange, onDownloadRequest, error }: FileUploadFieldProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  let displayValue = '';
  if (typeof file === 'string') {
    displayValue = file.split('/').pop() || '';
  } else if (file instanceof File) {
    displayValue = file.name;
  }

  const showDownloadLink = typeof file === 'string' && file;

  return (
    <div>
      <label htmlFor={name} className="block text-[#4F4F4F] mb-2.5 truncate">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={displayValue}
          readOnly
          placeholder="No file selected"
          onClick={() => fileInputRef.current?.click()}
          className="w-full bg-[#F8F8F8] md:bg-[#F3F3F3] border md:border-0 border-[#E4E4E4] rounded-[11px] px-4 py-3 text-[#6E6E6E] placeholder:text-[#6E6E6E] outline-none truncate pr-12 cursor-pointer"
        />

        {showDownloadLink && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex-shrink-0">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDownloadRequest(file as string);
              }}
            >
              <Image src="/icons/download.svg" alt="download file" width={20} height={15} />
            </button>
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf"
          onChange={(e) => e.target.files && onFileChange(e.target.files[0])}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default function BrandDetails({
  brand,
  isEditMode,
  onFieldChange,
  onSave,
  isSaving,
  isCreateMode,
  errors = {},
}: BrandDetailsProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    countries,
    states,
    industries,
    allAccounts,
    loading,
    pinValidationLoading,
    pinValidationSuccess,
    pinValidationError,
  } = useSelector((state: RootState) => state.common);
  const { user } = useSelector((state: RootState) => state.auth);

  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [fileToDownload, setFileToDownload] = useState<string | null>(null);
  const [tradeLicenseFile, setTradeLicenseFile] = useState<File | null>(null);
  const [vatCertificateFile, setVatCertificateFile] = useState<File | null>(null);

  useEffect(() => {
    if (pinValidationSuccess && fileToDownload) {
      window.open(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${fileToDownload}`, "_blank");
      setFileToDownload(null);
      setIsPinModalOpen(false);
      dispatch(resetPinStatus());
    }
  }, [pinValidationSuccess, fileToDownload, dispatch]);

  const handlePinSubmit = (pin: string) => {
    dispatch(validatePinRequest({ pin }));
  };

  const handleDownloadRequest = (fileUrl: string) => {
    setFileToDownload(fileUrl);
    setIsPinModalOpen(true);
  };

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
                    error={errors.name}
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
                    error={errors.companyName}
                  />
                </div>
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
                    disabled={loading.allAccounts || (user?.registration_type !== 'admin')}
                  />
                  {errors.accountId && <p className="text-red-500 text-xs mt-1">{errors.accountId}</p>}
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
                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
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
                    {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
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
                  {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry}</p>}
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <FileUploadField
                      label="Trade License Copy"
                      file={tradeLicenseFile || brand.tradeLicenseCopy}
                      name="tradeLicenseCopy"
                      onFileChange={setTradeLicenseFile}
                      onDownloadRequest={handleDownloadRequest}
                      error={errors.tradeLicenseCopy}
                    />
                  </div>
                  <div>
                    <FileUploadField
                      label="VAT Certificate"
                      file={vatCertificateFile || brand.vatCertificate}
                      name="vatCertificate"
                      onFileChange={setVatCertificateFile}
                      onDownloadRequest={handleDownloadRequest}
                      error={errors.vatCertificate}
                    />
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
              onClick={() =>
                onSave({
                  tradeLicenseFile,
                  vatCertificateFile,
                })
              }
              disabled={isSaving}
              className="bg-blue-500 text-white rounded-[11px] text-[18px] leading-[27px] pt-1.25 pb-1.75 px-6"
            >
              {isSaving ? "Saving..." : isCreateMode ? "Save" : "Save Changes"}
            </button>
          </div>
        </div>
        {brand.registrationDate && (
          <p className="text-sm text-[#4F4F4F] mt-4">
            Registration date: {new Date(brand.registrationDate).toLocaleDateString()}
          </p>
        )}
      </div>
      <PinModal
        isOpen={isPinModalOpen}
        onClose={() => {
          setIsPinModalOpen(false);
          dispatch(resetPinStatus());
        }}
        onSubmit={handlePinSubmit}
        loading={pinValidationLoading}
        error={pinValidationError}
      />
    </div>
  );
}