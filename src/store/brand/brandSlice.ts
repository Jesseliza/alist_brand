import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Brand } from '@/types/entities';

interface BrandState {
  brands: Brand[];
  loading: boolean;
  error: string | null;
}

const initialState: BrandState = {
  brands: [],
  loading: false,
  error: null,
};

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    fetchBrandsRequest(state, _action: PayloadAction<{ search?: string }>) {
      state.loading = true;
      state.error = null;
    },
    fetchBrandsSuccess(state, action: PayloadAction<Brand[]>) {
      state.loading = false;
      state.brands = action.payload;
    },
    fetchBrandsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteBrandRequest(state, _action: PayloadAction<{ brandId: string }>) {
      state.loading = true;
      state.error = null;
    },
    deleteBrandSuccess(state, action: PayloadAction<{ brandId: string }>) {
      state.loading = false;
      state.brands = state.brands.filter(brand => brand.brandId !== action.payload.brandId);
    },
    deleteBrandFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchBrandsRequest,
  fetchBrandsSuccess,
  fetchBrandsFailure,
  deleteBrandRequest,
  deleteBrandSuccess,
  deleteBrandFailure,
} = brandSlice.actions;

export default brandSlice.reducer;
