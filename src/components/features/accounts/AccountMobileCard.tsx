import { Account } from "@/types/entities";
import { getDisplayName } from "@/utils/accountUtils";
import Link from "next/link";
import Checkbox from "@/components/general/CheckBox";
import TruncatedText from "@/components/general/TruncatedText";

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
  const handleWrapperClick = (e: React.MouseEvent) => {
    // This empty handler is to prevent the Link from navigating when clicking on the checkbox area.
    // The actual logic is in the Checkbox's onChange and onClick handlers.
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <Link href={`/businesses/accounts/${account.accountId}`} className="block cursor-pointer">
      <div
        className="bg-white rounded-[13px] py-3 px-3.5 flex items-center justify-between"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div onClick={handleWrapperClick} className="p-2 -ml-2">
            <Checkbox
              checked={checked}
              onChange={onCheckboxChange}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="flex items-center gap-4">
            <div
              className={`w-[47.81px] h-[47.81px] flex items-center justify-center rounded-full`}
              style={{ backgroundColor: account.avatarBackground }}
            >
              <span className="text-white text-xl font-semibold">
                {account.avatarInitials}
              </span>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <h3 className="text-[15px] text-[#4F4F4F] font-semibold leading-[1.5]">
                <TruncatedText text={getDisplayName(account)} maxLength={20} />
              </h3>
              <p className="text-[11px] text-[#686868] leading-[1.5]">
                <TruncatedText text={account.emailAddress} maxLength={25} />
              </p>
              <p className="text-[11px] text-[#686868] leading-[1.5] truncate">
                {account.country_code} {account.phoneNumber}
              </p>
              <p className="text-[11px] text-[#686868] leading-[1.5] truncate">
                Registration Type:{" "}
                {account.registration_type.charAt(0).toUpperCase() +
                  account.registration_type.slice(1)}
              </p>
              <p className="text-[11px] text-[#686868] leading-[1.5] truncate">
                <span
                  className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    account.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {account.status}
                </span>
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
