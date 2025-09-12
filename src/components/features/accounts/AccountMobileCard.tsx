import { Account } from "@/types/entities";
import { getDisplayName } from "@/utils/accountUtils";
import Link from "next/link";
import Checkbox from "@/components/general/CheckBox";

interface AccountMobileCardProps {
  account: Account;
  checked: boolean;
  onCheckboxChange: () => void;
}

export default function AccountMobileCard({
  account,
  checked,
  onCheckboxChange,
}: AccountMobileCardProps) {
  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onCheckboxChange();
  };

  return (
    <Link href={`/businesses/accounts/${account.accountId}`} className="block cursor-pointer">
      <div
        className="bg-white rounded-[13px] py-3 px-3.5 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div onClick={handleCheckboxClick} className="p-2 -ml-2">
            <Checkbox checked={checked} onChange={() => {}} />
          </div>
          <div className="flex items-center gap-6.75">
            <div
              className={`w-[47.81px] h-[47.81px] flex items-center justify-center rounded-full`}
              style={{ backgroundColor: account.avatarBackground }}
            >
              <span className="text-white text-xl font-semibold">
                {account.avatarInitials}
              </span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[15px] text-[#4F4F4F] font-semibold leading-[1.5]">
                {getDisplayName(account)}
              </h3>
              <p className="text-[11px] text-[#686868] leading-[1.5]">
                {account.emailAddress}
              </p>
              <p className="text-[11px] text-[#686868] leading-[1.5]">
                {account.phoneNumber}
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#BDBDBD]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
