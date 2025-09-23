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
} from "./commonSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchCountriesSaga() {
  try {
    const response: any = yield call(fetchData, "/api/countries");
    if (response.success) {
      yield put(fetchCountriesSuccess(response.data));
    } else {
      yield put(fetchCountriesFailure(response.response));
    }
  } catch (error: any) {
    yield put(fetchCountriesFailure(error.message));
  }
}

function* fetchStatesSaga(action: PayloadAction<string>) {
  try {
    const response: any = yield call(postData, "/api/states", { country_id: action.payload });
    if (response.success) {
      yield put(fetchStatesSuccess(response.data));
    } else {
      yield put(fetchStatesFailure(response.response));
    }
  } catch (error: any) {
    yield put(fetchStatesFailure(error.message));
  }
}

function* fetchIndustriesSaga() {
  try {
    const response: any = yield call(fetchData, "/api/categories");
    if (response.success) {
      yield put(fetchIndustriesSuccess(response.data));
    } else {
      yield put(fetchIndustriesFailure(response.response));
    }
  } catch (error: any) {
    yield put(fetchIndustriesFailure(error.message));
  }
}

function* commonSaga() {
  yield takeLatest(fetchCountries.type, fetchCountriesSaga);
  yield takeLatest(fetchStates.type, fetchStatesSaga);
  yield takeLatest(fetchIndustries.type, fetchIndustriesSaga);
}

export default commonSaga;
