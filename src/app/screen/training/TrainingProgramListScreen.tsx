import { useAppNavigation } from 'app/navigation/useAppNavigation';
import { ActionSheet, Body, Button, Container, Header, Icon, Right, Title } from 'native-base';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const TrainingProgramListScreen = () => {
  const { t } = useTranslation();
  const navigator = useAppNavigation();

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
