import axios from 'axios';
import CryptoJS from 'crypto-js';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const secretPass = 'al123@st678$ven';

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
            config.headers.set('Authorization', `Bearer ${token}`);
            config.headers.set('Accept', 'application/json');
            config.headers.set('Content-Type', 'application/json');
        }
      } catch (e) {
        console.error("Failed to decrypt token", e)
      }
    }
  }
  return config;
});

export default axiosInstance;
