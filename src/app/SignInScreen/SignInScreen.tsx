import React from 'react';
import { Button, Container, Content, Form, Icon, Input, Item, Text } from 'native-base';
import { useAuthContext } from '../../core/auth/AuthContext';
import BigLogo from '../../ui/Logo/BigLogo';
import { Controller, useForm } from 'react-hook-form';
import { ISignInRequest } from '../../core/auth/AuthContextTypes';

interface SignInScreenState {
  username?: string;
  password?: string;
}

export default function () {
  const { control, handleSubmit, errors } = useForm<ISignInRequest>();

  const authContext = useAuthContext();

  const onSubmit = async (data: ISignInRequest) => {
    console.log(data);
    await authContext?.signIn(data);
  };

  return (
    <Container>
      <Content style={{ marginTop: 20 }}>
        <BigLogo />
        <Form style={{ paddingRight: 20, paddingLeft: 20 }}>
          <Controller
            name='username'
            control={control}
            rules={{ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ }}
            defaultValue=''
            render={({ value, onChange, onBlur }) => (
              <Item style={{ marginTop: 20 }} error={!!errors.username}>
                <Input autoCompleteType='email' placeholder='E-Posta' value={value} onChangeText={onChange} onBlur={onBlur} />
                {!!errors.username && <Icon name='close-circle' />}
              </Item>
            )}
          />
          {errors.username && <Text style={{ color: 'red', marginLeft: 20 }}>Geçersiz eposta!</Text>}
          <Controller
            name='password'
            control={control}
            rules={{ required: true }}
            defaultValue=''
            render={({ value, onChange, onBlur }) => (
              <Item style={{ marginTop: 20 }} error={!!errors.password}>
                <Input secureTextEntry placeholder='Şifre' value={value} onChangeText={onChange} onBlur={onBlur} />
                {!!errors.password && <Icon name='close-circle' />}
              </Item>
            )}
          />
          {errors.password && <Text style={{ color: 'red', marginLeft: 20 }}>Geçerisiz şifre!</Text>}
          <Item style={{ marginTop: 20 }}>
            <Button block style={{ width: '100%' }} onPress={handleSubmit(onSubmit)}>
              <Text style={{ fontWeight: 'bold' }}> Giriş </Text>
            </Button>
          </Item>
        </Form>
      </Content>
    </Container>
  );
}
