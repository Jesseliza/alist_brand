import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginStart, loginSuccess, loginFailure } from './authSlice';
import loginData from '@/services/authService';
import CryptoJS from 'crypto-js';

export const login = createAsyncThunk(
  'auth/login',
  async ({ phoneNumber, otp }: { phoneNumber: string; otp: string }, { dispatch }) => {
    try {
      dispatch(loginStart());
      const response = await loginData('/login', { phoneNumber, otp }); // Assuming '/login' is the endpoint

      if (response.msg === 'success' && response.result.token) {
        const secretPass = 'j123@nglez678$one';
        const encryptedToken = CryptoJS.AES.encrypt(JSON.stringify(response.result.token), secretPass).toString();
        localStorage.setItem('token', encryptedToken);
        document.cookie = "isAuthenticated=true; path=/";
        dispatch(loginSuccess(response.result.user));
      } else {
        dispatch(loginFailure(response.msg || 'Login failed'));
      }
    } catch (error: any) {
      dispatch(loginFailure(error.message || 'An unknown error occurred'));
    }
  }
);
