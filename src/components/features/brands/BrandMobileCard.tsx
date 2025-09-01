"use client";

import { Brand } from "@/types/entities";
import Image from "next/image";

export default function BrandCardMobile({ brand }: { brand: Brand }) {
  return (
    <div className="bg-white rounded-[13px] p-6">
      {/* Top section with logo and main info */}
      <div className="flex items-start gap-4">
        <div className="h-[75px] w-[75px] rounded-full overflow-hidden relative flex-shrink-0 border-[5px] border-[#EEEEEE]">
          <Image
            src={brand.logo}
            alt={brand.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[17px] font-medium text-[#4F4F4F] mb-1">
            {brand.name}
          </h3>
          <p className="text-[15px] text-[#4F4F4F] mb-1">
            {`${brand.associateFirstName} ${brand.associateLastName}`}
          </p>
          <p className="text-[15px] text-[#4F4F4F] overflow-hidden text-ellipsis whitespace-nowrap">
            {brand.emailAddress}
          </p>
        </div>
      </div>

      {/* Bottom section with 3 info items */}
      <div className="grid grid-cols-3 gap-5 mt-6">
        <div className="rounded-[11px] pt-4 pb-5 flex items-center justify-center mb-2 flex-col gap-[16px] [box-shadow:0px_0px_2px_rgba(0,0,0,0.16)]">
          <div className="h-[33px] w-[40px] flex items-center justify-center">
            <Image
              src="/icons/store.svg"
              alt="Industry"
              width={39.58}
              height={33.62}
            />
          </div>
          <p className="text-[11px] text-[#4F4F4F]">{brand.industry}</p>
        </div>

        <div className="rounded-[11px] flex items-center justify-center mb-2 flex-col gap-[16px] [box-shadow:0px_0px_2px_rgba(0,0,0,0.16)]">
          <div className="h-[33px] w-[40px] flex items-center justify-center">
            <Image
              src="/icons/instagram.svg"
              alt="Social"
              width={32.71}
              height={32.71}
            />
          </div>
          <p className="text-[11px] text-[#4F4F4F]">{brand.instagramHandle}</p>
        </div>

        <div className="rounded-[11px] flex items-center justify-center mb-2 flex-col gap-[16px] [box-shadow:0px_0px_2px_rgba(0,0,0,0.16)]">
          <div className="h-[33px] w-[40px] flex items-center justify-center">
            <Image
              src="/icons/calendar.svg"
              alt="Date"
              width={30.64}
              height={29.84}
            />
          </div>
          <p className="text-[11px] text-[#4F4F4F]">
            {brand.offersCount} offers
          </p>
        </div>
      </div>
    </div>
  );
}
