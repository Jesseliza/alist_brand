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

// Transformation function to map API venue to Brand type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformVenueToBrand = (venue: any): Brand => {
  return {
    brandId: venue.id.toString(),
    accountId: venue.accountId || 'N/A', // Assuming accountId might not be present
    name: venue.venue_title,
    logo: venue.logo || '', // Default value
    phoneNumber: venue.phoneNumber || '', // Default value
    emailAddress: venue.emailAddress || '', // Default value
    industry: venue.industry || 'N/A', // Default value
    companyName: venue.companyName || '', // Default value
    businessLocation: venue.businessLocation || '', // Default value
    tradeLicenseCopy: venue.tradeLicenseCopy || '', // Default value
    vatCertificate: venue.vatCertificate || '', // Default value
    instagramHandle: venue.instagramHandle || '', // Default value
    websiteUrl: venue.venue_url || '',
    associateFirstName: venue.associateFirstName || '', // Default value
    associateLastName: venue.associateLastName || '', // Default value
    associateEmail: venue.associateEmail || '', // Default value
    associatePhone: venue.associatePhone || '', // Default value
    associateInitials: venue.associateInitials || '', // Default value
    associateBackground: venue.associateBackground || '#CCCCCC', // Default value
    offersCount: venue.offersCount || 0, // Default value
    campaignsCount: venue.campaignsCount || 0, // Default value
    profileCompletion: venue.profileCompletion || 0, // Default value
  };
};


function* handleFetchBrands(action: ReturnType<typeof fetchBrandsRequest>) {
  try {
    const { search } = action.payload;
    const endpoint = search ? `/api/list/venues?search=${search}` : '/api/list/venues';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: { message: string, venues: any[] } = yield call(fetchData, endpoint);
    if (response && response.venues) {
      const transformedBrands: Brand[] = response.venues.map(transformVenueToBrand);
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
