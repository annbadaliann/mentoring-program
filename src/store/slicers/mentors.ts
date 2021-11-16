import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EBaseUrl } from "../models/enums/env.enum";
import { api } from "../utils";

const initialState: any = {
  mentors: [],
  suggestedMentors: [],
  selectedMentors: [],
};

const name = "mentors";

export const getMentors = createAsyncThunk(`${name}/getMentors`, async () => {
  return api({
    method: "GET",
    url: `${EBaseUrl.mainUrl}/${name}`,
  });
});

export const getSuggestedMentors = createAsyncThunk(
  `${name}/getSuggestedMentors`,
  async (query: string) => {
    return api({
      method: "GET",
      url: `${EBaseUrl.mainUrl}/${name}?${query}`,
    });
  }
);

const mentorSlice = createSlice({
  name,
  initialState,
  reducers: {
    setSelectedMentors(state, { payload }) {
      state.selectedMentors = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMentors.fulfilled, (state, { payload }) => {
      state.mentors = payload;
    });
    builder.addCase(getSuggestedMentors.fulfilled, (state, { payload }) => {
      state.suggestedMentors = payload;
    });
  },
});

export const { setSelectedMentors } = mentorSlice.actions;

export const selectMentors = (state: any) => state.mentors.mentors;
export const selectSelectedMentors = (state: any) =>
  state.mentors.selectedMentors;
export const selectSuggestedMentors = (state: any) =>
  state.mentors.suggestedMentors;

export default mentorSlice.reducer;
