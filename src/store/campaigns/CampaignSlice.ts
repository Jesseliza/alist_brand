import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CampaignsState,
  GetCampaignsPayload,
  GetCampaignDetailsPayload,
  GetCampaignReviewPostsPayload,
  GetVoucherCodesPayload,
  UpdateCampaignStatusPayload,
  GetCampaignAvailabilityPayload,
  CampaignAvailability,
  GetCampaignReviewsPayload,
  CampaignSummary,
} from '../../types/entities/campaign';

const initialState: CampaignsState = {
  campaigns: [],
  campaign: null,
  loading: false,
  paginationLoading: false,
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
  campaignAvailability: [],
  campaignAvailabilityLoading: false,
  campaignAvailabilityError: null,
};

const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    getCampaignsStart: (
      state,
      action: PayloadAction<GetCampaignsPayload & { isPagination?: boolean }>
    ) => {
      if (action.payload.isPagination) {
        state.paginationLoading = true;
      } else {
        state.loading = true;
      }
      state.error = null;
    },
    getCampaignsSuccess: (state, action) => {
      state.loading = false;
      state.paginationLoading = false;
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
      state.paginationLoading = false;
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
      const newCampaigns = action.payload.data.filter(
        (newCampaign: CampaignSummary) => !state.campaigns.some((existingCampaign) => existingCampaign.id === newCampaign.id)
      );
      state.campaigns = [...state.campaigns, ...newCampaigns];
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
    getReviewPostsStart: (
      state,
      action: PayloadAction<GetCampaignReviewPostsPayload & { isPagination?: boolean }>
    ) => {
      if (action.payload.isPagination) {
        state.paginationLoading = true;
      } else {
        state.reviewPostsLoading = true;
      }
      state.reviewPostsError = null;
    },
    getReviewPostsSuccess: (state, action) => {
      state.reviewPostsLoading = false;
      state.paginationLoading = false;
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
      state.paginationLoading = false;
      state.reviewPostsError = action.payload;
    },
    getVoucherCodesStart: (
      state,
      action: PayloadAction<GetVoucherCodesPayload & { isPagination?: boolean }>
    ) => {
      if (action.payload.isPagination) {
        state.paginationLoading = true;
      } else {
        state.voucherCodesLoading = true;
      }
      state.voucherCodesError = null;
    },
    getVoucherCodesSuccess: (state, action) => {
      state.voucherCodesLoading = false;
      state.paginationLoading = false;
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
      state.paginationLoading = false;
      state.voucherCodesError = action.payload;
    },
    getCampaignAvailabilityStart: (
      state,
      action: PayloadAction<GetCampaignAvailabilityPayload>
    ) => {
      state.campaignAvailabilityLoading = true;
      state.campaignAvailabilityError = null;
    },
    getCampaignAvailabilitySuccess: (
      state,
      action: PayloadAction<CampaignAvailability[]>
    ) => {
      state.campaignAvailabilityLoading = false;
      state.campaignAvailability = action.payload;
    },
    getCampaignAvailabilityFailure: (state, action: PayloadAction<string>) => {
      state.campaignAvailabilityLoading = false;
      state.campaignAvailabilityError = action.payload;
    },
    getCampaignReviewsStart: (
      state,
      action: PayloadAction<GetCampaignReviewsPayload & { isPagination?: boolean }>
    ) => {
      if (action.payload.isPagination) {
        state.paginationLoading = true;
      } else {
        state.reviewsLoading = true;
      }
      state.reviewsError = null;
    },
    getCampaignReviewsSuccess: (state, action) => {
      state.reviewsLoading = false;
      state.paginationLoading = false;
      state.reviews = action.payload.data;
      state.reviewsPagination = {
        current_page: action.payload.current_page,
        last_page: action.payload.last_page,
        per_page: action.payload.per_page,
        total: action.payload.total,
      };
    },
    getCampaignReviewsFailure: (state, action) => {
      state.reviewsLoading = false;
      state.paginationLoading = false;
      state.reviewsError = action.payload;
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
  bulkDeleteCampaignsStart,
  bulkDeleteCampaignsSuccess,
  bulkDeleteCampaignsFailure,
  getReviewPostsStart,
  getReviewPostsSuccess,
  getReviewPostsFailure,
  getVoucherCodesStart,
  getVoucherCodesSuccess,
  getVoucherCodesFailure,
  getCampaignAvailabilityStart,
  getCampaignAvailabilitySuccess,
  getCampaignAvailabilityFailure,
  getCampaignReviewsStart,
  getCampaignReviewsSuccess,
  getCampaignReviewsFailure,
} = campaignsSlice.actions;

export default campaignsSlice.reducer;