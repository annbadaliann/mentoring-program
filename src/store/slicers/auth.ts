import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EBaseUrl } from "../models/enums/env.enum";
import { api } from "../utils";

const initialState: any = {
  user: null,
};

const name = "auth";

export const register = createAsyncThunk(`${name}/getMentors`, async () => {
  return api({
    method: "GET",
    url: `${EBaseUrl.mainUrl}/register`,
  });
});

const authSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export const selectUser = (state: any) => state.auth.user;

export default authSlice.reducer;
