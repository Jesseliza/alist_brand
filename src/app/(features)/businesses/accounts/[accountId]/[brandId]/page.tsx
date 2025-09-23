"use client";

import { useSearchParams, useParams, useRouter, usePathname } from "next/navigation";
import BrandTabContent from "@/components/features/brands/BrandTabContent";
import BrandHeader from "@/components/features/brands/BrandHeader";
import { brandsData } from "@/data/BrandsData";
import { Brand } from "@/types/entities";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBrandRequest, updateBrandRequest } from "@/store/brand/brandSlice";
import { RootState } from "@/store/store";

export default function BusinessAccountBrandPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "Business Details"
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
  const [originalBrand, setOriginalBrand] = useState<Brand | null>(null);

  const isEditMode = params.brandId !== "create";

  // Fetch brand data based on brandId from URL
  useEffect(() => {
    if (isEditMode) {
      const brandId = params.brandId as string;
      const foundBrand = brandsData.find((b) => b.brandId === brandId);
      setOriginalBrand(foundBrand || null);
      if (foundBrand) {
        setFormData({
          businessName: foundBrand.name || "",
          companyName: foundBrand.companyName || "",
          businessLocation: foundBrand.businessLocation || "",
          industry: foundBrand.industry || "",
          instagram: foundBrand.instagramHandle || "",
          website: foundBrand.websiteUrl || "",
          firstName: foundBrand.associateFirstName || "",
          lastName: foundBrand.associateLastName || "",
          email: foundBrand.associateEmail || "",
          phone: foundBrand.associatePhone || "",
          tradeLicenseCopy: null,
          vatCertificate: null,
        });
      }
    }
  }, [params.brandId, isEditMode]);

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
        dispatch(updateBrandRequest({ brandId: params.brandId as string, data }));
      } else {
        dispatch(addBrandRequest({ data }));
      }
    }
  };

  // Update active tab when URL changes
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (tab: string) => {
    const isCampaignPage = pathname.includes("/campaigns/");
    if (isCampaignPage) {
      return;
    }
    setActiveTab(tab);
    const urlParams = new URLSearchParams(searchParams.toString());
    urlParams.set("tab", tab);
    router.push(`?${urlParams.toString()}`);
  };

  if (isEditMode && !originalBrand) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-gray-500">Loading brand details...</p>
      </div>
    );
  }

  const brandHeaderInfo = isEditMode ? originalBrand : { name: "Add Brand", businessLocation: "Create a new brand", logo: "" };

  return (
    <div>
      <BrandHeader
        name={brandHeaderInfo.name}
        subtitle={brandHeaderInfo.businessLocation}
        logo={brandHeaderInfo.logo}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <BrandTabContent
        activeTab={activeTab}
        brand={{
          formData,
          errors,
          isEditMode,
          originalBrand,
          handleChange,
          handleFileChange,
          handleSubmit,
        }}
      />
    </div>
  );
}
