import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  DedicatedOffersState,
  GetDedicatedOffersPayload,
  GetDedicatedOfferDetailsPayload,
} from '../../types/entities/dedicatedOffer';
import { DedicatedOffer } from '@/types/entities/brand';
import { Pagination } from '@/types/api';

const initialState: DedicatedOffersState = {
  dedicatedOffers: [],
  dedicatedOffer: null,
  loading: false,
  error: null,
  pagination: null,
  bulkDeleteLoading: false,
  bulkDeleteError: null,
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
    getDedicatedOffersSuccess: (state, action: PayloadAction<{ data: DedicatedOffer[], pagination: Pagination }>) => {
      state.loading = false;
      state.dedicatedOffers = action.payload.data;
      state.pagination = action.payload.pagination;
    },
    getDedicatedOffersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    getMoreDedicatedOffersStart: (
      state,
      action: PayloadAction<GetDedicatedOffersPayload>
    ) => {
      state.loading = true;
    },
    getMoreDedicatedOffersSuccess: (state, action: PayloadAction<{ data: DedicatedOffer[], pagination: Pagination }>) => {
      state.loading = false;
      state.dedicatedOffers = [...state.dedicatedOffers, ...action.payload.data];
      state.pagination = action.payload.pagination;
    },
    getDedicatedOfferDetailsStart: (
      state,
      action: PayloadAction<GetDedicatedOfferDetailsPayload>
    ) => {
      state.loading = true;
      state.error = null;
    },
    getDedicatedOfferDetailsSuccess: (state, action: PayloadAction<DedicatedOffer>) => {
      state.loading = false;
      state.dedicatedOffer = action.payload;
    },
    getDedicatedOfferDetailsFailure: (state, action: PayloadAction<string>) => {
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
        (offer) => !action.payload.includes(offer.id.toString())
      );
    },
    bulkDeleteDedicatedOffersFailure: (state, action: PayloadAction<any>) => {
      state.bulkDeleteLoading = false;
      state.bulkDeleteError = action.payload;
    },
  },
});

export const {
  getDedicatedOffersStart,
  getDedicatedOffersSuccess,
  getDedicatedOffersFailure,
  getMoreDedicatedOffersStart,
  getMoreDedicatedOffersSuccess,
  getDedicatedOfferDetailsStart,
  getDedicatedOfferDetailsSuccess,
  getDedicatedOfferDetailsFailure,
  bulkDeleteDedicatedOffersStart,
  bulkDeleteDedicatedOffersSuccess,
  bulkDeleteDedicatedOffersFailure,
} = dedicatedOffersSlice.actions;

export default dedicatedOffersSlice.reducer;