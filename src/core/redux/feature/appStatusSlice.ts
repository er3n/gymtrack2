import { createSlice } from '@reduxjs/toolkit';

interface AppStatusState {
  ready: boolean;
}

const initialState: AppStatusState = {
  ready: false,
};

export const appStatusSlice = createSlice({
  name: 'appStatus',
  initialState,
  reducers: {
    setReadyAction: (state) => {
      state.ready = true;
    },
  },
});

export const { setReadyAction } = appStatusSlice.actions;

export const appStatusReducer = appStatusSlice.reducer;
