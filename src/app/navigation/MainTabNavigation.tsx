import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen, SettingsScreen } from 'app/screen';
import { GroupListScreen } from 'app/screen/group/GroupListScreen';
import { Icon } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MainTab } from './AppNavigationTypes';

const Tab = createBottomTabNavigator<MainTab>();

export const MainTabNavigation = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Status') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'GroupList') {
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
        component={DashboardScreen}
        options={{
          title: t('status'),
        }}
      />
      <Tab.Screen
        name='GroupList'
        component={GroupListScreen}
        options={{
          title: t('groups'),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          title: t('settings'),
        }}
      />
    </Tab.Navigator>
  );
};
