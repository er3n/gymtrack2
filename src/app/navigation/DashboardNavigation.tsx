import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen } from '../screen';
import { useTranslation } from 'react-i18next';
import { DashboardNavigations } from './NavigationTypes';

const Stack = createStackNavigator<DashboardNavigations>();

export const DashboardNavigation = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={DashboardScreen}
        options={{
          title: t('status'),
        }}
      />
    </Stack.Navigator>
  );
};
