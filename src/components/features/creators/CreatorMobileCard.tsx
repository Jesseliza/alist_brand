import Image from "next/image";
import { Creator } from "@/types/entities";
const instagramIcon = "/icons/creator-socials/instagram.svg";
const tiktokIcon = "/icons/creator-socials/tiktok.svg";
const snapchatIcon = "/icons/creator-socials/snapchat.svg";
const twitchIcon = "/icons/creator-socials/twitch.svg";
const youtubeIcon = "/icons/creator-socials/youtube.svg";
const diamondIcon = "/icons/creator-socials/special.svg";
const verifiedIcon = "/icons/common/check.svg";
const menuIcon = "/icons/common/menu-dots.svg";

export default function CreatorMobileCard({ creator }: { creator: Creator }) {
  return (
    <div className="bg-white rounded-[11px] cursor-pointer">
      <div className="relative flex justify-between items-start mb-2.5 pt-5.75 px-5.5  border-b border-[#F8F8F8]">
        <div className="flex items-start gap-3">
          <div className="relative">
            <div className="w-[81px] h-[81px] rounded-full overflow-hidden relative">
              <Image
                src={creator.avatarUrl}
                alt={creator.fullName}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-0 -right-0">
              <Image
                src={verifiedIcon}
                alt="verified"
                width={18.64}
                height={18.64}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[#333333] text-[18px] font-medium">
              {creator.fullName}
            </h3>
            <div className="flex gap-2">
              <div className="flex gap-2">
                <Image
                  src={instagramIcon}
                  alt="Instagram"
                  width={12.83}
                  height={12.83}
                />
                <Image
                  src={tiktokIcon}
                  alt="TikTok"
                  width={11.27}
                  height={12.83}
                />
                <Image
                  src={snapchatIcon}
                  alt="Snapchat"
                  width={13.06}
                  height={12.25}
                />
                <Image
                  src={twitchIcon}
                  alt="Twitch"
                  width={11.18}
                  height={11.67}
                />
                <Image
                  src={youtubeIcon}
                  alt="YouTube"
                  width={15.65}
                  height={10.96}
                />
              </div>
            </div>
            <div className="flex gap-2 mb-6">
              <div className="px-4 py-0.25 bg-[#37474F] text-white rounded-full text-[11px]">
                Mega
              </div>
              <div className="px-4 py-0.25 bg-[#F8F8F8]  text-[#4F4F4F] rounded-full text-[11px] flex items-center gap-1">
                <span>
                  <Image
                    src={diamondIcon}
                    alt="diamond"
                    width={10.71}
                    height={9.69}
                  />
                </span>{" "}
                Special
              </div>
            </div>
          </div>
        </div>

        <button className="absolute right-4 top-5.5 cursor-pointer">
          <Image src={menuIcon} alt="YouTube" width={21.48} height={4.67} />
        </button>
      </div>

      <div className="pl-5.5 pr-6.5 pb-4">
        <div className="text-[11px] text-[#4A5568] mb-2.5">
          Profile completion
        </div>
        <div className="flex justify-center items-center gap-2.5">
          <div className="text-[11px] text-[#4F4F4F]">
            {creator.profileCompletion}%
          </div>
          <div className="flex-1 bg-gray-200 rounded-full h-[11.75px]">
            <div
              className="bg-[#00A4B6] h-[11.75px] rounded-full"
              style={{ width: `${creator.profileCompletion}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
