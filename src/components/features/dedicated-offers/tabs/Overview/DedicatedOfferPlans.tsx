import { DedicatedOffer } from "@/types/entities/dedicated-offer";

export default function DedicatedOfferPlans({
  dedicatedOffer,
}: {
  dedicatedOffer: DedicatedOffer;
}) {
  return (
    <div className="mt-[11px] rounded-[11px] bg-[#F8F8F8] px-[35px] py-[30px] text-[15px] leading-[23px] text-[#4F4F4F]">
      <p className="font-medium">User Types</p>
      <p>{dedicatedOffer.user_types}</p>
    </div>
  );
}