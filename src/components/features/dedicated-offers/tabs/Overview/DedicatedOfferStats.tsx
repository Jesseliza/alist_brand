import { DedicatedOffer } from "@/types/entities/dedicated-offer";

export default function DedicatedOfferStats({
  dedicatedOffer,
}: {
  dedicatedOffer: DedicatedOffer;
}) {
  return (
    <div className="mt-[11px] grid grid-cols-2 gap-[11px]">
      <div className="bg-[#F8F8F8] rounded-[11px] px-[25px] py-[11px] text-[15px] leading-[23px] text-[#4F4F4F]">
        <p className="font-medium">Offer Date</p>
        <p>{dedicatedOffer.offer_date}</p>
      </div>
      <div className="bg-[#F8F8F8] rounded-[11px] px-[25px] py-[11px] text-[15px] leading-[23px] text-[#4F4F4F]">
        <p className="font-medium">Offer Time</p>
        <p>
          {dedicatedOffer.offer_start_time} - {dedicatedOffer.offer_end_time}
        </p>
      </div>
    </div>
  );
}