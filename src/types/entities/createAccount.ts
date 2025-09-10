export interface CreateAccountPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  pin: string;
  account_type: 'individual' | 'business';
  registration_type: 'accounts';
  status: 'active';
  venues: number[];
}
