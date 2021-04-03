import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import 'react-native-gesture-handler';
import { DashboardScreen } from '../screen';
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
