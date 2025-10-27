"use client";

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import {
  fetchAccountsRequest,
  bulkDeleteAccountsRequest,
  bulkUpdateStatusRequest,
  fetchMoreAccountsRequest,
} from "@/store/account/accountSlice";
import { setSearchTerm } from "@/store/search/searchSlice";
import { RootState } from "@/store/store";
import AccountsTable from "@/components/features/accounts/AccountsTable";
import AccountCard from "@/components/features/accounts/AccountMobileCard";
import Pagination from "@/components/general/Pagination";
// import SortDropdown from "@/components/general/dropdowns/SortDropdown";
import ActionDropdown from "@/components/general/dropdowns/ActionDropdown";
import SearchInputMobile from "@/components/general/SearchInputMobile";
import Image from "next/image";
import Loader from "@/components/general/Loader";
import InlineLoader from "@/components/general/InlineLoader";

export default function AccountsPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    accounts,
    pagination,
    loading,
    paginationLoading,
    error,
    // bulkDeleteInProgress,
    // bulkDeleteError,
    bulkUpdateStatusInProgress,
    bulkUpdateStatusError,
  } = useSelector((state: RootState) => state.account);
  const { user } = useSelector((state: RootState) => state.auth);

  const { searchTerm } = useSelector((state: RootState) => state.search);
  // const [status, setStatus] = useState("");
  // const [accountType, setAccountType] = useState("");
  const [checkedRows, setCheckedRows] = useState<Set<string>>(new Set());
  const [mobilePage, setMobilePage] = useState(1);
  // const prevBulkDeleteInProgress = useRef(false);

  const debouncedSearch = useDebounce(searchTerm, 500);

  const filters = useMemo(() => ({
    registration_type: user?.registration_type === "subadmin" ? "accounts" : undefined,
  }), [user]);

  const handleFetch = (page = 1, perPage = 10, isPagination = false) => {
    dispatch(
      fetchAccountsRequest({
        search: debouncedSearch,
        per_page: perPage,
        page,
        isPagination,
        ...filters,
      })
    );
  };

  // Effect for initial load and filter changes
  useEffect(() => {
    handleFetch(1, pagination.perPage);
  }, [dispatch, filters]);

  // Effect for debounced search
  useEffect(() => {
    if (debouncedSearch) {
      setMobilePage(1);
      handleFetch(1, pagination.perPage);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (!bulkUpdateStatusInProgress && !bulkUpdateStatusError) {
      setCheckedRows(new Set());
    }
  }, [bulkUpdateStatusInProgress, bulkUpdateStatusError]);

  const handlePageChange = (page: number) => {
    handleFetch(page, pagination.perPage, true);
  };

  const handleItemsPerPageChange = (items: number) => {
    handleFetch(1, items);
  };

  // const handleSortSelect = (value: string) => {
  //   const [key, val] = value.split(':');
  //   if (key === 'status') {
  //     setStatus(val);
  //   }
  //   if (key === 'account_type') {
  //     setAccountType(val);
  //   }
  // };

  const handleActionSelect = (value: string) => {
    if (value === "update") {
      if (checkedRows.size === 1) {
        const accountId = checkedRows.values().next().value;
        router.push(`/businesses/accounts/${accountId}`);
      }
    }
    if (value === "delete") {
      if (checkedRows.size > 0) {
        toast(
          (t) => (
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4">
              <p className="font-semibold">
                Are you sure you want to delete the selected accounts?
              </p>
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-200 rounded-md"
                  onClick={() => toast.dismiss(t.id)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                  onClick={() => {
                    const account_ids = Array.from(checkedRows);
                    dispatch(bulkDeleteAccountsRequest({ account_ids }));
                    setCheckedRows(new Set());
                    toast.dismiss(t.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ),
          {
            duration: 6000,
          }
        );
      }
    }
    if (value === "active" || value === "inactive") {
      if (checkedRows.size > 0) {
        dispatch(
          bulkUpdateStatusRequest({
            account_ids: Array.from(checkedRows),
            status: value,
          })
        );
      }
    }
  };

  const handleCheckboxChange = (accountId: string) => {
    setCheckedRows((prevCheckedRows) => {
      const newCheckedRows = new Set(prevCheckedRows);
      if (newCheckedRows.has(accountId)) {
        newCheckedRows.delete(accountId);
      } else {
        newCheckedRows.add(accountId);
      }
      return newCheckedRows;
    });
  };

  const handleSeeMore = () => {
    const nextPage = mobilePage + 1;
    dispatch(
      fetchMoreAccountsRequest({
        page: nextPage,
        search: searchTerm,
        per_page: 10,
        ...filters,
      })
    );
    setMobilePage(nextPage);
  };

  const handleAddAccountClick = () => {
    router.push("/businesses/accounts/create");
  };

  return (
    <div>
      {/* <div className="py-[13px] bg-white hidden md:block relative">
        <div className="absolute inset-0 bg-white" style={{left: '-100vw', right: '-100vw'}}></div>
        <div className="max-w-[1428px] mx-auto flex items-center justify-between relative z-10">
          <div className="text-[18px] leading-[27px]">
            <SortDropdown onSelect={handleSortSelect} />
          </div>
        </div>
      </div> */}
      <div className="md:hidden pt-4 flex items-center gap-[7px]">
        <SearchInputMobile
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
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
              onClick={handleAddAccountClick}
              className="bg-blue-500 text-white rounded-[11px] text-[18px] leading-[27px] pt-1.25 pb-1.75 px-6"
            >
              Add Account
            </button>
            <div className="w-auto">
              <ActionDropdown
                onSelect={handleActionSelect}
                showUpdate={checkedRows.size === 1}
                disabled={checkedRows.size === 0}
              />
            </div>
          </div>
          {/* Mobile buttons */}
          <div className="md:hidden flex justify-end items-center mb-4 space-x-2">
            <div className="relative">
              <button
                onClick={handleAddAccountClick}
                className="bg-blue-500 text-white rounded-[11px] text-sm px-4 py-2"
              >
                Add Account
              </button>
            </div>
            <div className="w-auto">
              <ActionDropdown
                onSelect={handleActionSelect}
                showUpdate={checkedRows.size === 1}
                disabled={checkedRows.size === 0}
              />
            </div>
          </div>
          {loading && <Loader />}
          {error && <p className="text-red-500">Error: {error}</p>}
          {!loading && !error && (
            <>
              <div className="md:hidden space-y-[7px]">
                {accounts.length === 0 ? (
                  <div className="text-center py-10 text-gray-500">
                    No records found.
                  </div>
                ) : (
                  accounts.map((account) => (
                    <AccountCard
                      key={account.accountId}
                      account={account}
                      checked={checkedRows.has(account.accountId)}
                      onCheckboxChange={() =>
                        handleCheckboxChange(account.accountId)
                      }
                    />
                  ))
                )}
                {accounts.length > 0 && accounts.length < pagination.total && (
                  <div className="text-center font-semibold text-[15px] text-gray-500 my-4 mb-8">
                    <button
                      onClick={handleSeeMore}
                      disabled={loading}
                      className="disabled:text-gray-400"
                    >
                      {loading ? <InlineLoader /> : "See More"}
                    </button>
                  </div>
                )}
              </div>
              <div className="hidden md:block">
                <AccountsTable
                  accounts={accounts}
                  checkedRows={checkedRows}
                  onCheckboxChange={handleCheckboxChange}
                />
                {accounts.length > 0 && (
                  <Pagination
                    totalItems={pagination.total}
                    itemsPerPage={pagination.perPage}
                    currentPage={pagination.currentPage}
                    onPageChange={handlePageChange}
                    onItemsPerPageChange={handleItemsPerPageChange}
                    isLoading={paginationLoading}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
