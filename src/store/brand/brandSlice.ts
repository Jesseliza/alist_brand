import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Brand } from '@/types/entities';
import { FetchBrandsResponse } from '@/types/requests';

interface BrandState {
  brands: Brand[];
  currentBrand: Brand | null;
  pagination: {
    total: number;
    perPage: number;
    currentPage: number;
  };
  loading: boolean;
  error: string | null;
  addBrandInProgress: boolean;
  addBrandError: string | null;
  updateBrandInProgress: boolean;
  updateBrandError: string | null;
  deleteBrandInProgress: boolean;
  deleteBrandError: string | null;
  pinVerificationInProgress: boolean;
  pinVerificationError: string | null;
}

const initialState: BrandState = {
  brands: [],
  currentBrand: null,
  pagination: {
    total: 0,
    perPage: 10,
    currentPage: 1,
  },
  loading: false,
  error: null,
  addBrandInProgress: false,
  addBrandError: null,
  updateBrandInProgress: false,
  updateBrandError: null,
  deleteBrandInProgress: false,
  deleteBrandError: null,
  pinVerificationInProgress: false,
  pinVerificationError: null,
};

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    fetchBrandsRequest(state, _action: PayloadAction<{ page: number, per_page: number, search?: string }>) {
      state.loading = true;
      state.error = null;
    },
    fetchBrandsSuccess(state, action: PayloadAction<FetchBrandsResponse>) {
      state.loading = false;
      state.brands = action.payload.data;
      state.pagination = {
        total: action.payload.total,
        perPage: action.payload.per_page,
        currentPage: action.payload.current_page,
      };
    },
    fetchBrandsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchMoreBrandsRequest(state, _action: PayloadAction<{ page: number, per_page: number, search?: string }>) {
      state.loading = true;
      state.error = null;
    },
    fetchMoreBrandsSuccess(state, action: PayloadAction<FetchBrandsResponse>) {
      state.loading = false;
      state.brands = [...state.brands, ...action.payload.data];
      state.pagination = {
        total: action.payload.total,
        perPage: action.payload.per_page,
        currentPage: action.payload.current_page,
      };
    },
    fetchMoreBrandsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchBrandByIdRequest(state, _action: PayloadAction<{ brandId: string }>) {
      state.loading = true;
      state.error = null;
      state.currentBrand = null;
    },
    fetchBrandByIdSuccess(state, action: PayloadAction<Brand>) {
      state.loading = false;
      state.currentBrand = action.payload;
    },
    fetchBrandByIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addBrandRequest(state, _action: PayloadAction<{ data: FormData }>) {
      state.addBrandInProgress = true;
      state.addBrandError = null;
    },
    addBrandSuccess(state) {
      state.addBrandInProgress = false;
    },
    addBrandFailure(state, action: PayloadAction<string>) {
      state.addBrandInProgress = false;
      state.addBrandError = action.payload;
    },
    updateBrandRequest(state, _action: PayloadAction<{ brandId: string, data: FormData }>) {
      state.updateBrandInProgress = true;
      state.updateBrandError = null;
    },
    updateBrandSuccess(state) {
      state.updateBrandInProgress = false;
    },
    updateBrandFailure(state, action: PayloadAction<string>) {
      state.updateBrandInProgress = false;
      state.updateBrandError = action.payload;
    },
    deleteBrandRequest(state, _action: PayloadAction<{ brandId: string }>) {
      state.deleteBrandInProgress = true;
      state.deleteBrandError = null;
    },
    deleteBrandSuccess(state, action: PayloadAction<{ brandId: string }>) {
      state.deleteBrandInProgress = false;
      state.brands = state.brands.filter(brand => brand.brandId !== action.payload.brandId);
    },
    deleteBrandFailure(state, action: PayloadAction<string>) {
      state.deleteBrandInProgress = false;
      state.deleteBrandError = action.payload;
    },
    verifyPinAndDownloadRequest(state, _action: PayloadAction<{ brandId: string, fileType: string, pin: string }>) {
      state.pinVerificationInProgress = true;
      state.pinVerificationError = null;
    },
    verifyPinAndDownloadSuccess(state) {
      state.pinVerificationInProgress = false;
    },
    verifyPinAndDownloadFailure(state, action: PayloadAction<string>) {
      state.pinVerificationInProgress = false;
      state.pinVerificationError = action.payload;
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
  fetchBrandByIdRequest,
  fetchBrandByIdSuccess,
  fetchBrandByIdFailure,
  addBrandRequest,
  addBrandSuccess,
  addBrandFailure,
  updateBrandRequest,
  updateBrandSuccess,
  updateBrandFailure,
  deleteBrandRequest,
  deleteBrandSuccess,
  deleteBrandFailure,
  verifyPinAndDownloadRequest,
  verifyPinAndDownloadSuccess,
  verifyPinAndDownloadFailure,
} = brandSlice.actions;

export default brandSlice.reducer;
