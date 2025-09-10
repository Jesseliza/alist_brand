"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import AccountHeader from "@/components/features/accounts/AccountHeader";
import AccountTabContent from "@/components/features/accounts/AccountTabContent";
import { AccountsData } from "@/data/AccountsData";
import { Account, AccountType } from "@/types/entities";

export default function AccountPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const accountId = params.accountId as string;
  const isCreateMode = accountId === "create";

  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "Details"
  );
  const [account, setAccount] = useState<Partial<Account> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isCreateMode) {
      setAccount({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        pin: "",
        accountType: AccountType.INDIVIDUAL,
      });
      setIsLoading(false);
    } else {
      const foundAccount = AccountsData.find(
        (acc) => acc.accountId === accountId
      );
      setAccount(foundAccount || null);
      setIsLoading(false);
    }
  }, [accountId, isCreateMode]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (!isCreateMode) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tab);
      router.push(`?${params.toString()}`);
    }
  };

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleSave = (formData: Partial<Account>) => {
    if (isCreateMode) {
      const newAccount: Account = {
        ...formData,
        accountId: new Date().getTime().toString(),
        avatarInitials: `${formData.firstName?.[0] || ""}${
          formData.lastName?.[0] || ""
        }`.toUpperCase(),
        avatarBackground:
          "#" +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0"),
        signUpDate: new Date(),
        subscriptionCount: 0,
        brandsCount: 0,
        campaignsCount: 0,
      } as Account;
      AccountsData.push(newAccount);
      alert("Account created successfully!");
      router.push(`/businesses/accounts/${newAccount.accountId}`);
    } else {
      const accountIndex = AccountsData.findIndex(
        (acc) => acc.accountId === accountId
      );
      if (accountIndex !== -1) {
        const updatedAccount = {
          ...AccountsData[accountIndex],
          ...formData,
          avatarInitials: `${formData.firstName?.[0] || ""}${
            formData.lastName?.[0] || ""
          }`.toUpperCase(),
        };
        AccountsData[accountIndex] = updatedAccount;
        setAccount(updatedAccount);
        alert("Account updated successfully!");
        router.refresh();
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!account) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            Account Not Found
          </h1>
          <p className="text-gray-500">
            The account you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <AccountHeader
          account={account}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          isCreateMode={isCreateMode}
        />
        <AccountTabContent
          activeTab={activeTab}
          account={account}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}
