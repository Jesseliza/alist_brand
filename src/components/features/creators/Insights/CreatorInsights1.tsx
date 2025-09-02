import CreatorPostCard from "@/components/features/creators/Insights/CreatorPostCard";
import Swiper from "@/components/general/Swiper";
import CreatorAnalyticCard from "./CreatorAnalyticCard";
import { ExternalPostData } from "@/data/ExternalPostData";
import { Dropdown } from "@/components/general/dropdowns/Dropdown";
import { Creator } from "@/types/entities";
const options = [
  {
    value: "instagramAnalytics",
    label: (
      <div className="flex items-center pl-6 pr-5 py-2 text-[18px] leading-[27px] text-[#4F4F4F]">
        <span>Instagram Analytics</span>
      </div>
    ),
  },
  {
    value: "instagramAnalytics2",
    label: (
      <div className="flex items-center pl-6 pr-5 py-2 text-[18px] leading-[27px] text-[#4F4F4F]">
        <span>Instagram Analytics</span>
      </div>
    ),
  },
  {
    value: "instagramAnalytics3",
    label: (
      <div className="flex items-center pl-6 pr-5 py-2 text-[18px] leading-[27px] text-[#4F4F4F]">
        <span>Instagram Analytics</span>
      </div>
    ),
  },
];
const getAnalyticCards = (creator: Creator) => [
  {
    imageSrc: "/icons/creator/insights/followers.svg",
    imageAlt: "followers",
    imageWidth: 54.44,
    imageHeight: 38.11,
    imageMinWidth: 33.33,
    imageMinHeight: 23.33,
    title: creator.insights?.analyticsMetrics?.followers
      ? `${(creator.insights.analyticsMetrics.followers / 1000).toFixed(0)}k`
      : "N/A",
    subtitle: "Followers",
  },
  {
    imageSrc: "/icons/creator/insights/likes.svg",
    imageAlt: "likes",
    imageWidth: 40.84,
    imageHeight: 36.35,
    imageMinWidth: 24.77,
    imageMinHeight: 22.05,
    title: creator.insights?.analyticsMetrics?.avgLikes?.toString() || "N/A",
    subtitle: "Avg likes per post",
  },
  {
    imageSrc: "/icons/creator/insights/engagement.svg",
    imageAlt: "engagement",
    imageWidth: 48.62,
    imageHeight: 47.67,
    imageMinWidth: 32.63,
    imageMinHeight: 32,
    title: creator.insights?.analyticsMetrics?.engagementRate
      ? `${creator.insights.analyticsMetrics.engagementRate.toFixed(2)}%`
      : "N/A",
    subtitle: "Engagement rate",
  },
  {
    imageSrc: "/icons/creator/insights/credibility.svg",
    imageAlt: "credibility",
    imageWidth: 44.89,
    imageHeight: 35.91,
    imageMinWidth: 28.97,
    imageMinHeight: 23.18,
    title: creator.insights?.analyticsMetrics?.audienceCredibility
      ? `${creator.insights.analyticsMetrics.audienceCredibility.toFixed(1)}%`
      : "N/A",
    subtitle: "Audience Credibility",
  },
  {
    imageSrc: "/icons/creator/insights/comments.svg",
    imageAlt: "comments",
    imageWidth: 48.79,
    imageHeight: 48.79,
    imageMinWidth: 29.08,
    imageMinHeight: 29.08,
    title: creator.insights?.analyticsMetrics?.avgComments?.toString() || "N/A",
    subtitle: "Avg. comments",
  },
  {
    imageSrc: "/icons/creator/insights/reels.svg",
    imageAlt: "reels",
    imageWidth: 44.64,
    imageHeight: 44.72,
    imageMinWidth: 27.95,
    imageMinHeight: 28,
    title:
      creator.insights?.analyticsMetrics?.avgReelsViews?.toString() || "N/A",
    subtitle: "Avg reels views",
  },
  {
    imageSrc: "/icons/creator/insights/sponsored-content.svg",
    imageAlt: "sponsored content",
    imageWidth: 42.67,
    imageHeight: 42.1,
    imageMinWidth: 26.3,
    imageMinHeight: 25.95,
    title:
      creator.insights?.analyticsMetrics?.sponsoredCount?.toString() || "N/A",
    subtitle: "Sponsored content",
  },
  {
    imageSrc: "/icons/creator/insights/spons.svg",
    imageAlt: "sponsored content performance",
    imageWidth: 35.38,
    imageHeight: 37.54,
    imageMinWidth: 24.62,
    imageMinHeight: 26.13,
    title: creator.insights?.analyticsMetrics?.sponsoredPerformance
      ? `${creator.insights.analyticsMetrics.sponsoredPerformance.toFixed(1)}%`
      : "N/A",
    subtitle: "Spons. Content Perf",
  },
];

export default function CreatorInsights1({ creator }: { creator: Creator }) {
  // Filter external posts for the current creator
  const creatorPostCards = ExternalPostData.filter(
    (post) => post.creatorId === creator.creatorId
  );

  // Get dynamic analytics cards
  const analyticCards = getAnalyticCards(creator);

  // Format the analytics updated date
  const analyticsUpdatedAt = creator.insights?.analyticsUpdatedAt;
  const formattedDate = analyticsUpdatedAt
    ? analyticsUpdatedAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "N/A";

  return (
    <div className=" md:bg-white py-[20px]  rounded-[13px]">
      <div className="flex justify-between items-center px-[34px] pb-[13.5px] mb-5  border-b border-[#E2E2E2]">
        <div className="flex-1">
          <div className="max-w-[293px]">
            <Dropdown
              options={options}
              onSelect={() => {}}
              buttonClassName="py-0 flex items-center gap-10 border-1 border-[#E4E4E4] rounded-[11px] bg-white text-[#4F4F4F] "
            />
          </div>
        </div>
        <p className="text-[18px] leading-[27px] text-[#4F4F4F] flex-1 text-center">
          Updated on {formattedDate}
        </p>
        <div className="flex-1 flex items-center justify-end">
          <button className="ml-auto">Update</button>
        </div>
      </div>
      <div className="md:px-[34px] px-[5px]">
        <div className="grid gap-[7px] md:gap-[19px] mobile-grid">
          {analyticCards.map((card, index) => (
            <CreatorAnalyticCard
              key={index}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              imageWidth={card.imageWidth}
              imageHeight={card.imageHeight}
              imageMinWidth={card.imageMinWidth}
              imageMinHeight={card.imageMinHeight}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>
        <style jsx>{`
          .mobile-grid {
            grid-template-columns: repeat(auto-fit, minmax(195px, 1fr));
          }
          @media (min-width: 768px) {
            .mobile-grid {
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            }
          }
        `}</style>
      </div>
      <div className="px-[34px] ">
        <h3 className="px-[25px] font-medium text-[18px] leading-[27px] text-[#4F4F4F] mt-10 mb-5">
          Top content
        </h3>
      </div>

      <div className="md:px-[34px] px-[5px]">
        <Swiper
          rows={1}
          rowGap="1rem"
          minCardWidth="418.67px"
          mobileMaxCardWidth="338.05px"
          mobileMinCardWidth="338.05px"
          mobileRowGap="10px"
          dotsMarginTop="42px"
          mobileDotsMarginTop="22px"
        >
          {creatorPostCards.map((post) => (
            <CreatorPostCard
              key={post.externalPostId}
              post={post}
              creator={creator}
            />
          ))}
        </Swiper>
      </div>
    </div>
  );
}
