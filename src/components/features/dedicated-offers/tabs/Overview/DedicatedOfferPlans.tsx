import { DedicatedOfferDisplay } from "@/types/entities/dedicated-offer";

export default function DedicatedOfferPlans({ dedicatedOffer }: { dedicatedOffer: DedicatedOfferDisplay }) {
  const plans = [
    { label: "Amount", value: dedicatedOffer.amount },
    { label: "Currency", value: dedicatedOffer.currency_id },
  ];

  return (
    <div className="mt-[25px]">
      <h3 className="text-lg font-medium text-[#4F4F4F]">Plans</h3>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {plans.map((plan, idx) => (
          <div key={idx}>
            <p className="text-sm text-gray-500">{plan.label}</p>
            <p className="text-base font-medium text-[#4F4F4F]">{plan.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}