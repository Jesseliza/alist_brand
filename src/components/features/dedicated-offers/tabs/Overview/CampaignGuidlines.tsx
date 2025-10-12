import { DedicatedOffer } from "@/types/entities";

interface DedicatedOfferGuidlinesProps {
  dedicated-offer: DedicatedOffer;
}

export default function DedicatedOfferGuidlines({
  dedicated-offer,
}: DedicatedOfferGuidlinesProps) {
  return (
    <div className="mt-[10px] mb-[6px] rounded-[11px] bg-[#F8F8F8] px-[35px] py-[30px] text-[15px] leading-[23px] text-[#4F4F4F]">
      <p className="font-medium">Content Guidelines:</p>
      <div className="flex flex-col gap-4 mt-4">
        {dedicated-offer.rule_1 && (
          <div dangerouslySetInnerHTML={{ __html: dedicated-offer.rule_1 }} />
        )}
        {dedicated-offer.rule_2 && (
          <div dangerouslySetInnerHTML={{ __html: dedicated-offer.rule_2 }} />
        )}
        {dedicated-offer.rule_3 && (
          <div dangerouslySetInnerHTML={{ __html: dedicated-offer.rule_3 }} />
        )}
      </div>
    </div>
  );
}
