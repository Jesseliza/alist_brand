import { useMemo } from "react";
import Image from "next/image";
import { CampaignDisplay } from "@/types/entities/campaign";
import { generateColorFromString } from "@/utils/colorGenerator";
import { getInitials } from "@/utils/text";

interface DedicatedOfferCardProps {
  campaign: CampaignDisplay;
  onClick: () => void;
}

export default function DedicatedOfferCard({
  campaign,
  onClick,
}: DedicatedOfferCardProps) {
  const {
    title,
    vendorName,
    status,
    brandLogo,
    brandName,
    startDate,
    endDate,
  } = campaign;

  const isOfferActive = useMemo(() => {
    if (!startDate || !endDate) return false;
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    return now >= start && now <= end;
  }, [startDate, endDate]);

  return (
    <article className="w-full bg-white rounded-[13px] overflow-hidden relative">
      <div className="h-[90px] w-full relative bg-[#E1E1E1]">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/assets/uploads/foodoffers/${campaign.banner_image}`}
          alt={`${title} header`}
          fill
          className="object-cover"
        />
        <div className="w-[90px] h-[90px] absolute top-[39px] left-[24px] bg-white rounded-full border-5 border-[#E1E1E1] flex items-center justify-center overflow-hidden">
          {brandLogo ? (
            <Image
              src={brandLogo}
              alt="Brand logo"
              fill
              className="object-cover rounded-full aspect-square"
            />
          ) : (
            <div
              className="h-full w-full flex items-center justify-center"
              style={{
                backgroundColor: generateColorFromString(
                  brandName || title || ""
                ),
              }}
            >
              <span className="text-white text-3xl font-semibold">
                {getInitials(brandName || title || "")}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="pt-[35px] pb-[15px] px-[21px]">
        <div className="">
          <h3 className="text-[15px] font-medium leading-[23px] text-[#4F4F4F]">
            {title}
          </h3>
        </div>
        <div className="flex items-center justify-between mb-[15px]">
          <p className="text-[13px] text-[#414141] leading-[20px]">
            By {vendorName}
          </p>
          <div className="flex gap-[4.5px] items-center">
            <Image
              src={
                isOfferActive
                  ? "/icons/campaign/card/active-light.svg"
                  : "/icons/campaign/card/pending-light.svg"
              }
              alt={status}
              width={11.6}
              height={11.6}
            />
            <p className="text-[13px] text-[#787878] leading-[20px]">
              {status}
            </p>
          </div>
        </div>
        <hr className="border-[#F2F2F2] mb-[15px]" />
        <div className="flex items-center justify-between">
          <p className="text-[13px] text-[#414141] font-medium">Offer Date</p>
          <p className="text-[13px] text-[#787878]">
            {new Date(startDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClick}
            className="text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2"
          >
            Edit
          </button>
        </div>
      </div>
    </article>
  );
}