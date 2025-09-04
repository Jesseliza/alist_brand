import axiosInstance from './apiHelper';

export const loginData = async (endpoint: string, payload: any) => {
    try {
      const response = await axiosInstance.post(endpoint, payload);
      return { result: response.data, msg: "success" };
    } catch (error: any) {
      return { msg: error.response?.data?.message || "Invalid Credentials" };
    }
  };

export const sendOtpData = async (endpoint: string, payload: any) => {
    try {
        const response = await axiosInstance.post(endpoint, payload);
        return { msg: "success" };
    } catch (error: any) {
      return { msg: error.response?.data?.message || "Failed to send OTP" };
    }
}
