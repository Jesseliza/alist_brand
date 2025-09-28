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
  },
});

export const {
  fetchCampaignsRequest,
  fetchCampaignsSuccess,
  fetchCampaignsFailure,
  fetchMoreCampaignsRequest,
  fetchMoreCampaignsSuccess,
  fetchMoreCampaignsFailure,
} = campaignSlice.actions;

export default campaignSlice.reducer;