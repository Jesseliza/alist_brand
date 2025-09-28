import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Campaign } from '@/types/entities';
import { PaginationState } from '@/types/api';

interface CampaignState {
  campaigns: Campaign[];
  campaign: Campaign | null;
  pagination: PaginationState;
  loading: boolean;
  error: string | null;
}

const initialState: CampaignState = {
  campaigns: [],
  campaign: null,
  pagination: {
    currentPage: 1,
    lastPage: 1,
    perPage: 10,
    total: 0,
  },
  loading: false,
  error: null,
};

const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {
    fetchCampaignsRequest: (state, action: PayloadAction<{ page: number; per_page: number; search?: string }>) => {
      state.loading = true;
      state.error = null;
    },
    fetchCampaignsSuccess: (state, action: PayloadAction<{ campaigns: Campaign[]; pagination: PaginationState }>) => {
      state.loading = false;
      state.campaigns = action.payload.campaigns;
      state.pagination = action.payload.pagination;
    },
    fetchCampaignsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchMoreCampaignsRequest: (state, action: PayloadAction<{ page: number; per_page: number; search?: string }>) => {
      state.loading = true;
      state.error = null;
    },
    fetchMoreCampaignsSuccess: (state, action: PayloadAction<{ campaigns: Campaign[]; pagination: PaginationState }>) => {
      state.loading = false;
      state.campaigns = [...state.campaigns, ...action.payload.campaigns];
      state.pagination = action.payload.pagination;
    },
    fetchMoreCampaignsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Fetch Campaign By ID
    fetchCampaignByIdRequest: (state, action: PayloadAction<{ id: number }>) => {
      state.loading = true;
      state.error = null;
    },
    fetchCampaignByIdSuccess: (state, action: PayloadAction<Campaign>) => {
      state.loading = false;
      state.campaign = action.payload;
    },
    fetchCampaignByIdFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Update Campaign Status
    updateCampaignStatusRequest: (state, action: PayloadAction<{ id: number; status: 'Approved' | 'Rejected' }>) => {
      state.loading = true;
      state.error = null;
    },
    updateCampaignStatusSuccess: (state, action: PayloadAction<{ id: number; status: 'Approved' | 'Rejected' }>) => {
      state.loading = false;
      const { id, status } = action.payload;
      const campaignIndex = state.campaigns.findIndex(c => c.id === id);
      if (campaignIndex !== -1) {
        state.campaigns[campaignIndex].status = status;
      }
      if (state.campaign && state.campaign.id === id) {
        state.campaign.status = status;
      }
    },
    updateCampaignStatusFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Update Dedicated Status
    updateDedicatedStatusRequest: (state, action: PayloadAction<{ id: number; status: 0 | 1; rejectReason?: string }>) => {
      state.loading = true;
      state.error = null;
    },
    updateDedicatedStatusSuccess: (state) => {
      state.loading = false;
    },
    updateDedicatedStatusFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCampaignsRequest,
  fetchCampaignsSuccess,
  fetchCampaignsFailure,
  fetchMoreCampaignsRequest,
  fetchMoreCampaignsSuccess,
  fetchMoreCampaignsFailure,
  fetchCampaignByIdRequest,
  fetchCampaignByIdSuccess,
  fetchCampaignByIdFailure,
  updateCampaignStatusRequest,
  updateCampaignStatusSuccess,
  updateCampaignStatusFailure,
  updateDedicatedStatusRequest,
  updateDedicatedStatusSuccess,
  updateDedicatedStatusFailure,
} = campaignSlice.actions;

export default campaignSlice.reducer;