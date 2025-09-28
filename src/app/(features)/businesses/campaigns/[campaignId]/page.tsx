"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { getCampaignDetailsStart } from "@/store/campaigns/CampaignSlice";
import { RootState } from "@/store/store";
import Loader from "@/components/general/Loader";

export default function CampaignDetailsPage() {
  const dispatch = useDispatch();
  const params = useParams();
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

  if (!campaign && !loading) {
    return <div>Campaign not found.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{campaign?.title || "Campaign Details"}</h1>
      <p>ID: {campaign?.campaignId || campaignId}</p>
      <p>Status: {campaign?.creatorApprovalType || "N/A"}</p>
      <p>Brand: {campaign?.brandName || "N/A"}</p>
      <p>Offer Type: {campaign?.offerType || "N/A"}</p>
      {/* Displaying available data. More details can be added as the 'Campaign' type is expanded. */}
    </div>
  );
}