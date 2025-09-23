"use client";

import { useSearchParams, useParams } from "next/navigation";
import BrandTabContent from "@/components/features/brands/BrandTabContent";
import { brandsData } from "@/data/BrandsData";
import { Brand } from "@/types/entities";
import { useState, useEffect } from "react";

export default function BusinessAccountBrandPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "Business Details"
  );
  const [brand, setBrand] = useState<Brand | null>(null);

  // Fetch brand data based on brandId from URL
  useEffect(() => {
    const brandId = params.brandId as string;
    const foundBrand = brandsData.find((b) => b.brandId === brandId);
    setBrand(foundBrand || null);
  }, [params.brandId]);

  // Update active tab when URL changes
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  // Show loading state while brand data is being fetched
  if (!brand) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-gray-500">Loading brand details...</p>
      </div>
    );
  }

  return <BrandTabContent activeTab={activeTab} brand={brand} />;
}
