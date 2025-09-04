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
import CryptoJS from 'crypto-js';

function* handleSendOtp(action: ReturnType<typeof sendOtpRequest>) {
  const { phoneNumber } = action.payload;
  try {
    const response: { msg: string } = yield call(sendOtpData, '/send-otp', { phoneNumber });
    if (response.msg === 'success') {
      yield put(sendOtpSuccess(phoneNumber));
    } else {
      yield put(sendOtpFailure(response.msg || 'Failed to send OTP'));
    }
  } catch (error: any) {
    yield put(sendOtpFailure(error.message || 'An unknown error occurred'));
  }
}

function* handleLogin(action: ReturnType<typeof loginRequest>) {
    const { phoneNumber, otp } = action.payload;
  try {
    const response: { msg: string, result?: { token: string, user: any } } = yield call(loginData, '/login', { phoneNumber, otp });
    if (response.msg === 'success' && response.result?.token) {
      const secretPass = 'j123@nglez678$one';
      const encryptedToken = CryptoJS.AES.encrypt(JSON.stringify(response.result.token), secretPass).toString();
      localStorage.setItem('token', encryptedToken);
      document.cookie = "isAuthenticated=true; path=/";
      yield put(loginSuccess(response.result.user));
    } else {
      yield put(loginFailure(response.msg || 'Login failed'));
    }
  } catch (error: any) {
    yield put(loginFailure(error.message || 'An unknown error occurred'));
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
