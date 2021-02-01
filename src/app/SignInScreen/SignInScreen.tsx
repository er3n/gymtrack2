import React from 'react';
import { Container, Content, Toast } from 'native-base';
import BigLogo from '../../ui/Logo/BigLogo';
import { ISignInRequest } from '../../core/auth/AuthContextTypes';
import Form from '../../ui/Form/Form';
import FormInput from '../../ui/Form/FormInput/FormInput';
import FormButton from '../../ui/Form/FormButton/FormButton';

export default function () {
  const onSubmit = async (data: ISignInRequest) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(data);
        Toast.show({
          text: JSON.stringify(data),
          type: 'danger',
        });
        resolve();
      }, 3000);
    });

    // await authContext?.signIn(data);
  };

  return (
    <Container>
      <Content style={{ marginTop: 20 }}>
        <BigLogo />
        <Form>
          <FormInput
            name='username'
            placeholderTx='email'
            autoCompleteType='email'
            rules={{ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ }}
          />
          <FormInput name='password' placeholderTx='password' secureTextEntry rules={{ required: true }} />
          <FormButton onSubmit={onSubmit} />
        </Form>
      </Content>
    </Container>
  );
}
