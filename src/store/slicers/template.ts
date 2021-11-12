import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { EBaseUrl } from '../models/enums/env.enum';
import { api } from '../utils';

const initialState: any = {
    postCardsData:[],
    giftCardsData:[],
    templateLettersData:[],
    templateEnvelopesData:[]
  };

  const name = 'Template';

  export const getPostCards = createAsyncThunk(
    `${name}/getPostCards`,
    async () => {
      return api({
        method: 'GET',
        url: `${EBaseUrl.envLetter}/${name}/PostCards`,
      });
    },
  );

  export const getGiftCards = createAsyncThunk(
    `${name}/getGiftCards`,
    async () => {
      return api({
        method: 'GET',
        url: `${EBaseUrl.envLetter}/${name}/Cards`,
      });
    },
  );

  export const getEnvelopes = createAsyncThunk(
    `${name}/getEnvelopes`,
    async () => {
      return api({
        method: 'GET',
        url: `${EBaseUrl.envLetter}/${name}/Envelopes`,
      });
    },
  );

  export const getLetters = createAsyncThunk(
    `${name}/getLetters`,
    async () => {
      return api({
        method: 'GET',
        url: `${EBaseUrl.envLetter}/${name}/Letters`,
      });
    },
  );

const templateSlice = createSlice({
    name,
    initialState,
    reducers: {
      updatePostCardList(state, {payload}) {
        state.postCardsData = payload;
      },
      updateGiftCardList(state, {payload}) {
        state.giftCardsData = payload;
      },
      updateLetterTemplatesList(state, {payload}) {
        state.templateLettersData = payload;
      },
      updateEnvelopeTemplatesList(state, {payload}) {
        state.templateEnvelopesData = payload;
      },
    },
    extraReducers: builder => {
      builder.addCase(getPostCards.fulfilled, (state, {payload}) => {
        state.postCardsData = payload;
      });
      builder.addCase(getGiftCards.fulfilled, (state, {payload}) => {
        state.giftCardsData = payload;
      });
      builder.addCase(getEnvelopes.fulfilled, (state, {payload}) => {
        state.templateEnvelopesData = payload;
      });
      builder.addCase(getLetters.fulfilled, (state, {payload}) => {
        state.templateLettersData = payload;
      });
    },
  });

  export const selectLetters = (state: any) => state.template.templateLettersData;

  export const selectEnvelopes = (state: any) => state.template.templateEnvelopesData;

  export const selectGiftCards = (state: any) => state.template.giftCardsData;

  export const selectPostCards = (state: any) => state.template.postCardsData;

  export const {updatePostCardList,updateGiftCardList , updateEnvelopeTemplatesList, updateLetterTemplatesList} = templateSlice.actions;


  export default templateSlice.reducer;