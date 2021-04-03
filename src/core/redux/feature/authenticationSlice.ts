import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signOut } from 'core/api';

interface AuthenticationState {
  status: 'LOADING' | 'AUTHENTICATED' | 'UNAUTHENTICATED';
  uid?: string;
  username?: string | null;
}

const initialState: AuthenticationState = {
  status: 'LOADING',
};

export const signOutAction = createAsyncThunk('authentication/signOut', async () => {
  await signOut();
});

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    signInAction: (state, action: PayloadAction<AuthenticationState>) => {
      state.status = 'AUTHENTICATED';
      state.uid = action.payload.uid;
      state.username = action.payload.username;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signOutAction.fulfilled, (state) => {
      state.status = 'UNAUTHENTICATED';
      state.uid = undefined;
      state.username = undefined;
    });
  },
});

export const { signInAction } = authenticationSlice.actions;

export const authenticationReducer = authenticationSlice.reducer;
