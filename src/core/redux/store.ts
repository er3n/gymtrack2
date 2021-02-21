import { configureStore } from '@reduxjs/toolkit';
import { appSettingsReducer, appStatusReducer, authenticationReducer, userDetailsReducer } from './feature';

export const store = configureStore({
  reducer: {
    appStatus: appStatusReducer,
    appSettings: appSettingsReducer,
    authentication: authenticationReducer,
    userDetails: userDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
