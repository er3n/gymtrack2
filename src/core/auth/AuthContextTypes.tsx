import { ReactNode } from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface IAuthState {
  uid?: string;
  status: 'AUTHENTICATED' | 'UNAUTHENTICATED' | 'LOADING';
  username?: string | null;
}

export interface IAuthAction {
  type: 'SIGN_IN' | 'SIGN_OUT' | 'RESTORE_TOKEN';
  token: string | null;
  signIn: (request: ISignInRequest) => Promise<FirebaseAuthTypes.UserCredential>;
  signOut: () => Promise<void>;
  signUp: (request: ISignUpRequest) => Promise<FirebaseAuthTypes.UserCredential>;
}

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
