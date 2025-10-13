import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CampaignsState,
  GetCampaignsPayload,
  GetCampaignDetailsPayload,
  GetCampaignReviewPostsPayload,
  GetVoucherCodesPayload,
  UpdateCampaignStatusPayload,
  UpdateDedicatedPageStatusPayload,
  GetCampaignAvailabilityPayload,
  CampaignAvailability,
  GetCampaignReviewsPayload,
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
      if (state.campaign && state.campaign.food_offer_user) {
        const offerUser = state.campaign.food_offer_user.find(
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
      action: PayloadAction<GetCampaignReviewPostsPayload>
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
      action: PayloadAction<GetCampaignReviewsPayload>
    ) => {
      state.reviewsLoading = true;
      state.reviewsError = null;
    },
    getCampaignReviewsSuccess: (state, action) => {
      state.reviewsLoading = false;
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
  updateDedicatedPageStatusStart,
  updateDedicatedPageStatusSuccess,
  updateDedicatedPageStatusFailure,
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