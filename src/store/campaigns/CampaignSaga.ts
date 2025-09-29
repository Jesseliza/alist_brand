import { call, put, takeLatest, all } from 'redux-saga/effects';
import axiosInstance from '../../services/apiHelper';
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
  deleteCampaignStart,
  deleteCampaignSuccess,
  deleteCampaignFailure,
} from './CampaignSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  CampaignsApiResponse,
  CampaignDetailsApiResponse,
  GetCampaignsAction,
  UpdateCampaignStatusAction,
  GetCampaignDetailsAction,
  UpdateDedicatedPageStatusAction,
} from '../../types/entities/campaign';

function* getCampaignsSaga(action: GetCampaignsAction) {
  try {
    const response: CampaignsApiResponse = yield call(axiosInstance.post, '/api/campaigns', action.payload);
    yield put(getCampaignsSuccess(response.data.venues));
  } catch (error: any) {
    yield put(getCampaignsFailure(error.message));
  }
}

function* getMoreCampaignsSaga(action: GetCampaignsAction) {
  try {
    const response: CampaignsApiResponse = yield call(axiosInstance.post, '/api/campaigns', action.payload);
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
    yield put(updateCampaignStatusSuccess());
  } catch (error: any) {
    yield put(updateCampaignStatusFailure(error.message));
  }
}

function* getCampaignDetailsSaga(action: GetCampaignDetailsAction) {
  try {
    const { id } = action.payload;
    const response: CampaignDetailsApiResponse = yield call(axiosInstance.get, `/api/campaign/${id}`);
    yield put(getCampaignDetailsSuccess(response.data.data));
  } catch (error: any) {
    yield put(getCampaignDetailsFailure(error.message));
  }
}

function* updateDedicatedPageStatusSaga(action: UpdateDedicatedPageStatusAction) {
  try {
    const { id, ...payload } = action.payload;
    yield call(axiosInstance.post, `/api/dedicated/${id}/status`, payload);
    yield put(updateDedicatedPageStatusSuccess());
  } catch (error: any) {
    yield put(updateDedicatedPageStatusFailure(error.message));
  }
}

function* deleteCampaignSaga(action: PayloadAction<{ id: string }>) {
  try {
    const { id } = action.payload;
    yield call(axiosInstance.delete, `/api/campaign/${id}`);
    yield put(deleteCampaignSuccess({ id }));
  } catch (error: any) {
    yield put(deleteCampaignFailure(error.message));
  }
}

function* watchCampaigns() {
  yield takeLatest(getCampaignsStart.type, getCampaignsSaga);
  yield takeLatest(getMoreCampaignsStart.type, getMoreCampaignsSaga);
  yield takeLatest(updateCampaignStatusStart.type, updateCampaignStatusSaga);
  yield takeLatest(getCampaignDetailsStart.type, getCampaignDetailsSaga);
  yield takeLatest(updateDedicatedPageStatusStart.type, updateDedicatedPageStatusSaga);
  yield takeLatest(deleteCampaignStart.type, deleteCampaignSaga);
}

export default function* campaignsSaga() {
  yield all([
    watchCampaigns(),
  ]);
}