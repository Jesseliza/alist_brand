import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Account } from '@/types/entities';
import { CreateAccountPayload, UpdateAccountPayload } from '@/types/requests';

interface AccountState {
  account: Account | null;
  loading: boolean;
  error: string | null;
}

const initialState: AccountState = {
  account: null,
  loading: false,
  error: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    createAccountRequest(state, _action: PayloadAction<CreateAccountPayload>) {
      state.loading = true;
      state.error = null;
    },
    createAccountSuccess(state, action: PayloadAction<Account>) {
      state.loading = false;
      state.account = action.payload;
    },
    createAccountFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    updateAccountRequest(state, _action: PayloadAction<UpdateAccountPayload>) {
      state.loading = true;
      state.error = null;
    },
    updateAccountSuccess(state, action: PayloadAction<Account>) {
      state.loading = false;
      state.account = action.payload;
    },
    updateAccountFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteAccountRequest(state, _action: PayloadAction<{ accountId: string }>) {
      state.loading = true;
      state.error = null;
    },
    deleteAccountSuccess(state) {
      state.loading = false;
      state.account = null;
    },
    deleteAccountFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createAccountRequest,
  createAccountSuccess,
  createAccountFailure,
  updateAccountRequest,
  updateAccountSuccess,
  updateAccountFailure,
  deleteAccountRequest,
  deleteAccountSuccess,
  deleteAccountFailure,
} = accountSlice.actions;

export default accountSlice.reducer;
