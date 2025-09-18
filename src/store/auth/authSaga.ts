import { call, put, takeLatest, all } from 'redux-saga/effects';
import { loginData, sendOtpData } from '@/services/authService';
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
import { AuthResponse, SendOtpResponse } from '@/types/auth';
import CryptoJS from 'crypto-js';

function* handleSendOtp(action: ReturnType<typeof sendOtpRequest>) {
  const { phoneNumber, country_code } = action.payload;
  try {
    const response: SendOtpResponse = yield call(sendOtpData, '/api/send-otp', { phone: phoneNumber, country_code });
    if (response.msg === 'success') {
      yield put(sendOtpSuccess(`${country_code}${phoneNumber}`));
    } else {
      yield put(sendOtpFailure(response.msg || 'Failed to send OTP'));
    }
  } catch (error) {
    const err = error as Error;
    yield put(sendOtpFailure(err.message || 'An unknown error occurred'));
  }
}

const secretPass = 'al123@st678$ven';

function* handleLogin(action: ReturnType<typeof loginRequest>) {
    const { phoneNumber, otp, country_code } = action.payload;
  try {
    const response: AuthResponse = yield call(loginData, '/api/verify-otp', { phone: phoneNumber, otp, country_code });
    if (response.msg === 'success' && response.result?.token) {
      setAuthToken(response.result.token);

      // Encrypt and store user data
      const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(response.result.user), secretPass).toString();
      localStorage.setItem('user', encryptedUser);

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
