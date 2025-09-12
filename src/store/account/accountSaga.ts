import { call, put, takeLatest, all } from 'redux-saga/effects';
import toast from 'react-hot-toast';
import { postData, deleteData, fetchData } from '@/services/commonService';
import { generateColorFromString } from '@/utils/colorGenerator';
import {
  fetchAccountsRequest,
  fetchAccountsSuccess,
  fetchAccountsFailure,
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
} from './accountSlice';
import { Account, AccountType, Brand } from '@/types/entities';

// Transformation function to map API venue to Brand type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformVenueToBrand = (venue: any): Brand => {
  return {
    brandId: venue.id.toString(),
    accountId: venue.accountId || 'N/A', // Assuming accountId might not be present
    name: venue.venue_title,
    logo: venue.logo || '', // Default value
    phoneNumber: venue.phoneNumber || '', // Default value
    emailAddress: venue.emailAddress || '', // Default value
    industry: venue.industry || 'N/A', // Default value
    companyName: venue.companyName || '', // Default value
    businessLocation: venue.businessLocation || '', // Default value
    tradeLicenseCopy: venue.tradeLicenseCopy || '', // Default value
    vatCertificate: venue.vatCertificate || '', // Default value
    instagramHandle: venue.instagramHandle || '', // Default value
    websiteUrl: venue.venue_url || '',
    associateFirstName: venue.associateFirstName || '', // Default value
    associateLastName: venue.associateLastName || '', // Default value
    associateEmail: venue.associateEmail || '', // Default value
    associatePhone: venue.associatePhone || '', // Default value
    associateInitials: venue.associateInitials || '', // Default value
    associateBackground: venue.associateBackground || '#CCCCCC', // Default value
    offersCount: venue.offersCount || 0, // Default value
    campaignsCount: venue.campaignsCount || 0, // Default value
    profileCompletion: venue.profileCompletion || 0, // Default value
  };
};

function* handleFetchAccounts(action: ReturnType<typeof fetchAccountsRequest>) {
  try {
    const { page, ...bodyPayload } = action.payload;
    let endpoint = '/api/list/accounts';
    if (page) {
      endpoint = `${endpoint}?page=${page}`;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: { message: string, accounts: { data: any[], current_page: number, last_page: number, per_page: number, total: number } } = yield call(postData, endpoint, bodyPayload);

    if (response.accounts) {
      const { data, current_page, last_page, per_page, total } = response.accounts;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const feAccounts: Account[] = data.map((apiAccount: any) => ({
        accountId: apiAccount.id.toString(),
        firstName: apiAccount.first_name,
        lastName: apiAccount.last_name,
        emailAddress: apiAccount.email,
        phoneNumber: apiAccount.phone,
        pin: apiAccount.pin,
        accountType: apiAccount.account_type,
        brands: apiAccount.venues ? apiAccount.venues.map(transformVenueToBrand) : [],
        signUpDate: apiAccount.created_at,
        avatarInitials: `${apiAccount.first_name?.[0] || ""}${apiAccount.last_name?.[0] || ""}`.toUpperCase(),
        avatarBackground: generateColorFromString(apiAccount.first_name || ''),
        subscriptionCount: 0,
        brandsCount: apiAccount.venues?.length || 0,
        campaignsCount: 0,
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
      if (bodyPayload.search || bodyPayload.status || bodyPayload.account_type) {
        toast.success('Accounts filtered successfully!');
      }
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errorMessage = (response as any).response || 'Failed to fetch accounts';
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

function* handleCreateAccount(action: ReturnType<typeof createAccountRequest>) {
  try {
    const {
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      pin,
      accountType,
      brands,
    } = action.payload;

    const apiPayload = {
      first_name: firstName,
      last_name: lastName,
      email: emailAddress,
      phone: phoneNumber,
      pin: pin,
      account_type: accountType,
      venues: brands?.map(b => b.brandId) || [],
      registration_type: "accounts", // Static value
      status: "active", // Static value
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: { message: string; account: any } = yield call(postData, '/api/add/account', apiPayload);

    // Check for a successful response based on the message and presence of the account object
    if (response && response.account) {
      const apiAccount = response.account;

      // Transform the snake_case response to the camelCase Account type used in the frontend
      const feAccount: Account = {
        accountId: apiAccount.id.toString(),
        firstName: apiAccount.first_name,
        lastName: apiAccount.last_name,
        emailAddress: apiAccount.email,
        phoneNumber: apiAccount.phone,
        pin: apiAccount.pin,
        accountType: apiAccount.account_type,
        brands: apiAccount.venues ? apiAccount.venues.map(transformVenueToBrand) : [],
        signUpDate: apiAccount.created_at,
        // These fields are not in the response, so we provide defaults
        avatarInitials: `${apiAccount.first_name?.[0] || ""}${apiAccount.last_name?.[0] || ""}`.toUpperCase(),
        avatarBackground: "#CCCCCC",
        subscriptionCount: 0,
        brandsCount: apiAccount.venues.length,
        campaignsCount: 0,
      };

      yield put(createAccountSuccess(feAccount));
      toast.success('Account created successfully!');
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errorMessage = (response as any).response || 'Failed to create account';
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
    const { accountId, brands, ...payload } = action.payload;
    const apiPayload = {
      ...payload,
      venues: brands?.map((b) => b.brandId) || [],
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: { message: string; account: any } = yield call(
      postData,
      `/api/account/${accountId}`,
      apiPayload
    );
    if (response.account) {
      const apiAccount = response.account;
      const feAccount: Account = {
        accountId: apiAccount.id.toString(),
        firstName: apiAccount.first_name,
        lastName: apiAccount.last_name,
        emailAddress: apiAccount.email,
        phoneNumber: apiAccount.phone,
        pin: apiAccount.pin,
        accountType: apiAccount.account_type,
        brands: apiAccount.venues ? apiAccount.venues.map(transformVenueToBrand) : [],
        signUpDate: apiAccount.created_at,
        avatarInitials: `${apiAccount.first_name?.[0] || ""}${
          apiAccount.last_name?.[0] || ""
        }`.toUpperCase(),
        avatarBackground: generateColorFromString(apiAccount.first_name || ""),
        subscriptionCount: 0,
        brandsCount: apiAccount.venues?.length || 0,
        campaignsCount: 0,
      };
      yield put(updateAccountSuccess(feAccount));
      toast.success(response.message);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errorMessage = (response as any).message || "Failed to update account";
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: { message: string, account: any } = yield call(fetchData, `/api/account/${accountId}`);

    if (response.account) {
      const apiAccount = response.account;
      const feAccount: Account = {
        accountId: apiAccount.id.toString(),
        firstName: apiAccount.first_name,
        lastName: apiAccount.last_name,
        emailAddress: apiAccount.email,
        phoneNumber: apiAccount.phone,
        pin: apiAccount.pin,
        accountType: apiAccount.account_type,
        brands: apiAccount.venues ? apiAccount.venues.map(transformVenueToBrand) : [],
        signUpDate: apiAccount.created_at,
        avatarInitials: `${apiAccount.first_name?.[0] || ""}${apiAccount.last_name?.[0] || ""}`.toUpperCase(),
        avatarBackground: generateColorFromString(apiAccount.first_name || ''),
        subscriptionCount: 0,
        brandsCount: apiAccount.venues?.length || 0,
        campaignsCount: 0,
      };
      yield put(fetchAccountByIdSuccess(feAccount));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errorMessage = (response as any).response || 'Failed to fetch account';
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

function* watchAccount() {
  yield takeLatest(fetchAccountsRequest.type, handleFetchAccounts);
  yield takeLatest(createAccountRequest.type, handleCreateAccount);
  yield takeLatest(updateAccountRequest.type, handleUpdateAccount);
  yield takeLatest(deleteAccountRequest.type, handleDeleteAccount);
  yield takeLatest(fetchAccountByIdRequest.type, handleFetchAccountById);
}

export default function* accountSaga() {
  yield all([
    watchAccount(),
  ]);
}
