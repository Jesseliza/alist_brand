import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  DedicatedOffersState,
  GetDedicatedOffersPayload,
  GetDedicatedOfferDetailsPayload,
  GetDedicatedOfferReviewPostsPayload,
  GetVoucherCodesPayload,
  UpdateDedicatedOfferStatusPayload,
  UpdateDedicatedPageStatusPayload,
  GetDedicatedOfferAvailabilityPayload,
  DedicatedOfferAvailability,
  GetDedicatedOfferReviewsPayload,
} from '../../types/entities/dedicated-offer';

const initialState: DedicatedOffersState = {
  dedicatedOffers: [],
  dedicatedOffer: null,
  loading: false,
  error: null,
  pagination: null,
  bulkDeleteLoading: false,
  bulkDeleteError: null,
  dedicatedPageStatusLoading: false,
  statusUpdateLoading: false,
  reviewPosts: [],
  reviewPostsLoading: false,
  reviewPostsError: null,
  reviewPostsPagination: null,
  reviews: [],
  reviewsLoading: false,
  reviewsError: null,
  reviewsPagination: null,
  voucherCodes: [],
  voucherCodesLoading: false,
  voucherCodesError: null,
  voucherCodesPagination: null,
  dedicatedOfferAvailability: [],
  dedicatedOfferAvailabilityLoading: false,
  dedicatedOfferAvailabilityError: null,
};

const dedicatedOffersSlice = createSlice({
  name: 'dedicatedOffers',
  initialState,
  reducers: {
    getDedicatedOffersStart: (
      state,
      action: PayloadAction<GetDedicatedOffersPayload>
    ) => {
      state.loading = true;
      state.error = null;
    },
    getDedicatedOffersSuccess: (state, action) => {
      state.loading = false;
      const newOffers = action.payload.data.filter(
        (newOffer) => !state.dedicatedOffers.some((existingOffer) => existingOffer.id === newOffer.id)
      );
      state.dedicatedOffers = [...state.dedicatedOffers, ...newOffers];
      state.pagination = {
        current_page: action.payload.current_page,
        last_page: action.payload.last_page,
        per_page: action.payload.per_page,
        total: action.payload.total,
      };
    },
    getDedicatedOffersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    bulkDeleteDedicatedOffersStart: (
      state,
      action: PayloadAction<{ ids: string[] }>
    ) => {
      state.bulkDeleteLoading = true;
      state.bulkDeleteError = null;
    },
    bulkDeleteDedicatedOffersSuccess: (state, action: PayloadAction<string[]>) => {
      state.bulkDeleteLoading = false;
      state.dedicatedOffers = state.dedicatedOffers.filter(
        (dedicatedOffer) => !action.payload.includes(dedicatedOffer.id.toString())
      );
    },
    bulkDeleteDedicatedOffersFailure: (state, action: PayloadAction<any>) => {
      state.bulkDeleteLoading = false;
      state.bulkDeleteError = action.payload;
    },
    getMoreDedicatedOffersStart: (
      state,
      action: PayloadAction<GetDedicatedOffersPayload>
    ) => {
      state.loading = true;
    },
    getMoreDedicatedOffersSuccess: (state, action) => {
      state.loading = false;
      const newOffers = action.payload.data.filter(
        (newOffer) => !state.dedicatedOffers.some((existingOffer) => existingOffer.id === newOffer.id)
      );
      state.dedicatedOffers = [...state.dedicatedOffers, ...newOffers];
      state.pagination = {
        current_page: action.payload.current_page,
        last_page: action.payload.last_page,
        per_page: action.payload.per_page,
        total: action.payload.total,
      };
    },
    updateDedicatedOfferStatusStart: (
      state,
      action: PayloadAction<UpdateDedicatedOfferStatusPayload>
    ) => {
      state.statusUpdateLoading = true;
      state.error = null;
    },
    updateDedicatedOfferStatusSuccess: (
      state,
      action: PayloadAction<{ status: string }>
    ) => {
      state.statusUpdateLoading = false;
      if (state.dedicatedOffer) {
        state.dedicatedOffer.account_status = action.payload.status;
      }
    },
    updateDedicatedOfferStatusFailure: (state, action) => {
      state.statusUpdateLoading = false;
      state.error = action.payload;
    },
    updateDedicatedOfferAccStatusStart: (
      state,
      action: PayloadAction<UpdateDedicatedOfferStatusPayload>
    ) => {
      state.statusUpdateLoading = true;
      state.error = null;
    },
    updateDedicatedOfferAccStatusSuccess: (
      state,
      action: PayloadAction<{ status: string }>
    ) => {
      state.statusUpdateLoading = false;
      if (state.dedicatedOffer) {
        state.dedicatedOffer.account_status = action.payload.status;
      }
    },
    updateDedicatedOfferAccStatusFailure: (state, action) => {
      state.statusUpdateLoading = false;
      state.error = action.payload;
    },
    getDedicatedOfferDetailsStart: (
      state,
      action: PayloadAction<GetDedicatedOfferDetailsPayload>
    ) => {
      state.loading = true;
      state.error = null;
    },
    getDedicatedOfferDetailsSuccess: (state, action) => {
      state.loading = false;
      state.dedicatedOffer = action.payload;
    },
    getDedicatedOfferDetailsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateDedicatedPageStatusStart: (
      state,
      action: PayloadAction<UpdateDedicatedPageStatusPayload>
    ) => {
      state.dedicatedPageStatusLoading = true;
    },
    updateDedicatedPageStatusSuccess: (
      state,
      action: PayloadAction<{ id: string; status: number }>
    ) => {
      state.dedicatedPageStatusLoading = false;
      if (state.dedicatedOffer && state.dedicatedOffer.offer_users) {
        const offerUser = state.dedicatedOffer.offer_users.find(
          (user) => user.id.toString() === action.payload.id
        );
        if (offerUser) {
          offerUser.status = action.payload.status;
        }
      }
    },
    updateDedicatedPageStatusFailure: (state, action) => {
      state.dedicatedPageStatusLoading = false;
    },
    getReviewPostsStart: (
      state,
      action: PayloadAction<GetDedicatedOfferReviewPostsPayload>
    ) => {
      state.reviewPostsLoading = true;
      state.reviewPostsError = null;
    },
    getReviewPostsSuccess: (state, action) => {
      state.reviewPostsLoading = false;
      state.reviewPosts = action.payload.data;
      state.reviewPostsPagination = {
        current_page: action.payload.current_page,
        last_page: action.payload.last_page,
        per_page: action.payload.per_page,
        total: action.payload.total,
      };
    },
    getReviewPostsFailure: (state, action) => {
      state.reviewPostsLoading = false;
      state.reviewPostsError = action.payload;
    },
    getVoucherCodesStart: (
      state,
      action: PayloadAction<GetVoucherCodesPayload>
    ) => {
      state.voucherCodesLoading = true;
      state.voucherCodesError = null;
    },
    getVoucherCodesSuccess: (state, action) => {
      state.voucherCodesLoading = false;
      state.voucherCodes = action.payload.data;
      state.voucherCodesPagination = {
        current_page: action.payload.current_page,
        last_page: action.payload.last_page,
        per_page: action.payload.per_page,
        total: action.payload.total,
      };
    },
    getVoucherCodesFailure: (state, action) => {
      state.voucherCodesLoading = false;
      state.voucherCodesError = action.payload;
    },
    getDedicatedOfferAvailabilityStart: (
      state,
      action: PayloadAction<GetDedicatedOfferAvailabilityPayload>
    ) => {
      state.dedicatedOfferAvailabilityLoading = true;
      state.dedicatedOfferAvailabilityError = null;
    },
    getDedicatedOfferAvailabilitySuccess: (
      state,
      action: PayloadAction<DedicatedOfferAvailability[]>
    ) => {
      state.dedicatedOfferAvailabilityLoading = false;
      state.dedicatedOfferAvailability = action.payload;
    },
    getDedicatedOfferAvailabilityFailure: (state, action: PayloadAction<string>) => {
      state.dedicatedOfferAvailabilityLoading = false;
      state.dedicatedOfferAvailabilityError = action.payload;
    },
    getDedicatedOfferReviewsStart: (
      state,
      action: PayloadAction<GetDedicatedOfferReviewsPayload>
    ) => {
      state.reviewsLoading = true;
      state.reviewsError = null;
    },
    getDedicatedOfferReviewsSuccess: (state, action) => {
      state.reviewsLoading = false;
      state.reviews = action.payload.data;
      state.reviewsPagination = {
        current_page: action.payload.current_page,
        last_page: action.payload.last_page,
        per_page: action.payload.per_page,
        total: action.payload.total,
      };
    },
    getDedicatedOfferReviewsFailure: (state, action) => {
      state.reviewsLoading = false;
      state.reviewsError = action.payload;
    },
  },
});

export const {
  getDedicatedOffersStart,
  getDedicatedOffersSuccess,
  getDedicatedOffersFailure,
  getMoreDedicatedOffersStart,
  getMoreDedicatedOffersSuccess,
  updateDedicatedOfferStatusStart,
  updateDedicatedOfferStatusSuccess,
  updateDedicatedOfferStatusFailure,
  updateDedicatedOfferAccStatusStart,
  updateDedicatedOfferAccStatusSuccess,
  updateDedicatedOfferAccStatusFailure,
  getDedicatedOfferDetailsStart,
  getDedicatedOfferDetailsSuccess,
  getDedicatedOfferDetailsFailure,
  updateDedicatedPageStatusStart,
  updateDedicatedPageStatusSuccess,
  updateDedicatedPageStatusFailure,
  bulkDeleteDedicatedOffersStart,
  bulkDeleteDedicatedOffersSuccess,
  bulkDeleteDedicatedOffersFailure,
  getReviewPostsStart,
  getReviewPostsSuccess,
  getReviewPostsFailure,
  getVoucherCodesStart,
  getVoucherCodesSuccess,
  getVoucherCodesFailure,
  getDedicatedOfferAvailabilityStart,
  getDedicatedOfferAvailabilitySuccess,
  getDedicatedOfferAvailabilityFailure,
  getDedicatedOfferReviewsStart,
  getDedicatedOfferReviewsSuccess,
  getDedicatedOfferReviewsFailure,
} = dedicatedOffersSlice.actions;

export default dedicatedOffersSlice.reducer;