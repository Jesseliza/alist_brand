"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { getCampaignDetailsStart } from "@/store/campaigns/CampaignSlice";
import { RootState } from "@/store/store";
import Loader from "@/components/general/Loader";
import CampaignDetails from "@/components/features/campaigns/CampaignDetails";
import BrandHeader from "@/components/features/brands/BrandHeader";

export default function CampaignDetailsPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const router = useRouter();
  const { campaignId } = params;

  const { campaign, loading, error } = useSelector(
    (state: RootState) => state.campaigns
  );

  useEffect(() => {
    if (campaignId) {
      dispatch(getCampaignDetailsStart({ id: campaignId as string }));
    }
  }, [dispatch, campaignId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!campaign) {
    return <Loader />;
  }

  const handleTabChange = (tab: string) => {
    if (tab === "Business Details") {
      router.push(`/businesses/brands/${campaign.brandId}`);
    }
  };

  return (
    <div className="pt-6">
      <BrandHeader
        name={campaign.venue?.venue_title || campaign.brandName}
        subtitle={campaign.title}
        logo={campaign.brandLogo}
        tabs={["Business Details", "Campaigns"]}
        activeTab="Campaigns"
        onTabChange={handleTabChange}
      />
      <div className="pb-6">
        <CampaignDetails campaign={campaign} campaignId={campaignId as string} />
      </div>
    </div>
  );
}