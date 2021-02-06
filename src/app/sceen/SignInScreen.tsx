import React, { useMemo } from 'react';
import * as yup from 'yup';
import { Container, Content, Toast } from 'native-base';
import BigLogo from 'ui/Logo/BigLogo';
import { ISignInRequest } from 'core/auth/AuthContextTypes';
import FormContainer from 'ui/Form/FormContainer';
import FormInput from 'ui/Form/FormInput';
import FormButton from 'ui/Form/FormButton';

export function SignInScreen() {
  const signInValidationSchema = useMemo(() => {
    return yup.object().shape({
      username: yup.string().email().required(),
      password: yup.string().min(4).max(16).required(),
    });
  }, []);

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
        <FormContainer validationSchema={signInValidationSchema}>
          <FormInput name='username' placeholderTx='email' autoCompleteType='email' />
          <FormInput name='password' placeholderTx='password' secureTextEntry />
          <FormButton onSubmit={onSubmit} />
        </FormContainer>
      </Content>
    </Container>
  );
}
