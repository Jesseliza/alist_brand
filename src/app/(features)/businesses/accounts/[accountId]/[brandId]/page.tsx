"use client";

import { useSearchParams, useParams } from "next/navigation";
import BrandTabContent from "@/components/features/brands/BrandTabContent";
import { brandsData } from "@/data/BrandsData";
import { Brand } from "@/types/entities";
import { useState, useEffect } from "react";
import Loader from "@/components/general/Loader";

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
    return <Loader />;
  }

  return <BrandTabContent activeTab={activeTab} brand={brand} />;
}
