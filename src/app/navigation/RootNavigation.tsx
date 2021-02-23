import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticatedNavigation } from './AuthenticatedNavigation';
import { UnAuthenticatedNavigation } from './UnAuthenticatedNavigation';

const RootNavigation = ({ authenticated }: { authenticated: boolean }) => {
  return <NavigationContainer>{authenticated ? <AuthenticatedNavigation /> : <UnAuthenticatedNavigation />}</NavigationContainer>;
};

export default RootNavigation;
