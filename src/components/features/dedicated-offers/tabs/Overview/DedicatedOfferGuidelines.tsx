import { DedicatedOfferDisplay } from "@/types/entities/dedicated-offer";

export default function DedicatedOfferGuidelines({ dedicatedOffer }: { dedicatedOffer: DedicatedOfferDisplay }) {
  const guidelines = [
    { label: "Guideline 1", value: dedicatedOffer.description },
    { label: "Guideline 2", value: dedicatedOffer.confirmation_message },
    { label: "Guideline 3", value: "No specific guideline" },
  ];

  return (
    <div className="mt-[25px] pb-[25px]">
      <h3 className="text-lg font-medium text-[#4F4F4F]">Guidelines</h3>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {guidelines.map((guideline, idx) => (
          <div key={idx}>
            <p className="text-sm text-gray-500">{guideline.label}</p>
            <p className="text-base font-medium text-[#4F4F4F]">{guideline.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}