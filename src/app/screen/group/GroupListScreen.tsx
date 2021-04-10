import { useAppNavigation } from 'app/navigation/useAppNavigation';
import { Body, Button, Container, Header, Icon, Right, Title } from 'native-base';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const GroupListScreen = () => {
  const { t } = useTranslation();
  const navigator = useAppNavigation();

  const onClickAdd = useCallback(() => {
    navigator.push('CreateGroup');
  }, [navigator]);

  return (
    <Container>
      <Header>
        <Body>
          <Title>{t('grouplist')}</Title>
        </Body>
        <Right>
          <Button transparent onPress={onClickAdd}>
            <Icon name='add' />
          </Button>
        </Right>
      </Header>
    </Container>
  );
};
