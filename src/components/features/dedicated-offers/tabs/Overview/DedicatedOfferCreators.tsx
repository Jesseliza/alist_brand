import { DedicatedOffer } from "@/types/entities/dedicated-offer";

export default function DedicatedOfferCreators({
  dedicatedOffer,
}: {
  dedicatedOffer: DedicatedOffer;
}) {
  return (
    <div className="mt-[11px] grid grid-cols-2 gap-[11px]">
      <div className="bg-[#F8F8F8] rounded-[11px] px-[25px] py-[11px] text-[15px] leading-[23px] text-[#4F4F4F]">
        <p className="font-medium">Gender</p>
        <p>{dedicatedOffer.offer_gender}</p>
      </div>
      <div className="bg-[#F8F8F8] rounded-[11px] px-[25px] py-[11px] text-[15px] leading-[23px] text-[#4F4F4F]">
        <p className="font-medium">Age Range</p>
        <p>
          {dedicatedOffer.min_age} - {dedicatedOffer.max_age}
        </p>
      </div>
    </div>
  );
}