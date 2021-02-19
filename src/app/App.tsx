import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { Root } from 'native-base';
import { initConfig, useAuthContextProvider } from 'core';
import RootNavigation from './navigation/RootNavigation';

const App = () => {
  const [appConfigReady, setAppConfigReady] = useState(false);
  const [authState, AuthContextProvider] = useAuthContextProvider();

  useEffect(() => {
    initConfig().then(() => setAppConfigReady(true));
  }, []);

  if (!appConfigReady) {
    return null;
  }

  return (
    <Root>
      <AuthContextProvider>
        <RootNavigation authenticated={!!authState.token} />
      </AuthContextProvider>
    </Root>
  );
};

export default App;
