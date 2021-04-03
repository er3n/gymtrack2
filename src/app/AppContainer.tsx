import auth from '@react-native-firebase/auth';
import { initConfig, setReadyAction, signInAction, signOutAction, useAppDispatch, useAppSelector } from 'core';
import { Root } from 'native-base';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './navigation/RootNavigation';

const AppContainer = () => {
  const dispatch = useAppDispatch();
  const appConfigReady = useAppSelector((state) => state.appStatus.ready);
  const authenticated = useAppSelector((state) => state.authentication.status === 'AUTHENTICATED');

  useEffect(() => {
    return auth().onAuthStateChanged((newAuthState) => {
      if (newAuthState) {
        dispatch(
          signInAction({
            status: 'AUTHENTICATED',
            username: newAuthState.email,
            uid: newAuthState.uid,
          })
        );
      } else {
        dispatch(signOutAction());
      }
    });
  }, [dispatch]);

  useEffect(() => {
    initConfig().then(() => {
      dispatch(setReadyAction());
    });
  }, [dispatch]);

  if (!appConfigReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Root>
        <RootNavigation authenticated={authenticated} />
      </Root>
    </SafeAreaProvider>
  );
};

export default AppContainer;
