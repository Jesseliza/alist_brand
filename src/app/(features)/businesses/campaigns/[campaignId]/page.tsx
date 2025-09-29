"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { getCampaignDetailsStart } from "@/store/campaigns/CampaignSlice";
import { RootState } from "@/store/store";
import Loader from "@/components/general/Loader";
import CampaignDetails from "@/components/features/campaigns/CampaignDetails";
import Image from "next/image";
import ActionDropdown from "@/components/general/dropdowns/ActionDropdown";

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

  const handleBackClick = () => {
    router.back();
  };

  const handleActionSelect = (action: string) => {
    if (action === "Update") {
      router.push(`/businesses/campaigns/${campaignId}/edit`);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  // Show loader if campaign is not yet available (initial load) or still loading
  if (loading || !campaign) {
    return <Loader />;
  }

  return (
    <div className="py-6">
      <div className="max-w-[1428px] mx-auto bg-white rounded-[13px]">
        <div className="flex items-center justify-between py-[20.5px] px-[27px] border-b border-[#E2E2E2]">
          <button onClick={handleBackClick} className="cursor-pointer">
            <Image
              src="/icons/campaign/details/back-arrow.svg"
              alt="back"
              width={35}
              height={35}
            />
          </button>
          <h4 className="text-[18px] leading-[27px] font-semibold text-[#4F4F4F]">
            {campaign.title}
          </h4>
          <ActionDropdown
            onSelect={handleActionSelect}
            actions={["Update"]}
            excludeActions={["delete", "active", "inactive", "Approved", "Rejected"]}
          />
        </div>

        <CampaignDetails campaign={campaign} campaignId={campaignId as string} />
      </div>
    </div>
  );
}