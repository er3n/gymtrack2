import React, { useMemo } from 'react';
import { Button, Container, Icon, Right, Title, Body, Header, ActionSheet } from 'native-base';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TrainingNavigationTypes } from '../../navigation/TrainingNavigation';

export const TrainingProgramListScreen = () => {
  const { t } = useTranslation();
  const navigator = useNavigation<StackNavigationProp<TrainingNavigationTypes>>();

  const newActionButtons = useMemo(() => {
    return [
      { text: t('newTrainingProgram'), icon: 'american-football', iconColor: '#2c8ef4' },
      { text: t('joinTrainingProgram'), icon: 'analytics', iconColor: '#f42ced' },
      { text: t('trainingGroup'), icon: 'aperture', iconColor: '#ea943b' },
      { text: t('cancel'), icon: 'close', iconColor: '#25de5b' },
    ];
  }, [t]);

  const onClickActions = () => {
    ActionSheet.show(
      {
        options: newActionButtons,
        cancelButtonIndex: newActionButtons.length - 1,
        title: t('training'),
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            navigator.push('TrainingProgramDetail');
            break;
          case 1:
            navigator.push('TrainingProgramJoin');
            break;
          case 2:
            navigator.push('TrainingGroup');
            break;
          default:
        }
      }
    );
  };

  return (
    <Container>
      <Header>
        <Body>
          <Title>{t('trainings')}</Title>
        </Body>
        <Right>
          <Button transparent onPress={onClickActions}>
            <Icon name='add' />
          </Button>
        </Right>
      </Header>
    </Container>
  );
};
