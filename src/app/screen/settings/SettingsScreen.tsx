import React, { useEffect, useState } from 'react';
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
import { getUserDetails, IUserDetails, signOut } from '../../../core/api';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  const authState = useAuthState();
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [userDetails, setUserDetails] = useState<IUserDetails>();

  useEffect(() => {
    getUserDetails(authState.uid!).then((res) => {
      setUserDetails(res);
    });
  }, [authState]);

  return (
    <Container>
      <Header />
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
          <ListItem icon onPress={() => navigation.navigate('About')}>
            <Left>
              <Icon name='contacts' type='AntDesign' />
            </Left>
            <Body>
              <Text>{t('about')}</Text>
            </Body>
            <Right>
              <Text>{userDetails?.name}</Text>
              <Icon active name='arrow-forward' />
            </Right>
          </ListItem>
        </Content>
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
    </Container>
  );
};
