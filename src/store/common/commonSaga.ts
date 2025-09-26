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
  validatePinRequest,
  validatePinSuccess,
  validatePinFailure,
} from "./commonSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { Option } from "@/types/common";
import {
  CountryApiResponse,
  StateApiResponse,
  IndustryApiResponse,
  AccountApiResponse,
  Country,
  State,
  Industry,
  Account,
} from "@/types/api";

function* fetchCountriesSaga() {
  try {
    const response: CountryApiResponse = yield call(fetchData, "/api/countries");
    if (response && response.accounts) {
      const formattedData: Option[] = response.accounts.map((country: Country) => ({
        value: country.id.toString(),
        label: country.country_name,
      }));
      yield put(fetchCountriesSuccess(formattedData));
    } else {
      yield put(fetchCountriesFailure(response.message || "Failed to fetch countries"));
    }
  } catch (error) {
    yield put(fetchCountriesFailure((error as Error).message));
  }
}

function* fetchStatesSaga(action: PayloadAction<string>) {
  try {
    const response: StateApiResponse = yield call(postData, "/api/states", { country_id: action.payload });
    if (response && response.accounts) {
      const formattedData: Option[] = response.accounts.map((state: State) => ({
        value: state.id.toString(),
        label: state.state_name,
      }));
      yield put(fetchStatesSuccess(formattedData));
    } else {
      yield put(fetchStatesFailure(response.message || "Failed to fetch states"));
    }
  } catch (error) {
    yield put(fetchStatesFailure((error as Error).message));
  }
}

function* fetchIndustriesSaga() {
  try {
    const response: IndustryApiResponse = yield call(fetchData, "/api/categories");
    if (response && response.accounts) {
      const formattedData: Option[] = response.accounts.map((industry: Industry) => ({
        value: industry.id.toString(),
        label: industry.category,
      }));
      yield put(fetchIndustriesSuccess(formattedData));
    } else {
      yield put(fetchIndustriesFailure(response.message || "Failed to fetch industries"));
    }
  } catch (error) {
    yield put(fetchIndustriesFailure((error as Error).message));
  }
}

function* fetchAllAccountsSaga() {
  try {
    const payload = {
      search: "",
      status: "active",
      account_type: "individual",
    };
    const response: AccountApiResponse = yield call(postData, "/api/all/accounts", payload);
    if (response && response.accounts) {
      const formattedData: Option[] = response.accounts.map((account: Account) => ({
        value: account.id.toString(),
        label: `${account.first_name} ${account.last_name}`,
      }));
      yield put(fetchAllAccountsSuccess(formattedData));
    } else {
      yield put(fetchAllAccountsFailure(response.message || "Failed to fetch accounts"));
    }
  } catch (error) {
    yield put(fetchAllAccountsFailure((error as Error).message));
  }
}

function* handleValidatePin(action: PayloadAction<{ pin: string }>) {
  try {
    const response = yield call(postData, "/api/validate/pin", action.payload);
    if (response.success) {
      yield put(validatePinSuccess());
    } else {
      yield put(validatePinFailure(response.message || "Invalid PIN"));
    }
  } catch (error) {
    yield put(validatePinFailure((error as Error).message));
  }
}

function* commonSaga() {
  yield takeLatest(fetchCountries.type, fetchCountriesSaga);
  yield takeLatest(fetchStates.type, fetchStatesSaga);
  yield takeLatest(fetchIndustries.type, fetchIndustriesSaga);
  yield takeLatest(fetchAllAccounts.type, fetchAllAccountsSaga);
  yield takeLatest(validatePinRequest.type, handleValidatePin);
}

export default commonSaga;