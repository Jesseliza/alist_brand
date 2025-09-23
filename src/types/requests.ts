import { Account, Brand } from './entities';

export type CreateAccountPayload = Omit<Account, 'accountId' | 'signUpDate' | 'lastLogin' | 'subscriptionCount' | 'brandsCount' | 'campaignsCount'>;
export type UpdateAccountPayload = Partial<CreateAccountPayload> & { accountId: string };

export type CreateBrandPayload = Omit<Brand, 'brandId' | 'offersCount' | 'campaignsCount' | 'profileCompletion'>;
export type UpdateBrandPayload = Partial<CreateBrandPayload> & { brandId: string };

export interface FetchBrandsResponse {
    data: Brand[];
    total: number;
    per_page: number;
    current_page: number;
}
