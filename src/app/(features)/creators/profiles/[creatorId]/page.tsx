"use client";

import CreatorHeader from "@/components/features/creators/CreatorHeader";
import CreatorTabContent from "@/components/features/creators/CreatorTabContent";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { CreatorsData } from "@/data/CreatorsData";
import { Creator } from "@/types/entities";

export default function CreatorProfilePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "Info");
  const [creator, setCreator] = useState<Creator | null>(null);

  // Fetch creator data based on creatorId from URL
  useEffect(() => {
    const creatorId = params.creatorId as string;
    const foundCreator = CreatorsData.find((c) => c.creatorId === creatorId);
    setCreator(foundCreator || null);
  }, [params.creatorId]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.push(`?${params.toString()}`);
  };

  // Update active tab when URL changes
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  // Show loading state while creator data is being fetched
  if (!creator) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-gray-500">Loading creator details...</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <CreatorHeader
          name={creator.fullName}
          subtitle={creator.location}
          avatarUrl={creator.avatarUrl}
          tier={creator.tier}
          isInstagramVerified={creator.verifiedPlatforms.includes("Instagram")}
          isApproved={creator.isApproved}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <CreatorTabContent activeTab={activeTab} creator={creator} />
      </div>
    </div>
  );
}
