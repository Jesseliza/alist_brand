"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchCampaignsRequest, fetchMoreCampaignsRequest } from "@/store/campaign/campaignSlice";
import { RootState } from "@/store/store";
import CampaignCard from "../campaigns/CampaignCard";
import CampaignsMobileCard from "../campaigns/CampaignMobileCard";
import Loader from "@/components/general/Loader";
import InlineLoader from "@/components/general/InlineLoader";

interface BrandCampaignsProps {
  accountId: string;
  brandId: string;
}

export default function BrandCampaigns({ accountId, brandId }: BrandCampaignsProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { campaigns, pagination, loading, error } = useSelector((state: RootState) => state.campaign);
  const [mobilePage, setMobilePage] = useState(1);
  const [checkedRows, setCheckedRows] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (brandId) {
      dispatch(fetchCampaignsRequest({ per_page: 12, page: 1, search: '', brand_id: brandId }));
    }
  }, [dispatch, brandId]);

  const handleCampaignClick = (campaignId: string) => {
    router.push(`/businesses/accounts/${accountId}/${brandId}/${campaignId}`);
  };

  const handleSeeMore = () => {
    const nextPage = mobilePage + 1;
    dispatch(fetchMoreCampaignsRequest({
      page: nextPage,
      per_page: 12,
      search: '',
      brand_id: brandId,
    }));
    setMobilePage(nextPage);
  };

  const handleCheckboxChange = (campaignId: string) => {
    setCheckedRows((prevCheckedRows) => {
      const newCheckedRows = new Set(prevCheckedRows);
      if (newCheckedRows.has(campaignId)) {
        newCheckedRows.delete(campaignId);
      } else {
        newCheckedRows.add(campaignId);
      }
      return newCheckedRows;
    });
  };

  if (loading && campaigns.length === 0) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500 text-center py-10">Error: {error}</p>;
  }

  if (campaigns.length === 0) {
    return (
      <div className="py-6">
        <div className="max-w-[1428px] mx-auto">
          <div className="flex items-center justify-center min-h-[200px]">
            <p className="text-gray-500">No campaigns found for this brand.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="hidden md:block">
        <div className="max-w-[1428px] py-10 mx-auto grid grid-cols-[repeat(auto-fit,340px)] gap-x-[13px] gap-y-[20px] justify-center">
          {campaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              checked={checkedRows.has(campaign.campaign_id)}
              onCheckboxChange={() => handleCheckboxChange(campaign.campaign_id)}
            />
          ))}
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-1.25">
        {campaigns.map((campaign) => (
          <CampaignsMobileCard
            key={campaign.id}
            campaign={campaign}
            checked={checkedRows.has(campaign.campaign_id)}
            onCheckboxChange={() => handleCheckboxChange(campaign.campaign_id)}
          />
        ))}
      </div>
      {loading && campaigns.length > 0 && <div className="text-center py-4"><InlineLoader /></div>}
      {campaigns.length > 0 && campaigns.length < pagination.total && !loading && (
        <div className="text-center font-semibold text-[15px] text-gray-500 my-4 mb-8">
          <button
            onClick={handleSeeMore}
            disabled={loading}
            className="disabled:text-gray-400"
          >
            {loading ? <InlineLoader /> : 'See More'}
          </button>
        </div>
      )}
    </div>
  );
}