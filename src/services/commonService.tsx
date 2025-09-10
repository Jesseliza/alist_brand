import { AxiosError } from 'axios';
import axiosInstance from './apiHelper';

// Example service functions
export const fetchData = async (endpoint: string) => {
  try {
    const response = await axiosInstance.get(`${endpoint}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ response: string }>;
    return { success: false, response: axiosError.response?.data.response };
  }
};

export const postData = async <T,>(endpoint: string, data: T) => {
  try {
    const response = await axiosInstance.post(`${endpoint}`, data);
    console.log('response=>', response);

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ response: string, message: string }>;
    console.log("error=>", axiosError);

    let message = "Something went wrong";

    if (axiosError.response) {
      // Server responded (like 413, 500, etc.)
      message =
        axiosError.response.data?.response ||     // your backend JSON error (if any)
        axiosError.response.data?.message ||      // common API error format
        axiosError.response.statusText ||         // e.g. "Request Entity Too Large"
        `Error ${axiosError.response.status}`;    // fallback (e.g. Error 413)
    } else if (axiosError.request) {
      message = "No response from server (possible CORS or network issue)";
    } else {
      message = axiosError.message;
    }

    return { success: false, response: message };
  }
};

export const putData = async <T,>(endpoint: string, data: T) => {
  try {
    const response = await axiosInstance.put(`${endpoint}`, data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ response: string }>;
    return { success: false, response: axiosError.response?.data.response };
  }
};
export const deleteData = async (endpoint: string) => {
  try {
    const response = await axiosInstance.delete(`${endpoint}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ response: string }>;
    return { success: false, response: axiosError.response?.data.response };
  }
};

// You can add more functions as needed
