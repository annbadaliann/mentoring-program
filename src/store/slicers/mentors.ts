import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EBaseUrl } from "../models/enums/env.enum";
import { api } from "../utils";

const initialState: any = {
  mentors: [],
};

const name = "mentors";

export const getMentors = createAsyncThunk(`${name}/mentors`, async () => {
  return api({
    method: "GET",
    url: `${EBaseUrl.mainUrl}/mentors`,
  });
});

const mentorSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMentors.fulfilled, (state, { payload }) => {
      state.mentors = payload;
    });
  },
});

export const selectCount = (state: any) => state.order.countData?.count;

export default mentorSlice.reducer;
