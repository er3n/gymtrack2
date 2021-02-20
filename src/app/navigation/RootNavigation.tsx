import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen, SignInScreen, SignUpScreen } from '../screen';
import { RootNavigationTypes } from './RootNavigationTypes';
import { useAuthState } from 'core';

const Stack = createStackNavigator<RootNavigationTypes>();

const RootNavigation = () => {
  const authState = useAuthState();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState.status != 'AUTHENTICATED' ? (
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
  );
};

export default RootNavigation;
