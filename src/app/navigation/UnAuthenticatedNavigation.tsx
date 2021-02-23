import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen, SignUpScreen } from '../screen';
import { useTranslation } from 'react-i18next';
import { UnAuthenticatedNavigations } from './NavigationTypes';

const Stack = createStackNavigator<UnAuthenticatedNavigations>();

export const UnAuthenticatedNavigation = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};
