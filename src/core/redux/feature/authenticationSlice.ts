import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthenticationState {
  status: 'LOADING' | 'AUTHENTICATED' | 'UNAUTHENTICATED';
  uid?: string;
  username?: string | null;
}

const initialState: AuthenticationState = {
  status: 'LOADING',
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    signInAction: (state, action: PayloadAction<AuthenticationState>) => {
      state.status = 'AUTHENTICATED';
      state.uid = action.payload.uid;
      state.username = action.payload.username;
    },
    signOutAction: (state) => {
      state.status = 'UNAUTHENTICATED';
      state.uid = undefined;
      state.username = undefined;
    },
  },
});

export const { signInAction, signOutAction } = authenticationSlice.actions;

export const authenticationReducer = authenticationSlice.reducer;
