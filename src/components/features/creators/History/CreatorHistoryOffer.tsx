import Image from "next/image";
import { CreatorHistoryOffer as CreatorHistoryOfferType } from "@/types/entities";

type CreatorHistoryOfferProps = CreatorHistoryOfferType;

export default function CreatorHistoryOffer({
  imageSrc,
  imageAlt,
  title,
  location,
  price,
  walkType,
  dateText,
}: CreatorHistoryOfferProps) {
  return (
    <article className="p-[5px] bg-grey rounded-[13px] flex justify-between md:gap-5 gap-5">
      <div className="flex items-center gap-5 w-full">
        <div className="aspect-square w-[96.31px] h-[96.31px] rounded-[11px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={96.31}
            height={96.31}
            objectFit="cover"
          />
        </div>
        <div className="flex justify-between items-end w-full">
          <div>
            <h4 className="mb-1 truncate text-ellipsis text-[15px] leading-[23px] text-[#4F4F4F] font-semibold">
              {title}
            </h4>
            <p className="mb-2 truncate text-ellipsis text-[15px] leading-[23px] text-[#4F4F4F]">
              {location}
            </p>

            <div className="flex items-center gap-[26px]">
              <div className="flex items-center gap-[7.5px]">
                <Image
                  src="/icons/creator/history/price.svg"
                  alt="price"
                  width={14.11}
                  height={10.85}
                />
                <p className="text-[13px] leading-[20px] text-[#686868] font-medium">
                  {price}
                </p>
              </div>
              <div className="flex items-center gap-[7.5px]">
                <Image
                  src="/icons/creator/history/walk-in.svg"
                  alt="walk"
                  width={8.42}
                  height={13.85}
                />
                <p className="text-[13px] leading-[20px] text-[#686868] font-medium">
                  {walkType}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-light text-[13px] leading-[20px] text-[#686868]">
              {dateText}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
