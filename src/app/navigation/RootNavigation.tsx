import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen, SignUpScreen } from '../screen';
import { RootNavigationTypes } from './RootNavigationTypes';
import { useAuthState } from 'core';
import { useTranslation } from 'react-i18next';
import { AuthenticatedNavigation } from './AuthenticatedNavigation';

const Stack = createStackNavigator<RootNavigationTypes>();

const RootNavigation = () => {
  const authState = useAuthState();
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState.status != 'AUTHENTICATED' ? (
          <>
            <Stack.Screen
              name='SignIn'
              component={SignInScreen}
              options={{
                title: t('signIn'),
              }}
            />
            <Stack.Screen
              name='SignUp'
              component={SignUpScreen}
              options={{
                title: t('signUp'),
              }}
            />
          </>
        ) : (
          <Stack.Screen name='Authenticated' component={AuthenticatedNavigation} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
