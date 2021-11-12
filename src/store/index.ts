import {Action, combineReducers, configureStore} from '@reduxjs/toolkit';
import appReducer from './slicers/app';
import orderReducer from './slicers/order';
import paymentReducer from './slicers/payment';
import templateReducer from './slicers/template';
import preOrderReducer from './slicers/preorder';
import errorHandling from './middlewares/errorHandle';

const combinedReducers = combineReducers({
  app: appReducer,
  order: orderReducer,
  payment: paymentReducer,
  template: templateReducer,
  preOrder: preOrderReducer,
});

const rootReducer = (state: any | undefined, action: Action) =>
  combinedReducers(state, action);

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(errorHandling),
});

export default store;

