import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Brand } from '@/types/entities';
import { PaginationState } from '@/types/api';

interface BrandState {
  brands: Brand[];
  brand: Brand | null;
  pagination: PaginationState;
  loading: boolean;
  paginationLoading: boolean;
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
  brand: null,
  pagination: {
    currentPage: 1,
    lastPage: 1,
    perPage: 12,
    total: 0,
  },
  loading: false,
  paginationLoading: false,
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
    fetchBrandsRequest: (state, action: PayloadAction<{ page: number; per_page: number; search?: string; isPagination?: boolean }>) => {
      if (action.payload.isPagination) {
        state.paginationLoading = true;
      } else {
        state.loading = true;
      }
      state.error = null;
    },
    fetchBrandsSuccess: (state, action: PayloadAction<{ brands: Brand[]; pagination: PaginationState }>) => {
      state.loading = false;
      state.paginationLoading = false;
      state.brands = action.payload.brands;
      state.pagination = action.payload.pagination;
    },
    fetchBrandsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.paginationLoading = false;
      state.error = action.payload;
    },
    fetchMoreBrandsRequest: (state, action: PayloadAction<{ page: number; per_page: number; search?: string }>) => {
      state.loading = true;
      state.error = null;
    },
    fetchMoreBrandsSuccess: (state, action: PayloadAction<{ brands: Brand[]; pagination: PaginationState }>) => {
      state.loading = false;
      const newBrands = action.payload.brands.filter(
        (newBrand) => !state.brands.some((existingBrand) => existingBrand.brandId === newBrand.brandId)
      );
      state.brands = [...state.brands, ...newBrands];
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
    createBrandRequest: (state, action: PayloadAction<Partial<Brand>>) => {
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
      state.brand = {
        brandId: '',
        accountId: null,
        name: '',
        owner: '',
        logo: null,
        phoneNumber: null,
        emailAddress: null,
        industry: null,
        companyName: null,
        country: null,
        state: null,
        businessLocation: null,
        tradeLicenseCopy: null,
        vatCertificate: null,
        instagramHandle: null,
        websiteUrl: null,
        associateName: null,
        associateEmail: null,
        associatePhone: null,
        associateFirstName: '',
        associateLastName: '',
        associateInitials: '',
        associateBackground: '',
        registrationDate: '',
        offersCount: 0,
        campaignsCount: 0,
        profileCompletion: 0,
        files: 0,
        Venue_contact_name: null,
        venue_email: null,
        Venue: {
          food_offers: [],
          dedicated_offers: [],
        },
        food_offers_count: 0,
      };
      state.loading = false;
      state.error = null;
    },
    updateBrandRequest: (state, action: PayloadAction<Partial<Brand>>) => {
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