"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { getCampaignDetailsStart } from "@/store/campaigns/CampaignSlice";
import { RootState } from "@/store/store";
import Loader from "@/components/general/Loader";
import CampaignDetails from "@/components/features/campaigns/CampaignDetails";
import CampaignPageHeader from "@/components/features/campaigns/CampaignPageHeader";

export default function CampaignDetailsPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const { campaignId } = params;

  const {
    campaign,
    loading: campaignLoading,
    error: campaignError,
  } = useSelector((state: RootState) => state.campaigns);

  useEffect(() => {
    if (campaignId) {
      dispatch(getCampaignDetailsStart({ id: campaignId as string }));
    }
  }, [dispatch, campaignId]);

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
    <div className="py-6">
      <div className="max-w-[1428px] mx-auto bg-white rounded-[13px]">
        <CampaignPageHeader title={campaign.title} />
        <CampaignDetails campaign={campaign} campaignId={campaignId as string} />
      </div>
    </div>
  );
}