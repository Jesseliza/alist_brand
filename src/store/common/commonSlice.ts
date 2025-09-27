import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Option } from "@/types/common";

interface CommonState {
  countries: Option[];
  states: Option[];
  industries: Option[];
  allAccounts: Option[];
  loading: {
    countries: boolean;
    states: boolean;
    industries: boolean;
    allAccounts: boolean;
  };
  error: {
    countries: string | null;
    states: string | null;
    industries: string | null;
    allAccounts: string | null;
  };
  pinValidationLoading: boolean;
  pinValidationSuccess: boolean;
  pinValidationError: string | null;
}

const initialState: CommonState = {
  countries: [],
  states: [],
  industries: [],
  allAccounts: [],
  loading: {
    countries: false,
    states: false,
    industries: false,
    allAccounts: false,
  },
  error: {
    countries: null,
    states: null,
    industries: null,
    allAccounts: null,
  },
  pinValidationLoading: false,
  pinValidationSuccess: false,
  pinValidationError: null,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    fetchCountries: (state) => {
      state.loading.countries = true;
      state.error.countries = null;
    },
    fetchCountriesSuccess: (state, action: PayloadAction<Option[]>) => {
      state.countries = action.payload;
      state.loading.countries = false;
    },
    fetchCountriesFailure: (state, action: PayloadAction<string>) => {
      state.error.countries = action.payload;
      state.loading.countries = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchStates: (state, action: PayloadAction<string>) => {
      state.loading.states = true;
      state.error.states = null;
    },
    fetchStatesSuccess: (state, action: PayloadAction<Option[]>) => {
      state.states = action.payload;
      state.loading.states = false;
    },
    fetchStatesFailure: (state, action: PayloadAction<string>) => {
      state.error.states = action.payload;
      state.loading.states = false;
    },
    fetchIndustries: (state) => {
      state.loading.industries = true;
      state.error.industries = null;
    },
    fetchIndustriesSuccess: (state, action: PayloadAction<Option[]>) => {
      state.industries = action.payload;
      state.loading.industries = false;
    },
    fetchIndustriesFailure: (state, action: PayloadAction<string>) => {
      state.error.industries = action.payload;
      state.loading.industries = false;
    },
    fetchAllAccounts: (state) => {
      state.loading.allAccounts = true;
      state.error.allAccounts = null;
    },
    fetchAllAccountsSuccess: (state, action: PayloadAction<Option[]>) => {
      state.allAccounts = action.payload;
      state.loading.allAccounts = false;
    },
    fetchAllAccountsFailure: (state, action: PayloadAction<string>) => {
      state.error.allAccounts = action.payload;
      state.loading.allAccounts = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validatePinRequest: (state, _action: PayloadAction<{ pin: string }>) => {
      state.pinValidationLoading = true;
      state.pinValidationSuccess = false;
      state.pinValidationError = null;
    },
    validatePinSuccess: (state) => {
      state.pinValidationLoading = false;
      state.pinValidationSuccess = true;
    },
    validatePinFailure: (state, action: PayloadAction<string>) => {
      state.pinValidationLoading = false;
      state.pinValidationError = action.payload;
    },
    resetPinStatus: (state) => {
      state.pinValidationSuccess = false;
      state.pinValidationError = null;
    },
  },
});

export const {
  fetchCountries,
  fetchCountriesSuccess,
  fetchCountriesFailure,
  fetchStates,
  fetchStatesSuccess,
  fetchStatesFailure,
  fetchIndustries,
  fetchIndustriesSuccess,
  fetchIndustriesFailure,
  fetchAllAccounts,
  fetchAllAccountsSuccess,
  fetchAllAccountsFailure,
  validatePinRequest,
  validatePinSuccess,
  validatePinFailure,
  resetPinStatus,
} = commonSlice.actions;

export default commonSlice.reducer;