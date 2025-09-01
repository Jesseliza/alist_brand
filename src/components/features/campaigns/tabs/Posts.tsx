import CampaignDetailsPost from "./Posts/CampaignDetailsPost";
import Pagination from "../../../general/Pagination";
import { usePagination } from "../../../../hooks/usePagination";
import { Campaign, CampaignPost } from "@/types/entities";
import { CreatorsData } from "@/data/CreatorsData";
import { CampaignPostsData } from "@/data/CampaignPostsData";

interface PostsProps {
  campaign: Campaign;
}

export default function Posts({ campaign }: PostsProps) {
  // Get campaign posts from the external data file
  const campaignPosts = CampaignPostsData;

  // Map campaign posts to the format expected by CampaignDetailsPost
  const mappedPosts = campaignPosts.map((post: CampaignPost) => {
    // Find the creator data for this post
    const creator = CreatorsData.find((c) => c.creatorId === post.creatorId);

    if (!creator) {
      // Fallback if creator not found
      return {
        authorImage: "/images/campaign-details/posts/author1.png",
        authorName: "Unknown Creator",
        instagramUsername: "unknown",
        stats: { followers: "0", reach: "0", engagement: "0%" },
        postImages: post.postImages,
      };
    }

    // Find Instagram handle
    const instagramHandle =
      creator.socialHandles.find((handle) => handle.platform === "Instagram")
        ?.handle || creator.fullName.toLowerCase().replace(/\s+/g, ".");

    // Format follower count
    const formattedFollowers =
      creator.followerCount >= 1000
        ? `${(creator.followerCount / 1000).toFixed(0)}K`
        : creator.followerCount.toString();

    return {
      authorImage: creator.avatarUrl,
      authorName: creator.fullName,
      instagramUsername: instagramHandle,
      stats: {
        followers: formattedFollowers,
        reach: "6.5K", // This could be calculated from creator data if available
        engagement: `${creator.engagementRate.toFixed(2)}%`,
      },
      postImages: post.postImages,
    };
  });

  const {
    itemsPerPage,
    startIndex,
    endIndex,
    handlePageChange,
    handleItemsPerPageChange,
  } = usePagination(mappedPosts.length, 12);

  const currentPosts = mappedPosts.slice(startIndex, endIndex);

  return (
    <div>
      <div className="max-w-[1272px] mx-auto md:mt-[60px] mt-[14px] ">
        <div
          className="grid grid-cols-1 gap-[13px] justify-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 412px))",
          }}
        >
          {currentPosts.map((post, index) => (
            <CampaignDetailsPost key={index} {...post} />
          ))}
        </div>

        <div className="mt-8">
          <Pagination
            totalItems={mappedPosts.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
            itemsPerPageOptions={[6, 12, 18, 24]}
            fixed={false}
          />
        </div>
      </div>
    </div>
  );
}
