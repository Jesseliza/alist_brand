import { all } from 'redux-saga/effects';
import authSaga from './auth/authSaga';
import accountSaga from './account/accountSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    accountSaga(),
  ]);
}
