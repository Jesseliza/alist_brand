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
    // The API now returns a nested object: { message: string, venues: Brand[] }
    const response: { message: string, venues: Brand[] } = yield call(fetchData, endpoint);
    if (response && response.venues) {
      yield put(fetchBrandsSuccess(response.venues));
    } else {
      // Handle cases where the API returns a success status but the structure is wrong
      // or when fetchData returns a failure object from commonService
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errorMessage = (response as any).response || 'Failed to fetch brands: Invalid API response structure';
      yield put(fetchBrandsFailure(errorMessage));
    }
  } catch (error) {
    const err = error as Error;
    yield put(fetchBrandsFailure(err.message || 'An unknown error occurred'));
  }
}

function* handleDeleteBrand(action: ReturnType<typeof deleteBrandRequest>) {
  try {
    const { id } = action.payload;
    const response: { success: boolean, response: string } = yield call(deleteData, `/api/list/venues/${id}`);
    if (response.success) {
      yield put(deleteBrandSuccess({ id }));
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
