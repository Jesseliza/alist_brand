"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Brand } from "@/types/entities";
import { addBrandRequest, updateBrandRequest } from "@/store/brand/brandSlice";
import { RootState } from "@/store/store";
import { useParams } from "next/navigation";

interface BrandDetailsProps {
  brand?: Brand | null;
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

export default function BrandDetails({ brand }: BrandDetailsProps) {
  const dispatch = useDispatch();
  const params = useParams();
  const { addBrandInProgress, addBrandError, updateBrandInProgress, updateBrandError } = useSelector(
    (state: RootState) => state.brand
  );

  const [formData, setFormData] = useState({
    businessName: "",
    companyName: "",
    businessLocation: "",
    industry: "",
    instagram: "",
    website: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    tradeLicenseCopy: null as File | null,
    vatCertificate: null as File | null,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});

  const isEditMode = !!brand;

  useEffect(() => {
    if (isEditMode && brand) {
      setFormData({
        businessName: brand.name || "",
        companyName: brand.companyName || "",
        businessLocation: brand.businessLocation || "",
        industry: brand.industry || "",
        instagram: brand.instagramHandle || "",
        website: brand.websiteUrl || "",
        firstName: brand.associateFirstName || "",
        lastName: brand.associateLastName || "",
        email: brand.associateEmail || "",
        phone: brand.associatePhone || "",
        tradeLicenseCopy: null,
        vatCertificate: null,
      });
    }
  }, [brand, isEditMode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};

    if (!formData.businessName) newErrors.businessName = "Brand name is required.";
    if (!formData.email) {
      newErrors.email = "Email address is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        const value = formData[key as keyof typeof formData];
        if (value) {
          data.append(key, value as string | Blob);
        }
      });

      if (isEditMode) {
        dispatch(updateBrandRequest({ brandId: brand.brandId, data }));
      } else {
        dispatch(addBrandRequest({ data }));
      }
    }
  };

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
                      {isEditMode && brand.tradeLicenseCopy ? (
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500">{brand.tradeLicenseCopy}</p>
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
                      {isEditMode && brand.vatCertificate ? (
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500">{brand.vatCertificate}</p>
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
              disabled={addBrandInProgress || updateBrandInProgress}
              className="bg-blue-500 text-white rounded-[11px] text-[18px] leading-[27px] pt-1.25 pb-1.75 px-6"
            >
              {isEditMode ? "Save" : "Add Brand"}
            </button>
          </div>
          {addBrandError && <p className="text-red-500">{addBrandError}</p>}
          {updateBrandError && <p className="text-red-500">{updateBrandError}</p>}
        </div>
      </div>
    </form>
  );
}
