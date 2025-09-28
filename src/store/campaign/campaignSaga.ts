import { call, put, takeLatest, all } from 'redux-saga/effects';
import toast from 'react-hot-toast';
import { postData, fetchData } from '@/services/commonService';
import {
  fetchCampaignsRequest,
  fetchCampaignsSuccess,
  fetchCampaignsFailure,
  fetchMoreCampaignsRequest,
  fetchMoreCampaignsSuccess,
  fetchMoreCampaignsFailure,
  fetchCampaignByIdRequest,
  fetchCampaignByIdSuccess,
  fetchCampaignByIdFailure,
  updateCampaignStatusRequest,
  updateCampaignStatusSuccess,
  updateCampaignStatusFailure,
  updateDedicatedStatusRequest,
  updateDedicatedStatusSuccess,
  updateDedicatedStatusFailure,
} from './campaignSlice';
import { Campaign } from '@/types/entities';

type ApiError = {
  success: false;
  message: string;
  venues?: any;
  campaign?: any;
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

type FetchCampaignByIdSuccessResponse = {
  success: boolean;
  message: string;
  campaign: Campaign;
}

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

function* handleFetchCampaignById(action: ReturnType<typeof fetchCampaignByIdRequest>) {
  try {
    const { id } = action.payload;
    const endpoint = `/api/campaign/${id}`;
    const response: FetchCampaignByIdSuccessResponse | ApiError = yield call(fetchData, endpoint);

    if (response.success) {
      yield put(fetchCampaignByIdSuccess((response as FetchCampaignByIdSuccessResponse).campaign));
    } else {
      const errorResponse = response as ApiError;
      const errorMessage = errorResponse.message || 'Failed to fetch campaign';
      yield put(fetchCampaignByIdFailure(errorMessage));
      toast.error(errorMessage);
    }
  } catch (error) {
    const err = error as Error;
    const errorMessage = err.message || 'An unknown error occurred';
    yield put(fetchCampaignByIdFailure(errorMessage));
    toast.error(errorMessage);
  }
}

function* handleUpdateCampaignStatus(action: ReturnType<typeof updateCampaignStatusRequest>) {
  try {
    const { id, ...payload } = action.payload;
    const endpoint = `/api/campaign/${id}/status`;
    const response: { success: boolean, message: string } | ApiError = yield call(postData, endpoint, payload);

    if (response.success) {
      yield put(updateCampaignStatusSuccess({ id, status: payload.status }));
      toast.success(response.message);
    } else {
      const errorResponse = response as ApiError;
      const errorMessage = errorResponse.message || 'Failed to update campaign status';
      yield put(updateCampaignStatusFailure(errorMessage));
      toast.error(errorMessage);
    }
  } catch (error) {
    const err = error as Error;
    const errorMessage = err.message || 'An unknown error occurred';
    yield put(updateCampaignStatusFailure(errorMessage));
    toast.error(errorMessage);
  }
}

function* handleUpdateDedicatedStatus(action: ReturnType<typeof updateDedicatedStatusRequest>) {
  try {
    const { id, ...payload } = action.payload;
    const endpoint = `/api/dedicated/${id}/status`;
    const response: { success: boolean, message: string } | ApiError = yield call(postData, endpoint, payload);

    if (response.success) {
      yield put(updateDedicatedStatusSuccess());
      toast.success(response.message);
    } else {
      const errorResponse = response as ApiError;
      const errorMessage = errorResponse.message || 'Failed to update dedicated status';
      yield put(updateDedicatedStatusFailure(errorMessage));
      toast.error(errorMessage);
    }
  } catch (error) {
    const err = error as Error;
    const errorMessage = err.message || 'An unknown error occurred';
    yield put(updateDedicatedStatusFailure(errorMessage));
    toast.error(errorMessage);
  }
}

function* watchCampaign() {
  yield takeLatest(fetchCampaignsRequest.type, handleFetchCampaigns);
  yield takeLatest(fetchMoreCampaignsRequest.type, handleFetchMoreCampaigns);
  yield takeLatest(fetchCampaignByIdRequest.type, handleFetchCampaignById);
  yield takeLatest(updateCampaignStatusRequest.type, handleUpdateCampaignStatus);
  yield takeLatest(updateDedicatedStatusRequest.type, handleUpdateDedicatedStatus);
}

export default function* campaignSaga() {
  yield all([
    watchCampaign(),
  ]);
}