import { call, put, takeLatest, all } from 'redux-saga/effects';
import { postData, putData, deleteData } from '@/services/commonService';
import {
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

function* handleCreateAccount(action: ReturnType<typeof createAccountRequest>) {
  try {
    const response: { success: boolean, result: Account, response: string } = yield call(postData<CreateAccountPayload>, '/api/accounts', action.payload);
    if (response.success) {
      yield put(createAccountSuccess(response.result));
    } else {
      yield put(createAccountFailure(response.response || 'Failed to create account'));
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
      yield put(deleteAccountSuccess());
    } else {
      yield put(deleteAccountFailure(response.response || 'Failed to delete account'));
    }
  } catch (error) {
    const err = error as Error;
    yield put(deleteAccountFailure(err.message || 'An unknown error occurred'));
  }
}

function* watchAccount() {
  yield takeLatest(createAccountRequest.type, handleCreateAccount);
  yield takeLatest(updateAccountRequest.type, handleUpdateAccount);
  yield takeLatest(deleteAccountRequest.type, handleDeleteAccount);
}

export default function* accountSaga() {
  yield all([
    watchAccount(),
  ]);
}
