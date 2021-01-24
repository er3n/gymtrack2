import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen/SignInScreen';
import DashboardScreen from './DashboardScreen/DashboardScreen';
import SignUpScreen from './SignUpScreen/SignUpScreen';
import useAuthContextProvider from '../core/auth/AuthContext';

const Stack = createStackNavigator();

const App = () => {
  const [authState, AuthContextProvider] = useAuthContextProvider();

  return (
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
  );
};

export default App;
