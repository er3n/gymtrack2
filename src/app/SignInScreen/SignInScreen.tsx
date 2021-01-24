import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Container, Content, Form, Header, Input, Item, Text } from 'native-base';
import { useAuthContext } from '../../core/auth/AuthContext';

interface SignInScreenState {
  username?: string;
  password?: string;
}

export default function () {
  const [state, setState] = useState<SignInScreenState>({});

  const authContext = useAuthContext();

  const onChangeText = (field: keyof SignInScreenState, text: string) => {
    setState((prevState) => ({
      ...prevState,
      [field]: text,
    }));
  };

  const onSubmit = async () => {
    await authContext!.signIn({
      username: state.username!,
      password: state.password!,
    });
  };

  return (
    <SafeAreaView>
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder='E-Posta' value={state.username} onChangeText={(text) => onChangeText('username', text)} />
            </Item>
            <Item last>
              <Input placeholder='Şifre' value={state.password} onChangeText={(text) => onChangeText('password', text)} />
            </Item>
            <Button onPress={onSubmit}>
              <Text>Giriş</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    </SafeAreaView>
  );
}
