import React, { useMemo } from 'react';
import * as yup from 'yup';
import { Text, Toast } from 'native-base';
import BigLogo from 'ui/Logo/BigLogo';
import { ISignInRequest } from 'core/auth/AuthContextTypes';
import FormContainer from 'ui/Form/FormContainer';
import FormInput from 'ui/Form/FormInput';
import FormButton from 'ui/Form/FormButton';
import { useAuthContext } from '../../core';
import styled from 'styled-components';
import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootNavigationParams } from '../navigation/RootNavigationParams';

const StyledContainer = styled(SafeAreaView)`
  height: 100%;
  justify-content: center;
`;

const StyledContent = styled(View)`
  margin-left: 10px;
  margin-right: 10px;
`;

const ToSignUpContainer = styled(View)`
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
`;

const ToSignUpDescription = styled(Text)``;

const ToSignUpLink = styled(Text)`
  font-weight: bold;
`;
export function SignInScreen() {
  const authContext = useAuthContext();

  const navigation = useNavigation<StackNavigationProp<RootNavigationParams>>();

  const signInValidationSchema = useMemo(() => {
    return yup.object().shape({
      username: yup.string().email().required(),
      password: yup.string().min(6).max(16).required(),
    });
  }, []);

  const onSubmit = async (data: ISignInRequest) => {
    authContext?.signIn(data);
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
    <StyledContainer>
      <BigLogo />
      <StyledContent>
        <FormContainer validationSchema={signInValidationSchema}>
          <FormInput name='username' placeholderTx='email' autoCompleteType='email' />
          <FormInput name='password' placeholderTx='password' secureTextEntry />
          <FormButton onSubmit={onSubmit} />
        </FormContainer>
        <ToSignUpContainer>
          <ToSignUpDescription>Hesabın yok mu?</ToSignUpDescription>
          <ToSignUpLink onPress={() => navigation.replace('SignUp')}> Üye ol!</ToSignUpLink>
        </ToSignUpContainer>
      </StyledContent>
    </StyledContainer>
  );
}
