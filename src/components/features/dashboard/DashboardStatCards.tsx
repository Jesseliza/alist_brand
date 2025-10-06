import Image from "next/image";

const statCards = [
  {
    icon: "/icons/dashboard/campaigns.svg",
    iconWidth: 44.43,
    iconHeight: 39.55,
    title: "Total campaigns",
    value: 5800,
  },
  {
    icon: "/icons/dashboard/influencers.svg",
    iconWidth: 59.23,
    iconHeight: 41.46,
    title: "Influencers",
    value: 4150,
  },
  {
    icon: "/icons/dashboard/brands.svg",
    iconWidth: 52.89,
    iconHeight: 51.87,
    title: "Brands",
    value: 2700,
  },
  {
    icon: "/icons/dashboard/approvals.svg",
    iconWidth: 48.84,
    iconHeight: 39.07,
    title: "Pending Approvals",
    value: 50,
  },
];

export default function DashboardStatCards() {
  return (
    <div className="flex gap-[21px]  justify-between">
      {statCards.map((card) => (
        <article
          key={card.title}
          className="bg-white rounded-[13px] flex-1 max-w-[350px]  flex items-center gap-[30px] px-6 pt-7.25 pb-6.25"
        >
          <div className="w-[59.23px] flex items-center justify-center">
            <Image
              src={card.icon}
              alt={card.title}
              width={card.iconWidth}
              height={card.iconHeight}
            />
          </div>
          <div>
            <p className="text-[18px] leading-[27px] font-semibold text-[#4F4F4F]">
              {card.title}
            </p>
            <p className="text-[24px] font-medium text-[#00A4B6] leading-[35px]">
              {card.value}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
