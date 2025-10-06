import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { getReviewPostsStart } from "@/store/campaigns/CampaignSlice";
import { RootState } from "@/store/store";
import CampaignDetailsPost from "./Posts/CampaignDetailsPost";
import Pagination from "../../../general/Pagination";
import Loader from "@/components/general/Loader";
import { Campaign, CampaignReviewPost } from "@/types/entities";

interface PostsProps {
  campaign: Campaign;
}

const formatNumber = (num: number | null) => {
  if (num === null) return "0";
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

export default function Posts({ campaign }: PostsProps) {
  const dispatch = useDispatch();
  const params = useParams();
  const { campaignId } = params;

  const {
    reviewPosts,
    reviewPostsLoading,
    reviewPostsError,
    reviewPostsPagination,
  } = useSelector((state: RootState) => state.campaigns);

  useEffect(() => {
    if (campaignId) {
      dispatch(getReviewPostsStart({ id: campaignId as string }));
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

  if (reviewPostsLoading) {
    return <Loader />;
  }

  if (reviewPostsError) {
    return <p className="text-red-500 text-center py-8">Error: {reviewPostsError}</p>;
  }

  const mappedPosts = reviewPosts.map((post: CampaignReviewPost) => {
    const imageUrlBase = process.env.NEXT_PUBLIC_IMAGE_URL || "";
    const postImages = [
      post.screenshot1,
      post.screenshot2,
      post.screenshot3,
      post.screenshot4,
    ]
      .filter((img): img is string => img !== null)
      .map((img) => `${imageUrlBase}/assets/uploads/userreviews/${img}`);

    const authorImage = post.user.profile_picture
      ? `${imageUrlBase}${post.user.profile_picture}`
      : "/images/campaign-details/posts/author1.png";

    return {
      authorImage: authorImage,
      authorName: post.user.name,
      instagramUsername: post.user.instagram_url || "N/A",
      stats: {
        followers: formatNumber(post.user.instagram_followers),
        reach: formatNumber(post.rating),
        engagement: "0%", // Not available in the response
      },
      postImages: postImages,
    };
  });

  return (
    <div>
      <div className="max-w-[1272px] mx-auto md:mt-[60px] mt-[14px] ">
        <div
          className="grid grid-cols-1 gap-[13px] justify-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 412px))",
          }}
        >
          {mappedPosts.map((post, index) => (
            <CampaignDetailsPost key={index} {...post} />
          ))}
        </div>

        {reviewPostsPagination && reviewPostsPagination.total > 0 && (
          <div className="mt-8">
            <Pagination
              totalItems={reviewPostsPagination.total}
              itemsPerPage={reviewPostsPagination.per_page}
              currentPage={reviewPostsPagination.current_page}
              onPageChange={handlePageChange}
              onItemsPerPageChange={() => {}}
              itemsPerPageOptions={[]}
              fixed={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
