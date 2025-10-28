import Image from "next/image";
import { DedicatedOfferDisplay } from "@/types/entities/dedicated-offer";
import TruncatedText from "@/components/general/TruncatedText";

export default function DedicatedOfferMobileCard({
  dedicatedOffer,
}: {
  dedicatedOffer: DedicatedOfferDisplay;
}) {
  const {
    title,
    vendorName,
    thumbnailUrl,
    category,
    offerDate,
    // is_dedicated,
  } = dedicatedOffer;

  return (
    <div className="bg-white rounded-[13px] p-3.5 cursor-pointer">
      <div className="flex gap-5 items-center">
        <div className="relative w-[86.31px] h-[86.31px] rounded-[10px] overflow-hidden bg-[#E1E1E1]">
          <Image
            src={thumbnailUrl || '/images/no_image.png'}
            alt={title ?? "Dedicated Offer thumbnail"}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="text-[15px] font-semibold leading-[1.5] text-[#4F4F4F] mb-1.5">
                <TruncatedText text={title ?? "Untitled Dedicated Offer"} maxLength={20} />
              </h3>
              <p className="text-[13px] font-medium text-[#414141] leading-[1.5]">
                By <TruncatedText text={vendorName ?? "Unknown Vendor"} maxLength={20} />
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Image
                src={
                  dedicatedOffer.account_status === "Approved"
                    ? "/icons/campaign/card/active-light.svg"
                    : dedicatedOffer.account_status === "Rejected"
                    ? "/icons/campaign/card/rejected-red.svg"
                    : "/icons/campaign/card/pending-light.svg"
                }
                alt="status"
                width={11.6}
                height={11.6}
              />
              <p
                className={`text-[13px] font-medium ${
                  dedicatedOffer.account_status === "Approved"
                    ? "text-green-500"
                    : dedicatedOffer.account_status === "Rejected"
                    ? "text-red-500"
                    : "text-[#757575]"
                }`}
              >
                {dedicatedOffer.account_status}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[13px] leading-[1.5] text-[#757575] inline-flex items-center justify-center gap-1.5 ">
              <Image
                src="/icons/campaign/card/delivery-approved.svg"
                alt="category"
                width={12.155}
                height={11.8261}
              />
              <p>{category}</p>
            </div>
            <div className="text-[13px] leading-[1.5] text-[#757575]">
              {offerDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}