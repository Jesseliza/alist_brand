export interface ApiResponse {
    message?: string;
}

export interface Country {
    id: number;
    country_name: string;
}

export interface State {
    id: number;
    state_name: string;
}

export interface Industry {
    id: number;
    category: string;
}

export interface Account {
    id: number;
    first_name: string;
    last_name: string;
}

export interface CountryApiResponse extends ApiResponse {
    accounts: Country[];
}

export interface StateApiResponse extends ApiResponse {
    accounts: State[];
}

export interface IndustryApiResponse extends ApiResponse {
    accounts: Industry[];
}

export interface AccountApiResponse extends ApiResponse {
    accounts: Account[];
}

export interface PaginationState {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
}