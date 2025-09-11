"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import AccountHeader from "@/components/features/accounts/AccountHeader";
import AccountTabContent from "@/components/features/accounts/AccountTabContent";
import { Account, AccountType } from "@/types/entities";
import { RootState } from "@/store/store";
import { createAccountRequest, updateAccountRequest, fetchAccountsRequest, fetchAccountByIdRequest } from "@/store/account/accountSlice";
import { CreateAccountPayload, UpdateAccountPayload } from "@/types/requests";

export default function AccountPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const dispatch = useDispatch();

  const accountId = params.accountId as string;
  const isCreateMode = accountId === "create";

  const { accounts, selectedAccount, loading, error } = useSelector((state: RootState) => state.account);

  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "Details");
  const [account, setAccount] = useState<Partial<Account> | null>(null);

  useEffect(() => {
    if (isCreateMode) {
      setAccount({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        pin: "",
        accountType: AccountType.INDIVIDUAL,
        brands: [],
      });
    } else if (accountId) {
      dispatch(fetchAccountByIdRequest({ accountId }));
    }
  }, [accountId, isCreateMode, dispatch]);

  useEffect(() => {
    if (selectedAccount && selectedAccount.accountId === accountId) {
      setAccount(selectedAccount);
    }
  }, [selectedAccount, accountId]);

  // Handle successful creation
  useEffect(() => {
    // If we were in create mode and a selectedAccount appears, it means creation was successful.
    if (isCreateMode && selectedAccount?.accountId) {
        router.push('/businesses/accounts');
    }
  }, [selectedAccount, isCreateMode, router]);


  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (!isCreateMode) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tab);
      router.push(`?${params.toString()}`);
    }
  };

  const handleSave = (formData: Partial<Account>) => {
    if (isCreateMode) {
      // The saga and backend will handle generating the full account object
      dispatch(createAccountRequest(formData as CreateAccountPayload));
    } else {
      // Ensure we have the accountId for updates
      if (accountId) {
        dispatch(updateAccountRequest({ ...formData, accountId } as UpdateAccountPayload));
      }
    }
  };

  if (loading && !account) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isCreateMode && !account && !loading) {
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
      {error && <div className="text-red-500 bg-red-100 p-3 rounded-md mb-4">Error: {error}</div>}
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
