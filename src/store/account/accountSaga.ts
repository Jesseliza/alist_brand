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
import { Account, Brand } from '@/types/entities';

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

    if (response && response.account) {
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
    const {
      accountId,
      brands,
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      pin,
      accountType,
    } = action.payload;

    const apiPayload = {
      first_name: firstName,
      last_name: lastName,
      email: emailAddress,
      phone: phoneNumber,
      pin,
      account_type: accountType,
      venues: brands?.map((b) => Number(b.brandId)),
      registration_type: "accounts",
      status: "active",
    };

    const filteredApiPayload = Object.fromEntries(
      Object.entries(apiPayload).filter(([, value]) => value !== undefined)
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: { message: string; account: any } = yield call(
      postData,
      `/api/account/${accountId}`,
      filteredApiPayload
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
      };
      yield put(updateAccountSuccess(feAccount));
      toast.success(response.message);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errorMessage =
        (response as any).message || "Failed to update account";
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
