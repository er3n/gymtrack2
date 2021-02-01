import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Root } from 'native-base';
import { useAuthContextProvider } from 'core';
import { DashboardScreen, SignUpScreen, SignInScreen } from './sceen';

const Stack = createStackNavigator();

const App = () => {
  const [authState, AuthContextProvider] = useAuthContextProvider();

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
