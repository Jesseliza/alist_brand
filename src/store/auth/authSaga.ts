import { call, put, takeLatest, all } from 'redux-saga/effects';
import { loginData, sendOtpData } from '@/services/authService';
import {
  sendOtpRequest,
  sendOtpSuccess,
  sendOtpFailure,
  loginRequest,
  loginSuccess,
  loginFailure
} from './authSlice';
import { setAuthToken } from '@/services/apiHelper';
import { AuthResponse } from '@/types/auth';

function* handleSendOtp(action: ReturnType<typeof sendOtpRequest>) {
  const { phoneNumber } = action.payload;
  try {
    const response: { msg: string } = yield call(sendOtpData, '/api/send-otp', { phone: phoneNumber });
    if (response.msg === 'success') {
      yield put(sendOtpSuccess(phoneNumber));
    } else {
      yield put(sendOtpFailure(response.msg || 'Failed to send OTP'));
    }
  } catch (error) {
    const err = error as Error;
    yield put(sendOtpFailure(err.message || 'An unknown error occurred'));
  }
}

function* handleLogin(action: ReturnType<typeof loginRequest>) {
    const { phoneNumber, otp } = action.payload;
  try {
    const response: AuthResponse = yield call(loginData, '/api/verify-otp', { phone: phoneNumber, otp });
    if (response.msg === 'success' && response.result?.token) {
      setAuthToken(response.result.token);
      yield put(loginSuccess(response.result.user));
    } else {
      yield put(loginFailure(response.msg || 'Login failed'));
    }
  } catch (error) {
    const err = error as Error;
    yield put(loginFailure(err.message || 'An unknown error occurred'));
  }
}

function* watchAuth() {
  yield takeLatest(sendOtpRequest.type, handleSendOtp);
  yield takeLatest(loginRequest.type, handleLogin);
}

export default function* authSaga() {
    yield all([
        watchAuth(),
    ])
}
