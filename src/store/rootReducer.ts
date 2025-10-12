import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import accountReducer from './account/accountSlice';
import brandReducer from './brand/brandSlice';
import searchReducer from './search/searchSlice';
import commonReducer from './common/commonSlice';
import campaignsReducer from './campaigns/CampaignSlice';
import dashboardReducer from './dashboard/dashboardSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  brand: brandReducer,
  search: searchReducer,
  common: commonReducer,
  campaigns: campaignsReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
