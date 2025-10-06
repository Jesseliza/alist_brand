import { call, put, takeLatest, all } from 'redux-saga/effects';
import axiosInstance from '../../services/apiHelper';
import {
  getDashboardDataStart,
  getDashboardDataSuccess,
  getDashboardDataFailure,
} from './DashboardSlice';

interface DashboardApiResponse {
    data: {
        success: boolean;
        message: string;
        data: {
            campaignsCount: number;
            influencersCount: number;
            brandsCount: number;
            pendingCount: number;
        }
    }
}

import { AxiosError } from 'axios';

function* getDashboardDataSaga() {
  try {
    const response: DashboardApiResponse = yield call(axiosInstance.get, '/api/dashboard');
    yield put(getDashboardDataSuccess(response.data.data));
  } catch (error) {
    const e = error as AxiosError;
    yield put(getDashboardDataFailure(e.message));
  }
}

function* watchDashboard() {
  yield takeLatest(getDashboardDataStart.type, getDashboardDataSaga);
}

export default function* dashboardSaga() {
  yield all([watchDashboard()]);
}