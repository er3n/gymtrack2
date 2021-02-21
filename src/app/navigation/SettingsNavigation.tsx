import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '../screen';
import { useTranslation } from 'react-i18next';
import { PersonnelSettingsScreen } from '../screen/settings/PersonelSettingsScreen';

const Stack = createStackNavigator<{ Home: undefined; About: undefined }>();

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
        component={PersonnelSettingsScreen}
        options={{
          title: t('about'),
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigation;
