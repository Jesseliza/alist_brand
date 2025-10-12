import { call, put, takeLatest, all } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../services/apiHelper";
import {
  getDedicatedOffersStart,
  getDedicatedOffersSuccess,
  getDedicatedOffersFailure,
  getMoreDedicatedOffersStart,
  getMoreDedicatedOffersSuccess,
  updateDedicatedOfferStatusStart,
  updateDedicatedOfferStatusSuccess,
  updateDedicatedOfferStatusFailure,
  getDedicatedOfferDetailsStart,
  getDedicatedOfferDetailsSuccess,
  getDedicatedOfferDetailsFailure,
  updateDedicatedPageStatusStart,
  updateDedicatedPageStatusSuccess,
  updateDedicatedPageStatusFailure,
  bulkDeleteDedicatedOffersStart,
  bulkDeleteDedicatedOffersSuccess,
  bulkDeleteDedicatedOffersFailure,
  getReviewPostsStart,
  getReviewPostsSuccess,
  getReviewPostsFailure,
  getVoucherCodesStart,
  getVoucherCodesSuccess,
  getVoucherCodesFailure,
  getDedicatedOfferAvailabilityStart,
  getDedicatedOfferAvailabilitySuccess,
  getDedicatedOfferAvailabilityFailure,
  getDedicatedOfferReviewsStart,
  getDedicatedOfferReviewsSuccess,
  getDedicatedOfferReviewsFailure,
} from "./DedicatedOfferSlice";
import {
  DedicatedOffersApiResponse,
  DedicatedOfferDetailsApiResponse,
  DedicatedOfferReviewPostsResponse,
  GetDedicatedOffersAction,
  GetDedicatedOfferReviewPostsAction,
  UpdateDedicatedOfferStatusAction,
  GetDedicatedOfferDetailsAction,
  UpdateDedicatedPageStatusAction,
  GetVoucherCodesAction,
  VoucherCodesApiResponse,
  GetDedicatedOfferAvailabilityAction,
  DedicatedOfferAvailabilityApiResponse,
  GetDedicatedOfferReviewsAction,
  DedicatedOfferReviewsResponse,
} from "../../types/entities/dedicated-offer";

function* getDedicatedOffersSaga(action: GetDedicatedOffersAction) {
  try {
    const response: DedicatedOffersApiResponse = yield call(
      axiosInstance.post,
      "/api/dedicated-offers",
      action.payload
    );
    yield put(getDedicatedOffersSuccess(response.data.venues));
  } catch (error: any) {
    yield put(getDedicatedOffersFailure(error.message));
  }
}

function* getMoreDedicatedOffersSaga(action: GetDedicatedOffersAction) {
  try {
    const response: DedicatedOffersApiResponse = yield call(
      axiosInstance.post,
      "/api/dedicated-offers",
      action.payload
    );
    yield put(getMoreDedicatedOffersSuccess(response.data.venues));
  } catch (error: any) {
    yield put(getDedicatedOffersFailure(error.message));
  }
}

function* updateDedicatedOfferStatusSaga(action: UpdateDedicatedOfferStatusAction) {
  try {
    const { id, status, rejectReason } = action.payload;
    const payload: { status: string; rejectReason?: string } = { status };
    if (rejectReason) {
      payload.rejectReason = rejectReason;
    }
    yield call(axiosInstance.post, `/api/dedicated-offer/${id}/status`, payload);
    yield put(updateDedicatedOfferStatusSuccess({ status }));
    toast.success("DedicatedOffer status updated successfully!");
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || "Failed to update dedicated-offer status.";
    yield put(updateDedicatedOfferStatusFailure(errorMessage));
    toast.error(errorMessage);
  }
}

function* getDedicatedOfferDetailsSaga(action: GetDedicatedOfferDetailsAction) {
  try {
    const { id } = action.payload;
    const response: DedicatedOfferDetailsApiResponse = yield call(
      axiosInstance.get,
      `/api/dedicated-offer/${id}`
    );
    yield put(getDedicatedOfferDetailsSuccess(response.data.data));
  } catch (error: any) {
    yield put(getDedicatedOfferDetailsFailure(error.message));
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

function* bulkDeleteDedicatedOffersSaga(action: PayloadAction<{ ids: string[] }>) {
  try {
    const { ids } = action.payload;
    yield call(axiosInstance.post, "/api/dedicated-offer/bulk-delete", { ids });
    yield put(bulkDeleteDedicatedOffersSuccess(ids));
  } catch (error: any) {
    yield put(bulkDeleteDedicatedOffersFailure(error.message));
    throw error;
  }
}

function* getDedicatedOfferReviewPostsSaga(action: GetDedicatedOfferReviewPostsAction) {
  try {
    const { id, page = 1, per_page = 10 } = action.payload;
    const response: { data: DedicatedOfferReviewPostsResponse } = yield call(
      axiosInstance.post,
      `/api/dedicated-offer/review-posts/${id}`,
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
      `/api/dedicated-offer/voucher-code/${id}`,
      { page, per_page }
    );
    yield put(getVoucherCodesSuccess(response.data.data));
  } catch (error: any) {
    yield put(getVoucherCodesFailure(error.message));
  }
}

function* getDedicatedOfferReviewsSaga(action: GetDedicatedOfferReviewsAction) {
  try {
    const { id, page = 1, per_page = 10 } = action.payload;
    const response: { data: DedicatedOfferReviewsResponse } = yield call(
      axiosInstance.post,
      `/api/dedicated-offer/reviews/${id}`,
      { page, per_page }
    );
    yield put(getDedicatedOfferReviewsSuccess(response.data.data));
  } catch (error: any) {
    yield put(getDedicatedOfferReviewsFailure(error.message));
  }
}

function* watchDedicatedOffers() {
  yield takeLatest(getDedicatedOffersStart.type, getDedicatedOffersSaga);
  yield takeLatest(getMoreDedicatedOffersStart.type, getMoreDedicatedOffersSaga);
  yield takeLatest(updateDedicatedOfferStatusStart.type, updateDedicatedOfferStatusSaga);
  yield takeLatest(getDedicatedOfferDetailsStart.type, getDedicatedOfferDetailsSaga);
  yield takeLatest(
    updateDedicatedPageStatusStart.type,
    updateDedicatedPageStatusSaga
  );
  yield takeLatest(bulkDeleteDedicatedOffersStart.type, bulkDeleteDedicatedOffersSaga);
  yield takeLatest(getReviewPostsStart.type, getDedicatedOfferReviewPostsSaga);
  yield takeLatest(getVoucherCodesStart.type, getVoucherCodesSaga);
  yield takeLatest(
    getDedicatedOfferAvailabilityStart.type,
    getDedicatedOfferAvailabilitySaga
  );
  yield takeLatest(getDedicatedOfferReviewsStart.type, getDedicatedOfferReviewsSaga);
}

function* getDedicatedOfferAvailabilitySaga(action: GetDedicatedOfferAvailabilityAction) {
  try {
    const { dedicated-offer_id, year_month } = action.payload;
    const response: { data: DedicatedOfferAvailabilityApiResponse } = yield call(
      axiosInstance.post,
      `/api/dedicated-offer/by-date/${dedicated-offer_id}`,
      { year_month }
    );
    yield put(getDedicatedOfferAvailabilitySuccess(response.data.data));
  } catch (error: any) {
    yield put(getDedicatedOfferAvailabilityFailure(error.message));
  }
}

export default function* dedicated-offersSaga() {
  yield all([watchDedicatedOffers()]);
}