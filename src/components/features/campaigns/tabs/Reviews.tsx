"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewPostsStart } from "@/store/campaigns/CampaignSlice";
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
    reviewPosts,
    reviewPostsLoading,
    reviewPostsError,
    reviewPostsPagination,
  } = useSelector((state: RootState) => state.campaigns);

  useEffect(() => {
    if (campaignId) {
      dispatch(getReviewPostsStart({ id: campaignId as string, per_page: 9 }));
    }
  }, [dispatch, campaignId]);

  const handlePageChange = (page: number) => {
    if (campaignId) {
      dispatch(
        getReviewPostsStart({
          id: campaignId as string,
          page,
          per_page: reviewPostsPagination?.per_page,
        })
      );
    }
  };

  const handleItemsPerPageChange = (items: number) => {
    if (campaignId) {
      dispatch(
        getReviewPostsStart({
          id: campaignId as string,
          page: 1,
          per_page: items,
        })
      );
    }
  };

  if (reviewPostsLoading) {
    return <Loader />;
  }

  if (reviewPostsError) {
    return <p className="text-red-500 text-center py-8">Error: {reviewPostsError}</p>;
  }

  const mappedReviews = reviewPosts
    .filter((review) => review.comments && review.comments.trim() !== "")
    .map((review) => {
      return {
        reviewerName: review.user.name,
        reviewText: review.comments,
      };
    });

  return (
    <div className="max-w-[1272px] mx-auto md:mt-[60px] mt-[14px]">
      <div
        className="grid grid-cols-1 gap-[13px] justify-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 412px))",
        }}
      >
        {mappedReviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>

      {reviewPostsPagination && reviewPostsPagination.total > 0 && (
          <div className="mt-8">
            <Pagination
              totalItems={reviewPostsPagination.total}
              itemsPerPage={reviewPostsPagination.per_page || 9}
              currentPage={reviewPostsPagination.current_page}
              onPageChange={handlePageChange}
              onItemsPerPageChange={handleItemsPerPageChange}
              itemsPerPageOptions={[6, 9, 12, 18]}
              fixed={false}
            />
          </div>
      )}
    </div>
  );
}
