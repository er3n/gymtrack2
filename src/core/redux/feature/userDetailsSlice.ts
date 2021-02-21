import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserDetailsState {
  name?: string;
  birthDate?: Date;
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
});

export const { updateUserDetailsAction } = userDetailsSlice.actions;

export const userDetailsReducer = userDetailsSlice.reducer;
