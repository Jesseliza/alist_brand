import Image from "next/image";

interface ReviewProps {
  reviewerName: string;
  reviewText: string;
  reviewerImage?: string | null;
}

export default function Review({
  reviewerName,
  reviewText,
  reviewerImage,
}: ReviewProps) {
  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const profileImageUrl = reviewerImage
    ? `${imageUrl}${reviewerImage}`
    : "/images/google-logo.svg";

  return (
    <article className="max-w-[412px] min-h-[120px] p-6 rounded-[13px] md:shadow-[0_0_4px_rgba(0,0,0,0.16)]">
      <div className="flex items-center gap-4">
        <Image
          src={profileImageUrl}
          alt={reviewerName}
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="text-[17px] leading-[26px] font-medium text-[#4F4F4F]">
          {reviewerName}
        </p>
      </div>
      <p
        className="text-[13px] leading-[20px] text-[#4F4F4F] mt-[11px]"
        dangerouslySetInnerHTML={{ __html: reviewText }}
      />
    </article>
  );
}