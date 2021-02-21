import React, { useCallback, useMemo } from 'react';
import * as yup from 'yup';
import { Text, Toast } from 'native-base';
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
import { signIn } from 'core';

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
  const { t } = useTranslation();

  const navigation = useNavigation<StackNavigationProp<RootNavigationTypes>>();

  const navigateToSignUp = useCallback(() => {
    navigation.replace('SignUp');
  }, [navigation]);

  const signInValidationSchema = useMemo(() => {
    return yup.object().shape({
      username: yup.string().email().required(),
      password: yup.string().min(6).max(16).required(),
    });
  }, []);

  const onSubmit = async (data: { username: string; password: string }) => {
    signIn(data).catch((err) => {
      Toast.show({
        text: t(err.code) + ' !',
        duration: 6000,
        type: 'danger',
      });
    });
  };

  return (
    <StyledContainer>
      <BigLogo />
      <StyledContent>
        <FormContainer validationSchema={signInValidationSchema}>
          <FormInput name='username' placeholderTx='email' autoCompleteType='email' />
          <FormInput name='password' placeholderTx='password' secureTextEntry />
          <FormButton onSubmit={onSubmit} tx='signIn' />
        </FormContainer>
        <ToSignUpContainer>
          <ToSignUpDescription>{t('dontHaveAccount')}</ToSignUpDescription>
          <ToSignUpLink onPress={navigateToSignUp}> {t('signUp')}!</ToSignUpLink>
        </ToSignUpContainer>
      </StyledContent>
    </StyledContainer>
  );
}
