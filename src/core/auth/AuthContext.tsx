import React, { FC, useContext } from 'react';
import IAuthContext, { IAuthProviderProps, IAuthReducer, IAuthState } from './AuthContextTypes';

const AuthContext = React.createContext<undefined | IAuthContext>(undefined);

export default function (): [IAuthState, FC<IAuthProviderProps>] {
  const [state, dispatch] = React.useReducer<IAuthReducer>(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            toke: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignOut: false,
            token: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignOut: true,
            token: null,
          };
      }
    },
    {
      isLoading: true,
      isSignOut: false,
      token: null,
    } as IAuthState
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      dispatch({ type: 'RESTORE_TOKEN', token: null });
    };
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo<IAuthContext>(
    () => ({
      signIn: async (signInRequest) => {
        console.log(signInRequest);
      },
      signOut: async () => {},
      signUp: async (signUpRequest) => {
        console.log(signUpRequest);
      },
    }),
    []
  );

  const AuthContextProvider: FC<IAuthProviderProps> = ({ children }) => (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );

  return [state, AuthContextProvider];
}

export function useAuthContext() {
  const authContext = useContext(AuthContext);

  return authContext;
}
