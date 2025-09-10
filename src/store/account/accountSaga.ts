import { call, put, takeLatest, all } from 'redux-saga/effects';
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
    const { search } = action.payload;
    const endpoint = search ? `/api/accounts?search=${search}` : '/api/accounts';
    const response: { success: boolean, result: Account[], response: string } = yield call(fetchData, endpoint);
    if (response.success) {
      yield put(fetchAccountsSuccess(response.result));
    } else {
      yield put(fetchAccountsFailure(response.response || 'Failed to fetch accounts'));
    }
  } catch (error) {
    const err = error as Error;
    yield put(fetchAccountsFailure(err.message || 'An unknown error occurred'));
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
    } else {
      const errorMessage = (response as any).response || 'Failed to create account';
      yield put(createAccountFailure(errorMessage));
    }
  } catch (error) {
    const err = error as Error;
    yield put(createAccountFailure(err.message || 'An unknown error occurred'));
  }
}

function* handleUpdateAccount(action: ReturnType<typeof updateAccountRequest>) {
  try {
    const { accountId, ...payload } = action.payload;
    const response: { success: boolean, result: Account, response: string } = yield call(putData<Omit<UpdateAccountPayload, 'accountId'>>, `/api/accounts/${accountId}`, payload);
    if (response.success) {
      yield put(updateAccountSuccess(response.result));
    } else {
      yield put(updateAccountFailure(response.response || 'Failed to update account'));
    }
  } catch (error) {
    const err = error as Error;
    yield put(updateAccountFailure(err.message || 'An unknown error occurred'));
  }
}

function* handleDeleteAccount(action: ReturnType<typeof deleteAccountRequest>) {
  try {
    const { accountId } = action.payload;
    const response: { success: boolean, response: string } = yield call(deleteData, `/api/accounts/${accountId}`);
    if (response.success) {
      yield put(deleteAccountSuccess({ accountId }));
    } else {
      yield put(deleteAccountFailure(response.response || 'Failed to delete account'));
    }
  } catch (error) {
    const err = error as Error;
    yield put(deleteAccountFailure(err.message || 'An unknown error occurred'));
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
