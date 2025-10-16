"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampaignReviewsStart } from "@/store/campaigns/CampaignSlice";
import { RootState } from "@/store/store";
import Pagination from "../../../general/Pagination";
import Loader from "@/components/general/Loader";
import Review from "./Reviews/Review";

interface ReviewsProps {
  campaignId: string;
}

export default function Reviews({ campaignId }: ReviewsProps) {
  const dispatch = useDispatch();

  const {
    reviews,
    reviewsLoading,
    reviewsError,
    reviewsPagination,
  } = useSelector((state: RootState) => state.campaigns);

  useEffect(() => {
    if (campaignId) {
      dispatch(getCampaignReviewsStart({ id: campaignId as string, per_page: 10 }));
    }
  }, [dispatch, campaignId]);

  const handlePageChange = (page: number) => {
    if (campaignId) {
      dispatch(
        getCampaignReviewsStart({
          id: campaignId as string,
          page,
          per_page: reviewsPagination?.per_page,
        })
      );
    }
  };

  const handleItemsPerPageChange = (items: number) => {
    if (campaignId) {
      dispatch(
        getCampaignReviewsStart({
          id: campaignId as string,
          page: 1,
          per_page: items,
        })
      );
    }
  };

  if (reviewsLoading && !reviews.length) {
    return <Loader />;
  }

  if (reviewsError) {
    return (
      <p className="text-red-500 text-center py-8">Error: {reviewsError}</p>
    );
  }

  const mappedReviews = reviews
    .filter((review) => review.comments && review.comments.trim() !== "")
    .map((review) => {
      return {
        reviewerName: review.user.name,
        reviewText: review.comments,
        reviewerImage: review.user.profile_picture,
      };
    });

  return (
    <div className="max-w-[1272px] mx-auto md:mt-[60px] mt-[14px]">
      <div
        className="grid grid-cols-1 gap-[13px] justify-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {mappedReviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>

      {reviewsPagination && reviewsPagination.total > 0 && (
        <div className="mt-8">
          <Pagination
            totalItems={reviewsPagination.total}
            itemsPerPage={reviewsPagination.per_page || 10}
            currentPage={reviewsPagination.current_page}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
            fixed={false}
            isLoading={reviewsLoading}
          />
        </div>
      )}
    </div>
  );
}