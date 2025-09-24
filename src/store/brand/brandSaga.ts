import { call, put, takeLatest, all } from 'redux-saga/effects';
import toast from 'react-hot-toast';
import { postData } from '@/services/commonService';
import {
  fetchBrandsRequest,
  fetchBrandsSuccess,
  fetchBrandsFailure,
  fetchMoreBrandsRequest,
  fetchMoreBrandsSuccess,
  fetchMoreBrandsFailure,
} from './brandSlice';
import { Brand } from '@/types/entities';

interface ApiBrand {
  id: number;
  venue_title: string;
  venue_url: string;
  venue_whatsapp_no: string;
  venue_email: string;
  venue_banner: string;
  created_at: string;
  // Assuming the following fields are available in the API response
  owner?: string;
  industry?: string;
  offers_count?: number;
  profile_completion?: number;
  files_count?: number;
}

type ApiError = {
  success: false;
  response: string;
};

type FetchBrandsSuccessResponse = {
  message: string;
  venues: {
    data: ApiBrand[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
};

function* handleFetchBrands(action: ReturnType<typeof fetchBrandsRequest>) {
  try {
    const { page, ...bodyPayload } = action.payload;
    let endpoint = '/api/list/brands';
    if (page) {
      endpoint = `${endpoint}?page=${page}`;
    }

    const response: FetchBrandsSuccessResponse | ApiError = yield call(postData, endpoint, bodyPayload);

    if ('venues' in response && response.venues) {
      const { data, current_page, last_page, per_page, total } = response.venues;

      const feBrands: Brand[] = data.map((apiBrand: ApiBrand) => ({
        brandId: apiBrand.id.toString(),
        name: apiBrand.venue_title,
        owner: apiBrand.owner || 'N/A',
        logo: apiBrand.venue_banner,
        websiteUrl: apiBrand.venue_url,
        phoneNumber: apiBrand.venue_whatsapp_no,
        emailAddress: apiBrand.venue_email,
        industry: apiBrand.industry || 'N/A',
        registrationDate: apiBrand.created_at,
        offersCount: apiBrand.offers_count || 0,
        campaignsCount: 0, // This should be updated with actual data if available
        profileCompletion: apiBrand.profile_completion || 0,
        files: apiBrand.files_count || 0,
        // Defaulting other required fields
        accountId: 'N/A',
        companyName: 'N/A',
        country: 'N/A',
        state: 'N/A',
        businessLocation: 'N/A',
        tradeLicenseCopy: '',
        vatCertificate: '',
        instagramHandle: '',
        associateName: '',
        associateEmail: '',
        associatePhone: '',
        associateFirstName: '',
        associateLastName: '',
        associateInitials: '',
        associateBackground: '',
      }));

      yield put(fetchBrandsSuccess({
        brands: feBrands,
        pagination: {
          currentPage: current_page,
          lastPage: last_page,
          perPage: per_page,
          total: total,
        },
      }));
    } else {
      const errorResponse = response as ApiError;
      const errorMessage = errorResponse.response || 'Failed to fetch brands';
      yield put(fetchBrandsFailure(errorMessage));
      toast.error(errorMessage);
    }
  } catch (error) {
    const err = error as Error;
    const errorMessage = err.message || 'An unknown error occurred';
    yield put(fetchBrandsFailure(errorMessage));
    toast.error(errorMessage);
  }
}

function* handleFetchMoreBrands(action: ReturnType<typeof fetchMoreBrandsRequest>) {
  try {
    const { page, ...bodyPayload } = action.payload;
    let endpoint = '/api/list/brands';
    if (page) {
      endpoint = `${endpoint}?page=${page}`;
    }

    const response: FetchBrandsSuccessResponse | ApiError = yield call(postData, endpoint, bodyPayload);

    if ('venues' in response && response.venues) {
      const { data, current_page, last_page, per_page, total } = response.venues;

      const feBrands: Brand[] = data.map((apiBrand: ApiBrand) => ({
        brandId: apiBrand.id.toString(),
        name: apiBrand.venue_title,
        owner: apiBrand.owner || 'N/A',
        logo: apiBrand.venue_banner,
        websiteUrl: apiBrand.venue_url,
        phoneNumber: apiBrand.venue_whatsapp_no,
        emailAddress: apiBrand.venue_email,
        industry: apiBrand.industry || 'N/A',
        registrationDate: apiBrand.created_at,
        offersCount: apiBrand.offers_count || 0,
        campaignsCount: 0, // This should be updated with actual data if available
        profileCompletion: apiBrand.profile_completion || 0,
        files: apiBrand.files_count || 0,
        // Defaulting other required fields
        accountId: 'N/A',
        companyName: 'N/A',
        country: 'N/A',
        state: 'N/A',
        businessLocation: 'N/A',
        tradeLicenseCopy: '',
        vatCertificate: '',
        instagramHandle: '',
        associateName: '',
        associateEmail: '',
        associatePhone: '',
        associateFirstName: '',
        associateLastName: '',
        associateInitials: '',
        associateBackground: '',
      }));

      yield put(fetchMoreBrandsSuccess({
        brands: feBrands,
        pagination: {
          currentPage: current_page,
          lastPage: last_page,
          perPage: per_page,
          total: total,
        },
      }));
    } else {
      const errorResponse = response as ApiError;
      const errorMessage = errorResponse.response || 'Failed to fetch more brands';
      yield put(fetchMoreBrandsFailure(errorMessage));
      toast.error(errorMessage);
    }
  } catch (error) {
    const err = error as Error;
    const errorMessage = err.message || 'An unknown error occurred';
    yield put(fetchMoreBrandsFailure(errorMessage));
    toast.error(errorMessage);
  }
}

function* watchBrand() {
  yield takeLatest(fetchBrandsRequest.type, handleFetchBrands);
  yield takeLatest(fetchMoreBrandsRequest.type, handleFetchMoreBrands);
}

export default function* brandSaga() {
  yield all([
    watchBrand(),
  ]);
}