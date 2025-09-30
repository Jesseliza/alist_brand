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
    result?: unknown;
  }

  /**
   * Represents the raw account object from the API response.
   */
  interface ApiAccount {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    country_code: string;
    account_type: string;
    registration_type: string;
    status: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    food_offers_count?: number;
  }

  /**
   * Represents the shape of the `result` object from the login API response.
   */
  export interface ApiLoginResult {
    token: string;
    account: ApiAccount;
  }

  /**
   * Represents the raw response from the login API, as returned by the auth service.
   */
  export interface ApiAuthResponse {
    msg: string;
    result?: ApiLoginResult;
  }
