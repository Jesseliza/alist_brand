export interface Campaign {
  id: string;
  name: string;
  status: string;
}

export interface GetCampaignsPayload {
  search: string;
}

export interface GetCampaignsAction {
  type: string;
  payload: GetCampaignsPayload;
}

export interface UpdateCampaignStatusPayload {
  id: string;
  status: 'Approved' | 'Rejected';
}

export interface UpdateCampaignStatusAction {
  type: string;
  payload: UpdateCampaignStatusPayload;
}

export interface GetCampaignDetailsPayload {
  id: string;
}

export interface GetCampaignDetailsAction {
  type: string;
  payload: GetCampaignDetailsPayload;
}

export interface UpdateDedicatedPageStatusPayload {
  id: string;
  status: 0 | 1;
  rejectReason?: string;
}

export interface UpdateDedicatedPageStatusAction {
  type: string;
  payload: UpdateDedicatedPageStatusPayload;
}

export interface CampaignsState {
  campaigns: Campaign[];
  campaign: Campaign | null;
  loading: boolean;
  error: string | null;
}