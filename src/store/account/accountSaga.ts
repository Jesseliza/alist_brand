import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  createAccountStart,
  createAccountSuccess,
  createAccountFailure,
} from './accountSlice';
import { createAccount } from '@/services/commonService';
import { Account } from '@/types/entities';

function* handleCreateAccount(action: ReturnType<typeof createAccountStart>) {
  try {
    const account: Account = yield call(createAccount, action.payload);
    yield put(createAccountSuccess(account));
  } catch (error) {
    const err = error as Error;
    yield put(createAccountFailure(err.message || 'An unknown error occurred'));
  }
}

function* watchAccount() {
  yield takeLatest(createAccountStart.type, handleCreateAccount);
}

export default function* accountSaga() {
  yield all([
    watchAccount(),
  ]);
}
