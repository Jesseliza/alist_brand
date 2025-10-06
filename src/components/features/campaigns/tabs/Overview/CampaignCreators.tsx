import Image from "next/image";
import { Campaign } from "@/types/entities";
import Swiper from "@/components/general/Swiper";

interface CampaignCreatorsProps {
  campaign: Campaign;
}

const CreatorCard = ({
  imgSrc,
  name,
  user,
}: {
  imgSrc: string;
  name: string;
  user: string;
}) => {
  return (
    <div className="flex items-center gap-[17px] bg-[#F8F8F8] rounded-[11px] p-4">
      <div className="w-[50.34px] h-[50.34px] rounded-full overflow-hidden">
        <Image
          src={imgSrc}
          alt={name}
          width={50.34}
          height={50.34}
          objectFit="cover"
        />
      </div>

      <div>
        <p className="text-[13px] leading-[20px] font-medium text-[#414141]">
          {name}
        </p>
        <p className="text-[11px] leading-[17px] text-[#414141]">{user}</p>
      </div>
    </div>
  );
};

export default function CampaignCreators({ campaign }: CampaignCreatorsProps) {
  const approvedCreators =
    campaign.dedicated_offer?.offer_users.filter(
      (offerUser) => offerUser.status === 1 && offerUser.user
    ) || [];

  const creatorCards = approvedCreators.map((offerUser) => ({
    imgSrc:
      offerUser.user.profile_picture ||
      "/images/default-avatar.png",
    name: offerUser.user.name,
    user: offerUser.user.instagram_url || "N/A",
  }));

  return (
    <div className="mt-[13px] border-b border-[#E2E2E2] pb-5">
      <h4 className="text-center text-[15px] text-[#7E7E7E] leading-[23px] mb-[13px]">
        {approvedCreators.length} Approved Creators
      </h4>
      <Swiper rows={2} gap="13px" columnGap="13px" rowGap="13px">
        {creatorCards.map(
          (c: { imgSrc: string; name: string; user: string }, idx: number) => (
            <CreatorCard
              key={idx}
              imgSrc={c.imgSrc}
              name={c.name}
              user={c.user}
            />
          )
        )}
      </Swiper>
    </div>
  );
}
