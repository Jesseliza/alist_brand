import Image from "next/image";
import { useState } from "react";
import ImageSliderModal from "./ImageSliderModal";

interface CampaignDetailsPostProps {
  authorImage: string | null;
  authorName: string;
  instagramUsername: string;
  stats: {
    followers: string;
    reach: string;
    engagement: string;
  };
  postImages: string[];
}

const getInitials = (name: string): string => {
  if (!name) return "";
  const words = name.trim().split(" ").filter(Boolean);
  if (words.length > 1 && words[1]) {
    return `${words[0][0]}${words[1][0]}`.toUpperCase();
  }
  if (words[0]?.length > 1) {
    return words[0].substring(0, 2).toUpperCase();
  }
  if (words[0]) {
    return words[0][0].toUpperCase();
  }
  return "";
};

export default function CampaignDetailsPost({
  authorImage,
  authorName,
  instagramUsername,
  stats,
  postImages,
}: CampaignDetailsPostProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const openModal = (index: number) => {
    setInitialSlide(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const imagesToShow = postImages.slice(0, 3);
  const remainingImagesCount = postImages.length - 3;

  return (
    <>
      <article className="w-full max-w-[412px] rounded-[13px] md:shadow-[0_0_4px_rgba(0,0,0,0.16)] p-4">
        <div className="w-[72.64px] h-[72.64px] rounded-full overflow-hidden mx-auto flex items-center justify-center bg-gray-200">
          {authorImage ? (
            <Image
              src={authorImage}
              alt={authorName}
              width={72.64}
              height={72.64}
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-2xl font-bold text-gray-600">
              {getInitials(authorName)}
            </span>
          )}
        </div>
        <div className="mt-[7.7px] text-center">
          <h3 className="text-[15px] font-medium text-[#4F4F4F] leading-[23px]">
            {authorName}
          </h3>
          <div className="flex items-center gap-[5.7]px justify-center">
            <Image
              src="/icons/campaign/details/creators-and-posts/instagram.svg"
              alt="Instagram"
              width={8.83}
              height={8.83}
            />
            <a
              href={`https://www.instagram.com/${instagramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] leading-[17px] text-[#4F4F4F] hover:underline"
            >
              {instagramUsername}
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[7.7px] mb-[14.6px]">
          <div className="flex-1 text-center">
            <p className="text-[15px] font-medium text-[#00A4B6] leading-[22px]">
              {stats.followers}
            </p>
            <p className="text-[9px] leading-[13px] text-[#4F4F4F]">
              Followers
            </p>
          </div>
          <div className="w-[1px] h-[18.65px] bg-[#00A4B6]"></div>
          <div className="flex-1 text-center">
            <p className="text-[15px] font-medium text-[#00A4B6] leading-[22px]">
              {stats.reach}
            </p>
            <p className="text-[9px] leading-[13px] text-[#4F4F4F]">Reach</p>
          </div>
          {/* <div className="w-[1px] h-[18.65px] bg-[#00A4B6]"></div>
          <div className="flex-1 text-center">
            <p className="text-[15px] font-medium text-[#00A4B6] leading-[22px]">
              {stats.engagement}
            </p>
            <p className="text-[9px] leading-[13px] text-[#4F4F4F]">
              Engagement
            </p>
          </div> */}
        </div>
        <div className="flex items-center justify-center gap-3">
          {imagesToShow.map((image, index) => (
            <div
              key={index}
              className="w-[119px] h-[119px] rounded-[13px] cursor-pointer relative"
              onClick={() => openModal(index)}
            >
              <Image
                src={image}
                alt={`Post ${index + 1}`}
                width={119}
                height={119}
                className="rounded-[13px] object-cover w-full h-full"
              />
              {index === 2 && remainingImagesCount > 0 && (
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center rounded-[13px]">
                  <p className="text-gray-800 text-2xl font-bold">
                    +{remainingImagesCount}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </article>

      <ImageSliderModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={postImages}
        initialSlide={initialSlide}
      />
    </>
  );
}
