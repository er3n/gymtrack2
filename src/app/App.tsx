import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { Root } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { initConfig, AuthProvider } from 'core';
import RootNavigation from './navigation/RootNavigation';

const App = () => {
  const [appConfigReady, setAppConfigReady] = useState(false);

  useEffect(() => {
    initConfig().then(() => setAppConfigReady(true));
  }, []);

  if (!appConfigReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Root>
        <AuthProvider>
          <RootNavigation />
        </AuthProvider>
      </Root>
    </SafeAreaProvider>
  );
};

export default App;
