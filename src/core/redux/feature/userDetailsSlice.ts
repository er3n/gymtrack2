import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signOutAction } from './authenticationSlice';

interface UserDetailsState {
  name?: string;
  birthDate?: string;
  weight?: string;
  injuries?: string;
}

const initialState: UserDetailsState = {};

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    updateUserDetailsAction: (state, action: PayloadAction<UserDetailsState>) => {
      const { name, birthDate, weight, injuries } = action.payload;
      state.name = name;
      state.birthDate = birthDate;
      state.weight = weight;
      state.injuries = injuries;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signOutAction.fulfilled, (state) => {
      state.name = initialState.name;
      state.birthDate = initialState.birthDate;
      state.weight = initialState.weight;
      state.injuries = initialState.injuries;
    });
  },
});

export const { updateUserDetailsAction } = userDetailsSlice.actions;

export const userDetailsReducer = userDetailsSlice.reducer;
