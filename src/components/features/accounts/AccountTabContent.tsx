import AccountDetails from "@/components/features/accounts/AccountDetails";
import AccountBrands from "./AccountBrands";
import AccountPlans from "./AccountPlans";
import { TabContentProps } from "@/components/general/UnifiedTabs";
import { Account } from "@/types/entities";

interface AccountTabContentProps extends TabContentProps {
  account: Partial<Account> | null;
  onSave: (account: Partial<Account>) => void;
  isCreateMode: boolean;
}

export default function AccountTabContent({
  activeTab,
  account,
  onSave,
  isCreateMode,
}: AccountTabContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case "Details":
        return <AccountDetails account={account} onSave={onSave} isCreateMode={isCreateMode} />;
      case "Brands":
        return (
          <div className="max-w-[1428px] mx-auto flex justify-between pt-10 text-[#4F4F4F]">
            <AccountBrands brands={account?.brands} />
          </div>
        );
      case "Plans":
        return (
          <div className="px-4 pt-[45px]">
            <AccountPlans accountId={account?.accountId} />
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="w-full ">{renderContent()}</div>;
}
