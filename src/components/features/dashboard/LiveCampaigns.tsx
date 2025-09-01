import Image from "next/image";

export default function LiveCampaigns() {
  // Data defined within the component
  const campaignData = [
    {
      mainImage: "/images/dashboard/live campaigns/live-campaign-1.png",
      creatorImages: [
        "/images/dashboard/live campaigns/1.png",
        "/images/dashboard/live campaigns/2.png",
        "/images/dashboard/live campaigns/3.png",
        "/images/dashboard/live campaigns/4.png",
        "/images/dashboard/live campaigns/5.png",
      ],
      title: "Weekend StayCation",
      location: "St Regis - Bora Bora",
      price: "AED 3,400",
      walkIn: true,
    },
    {
      mainImage: "/images/dashboard/live campaigns/live-campaign-2.png",
      creatorImages: [
        "/images/dashboard/live campaigns/1.png",
        "/images/dashboard/live campaigns/4.png",
        "/images/dashboard/live campaigns/5.png",
      ],
      title: "Sip & Savor: Dunkin' New Flavor Laun..",
      location: "Dunkin - Business bay",
      price: "AED 340",
      walkIn: true,
    },
    {
      mainImage: "/images/dashboard/live campaigns/live-campaign-3.png",
      creatorImages: [
        "/images/dashboard/live campaigns/6.png",
        "/images/dashboard/live campaigns/7.png",
      ],
      title: "Swim with dolphins",
      location: "Atlantis - Palm Jumeirah ",
      price: "AED 850",
      walkIn: true,
    },
  ];

  return (
    <div>
      {campaignData.map((campaign, index) => (
        <article key={index} className="p-[6px]">
          <div className="flex items-center gap-[22px]">
            <div className="w-[96.31px] h-[96.31px] rounded-[11px] overflow-hidden">
              <Image
                src={campaign.mainImage}
                alt={campaign.title}
                width={96.31}
                height={96.31}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 flex items-end justify-between">
              <div>
                <p className="text-[15px] font-semibold leading-[23px] mb-1 text-[#4F4F4F]">
                  {campaign.title}
                </p>
                <p className="text-[15px] leading-[23px] text-[#4F4F4F] mb-2">
                  {campaign.location}
                </p>
                <div className="flex items-center gap-[15px]">
                  <div className="flex items-center gap-[7.5px]">
                    <div className="w-[10.85px] flex items-center justify-center">
                      <Image
                        src="/icons/dashboard/price.svg"
                        alt="price"
                        width={14.11}
                        height={10.85}
                      />
                    </div>
                    <p className="text-[#686868] text-[13px] leading-[20px]">
                      {campaign.price}
                    </p>
                  </div>
                  {campaign.walkIn && (
                    <div className="flex items-center gap-[7.5px]">
                      <div className="w-[10.85px] flex items-center justify-center">
                        <Image
                          src="/icons/dashboard/walk-in.svg"
                          alt="walk in"
                          width={8.42}
                          height={13.85}
                        />
                      </div>
                      <p className="text-[#686868] text-[13px] leading-[20px]">
                        Walk in
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-[7.5px]">
                {campaign.creatorImages.map((creatorImage, creatorIndex) => (
                  <div
                    key={creatorIndex}
                    className="w-[20.25px] h-[20.25px] flex items-center justify-center"
                  >
                    <Image
                      src={creatorImage}
                      alt={`creator ${creatorIndex + 1}`}
                      width={20.25}
                      height={20.25}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
