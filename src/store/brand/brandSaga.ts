import { call, put, takeLatest, all } from 'redux-saga/effects';
import { fetchData, deleteData, postData, updateData } from '@/services/commonService';
import {
  fetchBrandsRequest,
  fetchBrandsSuccess,
  fetchBrandsFailure,
  fetchMoreBrandsRequest,
  fetchMoreBrandsSuccess,
  fetchMoreBrandsFailure,
  fetchBrandByIdRequest,
  fetchBrandByIdSuccess,
  fetchBrandByIdFailure,
  addBrandRequest,
  addBrandSuccess,
  addBrandFailure,
  updateBrandRequest,
  updateBrandSuccess,
  updateBrandFailure,
  deleteBrandRequest,
  deleteBrandSuccess,
  deleteBrandFailure,
  verifyPinAndDownloadRequest,
  verifyPinAndDownloadSuccess,
  verifyPinAndDownloadFailure,
} from './brandSlice';
import { Brand } from '@/types/entities';
import { FetchBrandsResponse } from '@/types/requests';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformApiVenueToBrand = (venue: any): Brand => {
  return {
    brandId: venue.id.toString(),
    name: venue.venue_title,
    accountId: venue.accountId || 'N/A',
    logo: venue.logo || '',
    phoneNumber: venue.phoneNumber || '',
    emailAddress: venue.emailAddress || '',
    industry: venue.industry || 'N/A',
    companyName: venue.companyName || '',
    businessLocation: venue.businessLocation || '',
    tradeLicenseCopy: venue.tradeLicenseCopy || '',
    vatCertificate: venue.vatCertificate || '',
    instagramHandle: venue.instagramHandle || '',
    websiteUrl: venue.venue_url || '',
    associateFirstName: venue.associateFirstName || '',
    associateLastName: venue.associateLastName || '',
    associateEmail: venue.associateEmail || '',
    associatePhone: venue.associatePhone || '',
    associateInitials: venue.associateInitials || '',
    associateBackground: venue.associateBackground || '#CCCCCC',
    offersCount: venue.offersCount || 0,
    campaignsCount: venue.campaignsCount || 0,
    profileCompletion: venue.profileCompletion || 0,
  };
};

function* handleFetchBrands(action: ReturnType<typeof fetchBrandsRequest>) {
  try {
    const { page, per_page, search } = action.payload;
    const endpoint = `/api/list/venues?page=${page}&per_page=${per_page}${search ? `&search=${search}` : ''}`;
    const response: { message: string, venues: FetchBrandsResponse } = yield call(fetchData, endpoint);
    if (response && response.venues) {
      const transformedResponse: FetchBrandsResponse = {
        ...response.venues,
        data: response.venues.data.map(transformApiVenueToBrand),
      };
      yield put(fetchBrandsSuccess(transformedResponse));
    } else {
      const errorMessage = (response as any).response || 'Failed to fetch brands: Invalid API response structure';
      yield put(fetchBrandsFailure(errorMessage));
    }
  } catch (error) {
    const err = error as Error;
    yield put(fetchBrandsFailure(err.message || 'An unknown error occurred'));
  }
}

function* handleFetchMoreBrands(action: ReturnType<typeof fetchMoreBrandsRequest>) {
  try {
    const { page, per_page, search } = action.payload;
    const endpoint = `/api/list/venues?page=${page}&per_page=${per_page}${search ? `&search=${search}` : ''}`;
    const response: { message: string, venues: FetchBrandsResponse } = yield call(fetchData, endpoint);
    if (response && response.venues) {
      const transformedResponse: FetchBrandsResponse = {
        ...response.venues,
        data: response.venues.data.map(transformApiVenueToBrand),
      };
      yield put(fetchMoreBrandsSuccess(transformedResponse));
    } else {
      const errorMessage = (response as any).response || 'Failed to fetch more brands: Invalid API response structure';
      yield put(fetchMoreBrandsFailure(errorMessage));
    }
  } catch (error) {
    const err = error as Error;
    yield put(fetchMoreBrandsFailure(err.message || 'An unknown error occurred'));
  }
}

function* handleFetchBrandById(action: ReturnType<typeof fetchBrandByIdRequest>) {
  try {
    const { brandId } = action.payload;
    const response: { message: string, venue: any } = yield call(fetchData, `/api/list/venues/${brandId}`);
    if (response && response.venue) {
      const transformedBrand: Brand = transformApiVenueToBrand(response.venue);
      yield put(fetchBrandByIdSuccess(transformedBrand));
    } else {
      const errorMessage = (response as any).response || 'Failed to fetch brand: Invalid API response structure';
      yield put(fetchBrandByIdFailure(errorMessage));
    }
  } catch (error) {
    const err = error as Error;
    yield put(fetchBrandByIdFailure(err.message || 'An unknown error occurred'));
  }
}

function* handleAddBrand(action: ReturnType<typeof addBrandRequest>) {
  try {
    const { data } = action.payload;
    const response: { success: boolean, response: string } = yield call(postData, '/api/list/venues', data);
    if (response.success) {
      yield put(addBrandSuccess());
    } else {
      yield put(addBrandFailure(response.response || 'Failed to add brand'));
    }
  } catch (error) {
    const err = error as Error;
    yield put(addBrandFailure(err.message || 'An unknown error occurred'));
  }
}

function* handleUpdateBrand(action: ReturnType<typeof updateBrandRequest>) {
  try {
    const { brandId, data } = action.payload;
    const response: { success: boolean, response: string } = yield call(updateData, `/api/list/venues/${brandId}`, data);
    if (response.success) {
      yield put(updateBrandSuccess());
    } else {
      yield put(updateBrandFailure(response.response || 'Failed to update brand'));
    }
  } catch (error) {
    const err = error as Error;
    yield put(updateBrandFailure(err.message || 'An unknown error occurred'));
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

function* handleVerifyPinAndDownload(action: ReturnType<typeof verifyPinAndDownloadRequest>) {
  try {
    const { brandId, fileType, pin } = action.payload;
    const response: { success: boolean, url?: string, response?: string } = yield call(postData, '/api/brands/verify-pin', { brandId, pin });
    if (response.success && response.url) {
      const downloadUrl = `${response.url}?fileType=${fileType}`;
      window.open(downloadUrl, '_blank');
      yield put(verifyPinAndDownloadSuccess());
    } else {
      yield put(verifyPinAndDownloadFailure(response.response || 'Invalid PIN'));
    }
  } catch (error) {
    const err = error as Error;
    yield put(verifyPinAndDownloadFailure(err.message || 'An unknown error occurred'));
  }
}

function* watchBrand() {
  yield takeLatest(fetchBrandsRequest.type, handleFetchBrands);
  yield takeLatest(fetchMoreBrandsRequest.type, handleFetchMoreBrands);
  yield takeLatest(fetchBrandByIdRequest.type, handleFetchBrandById);
  yield takeLatest(addBrandRequest.type, handleAddBrand);
  yield takeLatest(updateBrandRequest.type, handleUpdateBrand);
  yield takeLatest(deleteBrandRequest.type, handleDeleteBrand);
  yield takeLatest(verifyPinAndDownloadRequest.type, handleVerifyPinAndDownload);
}

export default function* brandSaga() {
  yield all([
    watchBrand(),
  ]);
}
