import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { UserDetailsScreen, ChangePasswordScreen, SettingsScreen } from '../screen';
import { SettingsNavigations } from './NavigationTypes';

const Stack = createStackNavigator<SettingsNavigations>();

const SettingsNavigation = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={SettingsScreen}
        options={{
          title: t('settings'),
        }}
      />
      <Stack.Screen
        name='About'
        component={UserDetailsScreen}
        options={{
          title: t('about'),
        }}
      />
      <Stack.Screen
        name='ChangePassword'
        component={ChangePasswordScreen}
        options={{
          title: t('changePassword'),
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigation;
