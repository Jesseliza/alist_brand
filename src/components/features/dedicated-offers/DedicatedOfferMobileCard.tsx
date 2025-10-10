import Image from "next/image";
import { CampaignDisplay } from "@/types/entities/campaign";

export default function DedicatedOfferMobileCard({
  offer,
}: {
  offer: CampaignDisplay;
}) {
  const {
    title,
    vendorName,
    thumbnailUrl,
    offerType,
    startDate,
  } = offer;

  return (
    <div className="bg-white rounded-[13px] p-3.5 cursor-pointer">
      <div className="flex gap-5 items-center">
        <div className="relative w-[86.31px] h-[86.31px] rounded-[10px] overflow-hidden bg-[#E1E1E1]">
          <Image
            src={thumbnailUrl || '/images/no_image.png'}
            alt={title ?? "Offer thumbnail"}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div>
              <h3 className="text-[15px] font-semibold leading-[1.5] text-[#4F4F4F] mb-1.5">
                {title ?? "Untitled Offer"}
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
              <p>{offerType ?? "N/A"}</p>
            </div>
            <div className="text-[13px] leading-[1.5] text-[#757575]">
                {new Date(startDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}