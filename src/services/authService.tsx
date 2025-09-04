import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const loginData = async (endpoint: string, payload: any) => {
    try {
      const response = await axios.post(`${BASE_URL}${endpoint}`, payload);
      return { result: response.data, msg: "success" };
    } catch (error) {
      return { msg: "Invalid Credentials" };
    }
  };

export const sendOtpData = async (endpoint: string, payload: any) => {
    try {
      // In a real app, this would call the API to send the OTP
      console.log('Sending OTP to:', payload.phoneNumber);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      return { msg: "success" };
    } catch (error) {
      return { msg: "Failed to send OTP" };
    }
}
