import axios from 'axios';
import CryptoJS from 'crypto-js';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const sttoken = localStorage.getItem('token');
    if (sttoken) {
      const secretPass = 'j123@nglez678$one';
      try {
        const detoken = CryptoJS.AES.decrypt(sttoken, secretPass).toString(CryptoJS.enc.Utf8);
        const token = JSON.parse(detoken);
        const headers = {
          Authorization: `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json', // Changed to application/json, as multipart/form-data is usually set by axios automatically when needed
        };
        config.headers = { ...config.headers, ...headers };
      } catch (e) {
        console.error("Failed to decrypt token", e)
      }
    }
  }
  return config;
});

export default axiosInstance;
