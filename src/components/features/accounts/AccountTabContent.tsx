import AccountDetails from "@/components/features/accounts/AccountDetails";
import AccountBrands from "./AccountBrands";
import AccountPlans from "./AccountPlans";
import { ChangePhoneNumber } from "./ChangePhoneNumber";
import ResetPin from "./ResetPin";
import { TabContentProps } from "@/components/general/UnifiedTabs";
import { Account } from "@/types/entities";

interface AccountTabContentProps extends TabContentProps {
  account: Partial<Account> | null;
  onSave: (account: Partial<Account>) => void;
  isCreateMode: boolean;
  isProfilePage?: boolean;
  loggedInUser?: Partial<Account> | null;
}

export default function AccountTabContent({
  activeTab,
  account,
  onSave,
  isCreateMode,
  isProfilePage,
  loggedInUser,
}: AccountTabContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case "Details":
        return <AccountDetails account={account} onSave={onSave} isCreateMode={isCreateMode} isProfilePage={isProfilePage} loggedInUser={loggedInUser} />;
      case "Brands":
        return (
          <div className="max-w-[1428px] mx-auto flex justify-between pt-10 text-[#4F4F4F]">
            <AccountBrands brands={account?.brands} accountId={account?.accountId} />
          </div>
        );
      case "Plans":
        return (
          <div className="px-4 pt-[45px]">
            <AccountPlans accountId={account?.accountId} />
          </div>
        );
      case "Change Phone Number":
        if (!account?.accountId) return null;
        return (
          <div className="max-w-[1428px] mx-auto flex justify-between pt-10 text-[#4F4F4F]">
            <ChangePhoneNumber
              currentPhoneNumber={account.phoneNumber || ''}
              currentCountryCode={account.country_code || ''}
            />
          </div>
        );
      case "Reset PIN":
        return <ResetPin />;
      default:
        return null;
    }
  };

  return <div className="w-full ">{renderContent()}</div>;
}
