"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { getCampaignDetailsStart } from "@/store/campaigns/CampaignSlice";
import { fetchBrandRequest } from "@/store/brand/brandSlice";
import { RootState } from "@/store/store";
import Loader from "@/components/general/Loader";
import CampaignDetails from "@/components/features/campaigns/CampaignDetails";
import BrandDetails from "@/components/features/brands/BrandDetails";
import BrandHeader from "@/components/features/brands/BrandHeader";

export default function CampaignDetailsPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const { campaignId } = params;

  const [activeTab, setActiveTab] = useState("Campaigns");

  const {
    campaign,
    loading: campaignLoading,
    error: campaignError,
  } = useSelector((state: RootState) => state.campaigns);

  const {
    brand,
    loading: brandLoading,
    error: brandError,
  } = useSelector((state: RootState) => state.brand);

  useEffect(() => {
    if (campaignId) {
      dispatch(getCampaignDetailsStart({ id: campaignId as string }));
    }
  }, [dispatch, campaignId]);

  useEffect(() => {
    if (campaign && activeTab === "Business Details" && campaign.venue) {
      dispatch(fetchBrandRequest({ brandId: campaign.venue.id }));
    }
  }, [dispatch, campaign, activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  if (campaignLoading) {
    return <Loader />;
  }

  if (campaignError) {
    return <p className="text-red-500">Error: {campaignError}</p>;
  }

  if (!campaign) {
    return <Loader />;
  }

  return (
    <div className="pt-6">
      <BrandHeader
        name={campaign.venue?.venue_title || campaign.brandName}
        subtitle={campaign.title}
        logo={campaign.brandLogo}
        tabs={["Business Details", "Campaigns"]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <div className="pb-6">
        {activeTab === "Campaigns" && (
          <CampaignDetails campaign={campaign} campaignId={campaignId as string} />
        )}
        {activeTab === "Business Details" && (
          <>
            {brandLoading && <Loader />}
            {brandError && <p className="text-red-500 text-center py-8">{brandError}</p>}
            {!brandLoading && !brandError && brand && (
              <BrandDetails
                brand={brand}
                isEditMode={false}
                onFieldChange={() => {}}
                onSave={() => {}}
                isSaving={false}
                isCreateMode={false}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}