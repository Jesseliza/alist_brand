import { Account } from "./entities";

export interface LoginPayload {
    phone: string;
    otp: string;
    country_code: string;
  }

  export interface SendOtpPayload {
    phone: string;
    country_code: string;
  }

  export interface AuthResponse {
    msg: string;
    result?: {
      token: string;
      user: Account;
    };
  }

  export interface SendOtpResponse {
    msg: string;
    result?: any;
  }
