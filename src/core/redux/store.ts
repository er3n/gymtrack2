import { configureStore } from '@reduxjs/toolkit';
import { appStatusReducer, authenticationReducer } from './feature';

export const store = configureStore({
  reducer: {
    appStatus: appStatusReducer,
    authentication: authenticationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
