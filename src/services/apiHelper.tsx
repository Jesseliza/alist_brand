import axios from 'axios';
import CryptoJS from 'crypto-js';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const secretPass = 'al123@st678$ven';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    // Apply the authorization token to every subsequent request
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // Encrypt and store the token for persistence
    const encryptedToken = CryptoJS.AES.encrypt(JSON.stringify(token), secretPass).toString();
    localStorage.setItem('token', encryptedToken);
    document.cookie = `token=${encryptedToken}; path=/; max-age=86400`;
  } else {
    // Remove the authorization header
    delete axiosInstance.defaults.headers.common['Authorization'];

    // Clear the stored token
    localStorage.removeItem('token');
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
};

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Exclude the PIN validation endpoint from the global 401 handling
    if (
      error.response &&
      error.response.status === 401 &&
      error.config.url !== "/api/validate/pin"
    ) {
      setAuthToken(null);
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
