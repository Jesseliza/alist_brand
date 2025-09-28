import { call, put, takeLatest, all } from 'redux-saga/effects';
import toast from 'react-hot-toast';
import { postData } from '@/services/commonService';
import {
  fetchCampaignsRequest,
  fetchCampaignsSuccess,
  fetchCampaignsFailure,
  fetchMoreCampaignsRequest,
  fetchMoreCampaignsSuccess,
  fetchMoreCampaignsFailure,
} from './campaignSlice';
import { Campaign } from '@/types/entities';

type ApiError = {
  success: false;
  message: string;
  venues: any;
};

type FetchCampaignsSuccessResponse = {
  success: boolean;
  message: string;
  venues: {
    data: Campaign[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
};

function* handleFetchCampaigns(action: ReturnType<typeof fetchCampaignsRequest>) {
  try {
    const { page, ...bodyPayload } = action.payload;
    let endpoint = '/api/campaigns';
    if (page) {
      endpoint = `${endpoint}?page=${page}`;
    }

    const response: FetchCampaignsSuccessResponse | ApiError = yield call(postData, endpoint, bodyPayload);

    if (response.venues) {
      const { data, current_page, last_page, per_page, total } = (response as FetchCampaignsSuccessResponse).venues;

      yield put(fetchCampaignsSuccess({
        campaigns: data,
        pagination: {
          currentPage: current_page,
          lastPage: last_page,
          perPage: per_page,
          total: total,
        },
      }));
    } else {
      const errorResponse = response as ApiError;
      const errorMessage = errorResponse.message || 'Failed to fetch campaigns';
      yield put(fetchCampaignsFailure(errorMessage));
      toast.error(errorMessage);
    }
  } catch (error) {
    const err = error as Error;
    const errorMessage = err.message || 'An unknown error occurred';
    yield put(fetchCampaignsFailure(errorMessage));
    toast.error(errorMessage);
  }
}

function* handleFetchMoreCampaigns(action: ReturnType<typeof fetchMoreCampaignsRequest>) {
  try {
    const { page, ...bodyPayload } = action.payload;
    let endpoint = '/api/campaigns';
    if (page) {
      endpoint = `${endpoint}?page=${page}`;
    }

    const response: FetchCampaignsSuccessResponse | ApiError = yield call(postData, endpoint, bodyPayload);

    if (response.success) {
      const { data, current_page, last_page, per_page, total } = (response as FetchCampaignsSuccessResponse).venues;

      yield put(fetchMoreCampaignsSuccess({
        campaigns: data,
        pagination: {
          currentPage: current_page,
          lastPage: last_page,
          perPage: per_page,
          total: total,
        },
      }));
    } else {
      const errorResponse = response as ApiError;
      const errorMessage = errorResponse.message || 'Failed to fetch more campaigns';
      yield put(fetchMoreCampaignsFailure(errorMessage));
      toast.error(errorMessage);
    }
  } catch (error) {
    const err = error as Error;
    const errorMessage = err.message || 'An unknown error occurred';
    yield put(fetchMoreCampaignsFailure(errorMessage));
    toast.error(errorMessage);
  }
}

function* watchCampaign() {
  yield takeLatest(fetchCampaignsRequest.type, handleFetchCampaigns);
  yield takeLatest(fetchMoreCampaignsRequest.type, handleFetchMoreCampaigns);
}

export default function* campaignSaga() {
  yield all([
    watchCampaign(),
  ]);
}