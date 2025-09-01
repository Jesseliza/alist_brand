import Image from "next/image";
import { Campaign } from "@/types/entities";

interface CampaignGuidlinesProps {
  campaign: Campaign;
}

export default function CampaignGuidlines({
  campaign,
}: CampaignGuidlinesProps) {
  // Default guidelines for campaigns without specific data
  const defaultCampaignGuidelines = [
    {
      platform: "3 Instagram Stories",
      platformIcon: "/icons/campaign/details/overview/instagram.svg",
      requirements: "Create engaging Instagram stories content",
      rules: [
        {
          label: "Visible Tag:",
          value: "@brand",
          highlight: "@brand",
        },
        {
          label: "Visible Tag:",
          value: "@brand",
          highlight: "@brand",
        },
        {
          label: "Duration:",
          value: "All stories must remain visible for 24 hours.",
        },
      ],
    },
    {
      platform: "Google Reviews",
      platformIcon: "/icons/campaign/details/overview/google.svg",
      requirements: "Submit authentic Google reviews",
      rules: [
        {
          label: "Length:",
          value: "Minimum of 50 characters",
        },
        {
          label: "Content:",
          value: "Do not mention alist.ae",
        },
        {
          label: "Attachment:",
          value: "All stories must Include an image of the experience",
        },
        {
          label: "Removal:",
          value: "Do not remove unless requested by alist",
        },
      ],
    },
  ];

  // Use campaign guidelines directly from the campaign data or default guidelines
  const guidelines =
    campaign.campaignGuidelines?.length > 0
      ? campaign.campaignGuidelines
      : defaultCampaignGuidelines;

  return (
    <div className="mt-[10px] mb-[6px] rounded-[11px] bg-[#F8F8F8] px-[35px] py-[30px] text-[15px] leading-[23px] text-[#4F4F4F]">
      <p className="font-medium">Content Guidelines:</p>

      {guidelines.map((guideline, index) => (
        <div key={index}>
          <div className="flex items-center gap-4 mt-[34px]">
            <Image
              src={guideline.platformIcon}
              alt="content guidelines"
              width={20.2}
              height={20.2}
            />
            <p className="font-medium">{guideline.platform}</p>
          </div>
          <ul className="list-disc list-inside bg-white py-3 px-4.5 mt-2 text-[13px] leading-[20px]">
            {guideline.rules.map((rule, ruleIndex) => (
              <li key={ruleIndex}>
                <span className="font-medium">{rule.label}</span>{" "}
                {rule.highlight ? (
                  <span className="text-[#00A4B6]">{rule.highlight}</span>
                ) : (
                  <span>{rule.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
