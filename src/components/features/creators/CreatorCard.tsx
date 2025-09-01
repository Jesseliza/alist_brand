import Image from "next/image";
import { Creator } from "@/types/entities";

export default function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <article className="w-full bg-white rounded-[13px] overflow-hidden pt-[22px] pb-[35px] px-[19px] cursor-pointer">
      {/* Header with menu dots */}
      <div className="flex justify-between gap-[32px]">
        {/* Profile Section */}
        <div>
          {/* Profile Picture with Verified Badge */}
          <div className="relative mb-4">
            <div className="w-[75.3px] h-[75.3px] rounded-full overflow-hidden">
              <Image
                src={creator.avatarUrl}
                alt={creator.fullName}
                width={75.3}
                height={75.3}
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-0 ">
              <Image
                src="/icons/creator/verified.svg"
                alt="Verified"
                width={18.64}
                height={18.64}
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[15px] font-medium text-[#4F4F4F] mb-[7px] leading-[23px]">
            {creator.fullName}
          </h2>
          {/* Social Media Icons */}
          <div className="flex gap-[13px] items-center mb-[11px]">
            <Image
              src="/icons/creator/instagram.svg"
              alt="Instagram"
              width={12.83}
              height={12.83}
            />
            <Image
              src="/icons/creator/tiktok.svg"
              alt="TikTok"
              width={11.27}
              height={12.83}
            />
            <Image
              src="/icons/creator/snapchat.svg"
              alt="Snapchat"
              width={13.06}
              height={12.25}
            />
            <Image
              src="/icons/creator/twitch.svg"
              alt="Twitch"
              width={11.18}
              height={11.67}
            />
            <Image
              src="/icons/creator/youtube.svg"
              alt="YouTube"
              width={15.65}
              height={10.96}
            />
          </div>
          {/* Tags */}
          <div className="flex gap-3 mb-6">
            <div className="bg-[#B56576] text-white  rounded-[14px] text-[11px] leading-[17px] py-[1px] px-4">
              Macro
            </div>
            <div className="bg-[#F8F8F8] rounded-[14px] text-[11px] flex items-center py-[1px] pl-1 pr-2.5 gap-[5.5px] text-[#4F4F4F]">
              <Image
                src="/icons/creator/instaverified.svg"
                alt="Instagram Verified"
                width={12.18}
                height={12.18}
              />
              Insta verified
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-2.5 pb-[17px] border-b border-[#F8F8F8] mb-[18.5px]">
        {/* Credibility */}
        <div className="flex gap-2 flex-col justify-center items-center bg-white rounded-[11px]  shadow-[0_0_2px_rgba(0,0,0,0.16)] aspect-square">
          <div className="h-[29px] flex items-center justify-center">
            <div className="text-[21px] font-bold text-[#505050] leading-[31px]">
              {creator.credibilityScore}%
            </div>
          </div>
          <div className="text-[11px] text-[#414141] leading-[20px]">
            Credibility
          </div>
        </div>

        {/* Date */}
        <div className="flex  gap-2 flex-col justify-center items-center bg-white rounded-[11px]  shadow-[0_0_2px_rgba(0,0,0,0.16)] aspect-square">
          <div className="h-[29px] flex items-center justify-center">
            <Image
              src="/icons/creator/date.svg"
              alt="Date"
              width={26.04}
              height={25.36}
            />
          </div>
          <div className="text-[11px] text-[#414141] leading-[20px]">
            {creator.signUpDate.toLocaleDateString()}
          </div>
        </div>

        {/* Location */}
        <div className="flex  gap-2 flex-col justify-center items-center bg-white rounded-[11px]  shadow-[0_0_2px_rgba(0,0,0,0.16)] aspect-square">
          <div className="h-[29px] flex items-center justify-center">
            <Image
              src="/icons/creator/location.svg"
              alt="Location"
              width={23.33}
              height={27.1}
            />
          </div>
          <div className="text-[11px] text-[#414141] leading-[20px] text-center">
            {creator.location}
          </div>
        </div>
      </div>

      {/* Profile Completion */}
      <div className="mb-[23px]">
        <h3 className="text-[11px] text-[#8C8C8C] leading-[17px] mb-2.5">
          Profile completion
        </h3>
        <div className="flex justify-between items-center gap-1.5">
          <span className="text-[11px] text-[#4F4F4F] leading-[17px] w-[26px] ">
            {creator.profileCompletion}%
          </span>
          <div className="w-full bg-[#F3F3F3] rounded-[14px] h-[11.75px]">
            <div
              className="bg-[#00A4B6] h-full rounded-[14px]"
              style={{ width: `${creator.profileCompletion}%` }}
            />
          </div>
        </div>
      </div>

      {/* Influencer Tags */}
      <div>
        <h3 className="text-[11px] text-[#8C8C8C] leading-[17px] mb-2.5">
          Influencer Tags
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {creator.influencerTags.slice(0, 3).map((tag, index) => (
            <div
              key={index}
              className="bg-[#00A4B6] text-white px-2.5 rounded-[14px] text-[11px] leading-[17px]"
            >
              {tag}
            </div>
          ))}
          {creator.influencerTags.length > 3 && (
            <div className="text-[#00A4B6] text-[11px] leading-[17px] font-semibold">
              +{creator.influencerTags.length - 3}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
