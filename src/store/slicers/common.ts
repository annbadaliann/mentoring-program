import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EBaseUrl } from "../models/enums/env.enum";
import { api } from "../utils";

const initialState: any = {
  countries: [],
  departments: [],
  genders: [],
};

const name = "common";

export const getCountries = createAsyncThunk(
  `${name}/getCountries`,
  async () => {
    return api({
      method: "GET",
      url: `${EBaseUrl.mainUrl}/countries`,
    });
  }
);

export const getGenders = createAsyncThunk(`${name}/getGenders`, async () => {
  return api({
    method: "GET",
    url: `${EBaseUrl.mainUrl}/genders`,
  });
});

export const getDepartments = createAsyncThunk(
  `${name}/getDepartments`,
  async () => {
    return api({
      method: "GET",
      url: `${EBaseUrl.mainUrl}/departments`,
    });
  }
);

const commonSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, { payload }) => {
      state.countries = payload;
    });
    builder.addCase(getDepartments.fulfilled, (state, { payload }) => {
      state.departments = payload;
    });
    builder.addCase(getGenders.fulfilled, (state, { payload }) => {
      state.genders = payload;
    });
  },
});

export const selectCountries = (state: any) => state.common.countries;
export const selectDepartments = (state: any) => state.common.departments;
export const selectGenders = (state: any) => state.common.genders;

export default commonSlice.reducer;
