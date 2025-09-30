import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CampaignsState,
  GetCampaignsPayload,
  GetCampaignDetailsPayload,
  UpdateCampaignStatusPayload,
  UpdateDedicatedPageStatusPayload,
} from '../../types/entities/campaign';

const initialState: CampaignsState = {
  campaigns: [],
  campaign: null,
  loading: false,
  error: null,
  pagination: null,
  bulkDeleteLoading: false,
  bulkDeleteError: null,
  dedicatedPageStatusLoading: false,
  statusUpdateLoading: false,
};

const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    getCampaignsStart: (
      state,
      action: PayloadAction<GetCampaignsPayload>
    ) => {
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
    bulkDeleteCampaignsStart: (
      state,
      action: PayloadAction<{ ids: string[] }>
    ) => {
      state.bulkDeleteLoading = true;
      state.bulkDeleteError = null;
    },
    bulkDeleteCampaignsSuccess: (state, action: PayloadAction<string[]>) => {
      state.bulkDeleteLoading = false;
      state.campaigns = state.campaigns.filter(
        (campaign) => !action.payload.includes(campaign.id.toString())
      );
    },
    bulkDeleteCampaignsFailure: (state, action: PayloadAction<any>) => {
      state.bulkDeleteLoading = false;
      state.bulkDeleteError = action.payload;
    },
    getMoreCampaignsStart: (
      state,
      action: PayloadAction<GetCampaignsPayload>
    ) => {
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
    updateCampaignStatusStart: (
      state,
      action: PayloadAction<UpdateCampaignStatusPayload>
    ) => {
      state.statusUpdateLoading = true;
      state.error = null;
    },
    updateCampaignStatusSuccess: (
      state,
      action: PayloadAction<{ status: string }>
    ) => {
      state.statusUpdateLoading = false;
      if (state.campaign) {
        state.campaign.account_status = action.payload.status;
      }
    },
    updateCampaignStatusFailure: (state, action) => {
      state.statusUpdateLoading = false;
      state.error = action.payload;
    },
    getCampaignDetailsStart: (
      state,
      action: PayloadAction<GetCampaignDetailsPayload>
    ) => {
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
      if (state.campaign && state.campaign.dedicated_offer) {
        const offerUser = state.campaign.dedicated_offer.offer_users.find(
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
  bulkDeleteCampaignsStart,
  bulkDeleteCampaignsSuccess,
  bulkDeleteCampaignsFailure,
} = campaignsSlice.actions;

export default campaignsSlice.reducer;