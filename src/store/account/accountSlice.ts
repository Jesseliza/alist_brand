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
    createAccountRequest(state, _action: PayloadAction<CreateAccountPayload>) {
      state.loading = true;
      state.error = null;
    },
    createAccountSuccess(state, action: PayloadAction<Account>) {
      state.loading = false;
      state.selectedAccount = action.payload;
      state.accounts.push(action.payload);
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
  },
});

export const {
  fetchAccountsRequest,
  fetchAccountsSuccess,
  fetchAccountsFailure,
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
} = accountSlice.actions;

export default accountSlice.reducer;
