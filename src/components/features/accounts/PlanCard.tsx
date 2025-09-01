import { Subscription, Plan } from "@/types/entities";

interface PlanCardProps {
  subscription: Subscription;
  plan: Plan;
  isSelected?: boolean;
}

const COLOR_MAP: Record<string, { bg: string; text: string }> = {
  enterprise: { bg: "bg-teal-500", text: "text-teal-600" },
  premium: { bg: "bg-teal-400", text: "text-teal-600" },
  essential: { bg: "bg-violet-500", text: "text-violet-600" },
  pro: { bg: "bg-gray-300", text: "text-gray-600" },
};

export default function PlanCard({
  subscription,
  plan,
  isSelected = false,
}: PlanCardProps) {
  const planName = plan.name.toLowerCase();
  const { bg, text } = COLOR_MAP[planName] || COLOR_MAP.essential;

  // Format duration
  const durationText =
    plan.duration === 12
      ? "Annual"
      : plan.duration === 6
      ? "6 months"
      : plan.duration === 3
      ? "3 months"
      : `${plan.duration} months`;

  // Format price
  const priceText = `${
    subscription.totalAmount.currency
  } ${subscription.totalAmount.amount.toLocaleString()}`;

  // Format purchase date
  const purchasedOnText = subscription.purchaseDate.toLocaleDateString();

  // Get add-ons count
  const addonsCount = subscription.addOnCount;

  return (
    <div
      className={`
        flex items-end space-x-4 
        rounded-[7px] p-4 
        ${isSelected ? "bg-[#FAFAFA]" : "bg-white"}
      `}
    >
      <div className={`self-stretch w-[3px] rounded ${bg}`} />

      <div className="flex-1 space-y-1">
        <h3 className={`font-semibold text-lg text-[#747474]`}>
          <span className={`${text}`}>{plan.name}</span> &ndash; {durationText}
        </h3>
        <p className="font-medium text-[15px] text-[#4F4F4F]">{priceText}</p>
        <p className="text-[11px] text-[#4F4F4F]">
          Purchased on: {purchasedOnText}
        </p>
      </div>

      {addonsCount > 0 && (
        <p className="text-[11px] text-gray-500">
          Includes{" "}
          <span className="font-medium text-[#00A4B6]">{addonsCount}</span>{" "}
          addon
          {addonsCount > 1 ? "s" : ""}
        </p>
      )}
    </div>
  );
}
