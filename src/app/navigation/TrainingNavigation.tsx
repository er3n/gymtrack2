import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import 'react-native-gesture-handler';
import { TrainingGroupScreen } from '../screen/training/TrainingGroupScreen';
import { TrainingProgramDetailScreen } from '../screen/training/TrainingProgramDetailScreen';
import { TrainingProgramJoinScreen } from '../screen/training/TrainingProgramJoinScreen';
import { TrainingProgramListScreen } from '../screen/training/TrainingProgramListScreen';
import { TrainingNavigationTypes } from './NavigationTypes';

const Stack = createStackNavigator<TrainingNavigationTypes>();

const TrainingNavigation = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='TrainingProgramList'
        component={TrainingProgramListScreen}
        options={{
          headerShown: false,
          title: t('trainings'),
        }}
      />
      <Stack.Screen
        name='TrainingProgramDetail'
        component={TrainingProgramDetailScreen}
        options={{
          headerShown: false,
          title: t('newTrainingProgram'),
        }}
      />
      <Stack.Screen
        name='TrainingGroup'
        component={TrainingGroupScreen}
        options={{
          headerShown: false,
          title: t('trainingGroup'),
        }}
      />
      <Stack.Screen
        name='TrainingProgramJoin'
        component={TrainingProgramJoinScreen}
        options={{
          headerShown: false,
          title: t('joinTrainingProgram"'),
        }}
      />
    </Stack.Navigator>
  );
};

export default TrainingNavigation;
