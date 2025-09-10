import { all } from 'redux-saga/effects';
import authSaga from './auth/authSaga';
import accountSaga from './account/accountSaga';
import brandSaga from './brand/brandSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    accountSaga(),
    brandSaga(),
  ]);
}
