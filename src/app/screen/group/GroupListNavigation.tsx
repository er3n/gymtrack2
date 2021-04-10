import { createStackNavigator } from '@react-navigation/stack';
import { CreateGroupScreen } from 'app/screen/group/CreateGroupScreen';
import { GroupListScreen } from 'app/screen/group/GroupListScreen';
import React from 'react';
import { useTranslation } from 'react-i18next';
import 'react-native-gesture-handler';
import { GroupListNavigationTypes } from '../../navigation/AppNavigationTypes';

const Stack = createStackNavigator<GroupListNavigationTypes>();

const GroupListNavigation = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='GroupList'
        component={GroupListScreen}
        options={{
          headerShown: false,
          title: t('groupList'),
        }}
      />
      <Stack.Screen
        name='CreateGroup'
        component={CreateGroupScreen}
        options={{
          headerShown: false,
          title: t('createGroup'),
        }}
      />
    </Stack.Navigator>
  );
};

export default GroupListNavigation;
