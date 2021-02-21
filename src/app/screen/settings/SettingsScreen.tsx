import React, { useEffect } from 'react';
import { updateUserDetailsAction, useAppDispatch, useAppSelector } from 'core';
import { Body, Card, CardItem, Container, Content, Icon, Button, Text, ListItem, Left, Header, Right, Switch } from 'native-base';
import { useTranslation } from 'react-i18next';
import { getUserDetails, signOut, changeModeAction } from 'core';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  const { name } = useAppSelector((state) => state.userDetails);
  const { uid, username } = useAppSelector((state) => state.authentication);
  const { mode } = useAppSelector((state) => state.appSettings);
  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const navigation = useNavigation();

  useEffect(() => {
    getUserDetails(uid!).then((res) => {
      if (res) {
        dispatch(updateUserDetailsAction(res));
      }
    });
  }, [uid, dispatch]);

  const onClickChangeMode = () => {
    dispatch(changeModeAction(mode === 'TEACHER' ? 'STUDENT' : 'TEACHER'));
  };

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
              <Text>{username}</Text>
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
              <Switch value={mode === 'TEACHER'} onValueChange={onClickChangeMode} />
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
              <Text>{name}</Text>
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
