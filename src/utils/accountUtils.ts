import { Account } from "@/types/entities";

export const getDisplayName = (account: Account): string => {
  if (account.accountType === "agency") {
    return account.firstName;
  }
  return [account.firstName, account.lastName].filter(Boolean).join(" ");
};
