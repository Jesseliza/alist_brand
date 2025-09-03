import axiosInstance from './apiHelper';

// Example service functions
export const fetchData = async (endpoint: string) => {
  try {
    const response = await axiosInstance.get(`${endpoint}`);
    return response.data;
  } catch (error: any) {
    return { success: false, response: error.response.data.response };
  }
};

export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await axiosInstance.post(`${endpoint}`, data);
    console.log('response=>', response);

    return response.data;
  } catch (error: any) {
    console.log("error=>", error);

    let message = "Something went wrong";

    if (error.response) {
      // Server responded (like 413, 500, etc.)
      message =
        error.response.data?.response ||     // your backend JSON error (if any)
        error.response.data?.message ||      // common API error format
        error.response.statusText ||         // e.g. "Request Entity Too Large"
        `Error ${error.response.status}`;    // fallback (e.g. Error 413)
    } else if (error.request) {
      message = "No response from server (possible CORS or network issue)";
    } else {
      message = error.message;
    }

    return { success: false, response: message };
  }
};

export const putData = async (endpoint: string, data: any) => {
  try {
    const response = await axiosInstance.put(`${endpoint}`, data);
    return response.data;
  } catch (error: any) {
    return { success: false, response: error.response.data.response };
  }
};
export const deleteData = async (endpoint: string) => {
  try {
    const response = await axiosInstance.delete(`${endpoint}`);
    return response.data;
  } catch (error: any) {
    return { success: false, response: error.response.data.response };
  }
};

// You can add more functions as needed
