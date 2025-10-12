"use client";

import Image from "next/image";
import { DedicatedOffer } from "@/types/entities";
import DedicatedOfferStats from "./Overview/DedicatedOfferStats";
import DedicatedOfferCreators from "./Overview/DedicatedOfferCreators";
import DedicatedOfferDetails from "./Overview/DedicatedOfferDetails";
import DedicatedOfferGuidlines from "./Overview/DedicatedOfferGuidlines";
import DedicatedOfferPlans from "./Overview/DedicatedOfferPlans";

export default function Overview({
  dedicated-offer,
}: {
  dedicated-offer: DedicatedOffer;
}) {
  return (
    <div className="max-w-[774px] mx-auto mt-[13px] pb-[100px]">
      <div className="flex bg-[#F8F8F8] rounded-[13px] overflow-hidden">
        {/* left accent stripe */}
        <div className="w-[17.77px] bg-[#00A4B6]" />

        {/* main content */}
        <div className="flex-1 flex items-center justify-between pr-[11px]  py-[11px]">
          {/* text block */}
          <div className="ml-[35px]">
            <div className="flex items-center gap-6">
              <h2 className="text-[89px] font-bold text-[#00A4B6] leading-[133px]">
                {dedicated-offer.food_offer_user_count ?? 0}
              </h2>
              <h2 className="text-[37px] font-medium text-[#4F4F4F] leading-[37px] max-w-[180px]">
                Total Vouchers
              </h2>
            </div>
            <p className="-mt-[16px] text-[15px] leading-[23px] text-[#4F4F4F]">
              of which{" "}
              <span className=" text-[#00A4B6]">
                {dedicated-offer.food_offer_user_with_user_count ?? 0}
              </span>{" "}
              vouchers have been redeemed
            </p>
          </div>

          {/* image */}
          <div className="w-[204] h-[204px] rounded-[11px] aspect-square overflow-hidden">
            <Image
              src={dedicated-offer.banner_image ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/assets/uploads/foodoffers/${dedicated-offer.banner_image}` : '/images/no_image.png'}
              alt={dedicated-offer.title ?? "DedicatedOffer thumbnail"}
              className="w-full h-full object-cover rounded-[11px]"
              width={204}
              height={204}
            />
          </div>
        </div>
      </div>

      <DedicatedOfferStats dedicated-offer={dedicated-offer} />
      <DedicatedOfferCreators dedicated-offer={dedicated-offer} />
      <DedicatedOfferDetails dedicated-offer={dedicated-offer} />
      {dedicated-offer?.account_status === "Rejected" &&
        <div className="mt-[11px] rounded-[11px] bg-[#F8F8F8] px-[35px] py-[30px] text-[15px] leading-[23px] text-[#4F4F4F]">
          <p className="font-medium">Reject Reason:</p>
          <div dangerouslySetInnerHTML={{ __html: dedicated-offer.rejectReason ?? "No reason available." }} />
        </div>
      }
      <div className="mt-[11px] rounded-[11px] bg-[#F8F8F8] px-[35px] py-[30px] text-[15px] leading-[23px] text-[#4F4F4F]">
        <p className="font-medium">Description:</p>
        <div dangerouslySetInnerHTML={{ __html: dedicated-offer.description ?? "No description available." }} />
      </div>
      <div className="mt-[12.5px] rounded-[11px] bg-[#F8F8F8] px-[35px] py-[30px] text-[15px] leading-[23px] text-[#4F4F4F]">
        <p className="font-medium">DedicatedOffer Message:</p>
        <div dangerouslySetInnerHTML={{ __html: dedicated-offer.phone_dedicated-offer_message ?? "No message available." }} />
      </div>
      <div className="border-b border-[#E2E2E2]">
        <DedicatedOfferGuidlines dedicated-offer={dedicated-offer} />
      </div>
      <DedicatedOfferPlans dedicated-offer={dedicated-offer} />
    </div>
  );
}