import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
});

export const { changeModeAction } = appSettingsSlice.actions;

export const appSettingsReducer = appSettingsSlice.reducer;
