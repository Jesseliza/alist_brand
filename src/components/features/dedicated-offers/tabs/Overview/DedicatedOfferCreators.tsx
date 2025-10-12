import Image from "next/image";
import { DedicatedOfferDisplay } from "@/types/entities/dedicated-offer";

export default function DedicatedOfferCreators({ dedicatedOffer }: { dedicatedOffer: DedicatedOfferDisplay }) {
  const creators = dedicatedOffer.offer_users.filter(
    (offerUser) => offerUser.status === 1
  );

  return (
    <div className="mt-[25px] border-b border-[#E2E2E2] pb-[25px]">
      <h3 className="text-lg font-medium text-[#4F4F4F]">Creators</h3>
      <div className="flex items-center gap-4 mt-4">
        {creators.slice(0, 5).map((creator) => (
          <div key={creator.id} className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={creator.user.profile_picture || "/images/no_image.png"}
              alt={creator.user.name}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
        {creators.length > 5 && (
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
            +{creators.length - 5}
          </div>
        )}
      </div>
    </div>
  );
}