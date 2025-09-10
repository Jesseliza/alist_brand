import { call, put, takeLatest, all, delay } from 'redux-saga/effects';
import {
  createAccountStart,
  createAccountSuccess,
  createAccountFailure,
  searchBrandsRequest,
  searchBrandsSuccess,
  searchBrandsFailure,
} from './accountSlice';
import { createAccount, searchVenues } from '@/services/commonService';
import { Account, Brand } from '@/types/entities';

function* handleCreateAccount(action: ReturnType<typeof createAccountStart>) {
  try {
    const account: Account = yield call(createAccount, action.payload);
    yield put(createAccountSuccess(account));
  } catch (error) {
    const err = error as Error;
    yield put(createAccountFailure(err.message || 'An unknown error occurred'));
  }
}

function* handleSearchBrands(action: ReturnType<typeof searchBrandsRequest>) {
  yield delay(500); // Debounce API call

  try {
    const brands: Brand[] = yield call(searchVenues, action.payload);
    yield put(searchBrandsSuccess(brands || [])); // Ensure payload is not undefined
  } catch (error) {
    const err = error as Error;
    yield put(searchBrandsFailure(err.message || 'An unknown error occurred'));
  }
}

function* watchAccount() {
  yield takeLatest(createAccountStart.type, handleCreateAccount);
  yield takeLatest(searchBrandsRequest.type, handleSearchBrands);
}

export default function* accountSaga() {
  yield all([
    watchAccount(),
  ]);
}
