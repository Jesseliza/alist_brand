import Image from "next/image";
import { DedicatedOfferDisplay } from "@/types/entities/dedicated-offer";

export default function DedicatedOfferPlans({ dedicatedOffer }: { dedicatedOffer: DedicatedOfferDisplay }) {
  if (!dedicatedOffer) {
    return null;
  }

  return (
    <div>
      <div className=" mt-5 mb-4">
        <h4 className="text-center text-[15px] text-[#7E7E7E] leading-[23px] mb-5 ">
          Offer plan
        </h4>
      </div>
      <div className="bg-[#F8F8F8] rounded-[11px] px-[39px] pt-[37px] pb-[27px]">
        <h5 className="text-[32px] leading-[48px] font-medium text-[#787878]">
          <span className="text-[#00A4B6]">
            {dedicatedOffer.amount ? dedicatedOffer.amount.toLocaleString() : "N/A"}{" "}
          </span>
          AED
        </h5>
        <p className="text-[15px] leading-[23px] text-[#4F4F4F]">
          Next bill is for{" "}
          <span className="font-semibold">
            {dedicatedOffer.amount ? dedicatedOffer.amount.toLocaleString() : "N/A"}{" "}
            AED
          </span>{" "}
          on{" "}
          <span className="font-semibold">
            N/A
          </span>
          .
        </p>
        <div className="h-[2px] w-[155px] mt-[13px] mb-8 rounded-full"></div>
        <p className="text-[11px] leading-[17px] text-[#4F4F4F]">
          Payment Date : N/A
        </p>
        <div className="flex items-center gap-[5.5px]">
          <Image
            src="/icons/campaign/details/overview/mastercard.svg"
            alt="card"
            width={24}
            height={16}
          />
          <p className="text-[11px] leading-[17px] text-[#4F4F4F]">
            ending in N/A
          </p>
        </div>
      </div>
    </div>
  );
}