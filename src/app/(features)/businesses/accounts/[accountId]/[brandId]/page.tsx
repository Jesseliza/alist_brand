"use client";

import { useSearchParams, useParams } from "next/navigation";
import BrandTabContent from "@/components/features/brands/BrandTabContent";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Brand } from "@/types/entities";
import { useState, useEffect } from "react";
import Loader from "@/components/general/Loader";

export default function BusinessAccountBrandPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const { selectedAccount } = useSelector((state: RootState) => state.account);

  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "Business Details"
  );
  const [brand, setBrand] = useState<Brand | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Fetch brand data based on brandId from URL
  useEffect(() => {
    const brandId = params.brandId as string;
    if (selectedAccount && selectedAccount.brands) {
      const foundBrand = selectedAccount.brands.find((b) => b.brandId === brandId);
      setBrand(foundBrand || null);
    }
  }, [params.brandId, selectedAccount]);

  // Update active tab when URL changes
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleFieldChange = (field: keyof Brand, value: string) => {
    if (brand) {
      setBrand({ ...brand, [field]: value });
    }
  };

  const handleFileChange = (field: keyof Brand, file: File) => {
    if (brand) {
      setBrand({ ...brand, [field]: file });
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    // TODO: Implement API call to save/update brand.
    console.log("Saving brand:", brand);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
    setIsEditMode(false);
    alert("Brand saved successfully! (This is a placeholder message)");
  };

  // Show loading state while brand data is being fetched
  if (!brand) {
    return <Loader />;
  }

  const brandProps = {
    ...brand,
    isEditMode,
    onFieldChange: handleFieldChange,
    onFileChange: handleFileChange,
    onSave: handleSave,
    isSaving,
    isCreateMode: false,
  };

  return <BrandTabContent activeTab={activeTab} brand={brandProps} />;
}