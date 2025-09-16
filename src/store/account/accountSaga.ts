import { call, put, takeLatest, all } from 'redux-saga/effects';
  import toast from 'react-hot-toast';
  import { postData, deleteData, fetchData } from '@/services/commonService';
  import { generateColorFromString } from '@/utils/colorGenerator';
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
  } from './accountSlice';
  import { Account, Brand, AccountType } from '@/types/entities';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transformVenueToBrand = (venue: any): Brand => {
    return {
      brandId: venue.id.toString(),
      name: venue.venue_title,
      accountId: venue.accountId || 'N/A',
      logo: venue.logo || '',
      phoneNumber: venue.phoneNumber || '',
      emailAddress: venue.emailAddress || '',
      industry: venue.industry || 'N/A',
      companyName: venue.companyName || '',
      businessLocation: venue.businessLocation || '',
      tradeLicenseCopy: venue.tradeLicenseCopy || '',
      vatCertificate: venue.vatCertificate || '',
      instagramHandle: venue.instagramHandle || '',
      websiteUrl: venue.venue_url || '',
      associateFirstName: venue.associateFirstName || '',
      associateLastName: venue.associateLastName || '',
      associateEmail: venue.associateEmail || '',
      associatePhone: venue.associatePhone || '',
      associateInitials: venue.associateInitials || '',
      associateBackground: venue.associateBackground || '#CCCCCC',
      offersCount: venue.offersCount || 0,
      campaignsCount: venue.campaignsCount || 0,
      profileCompletion: venue.profileCompletion || 0,
    };
  };

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
    created_at: string;
  }

  type ApiError = {
    success: false;
    response?: string;
    message?: string;
    error?: string;
    errors?: { [key: string]: string[] };
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

      const response: FetchAccountsSuccessResponse | ApiError = yield call(postData, endpoint, bodyPayload);

      if ('accounts' in response && response.accounts) {
        const { data, current_page, last_page, per_page, total } = response.accounts;

        const feAccounts: Account[] = data.map((apiAccount: ApiAccount) => ({
          accountId: apiAccount.id.toString(),
          firstName: apiAccount.first_name,
          lastName: apiAccount.last_name,
          emailAddress: apiAccount.email,
          country_code: apiAccount.country_code,
          phoneNumber: apiAccount.phone,
          accountType: apiAccount.account_type as AccountType,
          brands: apiAccount.venues ? apiAccount.venues.map(transformVenueToBrand) : [],
          signUpDate: apiAccount.created_at,
          avatarInitials: `${apiAccount.first_name?.[0] || ""}${apiAccount.last_name?.[0] || ""}`.toUpperCase(),
          avatarBackground: generateColorFromString(apiAccount.first_name || ''),
          subscriptionCount: 0,
          brandsCount: apiAccount.venues?.length || 0,
          campaignsCount: 0,
          status: apiAccount.status,
        }));

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

      const response: FetchAccountsSuccessResponse | ApiError = yield call(postData, endpoint, bodyPayload);

      if ('accounts' in response && response.accounts) {
        const { data, current_page, last_page, per_page, total } = response.accounts;

        const feAccounts: Account[] = data.map((apiAccount: ApiAccount) => ({
          accountId: apiAccount.id.toString(),
          firstName: apiAccount.first_name,
          lastName: apiAccount.last_name,
          emailAddress: apiAccount.email,
          country_code: apiAccount.country_code,
          phoneNumber: apiAccount.phone,
          accountType: apiAccount.account_type as AccountType,
          brands: apiAccount.venues ? apiAccount.venues.map(transformVenueToBrand) : [],
          signUpDate: apiAccount.created_at,
          avatarInitials: `${apiAccount.first_name?.[0] || ""}${apiAccount.last_name?.[0] || ""}`.toUpperCase(),
          avatarBackground: generateColorFromString(apiAccount.first_name || ''),
          subscriptionCount: 0,
          brandsCount: apiAccount.venues?.length || 0,
          campaignsCount: 0,
          status: apiAccount.status,
        }));

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

        const feAccount: Account = {
          accountId: apiAccount.id.toString(),
          firstName: apiAccount.first_name,
          lastName: apiAccount.last_name,
          emailAddress: apiAccount.email,
          country_code: apiAccount.country_code,
          phoneNumber: apiAccount.phone,
          accountType: apiAccount.account_type as AccountType,
          brands: apiAccount.venues ? apiAccount.venues.map(transformVenueToBrand) : [],
          signUpDate: apiAccount.created_at,
          avatarInitials: `${apiAccount.first_name?.[0] || ""}${apiAccount.last_name?.[0] || ""}`.toUpperCase(),
          avatarBackground: "#CCCCCC",
          subscriptionCount: 0,
          brandsCount: apiAccount.venues.length,
          campaignsCount: 0,
          status: apiAccount.status,
        };

        yield put(createAccountSuccess(feAccount));
        toast.success('Account created successfully!');
      } else {
        const errorResponse = response as ApiError;
        const errorMessage = errorResponse.error || errorResponse.response || errorResponse.message || 'Failed to create account';
        if (errorResponse.errors) {
          const errorMessages = Object.values(errorResponse.errors).flat();
          toast.error(errorMessages.join('\n'));
        } else {
          toast.error(errorMessage);
        }
        yield put(createAccountFailure({ message: errorMessage, errors: errorResponse.errors }));
      }
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message || 'An unknown error occurred';
      yield put(createAccountFailure({ message: errorMessage }));
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
        const feAccount: Account = {
          accountId: apiAccount.id.toString(),
          firstName: apiAccount.first_name,
          lastName: apiAccount.last_name,
          emailAddress: apiAccount.email,
          country_code: apiAccount.country_code,
          phoneNumber: apiAccount.phone,
          accountType: apiAccount.account_type as AccountType,
          brands: apiAccount.venues
            ? apiAccount.venues.map(transformVenueToBrand)
            : [],
          signUpDate: apiAccount.created_at,
          avatarInitials: `${apiAccount.first_name?.[0] || ""}${
            apiAccount.last_name?.[0] || ""
          }`.toUpperCase(),
          avatarBackground: generateColorFromString(apiAccount.first_name || ""),
          subscriptionCount: 0,
          brandsCount: apiAccount.venues?.length || 0,
          campaignsCount: 0,
          status: apiAccount.status,
        };
        yield put(updateAccountSuccess(feAccount));
        toast.success(response.message || "Account updated successfully!");
      } else {
        const errorResponse = response as ApiError;
        const errorMessage = errorResponse.error || errorResponse.response || errorResponse.message || "Failed to update account";
        if (errorResponse.errors) {
            const errorMessages = Object.values(errorResponse.errors).flat();
            toast.error(errorMessages.join('\n'));
        } else {
            toast.error(errorMessage);
        }
        yield put(updateAccountFailure({ message: errorMessage, errors: errorResponse.errors }));
      }
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message || "An unknown error occurred";
      yield put(updateAccountFailure({ message: errorMessage }));
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
        const feAccount: Account = {
          accountId: apiAccount.id.toString(),
          firstName: apiAccount.first_name,
          lastName: apiAccount.last_name,
          emailAddress: apiAccount.email,
          country_code: apiAccount.country_code,
          phoneNumber: apiAccount.phone,
          accountType: apiAccount.account_type as AccountType,
          brands: apiAccount.venues ? apiAccount.venues.map(transformVenueToBrand) : [],
          signUpDate: apiAccount.created_at,
          avatarInitials: `${apiAccount.first_name?.[0] || ""}${apiAccount.last_name?.[0] || ""}`.toUpperCase(),
          avatarBackground: generateColorFromString(apiAccount.first_name || ''),
          subscriptionCount: 0,
          brandsCount: apiAccount.venues?.length || 0,
          campaignsCount: 0,
          status: apiAccount.status,
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
