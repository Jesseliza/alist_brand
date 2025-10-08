import AccountDetails from "@/components/features/accounts/AccountDetails";
import AccountBrands from "./AccountBrands";
import ChangePhoneNumber from "./ChangePhoneNumber";
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
            <AccountBrands brands={account?.brands} accountId={account?.accountId} />
          </div>
        );
      case "Change Phone Number":
        return (
          <ChangePhoneNumber
            currentPhoneNumber={account?.phoneNumber || ""}
            currentCountryCode={account?.country_code || ""}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full ">{renderContent()}</div>;
}
