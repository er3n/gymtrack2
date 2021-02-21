import { configureStore } from '@reduxjs/toolkit';
import { appStatusReducer, authenticationReducer, userDetailsReducer } from './feature';

export const store = configureStore({
  reducer: {
    appStatus: appStatusReducer,
    authentication: authenticationReducer,
    userDetails: userDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
