import React from 'react';
import { useTranslation } from 'react-i18next';
import { Body, Button, Container, Header, Icon, Left, Title } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TrainingNavigationTypes } from '../../navigation/TrainingNavigation';

export const TrainingProgramJoinScreen = () => {
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
          <Title>{t('joinTrainingProgram')}</Title>
        </Body>
      </Header>
    </Container>
  );
};
