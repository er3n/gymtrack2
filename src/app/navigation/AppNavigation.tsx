import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ChangePasswordScreen, UserDetailsScreen } from 'app/screen';
import { CreateGroupScreen } from 'app/screen/group/CreateGroupScreen';
import React from 'react';
import { useTranslation } from 'react-i18next';
import 'react-native-gesture-handler';
import { SignInScreen, SignUpScreen } from '../screen';
import { AppNavigationTypes } from './AppNavigationTypes';
import { MainTabNavigation } from './MainTabNavigation';

const Stack = createStackNavigator<AppNavigationTypes>();

const AppNavigation = ({ authenticated }: { authenticated: boolean }) => {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!authenticated ? (
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
          <>
            <Stack.Screen name='MainTab' component={MainTabNavigation} options={{ headerShown: false, title: t('back') }} />
            <Stack.Screen
              name='CreateGroup'
              component={CreateGroupScreen}
              options={{
                title: t('createGroup'),
              }}
            />
            <Stack.Screen
              name='UserDetails'
              component={UserDetailsScreen}
              options={{
                title: t('userDetails'),
              }}
            />
            <Stack.Screen
              name='ChangePassword'
              component={ChangePasswordScreen}
              options={{
                title: t('changePassword'),
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
