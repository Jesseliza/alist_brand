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
  const { offerId } = params;

  const [activeTab, setActiveTab] = useState("Dedicated Offers");

  const {
    dedicatedOffer,
    loading: dedicatedOfferLoading,
    error: dedicatedOfferError,
  } = useSelector((state: RootState) => state.dedicatedOffers);

  const {
    brand,
    loading: brandLoading,
    error: brandError,
  } = useSelector((state: RootState) => state.brand);

  useEffect(() => {
    if (offerId) {
      dispatch(getDedicatedOfferDetailsStart({ id: offerId as string }));
    }
  }, [dispatch, offerId]);

  useEffect(() => {
    if (dedicatedOffer && activeTab === "Business Details" && dedicatedOffer.venue) {
      dispatch(fetchBrandRequest({ brandId: String(dedicatedOffer.venue.id) }));
    }
  }, [dispatch, dedicatedOffer, activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const brandId = searchParams.get("brandId");

  const handleBackClick = () => {
    if (from === "brand" && brandId) {
      router.push(`/businesses/brands/${brandId}?tab=Dedicated Offers`);
    } else {
      router.push("/businesses/dedicated-offers");
    }
  };

  if (dedicatedOfferLoading) {
    return <Loader />;
  }

  if (dedicatedOfferError) {
    return <p className="text-red-500">Error: {dedicatedOfferError}</p>;
  }

  if (!dedicatedOffer) {
    return <Loader />;
  }

  return (
    <div className="py-6">
      <div className="max-w-[1428px] mx-auto">
        <BrandHeader
         name={dedicatedOffer.venue?.venue_title || ""}
          subtitle={dedicatedOffer.offer_title}
          logo={dedicatedOffer.venue?.venue_logo || ""}
          tabs={["Business Details", "Dedicated Offers"]}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          pageFrom={"dedicated-offer"}
        />
        <div className="mt-6 bg-white rounded-[13px] p-6">
          <button onClick={handleBackClick} className="cursor-pointer mb-4">
            <Image
              src="/icons/campaign/details/back-arrow.svg"
              alt="back"
              width={35}
              height={35}
            />
          </button>
          <div className="pb-6">
            {activeTab === "Dedicated Offers" && (
              <DedicatedOfferDetails
                dedicatedOffer={dedicatedOffer}
                dedicatedOfferId={offerId as string}
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
                    onFieldChange={() => { }}
                    onSave={() => { }}
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