import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardCounts {
  campaignsCount: number;
  influencersCount: number;
  brandsCount: number;
  pendingCount: number;
}

export interface DashboardState {
  counts: DashboardCounts;
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
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    getDashboardDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getDashboardDataSuccess: (state, action: PayloadAction<DashboardCounts>) => {
      state.loading = false;
      state.counts = action.payload;
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