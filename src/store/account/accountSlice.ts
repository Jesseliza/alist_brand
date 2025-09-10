import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Account, Brand } from '@/types/entities';

interface AccountState {
  loading: boolean;
  error: string | null;
  account: Account | null;
  searchedBrands: Brand[];
  searchedBrandsLoading: boolean;
}

const initialState: AccountState = {
  loading: false,
  error: null,
  account: null,
  searchedBrands: [],
  searchedBrandsLoading: false,
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
    searchBrandsRequest(state, action: PayloadAction<string>) {
      state.searchedBrandsLoading = true;
    },
    searchBrandsSuccess(state, action: PayloadAction<Brand[]>) {
      state.searchedBrandsLoading = false;
      state.searchedBrands = action.payload;
    },
    searchBrandsFailure(state, action: PayloadAction<string>) {
      state.searchedBrandsLoading = false;
      // You might want to handle the error state as well
    },
  },
});

export const {
  createAccountStart,
  createAccountSuccess,
  createAccountFailure,
  searchBrandsRequest,
  searchBrandsSuccess,
  searchBrandsFailure,
} = accountSlice.actions;

export default accountSlice.reducer;
