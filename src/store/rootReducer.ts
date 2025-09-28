import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import accountReducer from './account/accountSlice';
import brandReducer from './brand/brandSlice';
import searchReducer from './search/searchSlice';
import commonReducer from './common/commonSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  brand: brandReducer,
  search: searchReducer,
  common: commonReducer,
});

export default rootReducer;
