import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Account, Brand } from '@/types/entities';

interface AccountState {
  loading: boolean;
  error: string | null;
  account: Account | null;
}

const initialState: AccountState = {
  loading: false,
  error: null,
  account: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    createAccountStart(state, action: PayloadAction<any>) {
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
  },
});

export const {
  createAccountStart,
  createAccountSuccess,
  createAccountFailure,
} = accountSlice.actions;

export default accountSlice.reducer;
