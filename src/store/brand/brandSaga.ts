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
    const { search } = action.payload;
    const endpoint = search ? `/api/list/venues?search=${search}` : '/api/list/venues';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: { message: string, venues: any[] } = yield call(fetchData, endpoint);
    if (response && response.venues) {
      const transformedBrands: Brand[] = response.venues.map(transformApiVenueToBrand);
      yield put(fetchBrandsSuccess(transformedBrands));
    } else {
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
