"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { getDedicatedOfferDetailsStart } from "@/store/dedicated-offers/DedicatedOfferSlice";
import { fetchBrandRequest } from "@/store/brand/brandSlice";
import { RootState } from "@/store/store";
import Loader from "@/components/general/Loader";
import DedicatedOfferDetails from "@/components/features/dedicated-offers/DedicatedOfferDetails";
import BrandDetails from "@/components/features/brands/BrandDetails";
import BrandHeader from "@/components/features/brands/BrandHeader";

export default function DedicatedOfferDetailsPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { dedicated-offerId } = params;
  const from = searchParams.get("from");
  const brandId = searchParams.get("brandId");

  const [activeTab, setActiveTab] = useState("DedicatedOffers");

  const {
    dedicated-offer,
    loading: dedicated-offerLoading,
    error: dedicated-offerError,
  } = useSelector((state: RootState) => state.dedicated-offers);

  const {
    brand,
    loading: brandLoading,
    error: brandError,
  } = useSelector((state: RootState) => state.brand);

  useEffect(() => {
    if (dedicated-offerId) {
      dispatch(getDedicatedOfferDetailsStart({ id: dedicated-offerId as string }));
    }
  }, [dispatch, dedicated-offerId]);

  useEffect(() => {
    if (dedicated-offer && activeTab === "Business Details" && dedicated-offer.venue) {
      dispatch(fetchBrandRequest({ brandId: dedicated-offer.venue.id }));
    }
  }, [dispatch, dedicated-offer, activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };


  if (dedicated-offerLoading) {
    return <Loader />;
  }

  if (dedicated-offerError) {
    return <p className="text-red-500">Error: {dedicated-offerError}</p>;
  }

  if (!dedicated-offer) {
    return <Loader />;
  }

  return (
    <div className="py-6">
      <div className="max-w-[1428px] mx-auto">
        <BrandHeader
          name={dedicated-offer.venue?.venue_title || dedicated-offer.brandName}
          subtitle={dedicated-offer.title}
          logo={dedicated-offer.brandLogo}
          tabs={["Business Details", "DedicatedOffers"]}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <div className="mt-6 bg-white rounded-[13px] p-6">
          <div className="pb-6">
            {activeTab === "DedicatedOffers" && (
              <DedicatedOfferDetails
                dedicated-offer={dedicated-offer}
                dedicated-offerId={dedicated-offerId as string}
              />
            )}
            {activeTab === "Business Details" && (
              <>
                {brandLoading && <Loader />}
                {brandError && (
                  <p className="text-red-500 text-center py-8">{brandError}</p>
                )}
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
      </div>
    </div>
  );
}