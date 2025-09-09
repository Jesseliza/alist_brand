import axios from 'axios';
import CryptoJS from 'crypto-js';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const secretPass = 'j123@nglez678$one';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const setAuthToken = (token: string) => {
  const encryptedToken = CryptoJS.AES.encrypt(JSON.stringify(token), secretPass).toString();
  localStorage.setItem('token', encryptedToken);
  document.cookie = `token=${encryptedToken}; path=/; max-age=86400`; // Set token as a cookie
};

axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const sttoken = localStorage.getItem('token');
    if (sttoken) {
      try {
        const detoken = CryptoJS.AES.decrypt(sttoken, secretPass).toString(CryptoJS.enc.Utf8);
        const token = JSON.parse(detoken);

        if (token) {
            const headers = {
              Authorization: `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            };
            config.headers = { ...config.headers, ...headers };
        }
      } catch (e) {
        console.error("Failed to decrypt token", e)
      }
    }
  }
  return config;
});

export default axiosInstance;
