import { call, put, takeLatest, all, delay } from 'redux-saga/effects';
import {
  createAccountStart,
  createAccountSuccess,
  createAccountFailure,
  searchBrandsRequest,
  searchBrandsSuccess,
  searchBrandsFailure,
} from './accountSlice';
import { createAccount, searchVenues } from '@/services/commonService';
import { Account, Brand } from '@/types/entities';

function* handleCreateAccount(action: ReturnType<typeof createAccountStart>) {
  try {
    const account: Account = yield call(createAccount, action.payload);
    yield put(createAccountSuccess(account));
  } catch (error) {
    const err = error as Error;
    yield put(createAccountFailure(err.message || 'An unknown error occurred'));
  }
}

// Define a type for the raw venue object from the API
type ApiVenue = {
  id: number;
  venue_title: string;
  // ... other properties from the API if any
};

function* handleSearchBrands(action: ReturnType<typeof searchBrandsRequest>) {
  yield delay(500); // Debounce API call

  try {
    // Type the response according to the API documentation
    const response: { venues: ApiVenue[] } = yield call(searchVenues, action.payload);

    // Check if the response and the venues property exist
    if (response && Array.isArray(response.venues)) {
      // Map the API response to the Brand type used by the frontend
      const mappedBrands: Brand[] = response.venues.map(venue => ({
        brandId: venue.id.toString(),
        name: venue.venue_title,
        // Provide sensible defaults for other required Brand properties
        accountId: '',
        logo: '',
        phoneNumber: '',
        emailAddress: '',
        industry: '',
        companyName: '',
        businessLocation: '',
        tradeLicenseCopy: '',
        vatCertificate: '',
        instagramHandle: '',
        websiteUrl: '',
        associateFirstName: '',
        associateLastName: '',
        associateEmail: '',
        associatePhone: '',
        associateInitials: '',
        associateBackground: '',
        offersCount: 0,
        campaignsCount: 0,
        profileCompletion: 0,
      }));
      yield put(searchBrandsSuccess(mappedBrands));
    } else {
      // If the structure is not what we expect, dispatch success with an empty array
      yield put(searchBrandsSuccess([]));
      console.error("API response for brand search is not in the expected format:", response);
    }
  } catch (error) {
    const err = error as Error;
    yield put(searchBrandsFailure(err.message || 'An unknown error occurred'));
  }
}

function* watchAccount() {
  yield takeLatest(createAccountStart.type, handleCreateAccount);
  yield takeLatest(searchBrandsRequest.type, handleSearchBrands);
}

export default function* accountSaga() {
  yield all([
    watchAccount(),
  ]);
}
