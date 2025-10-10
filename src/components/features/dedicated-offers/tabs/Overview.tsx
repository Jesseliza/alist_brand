"use client";

import { DedicatedOffer } from "@/types/entities/brand";

export default function Overview({
  offer,
}: {
  offer: DedicatedOffer;
}) {
  return (
    <div className="max-w-[774px] mx-auto mt-[13px] pb-[100px]">
      <div className="mt-[11px] rounded-[11px] bg-[#F8F8F8] px-[35px] py-[30px] text-[15px] leading-[23px] text-[#4F4F4F]">
        <p className="font-medium">Description:</p>
        <div dangerouslySetInnerHTML={{ __html: offer.description ?? "No description available." }} />
      </div>
      <div className="mt-[12.5px] rounded-[11px] bg-[#F8F8F8] px-[35px] py-[30px] text-[15px] leading-[23px] text-[#4F4F4F]">
        <p className="font-medium">Offer Date:</p>
        <p>
            {new Date(offer.offer_date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            })}
        </p>
      </div>
    </div>
  );
}