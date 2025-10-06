import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardCounts {
  campaignsCount: number;
  influencersCount: number;
  brandsCount: number;
  pendingCount: number;
}

interface CampaignPerformanceData {
  day: string;
  date: string;
  completed_count: number;
  active_count: number;
}

interface LiveCampaign {
  id: number;
  offer_title: string;
  amount: string;
  venue: {
    venue_title: string;
    category: {
      category: string;
    };
  };
  food_offer_user: {
    user: {
      profile_picture: string;
    };
  }[];
}

export interface DashboardState {
  counts: DashboardCounts;
  campaignPerformance: CampaignPerformanceData[];
  liveCampaigns: LiveCampaign[];
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  counts: {
    campaignsCount: 0,
    influencersCount: 0,
    brandsCount: 0,
    pendingCount: 0,
  },
  campaignPerformance: [],
  liveCampaigns: [],
  loading: false,
  error: null,
};

interface DashboardData extends DashboardCounts {
  campaignPerformance: CampaignPerformanceData[];
  liveCampaigns: LiveCampaign[];
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    getDashboardDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getDashboardDataSuccess: (state, action: PayloadAction<DashboardData>) => {
      state.loading = false;
      state.counts = {
        campaignsCount: action.payload.campaignsCount,
        influencersCount: action.payload.influencersCount,
        brandsCount: action.payload.brandsCount,
        pendingCount: action.payload.pendingCount,
      };
      state.campaignPerformance = action.payload.campaignPerformance;
      state.liveCampaigns = action.payload.liveCampaigns;
    },
    getDashboardDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getDashboardDataStart,
  getDashboardDataSuccess,
  getDashboardDataFailure,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;