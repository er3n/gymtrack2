import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen, SignInScreen, SignUpScreen } from '../screen';

export type StackParams = {
  SignIn: undefined;
  SignUp: undefined;
  Dashboard: undefined;
};

const Stack = createStackNavigator<StackParams>();

const RootNavigation = ({ authenticated }: { authenticated: boolean }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!authenticated ? (
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
