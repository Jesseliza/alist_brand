"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { getCampaignDetailsStart } from "@/store/campaigns/CampaignSlice";
import { fetchBrandRequest } from "@/store/brand/brandSlice";
import { RootState } from "@/store/store";
import Loader from "@/components/general/Loader";
import CampaignDetails from "@/components/features/campaigns/CampaignDetails";
import BrandDetails from "@/components/features/brands/BrandDetails";
import Image from "next/image";
import { Tab } from "@headlessui/react";

const tabs = ["Campaigns", "Business Details"];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CampaignDetailsPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const router = useRouter();
  const { campaignId } = params;

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

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (campaignId) {
      dispatch(getCampaignDetailsStart({ id: campaignId as string }));
    }
  }, [dispatch, campaignId]);

  useEffect(() => {
    if (
      selectedIndex === 1 &&
      campaign &&
      campaign.venue &&
      campaign.venue.id
    ) {
      dispatch(fetchBrandRequest({ brandId: campaign.venue.id }));
    }
  }, [selectedIndex, dispatch, campaign]);

  const handleBackClick = () => {
    router.push(`/businesses/campaigns`);
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
          <button className="cursor-pointer">
            <Image
              src="/icons/campaign/details/menu-dots.svg"
              alt="share"
              width={35}
              height={35}
            />
          </button>
        </div>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <div className="max-w-[966px] mx-auto md:px-4 mt-4">
            <Tab.List className="flex bg-[#F8F8F8] rounded-[13px] p-[5px]">
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-1.75 text-[18px] leading-[27px] font-medium rounded-[13px] transition",
                      "focus-visible:outline-none focus-visible:ring focus-visible:ring-[#54aeb8]",
                      selected
                        ? "bg-[#00A4B6] text-white"
                        : "text-[#7E7E7E] hover:bg-gray-200"
                    )
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="mt-2">
            <Tab.Panel>
              <CampaignDetails
                campaign={campaign}
                campaignId={campaignId as string}
              />
            </Tab.Panel>
            <Tab.Panel>
              {brandLoading ? (
                <Loader />
              ) : brandError ? (
                <p className="text-red-500 text-center py-8">{brandError}</p>
              ) : brand ? (
                <BrandDetails
                  brand={brand}
                  isEditMode={false}
                  onFieldChange={() => {}}
                  onSave={() => {}}
                  isSaving={false}
                  isCreateMode={false}
                />
              ) : (
                <p className="text-center py-8">Brand details not found.</p>
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}