import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
    preOrderData:{}
  };

  const name = 'Preorder';

const preOrderSlice = createSlice({
    name,
    initialState,
    reducers: {},
  });
  
  export default preOrderSlice.reducer;