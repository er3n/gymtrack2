import React, { useCallback, useMemo } from 'react';
import * as yup from 'yup';
import { Text } from 'native-base';
import BigLogo from 'ui/Logo/BigLogo';
import FormContainer from 'ui/Form/FormContainer';
import FormInput from 'ui/Form/FormInput';
import FormButton from 'ui/Form/FormButton';
import styled from 'styled-components';
import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootNavigationTypes } from '../navigation/RootNavigationTypes';
import { useTranslation } from 'react-i18next';
import { signUp } from 'core';

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
export function SignUpScreen() {
  const { t } = useTranslation();

  const navigation = useNavigation<StackNavigationProp<RootNavigationTypes>>();

  const navigateToSignIn = useCallback(() => {
    navigation.replace('SignIn');
  }, [navigation]);

  const signUpValidationSchema = useMemo(() => {
    return yup.object().shape({
      username: yup.string().email().required(),
      password: yup.string().min(6).max(16).required(),
      passwordConfirmation: yup.string().oneOf([yup.ref('password'), null]),
    });
  }, []);

  const onSubmit = async (data: { username: string; password: string }) => {
    signUp(data);
  };

  return (
    <StyledContainer>
      <BigLogo />
      <StyledContent>
        <FormContainer validationSchema={signUpValidationSchema}>
          <FormInput name='username' placeholderTx='email' autoCompleteType='email' />
          <FormInput name='password' placeholderTx='password' secureTextEntry />
          <FormInput name='passwordConfirmation' placeholderTx='passwordConfirmation' secureTextEntry />
          <FormButton onSubmit={onSubmit} tx='signUp' />
        </FormContainer>
        <ToSignUpContainer>
          <ToSignUpDescription>{t('alreadyMember')}</ToSignUpDescription>
          <ToSignUpLink onPress={navigateToSignIn}> {t('signIn')}!</ToSignUpLink>
        </ToSignUpContainer>
      </StyledContent>
    </StyledContainer>
  );
}
