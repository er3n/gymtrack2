import React from 'react';
import { useAuthState } from 'core';
import { Body, Card, CardItem, Container, Content, Icon, Button, Text } from 'native-base';
import { useTranslation } from 'react-i18next';
import { signOut } from '../../core/api';

export const SettingsScreen = () => {
  const authState = useAuthState();
  const { t } = useTranslation();

  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Body style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name='person-circle-outline' type='Ionicons' style={{ fontSize: 80, marginRight: 10 }} />
              <Text>{authState.username}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Button bordered danger style={{ width: '100%' }} onPress={() => signOut()}>
                <Text> {t('signOut')}!</Text>
                <Icon name='logout' type='AntDesign' />
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
