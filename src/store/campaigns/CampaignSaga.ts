import { call, put, takeLatest, all } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../services/apiHelper";
import {
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
} from "./CampaignSlice";
import {
  CampaignsApiResponse,
  CampaignDetailsApiResponse,
  CampaignReviewPostsResponse,
  GetCampaignsAction,
  GetCampaignReviewPostsAction,
  UpdateCampaignStatusAction,
  GetCampaignDetailsAction,
  UpdateDedicatedPageStatusAction,
  GetVoucherCodesAction,
  VoucherCodesApiResponse,
  GetCampaignAvailabilityAction,
  CampaignAvailabilityApiResponse,
} from "../../types/entities/campaign";

function* getCampaignsSaga(action: GetCampaignsAction) {
  try {
    const response: CampaignsApiResponse = yield call(
      axiosInstance.post,
      "/api/campaigns",
      action.payload
    );
    yield put(getCampaignsSuccess(response.data.venues));
  } catch (error: any) {
    yield put(getCampaignsFailure(error.message));
  }
}

function* getMoreCampaignsSaga(action: GetCampaignsAction) {
  try {
    const response: CampaignsApiResponse = yield call(
      axiosInstance.post,
      "/api/campaigns",
      action.payload
    );
    yield put(getMoreCampaignsSuccess(response.data.venues));
  } catch (error: any) {
    yield put(getCampaignsFailure(error.message));
  }
}

function* updateCampaignStatusSaga(action: UpdateCampaignStatusAction) {
  try {
    const { id, status, rejectReason } = action.payload;
    const payload: { status: string; rejectReason?: string } = { status };
    if (rejectReason) {
      payload.rejectReason = rejectReason;
    }
    yield call(axiosInstance.post, `/api/campaign/${id}/status`, payload);
    yield put(updateCampaignStatusSuccess({ status }));
    toast.success("Campaign status updated successfully!");
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || "Failed to update campaign status.";
    yield put(updateCampaignStatusFailure(errorMessage));
    toast.error(errorMessage);
  }
}

function* getCampaignDetailsSaga(action: GetCampaignDetailsAction) {
  try {
    const { id } = action.payload;
    const response: CampaignDetailsApiResponse = yield call(
      axiosInstance.get,
      `/api/campaign/${id}`
    );
    yield put(getCampaignDetailsSuccess(response.data.data));
  } catch (error: any) {
    yield put(getCampaignDetailsFailure(error.message));
  }
}

function* updateDedicatedPageStatusSaga(
  action: UpdateDedicatedPageStatusAction
) {
  try {
    const { id, status, rejectReason } = action.payload;
    const payload: { status: number; rejectReason?: string } = { status };
    if (rejectReason) {
      payload.rejectReason = rejectReason;
    }
    yield call(axiosInstance.post, `/api/dedicated/${id}/status`, payload);
    yield put(updateDedicatedPageStatusSuccess({ id, status }));
    toast.success("Creator status updated successfully!");
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || "Failed to update creator status.";
    yield put(updateDedicatedPageStatusFailure(errorMessage));
    toast.error(errorMessage);
  }
}

function* bulkDeleteCampaignsSaga(action: PayloadAction<{ ids: string[] }>) {
  try {
    const { ids } = action.payload;
    yield call(axiosInstance.post, "/api/campaign/bulk-delete", { ids });
    yield put(bulkDeleteCampaignsSuccess(ids));
  } catch (error: any) {
    yield put(bulkDeleteCampaignsFailure(error.message));
    throw error;
  }
}

function* getCampaignReviewPostsSaga(action: GetCampaignReviewPostsAction) {
  try {
    const { id, page = 1, per_page = 10 } = action.payload;
    const response: { data: CampaignReviewPostsResponse } = yield call(
      axiosInstance.post,
      `/api/campaign/review-posts/${id}`,
      { page, per_page }
    );
    yield put(getReviewPostsSuccess(response.data.data));
  } catch (error: any) {
    yield put(getReviewPostsFailure(error.message));
  }
}

function* getVoucherCodesSaga(action: GetVoucherCodesAction) {
  try {
    const { id, page = 1, per_page = 10 } = action.payload;
    const response: { data: VoucherCodesApiResponse } = yield call(
      axiosInstance.post,
      `/api/campaign/voucher-code/${id}`,
      { page, per_page }
    );
    yield put(getVoucherCodesSuccess(response.data.data));
  } catch (error: any) {
    yield put(getVoucherCodesFailure(error.message));
  }
}

function* watchCampaigns() {
  yield takeLatest(getCampaignsStart.type, getCampaignsSaga);
  yield takeLatest(getMoreCampaignsStart.type, getMoreCampaignsSaga);
  yield takeLatest(updateCampaignStatusStart.type, updateCampaignStatusSaga);
  yield takeLatest(getCampaignDetailsStart.type, getCampaignDetailsSaga);
  yield takeLatest(
    updateDedicatedPageStatusStart.type,
    updateDedicatedPageStatusSaga
  );
  yield takeLatest(bulkDeleteCampaignsStart.type, bulkDeleteCampaignsSaga);
  yield takeLatest(getReviewPostsStart.type, getCampaignReviewPostsSaga);
  yield takeLatest(getVoucherCodesStart.type, getVoucherCodesSaga);
  yield takeLatest(
    getCampaignAvailabilityStart.type,
    getCampaignAvailabilitySaga
  );
}

function* getCampaignAvailabilitySaga(action: GetCampaignAvailabilityAction) {
  try {
    const { campaign_id, year_month } = action.payload;
    const response: { data: CampaignAvailabilityApiResponse } = yield call(
      axiosInstance.post,
      `/api/campaign/by-date/${campaign_id}`,
      { year_month }
    );
    yield put(getCampaignAvailabilitySuccess(response.data.data));
  } catch (error: any) {
    yield put(getCampaignAvailabilityFailure(error.message));
  }
}

export default function* campaignsSaga() {
  yield all([watchCampaigns()]);
}