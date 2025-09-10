import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  createAccountStart,
  createAccountSuccess,
  createAccountFailure,
  fetchBrandsSuccess,
} from './accountSlice';
import { createAccount } from '@/services/commonService';
import { Account } from '@/types/entities';
import { brandsData } from '@/data/BrandsData';

function* handleCreateAccount(action: ReturnType<typeof createAccountStart>) {
  try {
    const account: Account = yield call(createAccount, action.payload);
    yield put(createAccountSuccess(account));
  } catch (error) {
    const err = error as Error;
    yield put(createAccountFailure(err.message || 'An unknown error occurred'));
  }
}

function* handleFetchBrands() {
  try {
    // In a real app, you'd fetch this from an API
    yield put(fetchBrandsSuccess(brandsData));
  } catch (error) {
    // Handle error if needed
  }
}

function* watchAccount() {
  yield takeLatest(createAccountStart.type, handleCreateAccount);
  yield takeLatest('account/fetchBrands', handleFetchBrands); // Using a string action name for simplicity
}

export default function* accountSaga() {
  yield all([
    watchAccount(),
  ]);
}
