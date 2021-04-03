import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TrainingNavigationTypes } from 'app/navigation/NavigationTypes';
import { Body, Button, Container, Header, Icon, Left, Title } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const TrainingProgramDetailScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<StackNavigationProp<TrainingNavigationTypes>>();

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
