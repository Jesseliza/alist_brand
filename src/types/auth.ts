import { Account } from "./entities";

export interface LoginPayload {
    phone: string;
    otp: string;
  }

  export interface SendOtpPayload {
    phone: string;
  }

  export interface AuthResponse {
    msg: string;
    result?: {
      token: string;
      user: Account;
    };
  }
