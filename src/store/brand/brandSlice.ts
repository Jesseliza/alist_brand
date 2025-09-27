import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Brand } from '@/types/entities';
import { PaginationState } from '@/types/api';

export interface BrandPayload extends Partial<Brand> {
  tradeLicenseFile?: File | null;
  vatCertificateFile?: File | null;
}

interface BrandState {
  brands: Brand[];
  brand: Brand | null;
  pagination: PaginationState;
  loading: boolean;
  error: string | null;
  createLoading: boolean;
  createSuccess: boolean;
  updateLoading: boolean;
  updateSuccess: boolean;
  deleteFileLoading: boolean;
  deleteFileSuccess: boolean;
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
  createLoading: false,
  createSuccess: false,
  updateLoading: false,
  updateSuccess: false,
  deleteFileLoading: false,
  deleteFileSuccess: false,
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
    fetchBrandRequest: (state, action: PayloadAction<{ brandId: string }>) => {
      state.loading = true;
      state.error = null;
    },
    fetchBrandSuccess: (state, action: PayloadAction<Brand>) => {
      state.loading = false;
      state.brand = action.payload;
    },
    fetchBrandFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    createBrandRequest: (state, action: PayloadAction<BrandPayload>) => {
      state.createLoading = true;
      state.createSuccess = false;
      state.error = null;
    },
    createBrandSuccess: (state) => {
      state.createLoading = false;
      state.createSuccess = true;
    },
    createBrandFailure: (state, action: PayloadAction<string>) => {
      state.createLoading = false;
      state.error = action.payload;
    },
    resetCreateStatus: (state) => {
      state.createSuccess = false;
      state.error = null;
    },
    updateBrandField: (state, action: PayloadAction<{ field: keyof Brand; value: string }>) => {
      if (state.brand) {
        state.brand = { ...state.brand, [action.payload.field]: action.payload.value };
      }
    },
    initializeNewBrand: (state) => {
      state.brand = {};
      state.loading = false;
      state.error = null;
    },
    updateBrandRequest: (state, action: PayloadAction<BrandPayload>) => {
      state.updateLoading = true;
      state.updateSuccess = false;
      state.error = null;
    },
    updateBrandSuccess: (state) => {
      state.updateLoading = false;
      state.updateSuccess = true;
    },
    updateBrandFailure: (state, action: PayloadAction<string>) => {
      state.updateLoading = false;
      state.error = action.payload;
    },
    resetUpdateStatus: (state) => {
      state.updateSuccess = false;
      state.error = null;
    },
    deleteBrandFileRequest: (state, action: PayloadAction<{ venue_file_id: number }>) => {
      state.deleteFileLoading = true;
      state.deleteFileSuccess = false;
      state.error = null;
    },
    deleteBrandFileSuccess: (state) => {
      state.deleteFileLoading = false;
      state.deleteFileSuccess = true;
    },
    deleteBrandFileFailure: (state, action: PayloadAction<string>) => {
      state.deleteFileLoading = false;
      state.error = action.payload;
    },
    resetDeleteFileStatus: (state) => {
      state.deleteFileSuccess = false;
    }
  },
});

export const {
  fetchBrandsRequest,
  fetchBrandsSuccess,
  fetchBrandsFailure,
  fetchMoreBrandsRequest,
  fetchMoreBrandsSuccess,
  fetchMoreBrandsFailure,
  fetchBrandRequest,
  fetchBrandSuccess,
  fetchBrandFailure,
  createBrandRequest,
  createBrandSuccess,
  createBrandFailure,
  resetCreateStatus,
  updateBrandField,
  initializeNewBrand,
  updateBrandRequest,
  updateBrandSuccess,
  updateBrandFailure,
  resetUpdateStatus,
  deleteBrandFileRequest,
  deleteBrandFileSuccess,
  deleteBrandFileFailure,
  resetDeleteFileStatus,
} = brandSlice.actions;

export default brandSlice.reducer;