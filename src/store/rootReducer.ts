import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import accountReducer from './account/accountSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
});

export default rootReducer;
