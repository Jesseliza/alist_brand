"use client";

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { fetchAccountsRequest } from "@/store/account/accountSlice";
import { RootState } from "@/store/store";
import AccountsTable from "@/components/features/accounts/AccountsTable";
import AccountCard from "@/components/features/accounts/AccountMobileCard";
import Pagination from "@/components/general/Pagination";
import SortDropdown from "@/components/general/dropdowns/SortDropdown";
import ActionDropdown from "@/components/general/dropdowns/ActionDropdown";
import SearchInputMobile from "@/components/general/SearchInputMobile";
import Image from "next/image";

export default function AccountsPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { accounts, pagination, loading, error, status: requestStatus } = useSelector((state: RootState) => state.account);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [accountType, setAccountType] = useState("");

  const debouncedSearch = useDebounce(search, 500);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (requestStatus === 'idle') {
      dispatch(fetchAccountsRequest({ per_page: 20, page: 1 }));
    }
  }, [requestStatus, dispatch]);

  useEffect(() => {
    // This effect now handles all filter changes, debounced.
    // We skip the initial mount to avoid a double fetch.
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    dispatch(fetchAccountsRequest({
      search: debouncedSearch,
      status: status,
      account_type: accountType,
      per_page: pagination.perPage || 20,
      page: 1
    }));
    // Note: `status` and `accountType` are not debounced, so this will fire instantly for them.
    // This is a reasonable UX for dropdowns.
  }, [debouncedSearch, status, accountType, dispatch]);

  const handlePageChange = (page: number) => {
    dispatch(fetchAccountsRequest({
      page,
      search: search,
      status: status,
      account_type: accountType,
      per_page: pagination.perPage
    }));
  };

  const handleItemsPerPageChange = (items: number) => {
    dispatch(fetchAccountsRequest({ search, status, account_type: accountType, per_page: items, page: 1 }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSortSelect = (value: string) => {
    const [key, val] = value.split(':');
    if (key === 'status') {
      setStatus(val);
    }
    if (key === 'account_type') {
      setAccountType(val);
    }
  };

  const handleActionSelect = (value: string) => {
    console.log("Action selected:", value);
    // Add your action logic here
  };

  return (
    <div>
      <div className="py-[13px] bg-white hidden md:block relative">
        <div
          className="absolute inset-0 bg-white"
          style={{ left: "-100vw", right: "-100vw" }}
        />
        <div className="max-w-[1428px] mx-auto flex items-center justify-between relative z-10">
          <div className="text-[18px] leading-[27px] w-[147px]">
            <SortDropdown onSelect={handleSortSelect} />
          </div>
        </div>
      </div>
      <div className="md:hidden pt-4 flex items-center gap-[7px]">
        <SearchInputMobile
          value={search}
          onChange={handleSearchChange}
          placeholder="Search account"
        />
        <div className="bg-white rounded-[11px] w-10 h-10  flex items-center justify-center aspect-square">
          <Image
            src="/icons/general/sort-1-light.svg"
            alt="sort"
            width={24.08}
            height={14.61}
          />
        </div>
      </div>
      <div className="py-5.5">
        <div className="max-w-[1428px] mx-auto">
          <div className="hidden md:flex justify-end items-center mb-5.5 space-x-4">
            <button
              onClick={() => router.push("/businesses/accounts/create")}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add Account
            </button>
            <div className="w-[137px]">
              <ActionDropdown onSelect={handleActionSelect} />
            </div>
          </div>
          {requestStatus === 'loading' && <p>Loading...</p>}
          {requestStatus === 'failed' && <p className="text-red-500">Error: {error}</p>}
          {requestStatus === 'succeeded' && (
            <>
              <div className="md:hidden space-y-[7px]">
                {accounts.map((account) => (
                  <AccountCard key={account.accountId} account={account} />
                ))}
              </div>
              <div className="hidden md:block">
                <AccountsTable accounts={accounts} />
                <Pagination
                  totalItems={pagination.total}
                  itemsPerPage={pagination.perPage}
                  currentPage={pagination.currentPage}
                  onPageChange={handlePageChange}
                  onItemsPerPageChange={handleItemsPerPageChange}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
