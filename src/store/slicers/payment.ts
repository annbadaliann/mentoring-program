import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
    paymentData:{}
  };

  const name = 'Payment';

const paymentSlice = createSlice({
    name,
    initialState,
    reducers: {},
  });
  
  export default paymentSlice.reducer;