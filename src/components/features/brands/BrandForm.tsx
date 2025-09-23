"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Brand } from "@/types/entities";
import { addBrandRequest, updateBrandRequest } from "@/store/brand/brandSlice";
import { RootState } from "@/store/store";

interface BrandFormProps {
  brand: Brand | null;
}

export default function BrandForm({ brand }: BrandFormProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { addBrandInProgress, addBrandError, updateBrandInProgress, updateBrandError } = useSelector(
    (state: RootState) => state.brand
  );

  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    phoneNumber: "",
    companyName: "",
    businessLocation: "",
    instagramHandle: "",
    websiteUrl: "",
    tradeLicenseCopy: null as File | null,
    vatCertificate: null as File | null,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});

  const isEditMode = !!brand;

  useEffect(() => {
    if (isEditMode && brand) {
      setFormData({
        name: brand.name,
        emailAddress: brand.emailAddress,
        phoneNumber: brand.phoneNumber,
        companyName: brand.companyName,
        businessLocation: brand.businessLocation,
        instagramHandle: brand.instagramHandle,
        websiteUrl: brand.websiteUrl,
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

    if (!formData.name) newErrors.name = "Brand name is required.";
    if (!formData.emailAddress) {
      newErrors.emailAddress = "Email address is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Invalid email format.";
    }
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required.";

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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Brand Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          name="emailAddress"
          id="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.emailAddress && <p className="text-red-500 text-xs mt-1">{errors.emailAddress}</p>}
      </div>
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
      </div>
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
          Company Name
        </label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="businessLocation" className="block text-sm font-medium text-gray-700">
          Business Location
        </label>
        <input
          type="text"
          name="businessLocation"
          id="businessLocation"
          value={formData.businessLocation}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="instagramHandle" className="block text-sm font-medium text-gray-700">
          Instagram Handle
        </label>
        <input
          type="text"
          name="instagramHandle"
          id="instagramHandle"
          value={formData.instagramHandle}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700">
          Website URL
        </label>
        <input
          type="text"
          name="websiteUrl"
          id="websiteUrl"
          value={formData.websiteUrl}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="tradeLicenseCopy" className="block text-sm font-medium text-gray-700">
          Trade License Copy
        </label>
        <input
          type="file"
          name="tradeLicenseCopy"
          id="tradeLicenseCopy"
          onChange={handleFileChange}
          className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="vatCertificate" className="block text-sm font-medium text-gray-700">
          VAT Certificate
        </label>
        <input
          type="file"
          name="vatCertificate"
          id="vatCertificate"
          onChange={handleFileChange}
          className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={addBrandInProgress || updateBrandInProgress}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isEditMode ? "Update Brand" : "Add Brand"}
        </button>
      </div>
      {addBrandError && <p className="text-red-500">{addBrandError}</p>}
      {updateBrandError && <p className="text-red-500">{updateBrandError}</p>}
    </form>
  );
}
