import React, { FC, useEffect, useState } from 'react';
import { IAuthState } from './AuthContextTypes';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const AuthContext = React.createContext<IAuthState>({
  status: 'LOADING',
});

export const AuthProvider: FC<{ children: Element }> = ({ children }) => {
  const [authState, setAuthState] = useState<IAuthState>({
    status: 'LOADING',
  });

  const onAuthStateChanged = (userState: FirebaseAuthTypes.User | null) => {
    if (userState) {
      setAuthState({
        uid: userState.uid,
        status: 'AUTHENTICATED',
        username: userState.email,
      });
    } else {
      setAuthState({
        status: 'UNAUTHENTICATED',
        username: null,
      });
    }
  };

  useEffect(() => {
    return auth().onAuthStateChanged(onAuthStateChanged);
  }, []);

  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>;
};
