"use client";

import Image from "next/image";

interface BrandDetailsProps {
  formData: {
    businessName: string;
    companyName: string;
    businessLocation: string;
    industry: string;
    instagram: string;
    website: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    tradeLicenseCopy: File | null;
    vatCertificate: File | null;
  };
  errors: Partial<Record<keyof BrandDetailsProps["formData"], string>>;
  isEditMode: boolean;
  originalBrand: {
    tradeLicenseCopy?: string;
    vatCertificate?: string;
    registrationDate?: string;
  } | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
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
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: IconProps;
}

export default function BrandDetails({
  formData,
  errors,
  isEditMode,
  originalBrand,
  handleChange,
  handleFileChange,
  handleSubmit,
}: BrandDetailsProps) {
  const InputField = ({ label, value, name, icon, onChange }: InputFieldProps) => (
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
          onChange={onChange}
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

  return (
    <form onSubmit={handleSubmit}>
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
                      value={formData.businessName}
                      name="businessName"
                      onChange={handleChange}
                      icon={{
                        src: "/icons/edit-icon-2.svg",
                        width: 16.69,
                        height: 16.26,
                        alt: "copy",
                      }}
                    />
                    {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
                  </div>
                  <div className="mb-5 md:mb-7">
                    <InputField
                      label="Company Name (as on trade license)"
                      value={formData.companyName}
                      name="companyName"
                      onChange={handleChange}
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
                      label="Business Location"
                      value={formData.businessLocation}
                      name="businessLocation"
                      onChange={handleChange}
                      icon={{
                        src: "/icons/arrow-expand.svg",
                        width: 12.05,
                        height: 6.03,
                        alt: "expand",
                      }}
                    />
                  </div>
                  <div className="mb-5 md:mb-7">
                    <InputField
                      label="Industry"
                      value={formData.industry}
                      name="industry"
                      onChange={handleChange}
                      icon={{
                        src: "/icons/arrow-expand.svg",
                        width: 12.05,
                        height: 6.03,
                        alt: "expand",
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="tradeLicenseCopy"
                        className="block text-[#4F4F4F] mb-2.5 truncate"
                        title="Trade License Copy"
                      >
                        Trade License Copy
                      </label>
                      {isEditMode && originalBrand?.tradeLicenseCopy ? (
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500">{originalBrand.tradeLicenseCopy}</p>
                          <button type="button" className="text-sm text-blue-500">Download</button>
                        </div>
                      ) : (
                        <input
                          type="file"
                          id="tradeLicenseCopy"
                          name="tradeLicenseCopy"
                          onChange={handleFileChange}
                        />
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="vatCertificate"
                        className="block text-[#4F4F4F] mb-2.5 truncate"
                        title="VAT Certificate"
                      >
                        VAT Certificate
                      </label>
                      {isEditMode && originalBrand?.vatCertificate ? (
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500">{originalBrand.vatCertificate}</p>
                          <button type="button" className="text-sm text-blue-500">Download</button>
                        </div>
                      ) : (
                        <input
                          type="file"
                          id="vatCertificate"
                          name="vatCertificate"
                          onChange={handleFileChange}
                        />
                      )}
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
                      value={formData.instagram}
                      name="instagram"
                      onChange={handleChange}
                      icon={{
                        src: "/icons/edit-icon.svg",
                        width: 12.14,
                        height: 12.13,
                        alt: "copy",
                      }}
                    />
                    <InputField
                      label="Website"
                      value={formData.website}
                      name="website"
                      onChange={handleChange}
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
                  <div className="grid grid-cols-2 gap-5 mb-5 md:mb-7">
                    <InputField
                      label="First name"
                      value={formData.firstName}
                      name="firstName"
                      onChange={handleChange}
                    />
                    <InputField
                      label="Last name"
                      value={formData.lastName}
                      name="lastName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-5 md:mb-7">
                    <InputField
                      label="Email"
                      value={formData.email}
                      name="email"
                      onChange={handleChange}
                      icon={{
                        src: "/icons/edit-icon.svg",
                        width: 12.14,
                        height: 12.13,
                        alt: "copy",
                      }}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <InputField
                    label="Phone"
                    value={formData.phone}
                    name="phone"
                    onChange={handleChange}
                    icon={{
                      src: "/icons/edit-icon.svg",
                      width: 12.14,
                      height: 12.13,
                      alt: "copy",
                    }}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-[11px] text-[18px] leading-[27px] pt-1.25 pb-1.75 px-6"
            >
              {isEditMode ? "Save" : "Add Brand"}
            </button>
          </div>
          <p className="text-sm text-[#4F4F4F] mt-4">
            Registration date: {originalBrand?.registrationDate}
          </p>
        </div>
      </div>
    </form>
  );
}
