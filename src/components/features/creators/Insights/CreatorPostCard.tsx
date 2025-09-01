import Image from "next/image";
import { ExternalPost, Creator } from "@/types/entities";

export default function CreatorPostCard({
  post,
  creator,
}: {
  post: ExternalPost;
  creator: Creator;
}) {
  // Format the posted date
  const formattedDate = post.postedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <article className="w-full rounded-[13px] bg-white md:bg-[#F8F8F8] border border-[#EEEEEE] md:px-[25px] px-[20px] md:pb-[26px] pb-[21px] md:pt-[18px] pt-[15px]">
      <div className="flex items-center md:gap-[22px] gap-[18px]">
        {creator?.avatarUrl && (
          <Image
            src={creator.avatarUrl}
            alt="poster"
            width={35.53}
            height={35.53}
            className="aspect-square rounded-full md:w-[44px] md:h-[44px]"
          />
        )}
        <p className="truncate md:text-[15px] text-[13px] md:leading-[23px] leading-[20px] text-[#4F4F4F]">
          Posted on {formattedDate}
        </p>
      </div>
      <div className="rounded-[13px] aspect-square max-w-[297.95px] max-h-[297.95px] md:max-w-[369px] md:max-h-[369px] md:mt-4 mt-3.25">
        <Image
          src={post.imageUrl}
          alt="post"
          width={297.95}
          height={297.95}
          className="md:w-[369px] md:h-[369px]"
        />
      </div>
      <div className="flex items-center md:gap-[39px] gap-[30px] md:mt-[18px] mt-4">
        <div className="flex items-center md:gap-[11px] gap-[9px]">
          <Image
            src="/icons/creator/insights/posts/likes.svg"
            alt="like"
            width={19.94}
            height={18.06}
            className="md:w-[24.7px] md:h-[22.36px]"
          />
          <p className="md:text-[15px] text-[13px] md:leading-[18px] leading-[15px] text-[#383838]">
            {post.likes}
          </p>
        </div>
        <div className="flex items-center md:gap-[11px] gap-[9px]">
          <Image
            src="/icons/creator/insights/posts/comments.svg"
            alt="comment"
            width={18.59}
            height={18.59}
            className="md:w-[23.03px] md:h-[23.02px]"
          />
          <p className="md:text-[15px] text-[13px] md:leading-[18px] leading-[15px] text-[#383838]">
            {post.comments}
          </p>
        </div>
      </div>
    </article>
  );
}
