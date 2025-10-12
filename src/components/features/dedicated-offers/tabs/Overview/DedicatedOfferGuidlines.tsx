import { Campaign } from "@/types/entities";

interface CampaignGuidlinesProps {
  campaign: Campaign;
}

export default function CampaignGuidlines({
  campaign,
}: CampaignGuidlinesProps) {
  return (
    <div className="mt-[10px] mb-[6px] rounded-[11px] bg-[#F8F8F8] px-[35px] py-[30px] text-[15px] leading-[23px] text-[#4F4F4F]">
      <p className="font-medium">Content Guidelines:</p>
      <div className="flex flex-col gap-4 mt-4">
        {campaign.rule_1 && (
          <div dangerouslySetInnerHTML={{ __html: campaign.rule_1 }} />
        )}
        {campaign.rule_2 && (
          <div dangerouslySetInnerHTML={{ __html: campaign.rule_2 }} />
        )}
        {campaign.rule_3 && (
          <div dangerouslySetInnerHTML={{ __html: campaign.rule_3 }} />
        )}
      </div>
    </div>
  );
}
