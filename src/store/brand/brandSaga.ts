import { call, put, takeLatest, all } from 'redux-saga/effects';
import toast from 'react-hot-toast';
import { postData, fetchData } from '@/services/commonService';
import {
  fetchBrandsRequest,
  fetchBrandsSuccess,
  fetchBrandsFailure,
  fetchMoreBrandsRequest,
  fetchMoreBrandsSuccess,
  fetchMoreBrandsFailure,
  fetchBrandRequest,
  fetchBrandSuccess,
  fetchBrandFailure,
  createBrandRequest,
  createBrandSuccess,
  createBrandFailure,
} from './brandSlice';
import { Brand } from '@/types/entities';

interface ApiBrand {
  id: number;
  venue_title: string;
  venue_url: string | null;
  venue_whatsapp_no: string | null;
  venue_email: string | null;
  venue_logo: string | null;
  venue_banner: string | null;
  created_at: string;
  category: {
    id: number;
    category: string;
  } | null;
  owner?: string;
  offers_count?: number;
  profile_completion?: number;
  files_count?: number;
  accounts?: { first_name: string; last_name: string } | null;
  Venue_contact_name?: string | null;
  account_id?: number | null;
  country_id?: number | null;
  state_id?: number | null;
  category_id?: number | null;
  company_name?: string | null;
  delivery_areas?: string | null;
  trade_license_file?: string | null;
  vat_certificate_file?: string | null;
  venue_instagram_url?: string | null;
  venue_contact_number?: string | null;
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
        owner: apiBrand.accounts ? `${apiBrand.accounts.first_name} ${apiBrand.accounts.last_name}` : 'N/A',
        logo: apiBrand.venue_logo,
        websiteUrl: apiBrand.venue_url,
        phoneNumber: apiBrand.venue_whatsapp_no,
        emailAddress: apiBrand.venue_email,
        industry: apiBrand.category?.category || 'N/A',
        registrationDate: apiBrand.created_at,
        offersCount: apiBrand.offers_count || 0,
        campaignsCount: 0,
        profileCompletion: apiBrand.profile_completion || 0,
        files: apiBrand.files_count || 0,
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
        Venue_contact_name: apiBrand.Venue_contact_name || null,
        venue_email: apiBrand.venue_email || null,
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
        owner: apiBrand.accounts ? `${apiBrand.accounts.first_name} ${apiBrand.accounts.last_name}` : 'N/A',
        logo: apiBrand.venue_logo,
        websiteUrl: apiBrand.venue_url,
        phoneNumber: apiBrand.venue_whatsapp_no,
        emailAddress: apiBrand.venue_email,
        industry: apiBrand.category?.category || 'N/A',
        registrationDate: apiBrand.created_at,
        offersCount: apiBrand.offers_count || 0,
        campaignsCount: 0,
        profileCompletion: apiBrand.profile_completion || 0,
        files: apiBrand.files_count || 0,
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
        Venue_contact_name: apiBrand.Venue_contact_name || null,
        venue_email: apiBrand.venue_email || null,
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

function* handleCreateBrand(action: ReturnType<typeof createBrandRequest>) {
  try {
    const brand = action.payload;
    const formData = new FormData();
    formData.append('venue_title', brand.name || '');
    formData.append('company_name', brand.companyName || '');
    formData.append('account_id', brand.accountId || '');
    formData.append('country_id', brand.country || '');
    formData.append('state_id', brand.state || '');
    formData.append('category_id', brand.industry || '');
    formData.append('venue_instagram_url', brand.instagramHandle || '');
    formData.append('venue_url', brand.websiteUrl || '');
    formData.append('Venue_contact_name', brand.associateName || '');
    formData.append('venue_email', brand.associateEmail || '');
    formData.append('venue_contact_number', brand.associatePhone || '');

    if (brand.tradeLicenseCopy) {
      formData.append('trade_license_file', brand.tradeLicenseCopy);
    }
    if (brand.vatCertificate) {
      formData.append('vat_certificate_file', brand.vatCertificate);
    }

    const response: { message: string } | ApiError = yield call(postData, '/api/add/venue', formData);

    if ('message' in response) {
      yield put(createBrandSuccess());
      toast.success(response.message);
    } else {
      const errorMessage = response.response || 'Failed to create brand';
      yield put(createBrandFailure(errorMessage));
      toast.error(errorMessage);
    }
  } catch (error) {
    const err = error as Error;
    const errorMessage = err.message || 'An unknown error occurred';
    yield put(createBrandFailure(errorMessage));
    toast.error(errorMessage);
  }
}

type FetchBrandSuccessResponse = {
  message: string;
  Venue: ApiBrand;
};

function* handleFetchBrand(action: ReturnType<typeof fetchBrandRequest>) {
  try {
    const { brandId } = action.payload;
    const response: FetchBrandSuccessResponse | ApiError = yield call(fetchData, `/api/venue/${brandId}`);

    if ('Venue' in response && response.Venue) {
      const apiBrand = response.Venue;
      const feBrand: Brand = {
        brandId: apiBrand.id.toString(),
        name: apiBrand.venue_title,
        owner: apiBrand.accounts ? `${apiBrand.accounts.first_name} ${apiBrand.accounts.last_name}` : 'N/A',
        logo: apiBrand.venue_logo,
        websiteUrl: apiBrand.venue_url,
        phoneNumber: apiBrand.venue_whatsapp_no,
        emailAddress: apiBrand.venue_email,
        industry: apiBrand.category_id ? apiBrand.category_id.toString() : null,
        registrationDate: apiBrand.created_at,
        offersCount: apiBrand.offers_count || 0,
        campaignsCount: 0,
        profileCompletion: apiBrand.profile_completion || 0,
        files: apiBrand.files_count || 0,
        accountId: apiBrand.account_id ? apiBrand.account_id.toString() : null,
        companyName: apiBrand.company_name,
        country: apiBrand.country_id ? apiBrand.country_id.toString() : null,
        state: apiBrand.state_id ? apiBrand.state_id.toString() : null,
        businessLocation: apiBrand.delivery_areas,
        tradeLicenseCopy: apiBrand.trade_license_file,
        vatCertificate: apiBrand.vat_certificate_file,
        instagramHandle: apiBrand.venue_instagram_url,
        associateName: apiBrand.Venue_contact_name,
        associateEmail: apiBrand.venue_email,
        associatePhone: apiBrand.venue_contact_number,
        associateFirstName: '',
        associateLastName: '',
        associateInitials: '',
        associateBackground: '',
      };
      yield put(fetchBrandSuccess(feBrand));
    } else {
      const errorResponse = response as ApiError;
      const errorMessage = errorResponse.response || 'Failed to fetch brand';
      yield put(fetchBrandFailure(errorMessage));
      toast.error(errorMessage);
    }
  } catch (error) {
    const err = error as Error;
    const errorMessage = err.message || 'An unknown error occurred';
    yield put(fetchBrandFailure(errorMessage));
    toast.error(errorMessage);
  }
}

function* watchBrand() {
  yield takeLatest(fetchBrandsRequest.type, handleFetchBrands);
  yield takeLatest(fetchMoreBrandsRequest.type, handleFetchMoreBrands);
  yield takeLatest(createBrandRequest.type, handleCreateBrand);
  yield takeLatest(fetchBrandRequest.type, handleFetchBrand);
}

export default function* brandSaga() {
  yield all([
    watchBrand(),
  ]);
}