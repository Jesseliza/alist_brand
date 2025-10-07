"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewPostsStart } from "@/store/campaigns/CampaignSlice";
import { RootState } from "@/store/store";
import Pagination from "../../../general/Pagination";
import Loader from "@/components/general/Loader";
import Review from "./Reviews/Review";
import { usePagination } from "@/hooks/usePagination";

interface ReviewsProps {
  campaignId: string;
}

export default function Reviews({ campaignId }: ReviewsProps) {
  const dispatch = useDispatch();

  const { reviewPosts, reviewPostsLoading, reviewPostsError } = useSelector(
    (state: RootState) => state.campaigns
  );

  useEffect(() => {
    if (campaignId) {
      // Fetch all reviews to handle pagination on the client side
      dispatch(
        getReviewPostsStart({ id: campaignId as string, per_page: 1000 })
      );
    }
  }, [dispatch, campaignId]);

  const mappedReviews = reviewPosts
    .filter((review) => review.comments && review.comments.trim() !== "")
    .map((review) => {
      return {
        reviewerName: review.user.name,
        reviewText: review.comments,
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

  if (reviewPostsLoading) {
    return <Loader />;
  }

  if (reviewPostsError) {
    return (
      <p className="text-red-500 text-center py-8">Error: {reviewPostsError}</p>
    );
  }

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

      {mappedReviews.length > 0 && (
        <div className="mt-8">
          <Pagination
            totalItems={mappedReviews.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
            fixed={false}
          />
        </div>
      )}
    </div>
  );
}