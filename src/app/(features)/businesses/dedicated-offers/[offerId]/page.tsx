"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { getDedicatedOfferDetailsStart } from "@/store/dedicated-offers/dedicatedOffersSlice";
import { RootState } from "@/store/store";
import Loader from "@/components/general/Loader";
import BrandHeader from "@/components/features/brands/BrandHeader";

export default function DedicatedOfferDetailsPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const { offerId } = params;

  const {
    dedicatedOffer,
    loading,
    error,
  } = useSelector((state: RootState) => state.dedicatedOffers);

  const [activeTab, setActiveTab] = useState("Overview");

  useEffect(() => {
    if (offerId) {
      dispatch(getDedicatedOfferDetailsStart({ id: offerId as string }));
    }
  }, [dispatch, offerId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!dedicatedOffer) {
    return <Loader />;
  }

  return (
    <div className="py-6">
      <div className="max-w-[1428px] mx-auto">
        <BrandHeader
          name={dedicatedOffer.offer_title}
          subtitle="Dedicated Offer Details"
          logo={null}
          tabs={["Overview", "Creators"]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <div className="mt-6 bg-white rounded-[13px] p-6">
          {activeTab === "Overview" && (
            <div
              dangerouslySetInnerHTML={{ __html: dedicatedOffer.description }}
            />
          )}
          {activeTab === "Creators" && (
            <div>
              <p>Creators tab content goes here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}