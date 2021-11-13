import {Action, combineReducers, configureStore} from '@reduxjs/toolkit';
import appReducer from './slicers/app';
import orderReducer from './slicers/mentors';
import errorHandling from './middlewares/errorHandle';

const combinedReducers = combineReducers({
  app: appReducer,
  order: orderReducer,
});

const rootReducer = (state: any | undefined, action: Action) =>
  combinedReducers(state, action);

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(errorHandling),
});

export default store;

