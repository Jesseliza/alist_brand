import Image from "next/image";

interface CampaignDetailsPostProps {
  authorImage: string;
  authorName: string;
  instagramUsername: string;
  stats: {
    followers: string;
    reach: string;
    engagement: string;
  };
  postImages: string[];
}

export default function CampaignDetailsPost({
  authorImage,
  authorName,
  instagramUsername,
  stats,
  postImages,
}: CampaignDetailsPostProps) {
  return (
    <article className="max-w-[412px] rounded-[13px] md:shadow-[0_0_4px_rgba(0,0,0,0.16)] p-4">
      <div className="w-[72.64px] h-[72.64px] rounded-full overflow-hidden mx-auto">
        <Image
          src={authorImage}
          alt={authorName}
          width={72.64}
          height={72.64}
          className="rounded-full object-cover"
        />
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
          <p className="text-[11px] leading-[17px] text-[#4F4F4F]">
            {instagramUsername}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[7.7px] mb-[14.6px]">
        <div className="flex-1 text-center">
          <p className="text-[15px] font-medium text-[#00A4B6] leading-[22px]">
            {stats.followers}
          </p>
          <p className="text-[9px] leading-[13px] text-[#4F4F4F]">Followers</p>
        </div>
        <div className="w-[1px] h-[18.65px] bg-[#00A4B6]"></div>
        <div className="flex-1 text-center">
          <p className="text-[15px] font-medium text-[#00A4B6] leading-[22px]">
            {stats.reach}
          </p>
          <p className="text-[9px] leading-[13px] text-[#4F4F4F]">Reach</p>
        </div>
        <div className="w-[1px] h-[18.65px] bg-[#00A4B6]"></div>
        <div className="flex-1 text-center">
          <p className="text-[15px] font-medium text-[#00A4B6] leading-[22px]">
            {stats.engagement}
          </p>
          <p className="text-[9px] leading-[13px] text-[#4F4F4F]">Engagement</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        {postImages.map((image, index) => (
          <div key={index} className="flex-1 rounded-[13px]">
            <Image
              src={image}
              alt={`Post ${index + 1}`}
              width={119}
              height={119}
              className="rounded-[13px] object-cover"
            />
          </div>
        ))}
      </div>
    </article>
  );
}
