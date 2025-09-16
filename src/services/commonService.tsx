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

    if (axiosError.response) {
      return { success: false, ...axiosError.response.data };
    } else if (axiosError.request) {
      return { success: false, response: "No response from server (possible CORS or network issue)" };
    } else {
      return { success: false, response: axiosError.message };
    }
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
