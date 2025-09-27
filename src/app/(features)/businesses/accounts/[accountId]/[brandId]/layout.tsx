"use client";

import BrandHeader from "@/components/features/brands/BrandHeader";
import { useState, useEffect } from "react";
import {
  useRouter,
  useSearchParams,
  useParams,
  usePathname,
} from "next/navigation";
import { brandsData } from "@/data/BrandsData";
import { Brand } from "@/types/entities";
import Loader from "@/components/general/Loader";

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "Business Details"
  );
  const [brand, setBrand] = useState<Brand | null>(null);

  // Check if we're on a campaign details page
  const isCampaignPage =
    pathname.includes("/campaigns/") || pathname.split("/").length > 5;

  // Fetch brand data based on brandId from URL
  useEffect(() => {
    const brandId = params.brandId as string;
    const foundBrand = brandsData.find((b) => b.brandId === brandId);
    setBrand(foundBrand || null);
  }, [params.brandId]);

  const handleTabChange = (tab: string) => {
    // Don't allow tab changes when on campaign page
    if (isCampaignPage) {
      return;
    }

    setActiveTab(tab);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.push(`?${params.toString()}`);
  };

  // Update active tab when URL changes
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && !isCampaignPage) {
      setActiveTab(tab);
    }
  }, [searchParams, isCampaignPage]);

  // Show loading state while brand data is being fetched
  if (!brand) {
    return <Loader />;
  }

  return (
    <div>
      <BrandHeader
        name={brand.name}
        subtitle={brand.businessLocation || undefined}
        logo={brand.logo}
        activeTab={isCampaignPage ? "Campaigns" : activeTab}
        onTabChange={handleTabChange}
        isCampaignPage={isCampaignPage}
      />
      {children}
    </div>
  );
}
