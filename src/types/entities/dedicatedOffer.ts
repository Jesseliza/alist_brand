import { Pagination } from './api';
import { DedicatedOffer } from './brand';

export interface DedicatedOffersState {
  dedicatedOffers: DedicatedOffer[];
  dedicatedOffer: DedicatedOffer | null;
  loading: boolean;
  error: string | null;
  pagination: Pagination | null;
  bulkDeleteLoading: boolean;
  bulkDeleteError: string | null;
}

export interface GetDedicatedOffersPayload {
  search?: string;
  per_page: number;
  page: number;
}

export interface GetDedicatedOfferDetailsPayload {
  id: string;
}

export interface BulkDeleteDedicatedOffersPayload {
  ids: string[];
}