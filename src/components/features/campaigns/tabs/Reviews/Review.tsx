import Image from "next/image";

interface ReviewProps {
  reviewerName: string;
  reviewText: string;
  date: string;
  rating?: number;
}

export default function Review({
  reviewerName,
  reviewText,
  date,
  rating = 5,
}: ReviewProps) {
  return (
    <article className="max-w-[412px] h-[242px] py-6 pl-6 pr-5 rounded-[13px] md:shadow-[0_0_4px_rgba(0,0,0,0.16)]">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-[9.4px]">
          <Image
            src="/icons/campaign/details/reviews/google.svg"
            alt="review"
            width={67}
            height={67}
          />
          <div>
            <p className="text-[17px] leading-[26px] font-medium text-[#4F4F4F]">
              {reviewerName}
            </p>
            <div className="flex gap-[1.6px] items-center">
              {Array.from({ length: rating }, (_, index) => (
                <Image
                  key={index}
                  src="/icons/campaign/details/reviews/rating-star.svg"
                  alt="star"
                  width={16}
                  height={16}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="font-light text-[13px] leading-[15px] text-[#8C8C8C] mt-1.5 mr-[9px]">
            {date}
          </p>
        </div>
      </div>
      <p className="text-[13px] leading-[20px] text-[#4F4F4F] mt-[11px]">
        {reviewText}
      </p>
    </article>
  );
}
