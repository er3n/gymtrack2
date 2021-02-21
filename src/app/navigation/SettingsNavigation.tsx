import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '../screen';
import { useTranslation } from 'react-i18next';
import { UserDetailsScreen } from '../screen/settings/UserDetailsScreen';

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
        component={UserDetailsScreen}
        options={{
          title: t('about'),
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigation;
