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
import { DedicatedOffer } from '@/types/entities/dedicatedOffer';

interface DedicatedOffersApiResponse {
  data: {
    venues: {
        data: DedicatedOffer[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    }
  }
}

function* getDedicatedOffersSaga(action: PayloadAction<GetDedicatedOffersPayload>) {
  try {
    const response: { data: DedicatedOffersApiResponse } = yield call(
      axiosInstance.post,
      '/api/dedicated/offers',
      action.payload
    );
    yield put(getDedicatedOffersSuccess({
        data: response.data.venues.data,
        pagination: {
            currentPage: response.data.venues.current_page,
            lastPage: response.data.venues.last_page,
            perPage: response.data.venues.per_page,
            total: response.data.venues.total,
        }
    }));
  } catch (error) {
    yield put(getDedicatedOffersFailure((error as Error).message));
  }
}

function* getMoreDedicatedOffersSaga(action: PayloadAction<GetDedicatedOffersPayload>) {
    try {
      const response: { data: DedicatedOffersApiResponse } = yield call(
        axiosInstance.post,
        '/api/dedicated/offers',
        action.payload
      );
      yield put(getMoreDedicatedOffersSuccess({
          data: response.data.venues.data,
          pagination: {
              currentPage: response.data.venues.current_page,
              lastPage: response.data.venues.last_page,
              perPage: response.data.venues.per_page,
              total: response.data.venues.total,
          }
      }));
    } catch (error) {
      yield put(getDedicatedOffersFailure((error as Error).message));
    }
  }

function* getDedicatedOfferDetailsSaga(action: PayloadAction<GetDedicatedOfferDetailsPayload>) {
  try {
    const { id } = action.payload;
    const response: { data: DedicatedOffer } = yield call(
      axiosInstance.get,
      `/api/dedicated/${id}`
    );
    yield put(getDedicatedOfferDetailsSuccess(response.data));
  } catch (error) {
    yield put(getDedicatedOfferDetailsFailure((error as Error).message));
  }
}

function* bulkDeleteDedicatedOffersSaga(action: PayloadAction<{ ids: string[] }>) {
  try {
    const { ids } = action.payload;
    yield call(axiosInstance.post, '/api/dedicated-offer/bulk-delete', { ids });
    yield put(bulkDeleteDedicatedOffersSuccess(ids));
    toast.success("Dedicated offers deleted successfully!");
  } catch (error) {
    const errorMessage =
      (error as { response?: { data?: { message?: string } } })?.response?.data
        ?.message || "Failed to delete dedicated offers.";
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