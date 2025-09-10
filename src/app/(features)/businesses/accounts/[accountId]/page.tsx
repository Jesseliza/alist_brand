"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import AccountHeader from "@/components/features/accounts/AccountHeader";
import AccountTabContent from "@/components/features/accounts/AccountTabContent";
import { AccountsData } from "@/data/AccountsData";
import { Account } from "@/types/entities";

export default function AccountPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const accountId = params.accountId as string;

  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "Details"
  );
  const [account, setAccount] = useState<Account | null>(null);

  // Fetch account data based on accountId
  useEffect(() => {
    const foundAccount = AccountsData.find(
      (acc) => acc.accountId === accountId
    );
    setAccount(foundAccount || null);
  }, [accountId]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.push(`?${params.toString()}`);
  };

  // Update active tab when URL changes
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  // Show loading or not found state for edit mode
  if (!account && accountId !== "create") {
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
        {account && (
          <AccountHeader
            account={account}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        )}
        <AccountTabContent activeTab={activeTab} accountId={accountId} />
      </div>
    </div>
  );
}
