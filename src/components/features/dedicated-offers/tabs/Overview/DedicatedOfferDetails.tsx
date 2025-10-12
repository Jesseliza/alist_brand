import { DedicatedOfferDisplay } from "@/types/entities/dedicated-offer";

export default function DedicatedOfferDetails({ dedicatedOffer }: { dedicatedOffer: DedicatedOfferDisplay }) {
  const details = [
    { label: "Offer Date", value: dedicatedOffer.offer_date },
    { label: "Offer Usage", value: dedicatedOffer.offer_usage },
    { label: "Credibility", value: dedicatedOffer.credibility_range },
    { label: "Restaurant Website", value: dedicatedOffer.restaurant_website },
    { label: "WhatsApp No", value: dedicatedOffer.whatsapp_no },
  ];

  return (
    <div className="mt-[25px] border-b border-[#E2E2E2] pb-[25px]">
      <h3 className="text-lg font-medium text-[#4F4F4F]">Details</h3>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {details.map((detail, idx) => (
          <div key={idx}>
            <p className="text-sm text-gray-500">{detail.label}</p>
            <p className="text-base font-medium text-[#4F4F4F]">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}