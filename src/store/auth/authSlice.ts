import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: any; // Replace 'any' with a proper user type
  phoneNumber: string | null;
  loading: boolean;
  error: string | null;
  otpSent: boolean;
  isAuthLoading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  phoneNumber: null,
  loading: false,
  error: null,
  otpSent: false,
  isAuthLoading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    sendOtpRequest(state, action: PayloadAction<{ phoneNumber: string }>) {
      state.loading = true;
      state.error = null;
      state.otpSent = false;
    },
    sendOtpSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.phoneNumber = action.payload;
      state.otpSent = true;
    },
    sendOtpFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.otpSent = false;
    },
    loginRequest(state, action: PayloadAction<{ phoneNumber: string, otp: string }>) {
        state.loading = true;
        state.error = null;
    },
    loginSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.phoneNumber = null;
      state.otpSent = false;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.phoneNumber = null;
      state.otpSent = false;
      localStorage.removeItem('token');
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
    resetOtpSent(state) {
      state.otpSent = false;
    },
    authCheckCompleted(state, action: PayloadAction<{ isAuthenticated: boolean }>) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.isAuthLoading = false;
    }
  },
});

export const {
    sendOtpRequest,
    sendOtpSuccess,
    sendOtpFailure,
    loginRequest,
    loginSuccess,
    loginFailure,
    logout,
    resetOtpSent,
    authCheckCompleted,
} = authSlice.actions;

export default authSlice.reducer;
