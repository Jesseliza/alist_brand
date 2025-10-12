import Image from "next/image";
import { DedicatedOffer } from "@/types/entities";

interface DedicatedOfferPlansProps {
  dedicated-offer: DedicatedOffer;
}

export default function DedicatedOfferPlans({ dedicated-offer }: DedicatedOfferPlansProps) {
  if (!dedicated-offer?.dedicated-offerPlan) {
    return null;
  }

  return (
    <div>
      <div className=" mt-5 mb-4">
        <h4 className="text-center text-[15px] text-[#7E7E7E] leading-[23px] mb-5 ">
          DedicatedOffer plan
        </h4>
      </div>
      <div className="bg-[#F8F8F8] rounded-[11px] px-[39px] pt-[37px] pb-[27px]">
        <h5 className="text-[32px] leading-[48px] font-medium text-[#787878]">
          <span className="text-[#00A4B6]">
            {dedicated-offer.dedicated-offerPlan.planName}{" "}
          </span>
          {dedicated-offer.dedicated-offerPlan.planType}
        </h5>
        <p className="text-[15px] leading-[23px] text-[#4F4F4F]">
          Next bill is for{" "}
          <span className="font-semibold">
            {dedicated-offer.dedicated-offerPlan.nextBillAmount.toLocaleString()}{" "}
            {dedicated-offer.dedicated-offerPlan.nextBillCurrency}
          </span>{" "}
          on{" "}
          <span className="font-semibold">
            {dedicated-offer.dedicated-offerPlan.nextBillDate}
          </span>
          .
        </p>
        <div className="h-[2px] w-[155px] mt-[13px] mb-8 rounded-full"></div>
        <p className="text-[11px] leading-[17px] text-[#4F4F4F]">
          Payment Date : {dedicated-offer.dedicated-offerPlan.paymentDate}
        </p>
        <div className="flex items-center gap-[5.5px]">
          <Image
            src="/icons/dedicated-offer/details/overview/mastercard.svg"
            alt="card"
            width={24}
            height={16}
          />
          <p className="text-[11px] leading-[17px] text-[#4F4F4F]">
            ending in {dedicated-offer.dedicated-offerPlan.cardEnding}
          </p>
        </div>
      </div>
    </div>
  );
}