import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import accountReducer from './account/accountSlice';
import brandReducer from './brand/brandSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  brand: brandReducer,
});

export default rootReducer;
