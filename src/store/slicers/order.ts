import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {EBaseUrl} from '../models/enums/env.enum';
import { api } from '../utils';

const initialState: any = {
    countData: {},
  };

  const name = 'Order';

  export const getCount = createAsyncThunk(
    `${name}/getCount`,
    async () => {
      return api({
        method: 'GET',
        url: `${EBaseUrl.envLetter}/Order/Count`,
      });
    },
  );

const orderSlice = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCount.fulfilled, (state, {payload}) => {
          state.countData = payload;
        });
      },
  });

  export const selectCount = (state: any) => state.order.countData?.count;
  
  export default orderSlice.reducer;