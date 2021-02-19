import { ReactNode, Reducer } from 'react';

export interface IAuthState {
  isLoading: boolean;
  isSignOut: boolean;
  token: string | null;
}

export interface IAuthAction {
  type: 'SIGN_IN' | 'SIGN_OUT' | 'RESTORE_TOKEN';
  token: string | null;
}

export interface IAuthReducer extends Reducer<IAuthState, IAuthAction> {}

export interface ISignInRequest {
  username: string;
  password: string;
}

export interface ISignUpRequest {
  username: string;
  password: string;
}

export default interface IAuthContext {
  signIn: (signInRequest: ISignInRequest) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (signUpRequest: ISignUpRequest) => Promise<void>;
}

export interface IAuthProviderProps {
  children: ReactNode;
}
