import { call, put, takeLatest, all, select } from "redux-saga/effects";
import toast from "react-hot-toast";
import { postData, deleteData, fetchData } from "@/services/commonService";
import { generateColorFromString } from "@/utils/colorGenerator";
import {
    fetchAccountsRequest,
    fetchAccountsSuccess,
    fetchAccountsFailure,
    fetchMoreAccountsRequest,
    fetchMoreAccountsSuccess,
    fetchMoreAccountsFailure,
    createAccountRequest,
    createAccountSuccess,
    createAccountFailure,
    updateAccountRequest,
    updateAccountSuccess,
    updateAccountFailure,
    deleteAccountRequest,
    deleteAccountSuccess,
    deleteAccountFailure,
    fetchAccountByIdRequest,
    fetchAccountByIdSuccess,
    fetchAccountByIdFailure,
    bulkDeleteAccountsRequest,
    bulkDeleteAccountsSuccess,
    bulkDeleteAccountsFailure,
    bulkUpdateStatusRequest,
    bulkUpdateStatusSuccess,
    bulkUpdateStatusFailure,
} from "./accountSlice";
import { fetchIndustries, fetchIndustriesSuccess } from "../common/commonSlice";
import { Account, Brand, AccountType } from "@/types/entities";
import { RootState } from "../store";
import { Option } from "@/types/common";
import { Industry, IndustryApiResponse } from "@/types/api";

const getIndustries = (state: RootState) => state.common.industries;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformVenueToBrand = (venue: any, industries: Option[]): Brand => {
    const industry = industries.find(
        (ind) => ind.value === venue.category_id?.toString()
    );

    return {
        brandId: venue.id.toString(),
        name: venue.venue_title,
        accountId: venue.account_id ? venue.account_id.toString() : "N/A",
        logo: venue.venue_logo || "",
        phoneNumber: venue.venue_contact_number || "",
        emailAddress: venue.venue_email || "",
        industry: industry ? industry.label : "N/A",
        companyName: venue.company_name || "",
        businessLocation: venue.businessLocation || "",
        tradeLicenseCopy: venue.trade_license_file || "",
        vatCertificate: venue.vat_certificate_file || "",
        instagramHandle: venue.venue_instagram_url || "",
        websiteUrl: venue.venue_url || "",
        associateFirstName: venue.associateFirstName || "",
        associateLastName: venue.associateLastName || "",
        associateEmail: venue.associateEmail || "",
        associatePhone: venue.associatePhone || "",
        associateInitials:
            `${venue.venue_title?.[0] || ""}${
                venue.venue_title?.split(" ")?.[1]?.[0] || ""
            }`.toUpperCase() || "",
        associateBackground: generateColorFromString(venue.venue_title || ""),
        offersCount: venue.offersCount || 0,
        campaignsCount: venue.campaignsCount || 0,
        profileCompletion: venue.profileCompletion || 0,
        country: venue.country || "",
        state: venue.state || "",
        associateName: venue.Venue_contact_name || "",
        registrationDate: venue.created_at || "",
        owner: venue.venue_title || "",
        files: 0,
        Venue_contact_name: venue.Venue_contact_name || null,
        venue_email: venue.venue_email || null,
        Venue: { food_offers: venue.food_offers || [] },
        food_offers_count: venue.food_offers_count || 0,
    };
};

function* ensureIndustriesFetched(): Generator<any, Option[], any> {
    let industries: Option[] = yield select(getIndustries);
    if (!industries || industries.length === 0) {
        yield put(fetchIndustries());
        const response: IndustryApiResponse = yield call(fetchData, "/api/categories");
        if (response && response.accounts) {
            const formattedData: Option[] = response.accounts.map((industry: Industry) => ({
                value: industry.id.toString(),
                label: industry.category,
            }));
            yield put(fetchIndustriesSuccess(formattedData));
            industries = formattedData;
        } else {
            // In case of failure, return an empty array to avoid breaking the app
            industries = [];
        }
    }
    return industries;
}

interface ApiAccount {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    country_code: string;
    account_type: string;
    status: "active" | "inactive";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    venues: any[];
  venues_count: number;
    food_offers_count: number;
    created_at: string;
}

type ApiError = {
    success: false;
    response: string;
};

type FetchAccountsSuccessResponse = {
    message: string;
    accounts: {
      data: ApiAccount[];
      current_page: number;
      last_page: number;
      per_page: number;
      total: number;
    };
};

type AccountSuccessResponse = {
    message: string;
    account: ApiAccount;
};

function* handleFetchAccounts(action: ReturnType<typeof fetchAccountsRequest>) {
    try {
      const { page, ...bodyPayload } = action.payload;
      let endpoint = '/api/list/accounts';
      if (page) {
        endpoint = `${endpoint}?page=${page}`;
      }

      const industries: Option[] = yield call(ensureIndustriesFetched);
      const response: FetchAccountsSuccessResponse | ApiError = yield call(postData, endpoint, bodyPayload);

      if ('accounts' in response && response.accounts) {
        const { data, current_page, last_page, per_page, total } = response.accounts;

        const feAccounts: Account[] = data.map((apiAccount: ApiAccount) => {
          const brands = apiAccount.venues ? apiAccount.venues.map((venue: any) => transformVenueToBrand(venue, industries)) : [];
          return {
            accountId: apiAccount.id.toString(),
            firstName: apiAccount.first_name,
            lastName: apiAccount.last_name,
            emailAddress: apiAccount.email,
            country_code: apiAccount.country_code,
            phoneNumber: apiAccount.phone,
            accountType: apiAccount.account_type as AccountType,
            brands: brands,
            signUpDate: apiAccount.created_at,
            avatarInitials: `${apiAccount.first_name?.[0] || ""}${apiAccount.last_name?.[0] || ""}`.toUpperCase(),
            avatarBackground: generateColorFromString(apiAccount.first_name || ''),
            subscriptionCount: 0,
            brandsCount: apiAccount.venues_count || 0,
            campaignsCount: 0,
            food_offers_count: apiAccount.food_offers_count || 0,
            status: apiAccount.status,
            registration_type: "accounts",
          };
        });

        yield put(fetchAccountsSuccess({
          accounts: feAccounts,
          pagination: {
            currentPage: current_page,
            lastPage: last_page,
            perPage: per_page,
            total: total,
          },
        }));
      } else {
        const errorResponse = response as ApiError;
        const errorMessage = errorResponse.response || 'Failed to fetch accounts';
        yield put(fetchAccountsFailure(errorMessage));
        toast.error(errorMessage);
      }
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message || 'An unknown error occurred';
      yield put(fetchAccountsFailure(errorMessage));
      toast.error(errorMessage);
    }
}

function* handleFetchMoreAccounts(action: ReturnType<typeof fetchMoreAccountsRequest>) {
    try {
      const { page, ...bodyPayload } = action.payload;
      let endpoint = '/api/list/accounts';
      if (page) {
        endpoint = `${endpoint}?page=${page}`;
      }

      const industries: Option[] = yield call(ensureIndustriesFetched);
      const response: FetchAccountsSuccessResponse | ApiError = yield call(postData, endpoint, bodyPayload);

      if ('accounts' in response && response.accounts) {
        const { data, current_page, last_page, per_page, total } = response.accounts;

        const feAccounts: Account[] = data.map((apiAccount: ApiAccount) => {
          const brands = apiAccount.venues ? apiAccount.venues.map((venue: any) => transformVenueToBrand(venue, industries)) : [];
          return {
            accountId: apiAccount.id.toString(),
            firstName: apiAccount.first_name,
            lastName: apiAccount.last_name,
            emailAddress: apiAccount.email,
            country_code: apiAccount.country_code,
            phoneNumber: apiAccount.phone,
            accountType: apiAccount.account_type as AccountType,
            brands: brands,
            signUpDate: apiAccount.created_at,
            avatarInitials: `${apiAccount.first_name?.[0] || ""}${apiAccount.last_name?.[0] || ""}`.toUpperCase(),
            avatarBackground: generateColorFromString(apiAccount.first_name || ''),
            subscriptionCount: 0,
            brandsCount: apiAccount.venues_count || 0,
            campaignsCount: 0,
            food_offers_count: apiAccount.food_offers_count || 0,
            status: apiAccount.status,
            registration_type: "accounts",
          };
        });

        yield put(fetchMoreAccountsSuccess({
          accounts: feAccounts,
          pagination: {
            currentPage: current_page,
            lastPage: last_page,
            perPage: per_page,
            total: total,
          },
        }));
      } else {
        const errorResponse = response as ApiError;
        const errorMessage = errorResponse.response || 'Failed to fetch more accounts';
        yield put(fetchMoreAccountsFailure(errorMessage));
        toast.error(errorMessage);
      }
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message || 'An unknown error occurred';
      yield put(fetchMoreAccountsFailure(errorMessage));
      toast.error(errorMessage);
    }
}

function* handleCreateAccount(action: ReturnType<typeof createAccountRequest>) {
    try {
      const {
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        country_code,
        accountType,
        brands,
      } = action.payload;

      const apiPayload = {
        first_name: firstName,
        last_name: lastName,
        email: emailAddress,
        phone: phoneNumber,
        country_code: country_code,
        account_type: accountType,
        venues: brands?.map(b => b.brandId) || [],
        registration_type: "accounts", // Static value
        status: "active", // Static value
      };

      const response: AccountSuccessResponse | ApiError = yield call(postData, '/api/add/account', apiPayload);

      if ('account' in response && response.account) {
        const apiAccount = response.account;

        const industries: Option[] = yield call(ensureIndustriesFetched);
        const feBrands: Brand[] = apiAccount.venues ? apiAccount.venues.map((venue: any) => transformVenueToBrand(venue, industries)) : [];

        const feAccount: Account = {
          accountId: apiAccount.id.toString(),
          firstName: apiAccount.first_name,
          lastName: apiAccount.last_name,
          emailAddress: apiAccount.email,
          country_code: apiAccount.country_code,
          phoneNumber: apiAccount.phone,
          accountType: apiAccount.account_type as AccountType,
          brands: feBrands,
          signUpDate: apiAccount.created_at,
          avatarInitials: `${apiAccount.first_name?.[0] || ""}${apiAccount.last_name?.[0] || ""}`.toUpperCase(),
          avatarBackground: "#CCCCCC",
          subscriptionCount: 0,
          brandsCount: apiAccount.venues_count,
          campaignsCount: 0,
          food_offers_count: apiAccount.food_offers_count || 0,
          status: apiAccount.status,
          registration_type: "accounts",
        };

        yield put(createAccountSuccess(feAccount));
        toast.success('Account created successfully!');
      } else {
        const errorResponse = response as ApiError;
        const errorMessage = errorResponse.response ? `${errorResponse.response} Failed to create account` : 'Failed to create account';
        yield put(createAccountFailure(errorMessage));
        toast.error(errorMessage);
      }
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message || 'An unknown error occurred';
      yield put(createAccountFailure(errorMessage));
      toast.error(errorMessage);
    }
}

function* handleUpdateAccount(action: ReturnType<typeof updateAccountRequest>) {
    try {
      const {
        accountId,
        brands,
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        country_code,
        accountType,
      } = action.payload;

      const apiPayload = {
        first_name: firstName,
        last_name: lastName,
        email: emailAddress,
        phone: phoneNumber,
        country_code: country_code,
        account_type: accountType,
        venues: brands?.map((b) => Number(b.brandId)),
        registration_type: "accounts",
        status: "active",
      };

      const filteredApiPayload = Object.fromEntries(
        Object.entries(apiPayload).filter(([, value]) => value !== undefined)
      );

      const response: AccountSuccessResponse | ApiError = yield call(
        postData,
        `/api/account/${accountId}`,
        filteredApiPayload
      );
      if ('account' in response && response.account) {
        const apiAccount = response.account;
        const industries: Option[] = yield call(ensureIndustriesFetched);
        const feBrands: Brand[] = apiAccount.venues ? apiAccount.venues.map((venue: any) => transformVenueToBrand(venue, industries)) : [];
        const feAccount: Account = {
          accountId: apiAccount.id.toString(),
          firstName: apiAccount.first_name,
          lastName: apiAccount.last_name,
          emailAddress: apiAccount.email,
          country_code: apiAccount.country_code,
          phoneNumber: apiAccount.phone,
          accountType: apiAccount.account_type as AccountType,
          brands: feBrands,
          signUpDate: apiAccount.created_at,
          avatarInitials: `${apiAccount.first_name?.[0] || ""}${
            apiAccount.last_name?.[0] || ""
          }`.toUpperCase(),
          avatarBackground: generateColorFromString(apiAccount.first_name || ""),
          subscriptionCount: 0,
          brandsCount: apiAccount.venues_count || 0,
          campaignsCount: 0,
          food_offers_count: apiAccount.food_offers_count || 0,
          status: apiAccount.status,
          registration_type: "accounts",
        };
        yield put(updateAccountSuccess(feAccount));
        toast.success(response.message);
      } else {
        const errorResponse = response as ApiError;
        const errorMessage = errorResponse.response ? `${errorResponse.response} Failed to update account` : 'Failed to update account';
        yield put(updateAccountFailure(errorMessage));
        toast.error(errorMessage);
      }
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message || "An unknown error occurred";
      yield put(updateAccountFailure(errorMessage));
      toast.error(errorMessage);
    }
}

function* handleDeleteAccount(action: ReturnType<typeof deleteAccountRequest>) {
    try {
      const { accountId } = action.payload;
      const response: { success: boolean, response: string } = yield call(deleteData, `/api/accounts/${accountId}`);
      if (response.success) {
        yield put(deleteAccountSuccess({ accountId }));
        toast.success('Account deleted successfully!');
      } else {
        const errorMessage = response.response || 'Failed to delete account';
        yield put(deleteAccountFailure(errorMessage));
        toast.error(errorMessage);
      }
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message || 'An unknown error occurred';
      yield put(deleteAccountFailure(errorMessage));
      toast.error(errorMessage);
    }
}

function* handleFetchAccountById(action: ReturnType<typeof fetchAccountByIdRequest>) {
    try {
      const { accountId } = action.payload;
      const response: AccountSuccessResponse | ApiError = yield call(fetchData, `/api/account/${accountId}`);

      if ('account' in response && response.account) {
        const apiAccount = response.account;
        const industries: Option[] = yield call(ensureIndustriesFetched);
        const feBrands: Brand[] = apiAccount.venues ? apiAccount.venues.map((venue: any) => transformVenueToBrand(venue, industries)) : [];
        const feAccount: Account = {
          accountId: apiAccount.id.toString(),
          firstName: apiAccount.first_name,
          lastName: apiAccount.last_name,
          emailAddress: apiAccount.email,
          country_code: apiAccount.country_code,
          phoneNumber: apiAccount.phone,
          accountType: apiAccount.account_type as AccountType,
          brands: feBrands,
          signUpDate: apiAccount.created_at,
          avatarInitials: `${apiAccount.first_name?.[0] || ""}${apiAccount.last_name?.[0] || ""}`.toUpperCase(),
          avatarBackground: generateColorFromString(apiAccount.first_name || ''),
          subscriptionCount: 0,
          brandsCount: apiAccount.venues_count || 0,
          campaignsCount: 0,
          food_offers_count: apiAccount.food_offers_count || 0,
          status: apiAccount.status,
          registration_type: "accounts",
        };
        yield put(fetchAccountByIdSuccess(feAccount));
      } else {
        const errorResponse = response as ApiError;
        const errorMessage = errorResponse.response || 'Failed to fetch account';
        yield put(fetchAccountByIdFailure(errorMessage));
        toast.error(errorMessage);
      }
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message || 'An unknown error occurred';
      yield put(fetchAccountByIdFailure(errorMessage));
      toast.error(errorMessage);
    }
}

function* handleBulkDeleteAccounts(action: ReturnType<typeof bulkDeleteAccountsRequest>) {
    try {
      const { account_ids } = action.payload;
      const response: { message: string, updated_ids: string[] } | ApiError = yield call(postData, '/api/accounts/bulk-delete', { account_ids });

      if ('updated_ids' in response) {
        yield put(bulkDeleteAccountsSuccess({ updated_ids: response.updated_ids }));
        toast.success(response.message);
        // Refresh the accounts list
        yield put(fetchAccountsRequest({ per_page: 10, page: 1 }));
      } else {
        const errorResponse = response as ApiError;
        const errorMessage = errorResponse.response || 'Failed to delete accounts';
        yield put(bulkDeleteAccountsFailure(errorMessage));
        toast.error(errorMessage);
      }
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message || 'An unknown error occurred';
      yield put(bulkDeleteAccountsFailure(errorMessage));
      toast.error(errorMessage);
    }
}

function* handleBulkUpdateStatus(action: ReturnType<typeof bulkUpdateStatusRequest>) {
    try {
      const { account_ids, status } = action.payload;
      const response: { message: string, updated_ids: string[], status: string } | ApiError = yield call(postData, '/api/accounts/bulk-update-status', { account_ids, status });

      if ('updated_ids' in response) {
        yield put(bulkUpdateStatusSuccess({ updated_ids: response.updated_ids, status: response.status }));
        toast.success(response.message);
        // Refresh the accounts list
        yield put(fetchAccountsRequest({ per_page: 10, page: 1 }));
      } else {
        const errorResponse = response as ApiError;
        const errorMessage = errorResponse.response || 'Failed to update accounts status';
        yield put(bulkUpdateStatusFailure(errorMessage));
        toast.error(errorMessage);
      }
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message || 'An unknown error occurred';
      yield put(bulkUpdateStatusFailure(errorMessage));
      toast.error(errorMessage);
    }
}

function* watchAccount() {
    yield takeLatest(fetchAccountsRequest.type, handleFetchAccounts);
    yield takeLatest(fetchMoreAccountsRequest.type, handleFetchMoreAccounts);
    yield takeLatest(createAccountRequest.type, handleCreateAccount);
    yield takeLatest(updateAccountRequest.type, handleUpdateAccount);
    yield takeLatest(deleteAccountRequest.type, handleDeleteAccount);
    yield takeLatest(fetchAccountByIdRequest.type, handleFetchAccountById);
    yield takeLatest(bulkDeleteAccountsRequest.type, handleBulkDeleteAccounts);
    yield takeLatest(bulkUpdateStatusRequest.type, handleBulkUpdateStatus);
}

export default function* accountSaga() {
    yield all([
      watchAccount(),
    ]);
}