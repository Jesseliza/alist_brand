import { all } from 'redux-saga/effects';
import authSaga from './auth/authSaga';
import accountSaga from './account/accountSaga';
import brandSaga from './brand/brandSaga';
import commonSaga from './common/commonSaga';
import campaignsSaga from './campaigns/CampaignSaga';
import dashboardSaga from './dashboard/dashboardSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    accountSaga(),
    brandSaga(),
    commonSaga(),
    campaignsSaga(),
    dashboardSaga(),
  ]);
}
