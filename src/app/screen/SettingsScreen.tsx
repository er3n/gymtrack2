import React from 'react';
import { useAuthState } from 'core';
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Icon,
  Button,
  Text,
  ListItem,
  Left,
  Header,
  Thumbnail,
  Right,
  Switch,
} from 'native-base';
import { useTranslation } from 'react-i18next';
import { signOut } from '../../core/api';

export const SettingsScreen = () => {
  const authState = useAuthState();
  const { t } = useTranslation();

  return (
    <Container>
      <Header>
        <Text>{t('settings')}</Text>
      </Header>
      <Content>
        <Content>
          <ListItem icon>
            <Left>
              <Icon name='person-circle-outline' type='Ionicons' />
            </Left>
            <Body>
              <Text>{authState.username}</Text>
            </Body>
            <Right>
              <Text>Şifre Değiştir</Text>
              <Icon active name='arrow-forward' />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name='weight-lifter' type='MaterialCommunityIcons' />
            </Left>
            <Body>
              <Text>Öğretmen modu</Text>
            </Body>
            <Right>
              <Switch value={true} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name='contacts' type='AntDesign' />
            </Left>
            <Body>
              <Text>Hakkında</Text>
            </Body>
            <Right>
              <Text>er3n</Text>
              <Icon active name='arrow-forward' />
            </Right>
          </ListItem>
        </Content>
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
