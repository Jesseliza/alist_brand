import { createSlice } from '@reduxjs/toolkit';
import { CampaignsState } from '../../types/entities/campaign';

const initialState: CampaignsState = {
  campaigns: [],
  campaign: null,
  loading: false,
  error: null,
  pagination: null,
};

const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    getCampaignsStart: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    getCampaignsSuccess: (state, action) => {
      state.loading = false;
      state.campaigns = action.payload.data;
      state.pagination = {
        current_page: action.payload.current_page,
        last_page: action.payload.last_page,
        per_page: action.payload.per_page,
        total: action.payload.total,
      };
    },
    getCampaignsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getMoreCampaignsStart: (state, action) => {
      state.loading = true;
    },
    getMoreCampaignsSuccess: (state, action) => {
      state.loading = false;
      state.campaigns = [...state.campaigns, ...action.payload.data];
      state.pagination = {
        current_page: action.payload.current_page,
        last_page: action.payload.last_page,
        per_page: action.payload.per_page,
        total: action.payload.total,
      };
    },
    updateCampaignStatusStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateCampaignStatusSuccess: (state) => {
      state.loading = false;
    },
    updateCampaignStatusFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getCampaignDetailsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getCampaignDetailsSuccess: (state, action) => {
      state.loading = false;
      state.campaign = action.payload;
    },
    getCampaignDetailsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateDedicatedPageStatusStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateDedicatedPageStatusSuccess: (state) => {
      state.loading = false;
    },
    updateDedicatedPageStatusFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getCampaignsStart,
  getCampaignsSuccess,
  getCampaignsFailure,
  getMoreCampaignsStart,
  getMoreCampaignsSuccess,
  updateCampaignStatusStart,
  updateCampaignStatusSuccess,
  updateCampaignStatusFailure,
  getCampaignDetailsStart,
  getCampaignDetailsSuccess,
  getCampaignDetailsFailure,
  updateDedicatedPageStatusStart,
  updateDedicatedPageStatusSuccess,
  updateDedicatedPageStatusFailure,
} = campaignsSlice.actions;

export default campaignsSlice.reducer;