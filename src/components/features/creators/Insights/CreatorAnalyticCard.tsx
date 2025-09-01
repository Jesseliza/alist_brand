import Image from "next/image";

interface CreatorAnalyticCardProps {
  /** Image source URL */
  imageSrc: string;
  /** Image alt text */
  imageAlt: string;
  /** Image width */
  imageWidth: number;
  /** Image height */
  imageHeight: number;
  /** Image minimum width for mobile */
  imageMinWidth?: number;
  /** Image minimum height for mobile */
  imageMinHeight?: number;
  /** Main title/value text */
  title: string;
  /** Subtitle/description text */
  subtitle: string;
}

export default function CreatorAnalyticCard({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageMinWidth,
  imageMinHeight,
  title,
  subtitle,
}: CreatorAnalyticCardProps) {
  return (
    <article className="w-full bg-white border border-[#EEEEEE] py-[24px] px-[16.5px] pl-[15px] pr-[8px] rounded-[13px] flex items-center gap-4 md:bg-[#F8F8F8] md:py-[24px] md:pl-[26px] md:gap-4">
      <div className="w-[33.33px] h-[32px] flex items-center justify-center md:w-[54.44px] md:h-[48.79px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageMinWidth || imageWidth}
          height={imageMinHeight || imageHeight}
          className="md:w-[54.44px] md:h-[48.79px]"
        />
      </div>
      <div className="flex flex-col-reverse md:flex-col">
        <p className="text-[15px] font-semibold text-[#4F4F4F] leading-[23px] md:text-[22px] md:leading-[31px]">
          {title}
        </p>
        <p className="text-[11px] text-[#4F4F4F] leading-[17px] mt-0 md:text-[18px] md:leading-[27px] md:-mt-[3px]">
          {subtitle}
        </p>
      </div>
    </article>
  );
}
