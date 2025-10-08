"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface CampaignPageHeaderProps {
  title: string;
}

export default function CampaignPageHeader({ title }: CampaignPageHeaderProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-between py-[20.5px] px-[27px] border-b border-[#E2E2E2]">
      <button onClick={handleBackClick} className="cursor-pointer">
        <Image
          src="/icons/campaign/details/back-arrow.svg"
          alt="back"
          width={35}
          height={35}
        />
      </button>
      <h4 className="text-[18px] leading-[27px] font-semibold text-[#4F4F4F]">
        {title}
      </h4>
      <button className="cursor-pointer">
        <Image
          src="/icons/campaign/details/menu-dots.svg"
          alt="share"
          width={35}
          height={35}
        />
      </button>
    </div>
  );
}