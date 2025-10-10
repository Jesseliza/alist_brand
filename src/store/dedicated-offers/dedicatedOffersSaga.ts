import { call, put, takeLatest, all } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import axiosInstance from '../../services/apiHelper';
import {
  getDedicatedOffersStart,
  getDedicatedOffersSuccess,
  getDedicatedOffersFailure,
  getMoreDedicatedOffersStart,
  getMoreDedicatedOffersSuccess,
  getDedicatedOfferDetailsStart,
  getDedicatedOfferDetailsSuccess,
  getDedicatedOfferDetailsFailure,
  bulkDeleteDedicatedOffersStart,
  bulkDeleteDedicatedOffersSuccess,
  bulkDeleteDedicatedOffersFailure,
} from './dedicatedOffersSlice';
import {
  GetDedicatedOffersPayload,
  GetDedicatedOfferDetailsPayload,
} from '../../types/entities/dedicatedOffer';
import { DedicatedOffer } from '@/types/entities/brand';
import { Pagination } from '@/types/api';

interface DedicatedOffersApiResponse {
    data: {
        dedicated_offers: {
            data: DedicatedOffer[];
            current_page: number;
            last_page: number;
            per_page: number;
            total: number;
        }
    }
}

interface DedicatedOfferDetailsApiResponse {
    data: {
        dedicated_offer: DedicatedOffer;
    }
}

function* getDedicatedOffersSaga(action: PayloadAction<GetDedicatedOffersPayload>) {
  try {
    const response: DedicatedOffersApiResponse = yield call(
      axiosInstance.post,
      '/api/dedicated-offers',
      action.payload
    );
    yield put(getDedicatedOffersSuccess({
        data: response.data.dedicated_offers.data,
        pagination: {
            currentPage: response.data.dedicated_offers.current_page,
            lastPage: response.data.dedicated_offers.last_page,
            perPage: response.data.dedicated_offers.per_page,
            total: response.data.dedicated_offers.total,
        }
    }));
  } catch (error: any) {
    yield put(getDedicatedOffersFailure(error.message));
  }
}

function* getMoreDedicatedOffersSaga(action: PayloadAction<GetDedicatedOffersPayload>) {
    try {
      const response: DedicatedOffersApiResponse = yield call(
        axiosInstance.post,
        '/api/dedicated-offers',
        action.payload
      );
      yield put(getMoreDedicatedOffersSuccess({
          data: response.data.dedicated_offers.data,
          pagination: {
              currentPage: response.data.dedicated_offers.current_page,
              lastPage: response.data.dedicated_offers.last_page,
              perPage: response.data.dedicated_offers.per_page,
              total: response.data.dedicated_offers.total,
          }
      }));
    } catch (error: any) {
      yield put(getDedicatedOffersFailure(error.message));
    }
  }

function* getDedicatedOfferDetailsSaga(action: PayloadAction<GetDedicatedOfferDetailsPayload>) {
  try {
    const { id } = action.payload;
    const response: DedicatedOfferDetailsApiResponse = yield call(
      axiosInstance.get,
      `/api/dedicated-offer/${id}`
    );
    yield put(getDedicatedOfferDetailsSuccess(response.data.dedicated_offer));
  } catch (error: any) {
    yield put(getDedicatedOfferDetailsFailure(error.message));
  }
}

function* bulkDeleteDedicatedOffersSaga(action: PayloadAction<{ ids: string[] }>) {
  try {
    const { ids } = action.payload;
    yield call(axiosInstance.post, '/api/dedicated-offer/bulk-delete', { ids });
    yield put(bulkDeleteDedicatedOffersSuccess(ids));
    toast.success("Dedicated offers deleted successfully!");
  } catch (error: any) {
    const errorMessage = (error as any).response?.data?.message || 'Failed to delete dedicated offers.';
    yield put(bulkDeleteDedicatedOffersFailure(errorMessage));
    toast.error(errorMessage);
  }
}

function* watchDedicatedOffers() {
  yield takeLatest(getDedicatedOffersStart.type, getDedicatedOffersSaga);
  yield takeLatest(getMoreDedicatedOffersStart.type, getMoreDedicatedOffersSaga);
  yield takeLatest(getDedicatedOfferDetailsStart.type, getDedicatedOfferDetailsSaga);
  yield takeLatest(bulkDeleteDedicatedOffersStart.type, bulkDeleteDedicatedOffersSaga);
}

export default function* dedicatedOffersSaga() {
  yield all([watchDedicatedOffers()]);
}