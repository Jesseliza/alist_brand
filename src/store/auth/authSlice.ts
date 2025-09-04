import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface AuthState {
  isAuthenticated: boolean;
  user: any; // Replace 'any' with a proper user type
  phoneNumber: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  phoneNumber: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    sendOtpRequest(state, action: PayloadAction<{ phoneNumber: string, router: AppRouterInstance }>) {
      state.loading = true;
      state.error = null;
    },
    sendOtpSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.phoneNumber = action.payload;
    },
    sendOtpFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    loginRequest(state, action: PayloadAction<{ phoneNumber: string, otp: string, router: AppRouterInstance }>) {
        state.loading = true;
        state.error = null;
    },
    loginSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.phoneNumber = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.phoneNumber = null;
      localStorage.removeItem('token');
      document.cookie = "isAuthenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
  },
});

export const {
    sendOtpRequest,
    sendOtpSuccess,
    sendOtpFailure,
    loginRequest,
    loginSuccess,
    loginFailure,
    logout
} = authSlice.actions;

export default authSlice.reducer;
