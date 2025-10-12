import Image from "next/image";
import { DedicatedOfferDisplay } from "@/types/entities/dedicated-offer";
import Swiper from "@/components/general/Swiper";

interface CreatorCardProps {
  imgSrc: string;
  name: string;
  user: string;
}

const CreatorCard = ({ imgSrc, name, user }: CreatorCardProps) => {
  const getInitials = (name: string) => {
    if (!name) return "";
    const names = name.split(" ");
    let initials = names[0].substring(0, 1);
    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1);
    }
    return initials.toUpperCase();
  };

  return (
    <div className="flex items-center gap-[17px] bg-[#F8F8F8] rounded-[11px] p-4">
      <div className="w-[50.34px] h-[50.34px] rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={name}
            width={50.34}
            height={50.34}
            objectFit="cover"
          />
        ) : (
          <span className="text-xl font-bold text-gray-500">
            {getInitials(name)}
          </span>
        )}
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

export default function DedicatedOfferCreators({ dedicatedOffer }: { dedicatedOffer: DedicatedOfferDisplay }) {
  const approvedCreators =
    dedicatedOffer.offer_users.filter(
      (offerUser) => offerUser.status === 1 && offerUser.user
    ) || [];

  const creatorCards = approvedCreators.map((offerUser) => ({
    imgSrc: offerUser.user.profile_picture
      ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${offerUser.user.profile_picture}`
      : "",
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