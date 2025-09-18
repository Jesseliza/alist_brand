import axios, { AxiosError } from 'axios';
import { ApiAuthResponse, ApiLoginResult, LoginPayload, SendOtpPayload } from '@/types/auth';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const loginData = async (endpoint: string, payload: LoginPayload): Promise<ApiAuthResponse> => {
  try {
    const response = await axios.post<ApiLoginResult>(`${BASE_URL}${endpoint}`, payload);
    return { result: response.data, msg: "success" };
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    return { msg: axiosError.response?.data?.message || "Invalid Credentials" };
  }
};

export const sendOtpData = async (endpoint: string, payload: SendOtpPayload) => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, payload);
    return { result: response.data, msg: "success" };
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    return { msg: axiosError.response?.data?.message || "Failed to send OTP" };
  }
}
