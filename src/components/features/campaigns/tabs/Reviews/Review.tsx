interface ReviewProps {
  reviewerName: string;
  reviewText: string;
}

export default function Review({ reviewerName, reviewText }: ReviewProps) {
  return (
    <article className="max-w-[412px] min-h-[120px] p-6 rounded-[13px] md:shadow-[0_0_4px_rgba(0,0,0,0.16)]">
      <div>
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
