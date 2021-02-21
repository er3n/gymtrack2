import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LessonsScreen, StatusScreen } from '../screen';
import { Icon } from 'native-base';
import { useTranslation } from 'react-i18next';
import SettingsNavigation from './SettingsNavigation';

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
          } else if (route.name === 'Lessons') {
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
        name='Lessons'
        component={LessonsScreen}
        options={{
          title: t('lessons'),
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
