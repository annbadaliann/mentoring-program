import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    errorMessage:''
  };

  const name = 'APP';

const appSlice = createSlice({
    name,
    initialState,
    reducers: {
      setErrorMessage(state, {payload}) {
        state.errorMessage = payload;
      },
    },
  });
    
  export const {setErrorMessage} =
    appSlice.actions;
  
  export default appSlice.reducer;