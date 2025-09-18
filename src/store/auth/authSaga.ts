import { call, put, takeLatest, all } from 'redux-saga/effects';
import { loginData, sendOtpData } from '@/services/authService';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { loginData, sendOtpData } from '@/services/authService';
import { fetchData } from '@/services/commonService';
import {
  sendOtpRequest,
  sendOtpSuccess,
  sendOtpFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  authCheckCompleted,
  setUser,
  logout
} from './authSlice';
import { setAuthToken } from '@/services/apiHelper';
import { AuthResponse, SendOtpResponse } from '@/types/auth';
import { Account } from '@/types/entities';

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

function* handleLogin(action: ReturnType<typeof loginRequest>) {
    const { phoneNumber, otp, country_code } = action.payload;
  try {
    const response: AuthResponse = yield call(loginData, '/api/verify-otp', { phone: phoneNumber, otp, country_code });
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

function* handleAuthCheckCompleted(action: ReturnType<typeof authCheckCompleted>) {
  if (action.payload.isAuthenticated) {
    try {
      const response: { account: Account } = yield call(fetchData, '/api/account');
      if (response.account) {
        yield put(setUser(response.account));
      } else {
        yield put(logout());
      }
    } catch (error) {
      console.error("Failed to fetch user profile, logging out.", error);
      yield put(logout());
    }
  }
}

function* watchAuth() {
  yield takeLatest(sendOtpRequest.type, handleSendOtp);
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(authCheckCompleted.type, handleAuthCheckCompleted);
}

export default function* authSaga() {
    yield all([
        watchAuth(),
    ])
}
