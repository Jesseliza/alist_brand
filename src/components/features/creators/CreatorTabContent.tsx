import CreatorInfo from "@/components/features/creators/Info/CreatorInfo";
import CreatorInsights from "@/components/features/creators/Insights/CreatorInsights";
import CreatorHistory from "@/components/features/creators/History/CreatorHistory";
import ChangePhoneNumber from "@/components/features/accounts/ChangePhoneNumber";
import AccountBrands from "@/components/features/accounts/AccountBrands";
import { TabContentProps } from "@/components/general/UnifiedTabs";
import { Creator } from "@/types/entities";

interface CreatorTabContentProps extends TabContentProps {
  creator: Creator;
}

export default function CreatorTabContent({
  activeTab,
  creator,
}: CreatorTabContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case "Info":
        return <CreatorInfo creator={creator} />;
      case "Insights":
        return <CreatorInsights creator={creator} />;
      case "History":
        return <CreatorHistory creator={creator} />;
      case "Brands":
        return <AccountBrands brands={creator.brands} accountId={creator.accountId} />;
      case "Change Phone Number":
        return (
          <ChangePhoneNumber
            currentPhoneNumber={creator.phone}
            currentCountryCode={creator.countryCode}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full ">{renderContent()}</div>;
}
