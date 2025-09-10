import { call, put, takeLatest, all } from 'redux-saga/effects';
import { fetchData, deleteData } from '@/services/commonService';
import {
  fetchBrandsRequest,
  fetchBrandsSuccess,
  fetchBrandsFailure,
  deleteBrandRequest,
  deleteBrandSuccess,
  deleteBrandFailure,
} from './brandSlice';
import { Brand } from '@/types/entities';

function* handleFetchBrands(action: ReturnType<typeof fetchBrandsRequest>) {
  try {
    const { search } = action.payload;
    const endpoint = search ? `/api/list/venues?search=${search}` : '/api/list/venues';
    const response: { success: boolean, result: Brand[], response: string } = yield call(fetchData, endpoint);
    if (response.success) {
      yield put(fetchBrandsSuccess(response.result));
    } else {
      yield put(fetchBrandsFailure(response.response || 'Failed to fetch brands'));
    }
  } catch (error) {
    const err = error as Error;
    yield put(fetchBrandsFailure(err.message || 'An unknown error occurred'));
  }
}

function* handleDeleteBrand(action: ReturnType<typeof deleteBrandRequest>) {
  try {
    const { brandId } = action.payload;
    const response: { success: boolean, response: string } = yield call(deleteData, `/api/list/venues/${brandId}`);
    if (response.success) {
      yield put(deleteBrandSuccess({ brandId }));
    } else {
      yield put(deleteBrandFailure(response.response || 'Failed to delete brand'));
    }
  } catch (error) {
    const err = error as Error;
    yield put(deleteBrandFailure(err.message || 'An unknown error occurred'));
  }
}

function* watchBrand() {
  yield takeLatest(fetchBrandsRequest.type, handleFetchBrands);
  yield takeLatest(deleteBrandRequest.type, handleDeleteBrand);
}

export default function* brandSaga() {
  yield all([
    watchBrand(),
  ]);
}
