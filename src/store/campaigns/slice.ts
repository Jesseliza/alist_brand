import { createSlice } from '@reduxjs/toolkit';
import { CampaignsState } from './types';

const initialState: CampaignsState = {
  campaigns: [],
  campaign: null,
  loading: false,
  error: null,
};

const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    getCampaignsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getCampaignsSuccess: (state, action) => {
      state.loading = false;
      state.campaigns = action.payload;
    },
    getCampaignsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
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