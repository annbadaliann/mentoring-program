import { IUser } from './../models/interfaces/user';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EBaseUrl } from "../models/enums/env.enum";
import { api } from "../utils";

const initialState: any = {
  user: null,
};

const name = "auth";

export const registerUser = createAsyncThunk(`${name}/getMentors`, async (data: IUser) => {
  return api({
    method: "POST",
    url: `${EBaseUrl.mainUrl}/users`,
    body: data
  });
});

const authSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export const selectUser = (state: any) => state.auth.user;

export default authSlice.reducer;
