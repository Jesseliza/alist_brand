import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Brand } from '@/types/entities';
import { PaginationState } from '@/types/api';

interface BrandState {
  brands: Brand[];
  pagination: PaginationState;
  loading: boolean;
  error: string | null;
}

const initialState: BrandState = {
  brands: [],
  pagination: {
    currentPage: 1,
    lastPage: 1,
    perPage: 10,
    total: 0,
  },
  loading: false,
  error: null,
};

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    fetchBrandsRequest: (state, action: PayloadAction<{ page: number; per_page: number; search?: string }>) => {
      state.loading = true;
      state.error = null;
    },
    fetchBrandsSuccess: (state, action: PayloadAction<{ brands: Brand[]; pagination: PaginationState }>) => {
      state.loading = false;
      state.brands = action.payload.brands;
      state.pagination = action.payload.pagination;
    },
    fetchBrandsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchMoreBrandsRequest: (state, action: PayloadAction<{ page: number; per_page: number; search?: string }>) => {
      state.loading = true;
      state.error = null;
    },
    fetchMoreBrandsSuccess: (state, action: PayloadAction<{ brands: Brand[]; pagination: PaginationState }>) => {
      state.loading = false;
      state.brands = [...state.brands, ...action.payload.brands];
      state.pagination = action.payload.pagination;
    },
    fetchMoreBrandsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchBrandsRequest,
  fetchBrandsSuccess,
  fetchBrandsFailure,
  fetchMoreBrandsRequest,
  fetchMoreBrandsSuccess,
  fetchMoreBrandsFailure,
} = brandSlice.actions;

export default brandSlice.reducer;