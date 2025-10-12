import { DedicatedOfferDisplay } from "@/types/entities/dedicated-offer";

export default function DedicatedOfferGuidelines({
  dedicatedOffer,
}: {
  dedicatedOffer: DedicatedOfferDisplay;
}) {
  return (
    <div className="mt-[10px] mb-[6px] rounded-[11px] bg-[#F8F8F8] px-[35px] py-[30px] text-[15px] leading-[23px] text-[#4F4F4F]">
      <p className="font-medium">Content Guidelines:</p>
      <div className="flex flex-col gap-4 mt-4">
        {dedicatedOffer.description && (
          <div dangerouslySetInnerHTML={{ __html: dedicatedOffer.description }} />
        )}
        {dedicatedOffer.confirmation_message && (
          <div
            dangerouslySetInnerHTML={{
              __html: dedicatedOffer.confirmation_message,
            }}
          />
        )}
      </div>
    </div>
  );
}