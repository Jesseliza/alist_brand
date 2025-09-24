import { call, put, takeLatest } from "redux-saga/effects";
import { fetchData, postData } from "@/services/commonService";
import {
  fetchCountries,
  fetchCountriesSuccess,
  fetchCountriesFailure,
  fetchStates,
  fetchStatesSuccess,
  fetchStatesFailure,
  fetchIndustries,
  fetchIndustriesSuccess,
  fetchIndustriesFailure,
  fetchAllAccounts,
  fetchAllAccountsSuccess,
  fetchAllAccountsFailure,
} from "./commonSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { Option } from "@/types/common";

function* fetchCountriesSaga() {
  try {
    const response: any = yield call(fetchData, "/api/countries");
    if (response && response.accounts) {
      const formattedData: Option[] = response.accounts.map((country: any) => ({
        value: country.id.toString(),
        label: country.country_name,
      }));
      yield put(fetchCountriesSuccess(formattedData));
    } else {
      yield put(fetchCountriesFailure(response.message || "Failed to fetch countries"));
    }
  } catch (error: any) {
    yield put(fetchCountriesFailure(error.message));
  }
}

function* fetchStatesSaga(action: PayloadAction<string>) {
  try {
    const response: any = yield call(postData, "/api/states", { country_id: action.payload });
    if (response && response.accounts) {
      // Assuming states response has a similar structure
      const formattedData: Option[] = response.accounts.map((state: any) => ({
        value: state.id.toString(),
        label: state.state_name, // Assuming the label key is state_name
      }));
      yield put(fetchStatesSuccess(formattedData));
    } else {
      yield put(fetchStatesFailure(response.message || "Failed to fetch states"));
    }
  } catch (error: any) {
    yield put(fetchStatesFailure(error.message));
  }
}

function* fetchIndustriesSaga() {
  try {
    const response: any = yield call(fetchData, "/api/categories");
    if (response && response.accounts) {
      const formattedData: Option[] = response.accounts.map((industry: any) => ({
        value: industry.id.toString(),
        label: industry.category,
      }));
      yield put(fetchIndustriesSuccess(formattedData));
    } else {
      yield put(fetchIndustriesFailure(response.message || "Failed to fetch industries"));
    }
  } catch (error: any) {
    yield put(fetchIndustriesFailure(error.message));
  }
}

function* fetchAllAccountsSaga() {
  try {
    const response: any = yield call(fetchData, "/api/all/accounts");
    if (response && response.accounts) {
      const formattedData: Option[] = response.accounts.map((account: any) => ({
        value: account.id.toString(),
        label: `${account.first_name} ${account.last_name}`,
      }));
      yield put(fetchAllAccountsSuccess(formattedData));
    } else {
      yield put(fetchAllAccountsFailure(response.message || "Failed to fetch accounts"));
    }
  } catch (error: any) {
    yield put(fetchAllAccountsFailure(error.message));
  }
}

function* commonSaga() {
  yield takeLatest(fetchCountries.type, fetchCountriesSaga);
  yield takeLatest(fetchStates.type, fetchStatesSaga);
  yield takeLatest(fetchIndustries.type, fetchIndustriesSaga);
  yield takeLatest(fetchAllAccounts.type, fetchAllAccountsSaga);
}

export default commonSaga;
