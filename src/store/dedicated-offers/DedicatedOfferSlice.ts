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
  dedicated-offers: [],
  dedicated-offer: null,
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
  dedicated-offerAvailability: [],
  dedicated-offerAvailabilityLoading: false,
  dedicated-offerAvailabilityError: null,
};

const dedicated-offersSlice = createSlice({
  name: 'dedicated-offers',
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
      state.dedicated-offers = action.payload.data;
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
      state.dedicated-offers = state.dedicated-offers.filter(
        (dedicated-offer) => !action.payload.includes(dedicated-offer.id.toString())
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
      state.dedicated-offers = [...state.dedicated-offers, ...action.payload.data];
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
      if (state.dedicated-offer) {
        state.dedicated-offer.account_status = action.payload.status;
      }
    },
    updateDedicatedOfferStatusFailure: (state, action) => {
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
      state.dedicated-offer = action.payload;
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
      if (state.dedicated-offer && state.dedicated-offer.dedicated_offer) {
        const offerUser = state.dedicated-offer.dedicated_offer.offer_users.find(
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
      state.dedicated-offerAvailabilityLoading = true;
      state.dedicated-offerAvailabilityError = null;
    },
    getDedicatedOfferAvailabilitySuccess: (
      state,
      action: PayloadAction<DedicatedOfferAvailability[]>
    ) => {
      state.dedicated-offerAvailabilityLoading = false;
      state.dedicated-offerAvailability = action.payload;
    },
    getDedicatedOfferAvailabilityFailure: (state, action: PayloadAction<string>) => {
      state.dedicated-offerAvailabilityLoading = false;
      state.dedicated-offerAvailabilityError = action.payload;
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
} = dedicated-offersSlice.actions;

export default dedicated-offersSlice.reducer;