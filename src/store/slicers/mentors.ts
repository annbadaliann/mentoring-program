import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EBaseUrl } from "../models/enums/env.enum";
import { ISuggesstedMentor } from "../models/interfaces/mentor";
import { api } from "../utils";

const initialState: any = {
  mentors: [],
  suggestedMentors: []
};

const name = "mentors";

export const getMentors = createAsyncThunk(`${name}/getMentors`, async () => {
  return api({
    method: "GET",
    url: `${EBaseUrl.mainUrl}/${name}`,
  });
});

export const getSuggestedMentors = createAsyncThunk(`${name}/getSuggestedMentors`, async (queryList: ISuggesstedMentor) => {
  return api({
    method: "GET",
    url: `${EBaseUrl.mainUrl}/${name}?${queryList}`,
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
    builder.addCase(getSuggestedMentors.fulfilled, (state, { payload }) => {
      state.suggestedMentors = payload;
    });
  },
});

export const selectMentors = (state: any) => state.mentors.mentors;
export const selectSuggestedMentors = (state: any) => state.mentors.suggestedMentors;

export default mentorSlice.reducer;
