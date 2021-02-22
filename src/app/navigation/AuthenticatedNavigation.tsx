import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusScreen } from '../screen';
import { Icon } from 'native-base';
import { useTranslation } from 'react-i18next';
import SettingsNavigation from './SettingsNavigation';
import TrainingNavigation from './TrainingNavigation';

const Tab = createBottomTabNavigator();

export const AuthenticatedNavigation = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Status') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Trainings') {
            iconName = focused ? 'bars' : 'bars';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'setting' : 'setting';
          }

          return <Icon name={iconName} type='AntDesign' color={'red'} style={{ fontSize: size, color }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name='Status'
        component={StatusScreen}
        options={{
          title: t('status'),
        }}
      />
      <Tab.Screen
        name='Trainings'
        component={TrainingNavigation}
        options={{
          title: t('trainings'),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsNavigation}
        options={{
          title: t('settings'),
        }}
      />
    </Tab.Navigator>
  );
};
