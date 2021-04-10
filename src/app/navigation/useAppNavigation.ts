import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppNavigationTypes } from './AppNavigationTypes';

export const useAppNavigation = () => {
  const navigator = useNavigation<StackNavigationProp<AppNavigationTypes>>();
  return navigator;
};
