import { all, call, put, takeLatest } from 'redux-saga/effects';
import axiosInstance from "../../services/apiHelper";
import { getDashboardData, getDashboardDataSuccess, getDashboardDataFailure } from './dashboardSlice';

function* fetchDashboardData() {
  try {
    const response = yield call(axiosInstance.get, '/api/dashboard');
    yield put(getDashboardDataSuccess(response.data.data));
  } catch (error: any) {
    yield put(getDashboardDataFailure(error.message));
  }
}

function* watchGetDashboardData() {
  yield takeLatest(getDashboardData.type, fetchDashboardData);
}

export default function* dashboardSaga() {
    yield all([
        watchGetDashboardData(),
    ]);
}