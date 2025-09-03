import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const loginData = async (endpoint: string, payload: any) => {
    try {
      const response = await axios.post(`${BASE_URL}${endpoint}`, payload);
      return { result: response.data, msg: "success" };
    } catch (error) {
      return { msg: "Invalid Credentials" };
    }
  };
export default loginData;
