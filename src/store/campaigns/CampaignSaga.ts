import { call, put, takeLatest, all } from 'redux-saga/effects';
import axiosInstance from '../../services/apiHelper';
import {
  getCampaignsStart,
  getCampaignsSuccess,
  getCampaignsFailure,
  updateCampaignStatusStart,
  updateCampaignStatusSuccess,
  updateCampaignStatusFailure,
  getCampaignDetailsStart,
  getCampaignDetailsSuccess,
  getCampaignDetailsFailure,
  updateDedicatedPageStatusStart,
  updateDedicatedPageStatusSuccess,
  updateDedicatedPageStatusFailure,
} from './CampaignSlice';
import {
  GetCampaignsAction,
  UpdateCampaignStatusAction,
  GetCampaignDetailsAction,
  UpdateDedicatedPageStatusAction,
} from '../../types/entities/campaign';

function* getCampaignsSaga(action: GetCampaignsAction) {
  try {
    const response = yield call(axiosInstance.post, '/api/campaigns', action.payload);
    yield put(getCampaignsSuccess(response.data));
  } catch (error: any) {
    yield put(getCampaignsFailure(error.message));
  }
}

function* updateCampaignStatusSaga(action: UpdateCampaignStatusAction) {
  try {
    const { id, status } = action.payload;
    yield call(axiosInstance.post, `/api/campaign/${id}/status`, { status });
    yield put(updateCampaignStatusSuccess());
  } catch (error: any) {
    yield put(updateCampaignStatusFailure(error.message));
  }
}

function* getCampaignDetailsSaga(action: GetCampaignDetailsAction) {
  try {
    const { id } = action.payload;
    const response = yield call(axiosInstance.get, `/api/campaign/${id}`);
    yield put(getCampaignDetailsSuccess(response.data));
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

function* watchCampaigns() {
  yield takeLatest(getCampaignsStart.type, getCampaignsSaga);
  yield takeLatest(updateCampaignStatusStart.type, updateCampaignStatusSaga);
  yield takeLatest(getCampaignDetailsStart.type, getCampaignDetailsSaga);
  yield takeLatest(updateDedicatedPageStatusStart.type, updateDedicatedPageStatusSaga);
}

export default function* campaignsSaga() {
  yield all([
    watchCampaigns(),
  ]);
}