import { call, put, takeLatest, all } from 'redux-saga/effects';
import toast from 'react-hot-toast';
import { postData, putData, deleteData, fetchData } from '@/services/commonService';
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
} from './accountSlice';
import { Account } from '@/types/entities';
import { CreateAccountPayload, UpdateAccountPayload } from '@/types/requests';

function* handleFetchAccounts(action: ReturnType<typeof fetchAccountsRequest>) {
  try {
    const { url, page, ...bodyPayload } = action.payload;
    let endpoint = '/api/list/accounts';

    if (url) {
      endpoint = url.split('api')[1];
    } else if (page) {
      endpoint = `${endpoint}?page=${page}`;
    }

    const response: { message: string, accounts: { data: Account[], current_page: number, last_page: number, per_page: number, total: number, links: any[], next_page_url: string | null, prev_page_url: string | null } } = yield call(postData, endpoint, bodyPayload);

    if (response.accounts) {
      const { data, current_page, last_page, per_page, total, links, next_page_url, prev_page_url } = response.accounts;
      yield put(fetchAccountsSuccess({
        accounts: data,
        pagination: {
          currentPage: current_page,
          lastPage: last_page,
          perPage: per_page,
          total: total,
          links: links,
          next_page_url: next_page_url,
          prev_page_url: prev_page_url,
        },
      }));
      if (bodyPayload.search || bodyPayload.status || bodyPayload.account_type) {
        toast.success('Accounts filtered successfully!');
      }
    } else {
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
      brandIds,
    } = action.payload;

    const apiPayload = {
      first_name: firstName,
      last_name: lastName,
      email: emailAddress,
      phone: phoneNumber,
      pin: pin,
      account_type: accountType,
      venues: brandIds,
      registration_type: "accounts", // Static value
      status: "active", // Static value
    };

    // Define the expected raw response type from the API
    type ApiAccountResponse = {
      message: string;
      account: {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        pin: string;
        account_type: AccountType;
        registration_type: string;
        status: string;
        created_at: string;
        updated_at: string;
        venues: { id: number; venue_title: string }[];
      }
    };

    const response: ApiAccountResponse = yield call(postData, '/api/add/account', apiPayload);

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
        brandIds: apiAccount.venues.map(v => v.id),
        signUpDate: new Date(apiAccount.created_at),
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
    const { accountId, ...payload } = action.payload;
    const response: { success: boolean, result: Account, response: string } = yield call(putData<Omit<UpdateAccountPayload, 'accountId'>>, `/api/accounts/${accountId}`, payload);
    if (response.success) {
      yield put(updateAccountSuccess(response.result));
      toast.success('Account updated successfully!');
    } else {
      const errorMessage = response.response || 'Failed to update account';
      yield put(updateAccountFailure(errorMessage));
      toast.error(errorMessage);
    }
  } catch (error) {
    const err = error as Error;
    const errorMessage = err.message || 'An unknown error occurred';
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

function* watchAccount() {
  yield takeLatest(fetchAccountsRequest.type, handleFetchAccounts);
  yield takeLatest(createAccountRequest.type, handleCreateAccount);
  yield takeLatest(updateAccountRequest.type, handleUpdateAccount);
  yield takeLatest(deleteAccountRequest.type, handleDeleteAccount);
}

export default function* accountSaga() {
  yield all([
    watchAccount(),
  ]);
}
