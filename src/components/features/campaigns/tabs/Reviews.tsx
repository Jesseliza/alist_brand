import Review from "./Reviews/Review";
import Pagination from "../../../general/Pagination";
import { usePagination } from "../../../../hooks/usePagination";
import { Campaign, PublicReview } from "@/types/entities";
import { CreatorsData } from "@/data/CreatorsData";
import { PublicReviewsData } from "@/data/PublicReviewsData";

interface ReviewsProps {
  campaign: Campaign;
}

export default function Reviews({ }: ReviewsProps) {
  // Get reviews from the external data file
  const reviews = PublicReviewsData;

  // Map reviews to the format expected by Review component
  const mappedReviews = reviews.map((review: PublicReview) => {
    // Find the creator data for this review
    const creator = CreatorsData.find((c) => c.creatorId === review.creatorId);

    if (!creator) {
      // Fallback if creator not found
      return {
        reviewerName: "Unknown Creator",
        reviewText: review.text,
        date: review.date,
        rating: review.rating,
      };
    }

    return {
      reviewerName: creator.fullName,
      reviewText: review.text,
      date: review.date,
      rating: review.rating,
    };
  });

  const {
    itemsPerPage,
    currentPage,
    startIndex,
    endIndex,
    handlePageChange,
    handleItemsPerPageChange,
  } = usePagination(mappedReviews.length, 9);

  const currentReviews = mappedReviews.slice(startIndex, endIndex);

  return (
    <div className="max-w-[1272px] mx-auto md:mt-[60px] mt-[14px]">
      <div
        className="grid grid-cols-1 gap-[13px] justify-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 412px))",
        }}
      >
        {currentReviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>

      <div className="mt-8">
        <Pagination
          totalItems={mappedReviews.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
          itemsPerPageOptions={[6, 9, 12, 18]}
          fixed={false}
        />
      </div>
    </div>
  );
}
