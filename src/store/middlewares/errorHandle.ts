import {isRejected} from '@reduxjs/toolkit';
import store from '../index';
import {setErrorMessage} from '../slicers/app';

const errorHandling =
  () =>
  (next:any): any =>
  async (action: {error: {status: number}}): Promise<any> => {
    if (isRejected(action)) {
        store.dispatch(setErrorMessage(action.error.message));
    }
    return next(action);
  };

export default errorHandling;
