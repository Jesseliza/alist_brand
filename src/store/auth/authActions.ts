import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginData, sendOtpData } from '@/services/authService';
import CryptoJS from 'crypto-js';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const sendOtp = createAsyncThunk(
  'auth/sendOtp',
  async ({ phoneNumber, router }: { phoneNumber: string, router: AppRouterInstance }, { rejectWithValue }) => {
    try {
      const response = await sendOtpData('/send-otp', { phoneNumber });
      if (response.msg === 'success') {
        router.push('/login/otp');
        return phoneNumber;
      } else {
        return rejectWithValue(response.msg || 'Failed to send OTP');
      }
    } catch (error: any) {
      return rejectWithValue(error.message || 'An unknown error occurred');
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ phoneNumber, otp, router }: { phoneNumber: string; otp: string, router: AppRouterInstance }, { rejectWithValue }) => {
    try {
      const response = await loginData('/login', { phoneNumber, otp });
      if (response.msg === 'success' && response.result.token) {
        const secretPass = 'j123@nglez678$one';
        const encryptedToken = CryptoJS.AES.encrypt(JSON.stringify(response.result.token), secretPass).toString();
        localStorage.setItem('token', encryptedToken);
        document.cookie = "isAuthenticated=true; path=/";
        router.push('/dashboard');
        return response.result.user;
      } else {
        return rejectWithValue(response.msg || 'Login failed');
      }
    } catch (error: any) {
      return rejectWithValue(error.message || 'An unknown error occurred');
    }
  }
);
