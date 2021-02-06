import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Root } from 'native-base';
import { useAuthContextProvider } from 'core';
import { DashboardScreen, SignUpScreen, SignInScreen } from './sceen';
import { initConfig } from 'core';

const Stack = createStackNavigator();

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
        <NavigationContainer>
          <Stack.Navigator>
            {authState.token == null ? (
              <>
                <Stack.Screen
                  name='SignIn'
                  component={SignInScreen}
                  options={{
                    title: 'Giriş',
                  }}
                />
                <Stack.Screen name='SignUp' component={SignUpScreen} />
              </>
            ) : (
                <Stack.Screen name='Dashboard' component={DashboardScreen} />
              )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContextProvider>
    </Root>
  );
};

export default App;
