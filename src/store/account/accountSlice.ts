import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Account } from '@/types/entities';
import { CreateAccountPayload, UpdateAccountPayload } from '@/types/requests';

interface PaginationState {
  currentPage: number;
  lastPage: number;
  perPage: number;
  total: number;
}

interface AccountState {
  accounts: Account[];
  selectedAccount: Account | null;
  loading: boolean;
  error: string | null;
  pagination: PaginationState;
  updateSuccess: boolean;
  createSuccess: boolean;
  bulkDeleteInProgress: boolean;
  bulkDeleteError: string | null;
  bulkUpdateStatusInProgress: boolean;
  bulkUpdateStatusError: string | null;
}

const initialState: AccountState = {
  accounts: [],
  selectedAccount: null,
  loading: false,
  error: null,
  pagination: {
    currentPage: 1,
    lastPage: 1,
    perPage: 10,
    total: 0,
  },
  updateSuccess: false,
  createSuccess: false,
  bulkDeleteInProgress: false,
  bulkDeleteError: null,
  bulkUpdateStatusInProgress: false,
  bulkUpdateStatusError: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchAccountsRequest(state, _action: PayloadAction<{
      search?: string;
      status?: string;
      account_type?: string;
      per_page?: number;
      page?: number;
    }>) {
      state.loading = true;
      state.error = null;
    },
    fetchAccountsSuccess(state, action: PayloadAction<{ accounts: Account[], pagination: PaginationState }>) {
      state.loading = false;
      state.accounts = action.payload.accounts;
      state.pagination = action.payload.pagination;
    },
    fetchAccountsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchMoreAccountsRequest(state, _action: PayloadAction<{
      search?: string;
      status?: string;
      account_type?: string;
      per_page?: number;
      page?: number;
    }>) {
      state.loading = true;
      state.error = null;
    },
    fetchMoreAccountsSuccess(state, action: PayloadAction<{ accounts: Account[], pagination: PaginationState }>) {
      state.loading = false;
      state.accounts = [...state.accounts, ...action.payload.accounts];
      state.pagination = action.payload.pagination;
    },
    fetchMoreAccountsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createAccountRequest(state, _action: PayloadAction<CreateAccountPayload>) {
      state.loading = true;
      state.error = null;
      state.createSuccess = false;
    },
    createAccountSuccess(state, action: PayloadAction<Account>) {
      state.loading = false;
      state.selectedAccount = action.payload;
      state.accounts.push(action.payload);
      state.createSuccess = true;
    },
    createAccountFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateAccountRequest(state, _action: PayloadAction<UpdateAccountPayload>) {
      state.loading = true;
      state.error = null;
      state.updateSuccess = false;
    },
    updateAccountSuccess(state, action: PayloadAction<Account>) {
      state.loading = false;
      state.selectedAccount = action.payload;
      const index = state.accounts.findIndex(account => account.accountId === action.payload.accountId);
      if (index !== -1) {
        state.accounts[index] = action.payload;
      }
      state.updateSuccess = true;
    },
    updateAccountFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deleteAccountRequest(state, _action: PayloadAction<{ accountId: string }>) {
      state.loading = true;
      state.error = null;
    },
    deleteAccountSuccess(state, action: PayloadAction<{ accountId: string }>) {
      state.loading = false;
      state.accounts = state.accounts.filter(account => account.accountId !== action.payload.accountId);
      if (state.selectedAccount?.accountId === action.payload.accountId) {
        state.selectedAccount = null;
      }
    },
    deleteAccountFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchAccountByIdRequest(state, _action: PayloadAction<{ accountId: string }>) {
      state.loading = true;
      state.error = null;
    },
    fetchAccountByIdSuccess(state, action: PayloadAction<Account>) {
      state.loading = false;
      state.selectedAccount = action.payload;
    },
    fetchAccountByIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    resetUpdateStatus(state) {
      state.updateSuccess = false;
    },
    resetCreateStatus(state) {
      state.createSuccess = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    bulkDeleteAccountsRequest(state, _action: PayloadAction<{ account_ids: string[] }>) {
      state.bulkDeleteInProgress = true;
      state.bulkDeleteError = null;
    },
    bulkDeleteAccountsSuccess(state, action: PayloadAction<{ updated_ids: string[] }>) {
      state.bulkDeleteInProgress = false;
      state.accounts = state.accounts.filter(
        (account) => !action.payload.updated_ids.includes(account.accountId)
      );
    },
    bulkDeleteAccountsFailure(state, action: PayloadAction<string>) {
      state.bulkDeleteInProgress = false;
      state.bulkDeleteError = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    bulkUpdateStatusRequest(state, _action: PayloadAction<{ account_ids: string[], status: string }>) {
      state.bulkUpdateStatusInProgress = true;
      state.bulkUpdateStatusError = null;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    bulkUpdateStatusSuccess(state, _action: PayloadAction<{ updated_ids: string[], status: string }>) {
      state.bulkUpdateStatusInProgress = false;
      // This part is tricky, as we don't have the status in the account object.
      // We will just refetch the accounts list in the saga.
    },
    bulkUpdateStatusFailure(state, action: PayloadAction<string>) {
      state.bulkUpdateStatusInProgress = false;
      state.bulkUpdateStatusError = action.payload;
    },
    clearAccountError(state) {
      state.error = null;
    },
  },
});

export const {
  clearAccountError,
  fetchAccountsRequest,
  fetchAccountsSuccess,
  fetchAccountsFailure,
  fetchMoreAccountsRequest,
  fetchMoreAccountsSuccess,
  fetchMoreAccountsFailure,
  createAccountRequest,
  createAccountSuccess,
  createAccountFailure,
  updateAccountRequest,
  updateAccountSuccess,
  updateAccountFailure,
  deleteAccountRequest,
  deleteAccountSuccess,
  deleteAccountFailure,
  fetchAccountByIdRequest,
  fetchAccountByIdSuccess,
  fetchAccountByIdFailure,
  resetUpdateStatus,
  resetCreateStatus,
  bulkDeleteAccountsRequest,
  bulkDeleteAccountsSuccess,
  bulkDeleteAccountsFailure,
  bulkUpdateStatusRequest,
  bulkUpdateStatusSuccess,
  bulkUpdateStatusFailure,
} = accountSlice.actions;

export default accountSlice.reducer;
