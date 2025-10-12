"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import AccountHeader from "@/components/features/accounts/AccountHeader";
import AccountTabContent from "@/components/features/accounts/AccountTabContent";
import { Account, AccountType } from "@/types/entities";
import { RootState } from "@/store/store";
import {
  createAccountRequest,
  updateAccountRequest,
  fetchAccountByIdRequest,
  resetUpdateStatus,
  resetCreateStatus,
  clearAccountError,
} from "@/store/account/accountSlice";
import { CreateAccountPayload, UpdateAccountPayload } from "@/types/requests";
import Loader from "@/components/general/Loader";

export default function AccountPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const dispatch = useDispatch();

  const accountId = params.accountId as string;
  const isCreateMode = accountId === "create";

  const { selectedAccount, loading, error, updateSuccess, createSuccess } = useSelector(
    (state: RootState) => state.account
  );
  const loggedInUser = useSelector((state: RootState) => state.auth.user);

  const isProfilePage = loggedInUser?.accountId === accountId;

  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "Details");
  const [account, setAccount] = useState<Partial<Account> | null>(null);

  useEffect(() => {
    if (isCreateMode) {
      setAccount({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
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

  // Handle successful creation or update
  useEffect(() => {
    if (createSuccess) {
      router.push("/businesses/accounts");
      dispatch(resetCreateStatus()); // Reset the flag
    }

    if (updateSuccess) {
      if (!isProfilePage) {
        router.push("/businesses/accounts");
      }
      dispatch(resetUpdateStatus()); // Reset the flag
    }
  }, [
    createSuccess,
    updateSuccess,
    router,
    dispatch,
    isProfilePage,
  ]);

  useEffect(() => {
    return () => {
      dispatch(clearAccountError());
    };
  }, [dispatch]);

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
      dispatch(createAccountRequest(formData as CreateAccountPayload));
    } else {
      if (accountId) {
        dispatch(updateAccountRequest({ ...formData, accountId } as UpdateAccountPayload));
      }
    }
  };

  // Show loader while initial data is being fetched.
  if (loading || (!account && !isCreateMode && !error)) {
    return <Loader />;
  }

  // Show "Not Found" only after loading is complete and if there's an error and no account.
  if (!isCreateMode && !account && error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            Account Not Found
          </h1>
          <p className="text-gray-500">
            The account you&apos;re looking for doesn&apos;t exist or could not be loaded.
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
          // account can be null, but AccountHeader expects undefined for optional props.
          account={account || undefined}
          loggedInUser={loggedInUser}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          isCreateMode={isCreateMode}
          isProfilePage={isProfilePage}
        />
        <AccountTabContent
          activeTab={activeTab}
          account={account}
          onSave={handleSave}
          isCreateMode={isCreateMode}
          isProfilePage={isProfilePage}
          loggedInUser={loggedInUser}
        />
      </div>
    </div>
  );
}
