"use client";

import Image from "next/image";

interface BrandDetailsProps {
  businessName: string;
  companyName: string;
  businessLocation: string;
  industry: string;
  registrationDate: string;
  instagram: string;
  website: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
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
  icon?: IconProps;
}

export default function BrandDetails({
  businessName = "Bianca",
  companyName = "Williams",
  businessLocation = "bianca@gmail.com",
  industry = "+971 583859885",
  registrationDate = "13/08/2024",
  instagram = "dunkin_ae",
  website = "dunkin_ae",
  firstName = "Biance",
  lastName = "Williams",
  email = "bianca@gmail.com",
  phone = "+971 583859885",
}: BrandDetailsProps) {
  const InputField = ({ label, value, name, icon }: InputFieldProps) => (
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
          readOnly
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
                    value={businessName}
                    name="businessName"
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
                    value={companyName}
                    name="companyName"
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
                    value={businessLocation}
                    name="businessLocation"
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
                    value={industry}
                    name="industry"
                    icon={{
                      src: "/icons/arrow-expand.svg",
                      width: 12.05,
                      height: 6.03,
                      alt: "expand",
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <InputField
                    label="Trade License Copy"
                    value="TradeLicense.pdf"
                    name="TradeLicenseCopy"
                    icon={{
                      src: "/icons/download.svg",
                      width: 20,
                      height: 15,
                      alt: "expand",
                    }}
                  />
                  <InputField
                    label="VAT Certificate"
                    value="vat.pdf"
                    name="VATCertificate"
                    icon={{
                      src: "/icons/download.svg",
                      width: 20,
                      height: 15,
                      alt: "expand",
                    }}
                  />
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
                    value={instagram}
                    name="instagram"
                    icon={{
                      src: "/icons/edit-icon.svg",
                      width: 12.14,
                      height: 12.13,
                      alt: "copy",
                    }}
                  />
                  <InputField
                    label="Website"
                    value={website}
                    name="website"
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
                    value={firstName}
                    name="firstName"
                  />
                  <InputField
                    label="Last name"
                    value={lastName}
                    name="lastName"
                  />
                </div>
                <div className="mb-5 md:mb-7">
                  <InputField
                    label="Email"
                    value={email}
                    name="email"
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
                  value={phone}
                  name="phone"
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
        </div>
        <p className="text-sm text-[#4F4F4F] mt-4">
          Registration date: {registrationDate}
        </p>
      </div>
    </div>
  );
}
