"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { getCampaignDetailsStart, updateCampaignStatusStart } from "@/store/campaigns/CampaignSlice";
import { RootState } from "@/store/store";
import Loader from "@/components/general/Loader";
import UnifiedTabs from "@/components/general/UnifiedTabs";

export default function CampaignDetailsPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const { campaignId } = params;

  const { campaign, loading, error } = useSelector(
    (state: RootState) => state.campaigns
  );

  const [activeTab, setActiveTab] = useState("Overview");

  useEffect(() => {
    if (campaignId) {
      dispatch(getCampaignDetailsStart({ id: campaignId as string }));
    }
  }, [dispatch, campaignId]);

  const handleApprove = () => {
    if (campaignId) {
      dispatch(updateCampaignStatusStart({ id: campaignId as string, status: "Approved" }));
    }
  };

  const handleReject = () => {
    if (campaignId) {
      dispatch(updateCampaignStatusStart({ id: campaignId as string, status: "Rejected" }));
    }
  };

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

      <UnifiedTabs
        tabs={["Overview"]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {activeTab === "Overview" && (
        <div className="pt-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Campaign Overview</h2>
            <div className="space-y-2">
              <p><strong>ID:</strong> {campaign?.campaignId || campaignId}</p>
              <p><strong>Status:</strong> {campaign?.creatorApprovalType || "N/A"}</p>
              <p><strong>Brand:</strong> {campaign?.brandName || "N/A"}</p>
              <p><strong>Offer Type:</strong> {campaign?.offerType || "N/A"}</p>
            </div>
            <div className="mt-6 flex space-x-4">
              <button
                onClick={handleApprove}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Approve
              </button>
              <button
                onClick={handleReject}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}