import Image from "next/image";
import { DedicatedOfferDisplay } from "@/types/entities/dedicated-offer";

export default function DedicatedOfferMobileCard({
  dedicatedOffer,
}: {
  dedicatedOffer: DedicatedOfferDisplay;
}) {
  const {
    title,
    vendorName,
    thumbnailUrl,
    campaignType,
    is_dedicated,
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
          <div className="flex items-center gap-2 mb-2">
            <div>
              <h3 className="text-[15px] font-semibold leading-[1.5] text-[#4F4F4F] mb-1.5">
                {title ?? "Untitled Dedicated Offer"}
              </h3>
              <p className="text-[13px] font-medium text-[#414141] leading-[1.5]">
                By {vendorName ?? "Unknown Vendor"}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[13px] leading-[1.5] text-[#757575] inline-flex items-center justify-center gap-1.5 ">
              <Image
                src="/icons/general/barter-1-dark.svg"
                alt="barter"
                width={10.01}
                height={10.01}
              />
              <p>{is_dedicated === 1 ? "Dedicated" : "Normal"}</p>
            </div>
            <div
              className={`text-[#757575] inline-flex items-center justify-center gap-1.5 `}
            >
              {campaignType === "WalkIn" && (
                <Image
                  src="/icons/general/walk-in-1-dark.svg"
                  alt="walk in"
                  width={8.42}
                  height={13.85}
                />
              )}
              {campaignType === "Delivery" && (
                <Image
                  src="/icons/general/delivery-1-dark.svg"
                  alt="delivery"
                  width={12.155}
                  height={11.8261}
                />
              )}
              {campaignType === "Online" && (
                <Image
                  src="/icons/general/online-1-dark.svg"
                  alt="online"
                  width={9.412}
                  height={9.412}
                />
              )}
              {campaignType === "Exclusive" && (
                <Image
                  src="/icons/general/exclusive-1-dark.svg"
                  alt="exclusive"
                  width={9.9775}
                  height={8.606}
                />
              )}
              <span className="text-[13px] leading-[1.5]">
                {campaignType}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}