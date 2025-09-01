import AccountDetails from "@/components/features/accounts/AccountDetails";
import AccountBrands from "./AccountBrands";
import AccountPlans from "./AccountPlans";
import { TabContentProps } from "@/components/general/UnifiedTabs";

interface AccountTabContentProps extends TabContentProps {
  accountId?: string;
}

export default function AccountTabContent({
  activeTab,
  accountId,
}: AccountTabContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case "Details":
        return <AccountDetails accountId={accountId} />;
      case "Brands":
        return (
          <div className="max-w-[1428px] mx-auto flex justify-between pt-10 text-[#4F4F4F]">
            <AccountBrands accountId={accountId} />
          </div>
        );
      case "Plans":
        return (
          <div className="px-4 pt-[45px]">
            <AccountPlans accountId={accountId} />
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="w-full ">{renderContent()}</div>;
}
