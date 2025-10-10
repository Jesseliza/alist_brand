"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { getDedicatedOfferDetailsStart } from "@/store/dedicated-offers/dedicatedOffersSlice";
import { RootState } from "@/store/store";
import Loader from "@/components/general/Loader";
import DedicatedOfferDetails from "@/components/features/dedicated-offers/DedicatedOfferDetails";
import BrandHeader from "@/components/features/brands/BrandHeader";

export default function DedicatedOfferDetailsPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const router = useRouter();
  const { offerId } = params;

  const {
    dedicatedOffer,
    loading,
    error,
  } = useSelector((state: RootState) => state.dedicatedOffers);

  useEffect(() => {
    if (offerId) {
      dispatch(getDedicatedOfferDetailsStart({ id: offerId as string }));
    }
  }, [dispatch, offerId]);

  const handleBackClick = () => {
    router.push("/businesses/dedicated-offers");
  };

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
          tabs={[]}
          activeTab=""
          onTabChange={() => {}}
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
            <DedicatedOfferDetails
              offer={dedicatedOffer}
              offerId={offerId as string}
            />
          </div>
        </div>
      </div>
    </div>
  );
}