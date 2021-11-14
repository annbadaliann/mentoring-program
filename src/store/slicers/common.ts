import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EBaseUrl } from "../models/enums/env.enum";
import { api } from "../utils";

const initialState: any = {
  countries: [],
  departments: [],
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
  },
});

export const selectCountries = (state: any) => state.common.countries;
export const selectDepartments = (state: any) => state.common.departments;

export default commonSlice.reducer;
