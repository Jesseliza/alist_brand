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
  page: number;
  per_page: number;
  search?: string;
}

export interface GetDedicatedOfferDetailsPayload {
  id: string;
}

export interface BulkDeleteDedicatedOffersPayload {
  ids: string[];
}