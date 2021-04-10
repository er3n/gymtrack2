import { useAppNavigation } from 'app/navigation/useAppNavigation';
import { Body, Button, Container, Header, Icon, Left, Title } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const TrainingProgramDetailScreen = () => {
  const { t } = useTranslation();
  const navigation = useAppNavigation();

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={navigation.goBack}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>{t('newTrainingProgram')}</Title>
        </Body>
      </Header>
    </Container>
  );
};
