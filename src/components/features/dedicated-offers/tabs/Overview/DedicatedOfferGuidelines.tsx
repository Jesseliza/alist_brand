import { DedicatedOffer } from "@/types/entities/dedicated-offer";

export default function DedicatedOfferGuidelines({
  dedicatedOffer,
}: {
  dedicatedOffer: DedicatedOffer;
}) {
  return (
    <div className="mt-[11px] rounded-[11px] bg-[#F8F8F8] px-[35px] py-[30px] text-[15px] leading-[23px] text-[#4F4F4F]">
      <p className="font-medium">Guidelines</p>
      <div
        dangerouslySetInnerHTML={{
          __html: dedicatedOffer.confirmation_message,
        }}
      />
    </div>
  );
}