import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signOutAction } from './authenticationSlice';

interface AppSettingsSlice {
  mode: 'TEACHER' | 'STUDENT';
}

const initialState: AppSettingsSlice = {
  mode: 'TEACHER',
};

export const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    changeModeAction: (state, action: PayloadAction<'TEACHER' | 'STUDENT'>) => {
      state.mode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signOutAction.fulfilled, (state) => {
      state.mode = initialState.mode;
    });
  },
});

export const { changeModeAction } = appSettingsSlice.actions;

export const appSettingsReducer = appSettingsSlice.reducer;
