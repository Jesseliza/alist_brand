import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Option } from "@/types/common";

interface CommonState {
  countries: Option[];
  states: Option[];
  industries: Option[];
  loading: {
    countries: boolean;
    states: boolean;
    industries: boolean;
  };
  error: {
    countries: string | null;
    states: string | null;
    industries: string | null;
  };
}

const initialState: CommonState = {
  countries: [],
  states: [],
  industries: [],
  loading: {
    countries: false,
    states: false,
    industries: false,
  },
  error: {
    countries: null,
    states: null,
    industries: null,
  },
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
} = commonSlice.actions;

export default commonSlice.reducer;
