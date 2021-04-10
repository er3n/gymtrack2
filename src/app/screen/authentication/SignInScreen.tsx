import { useAppNavigation } from 'app/navigation/useAppNavigation';
import { signIn } from 'core';
import { Text, Toast } from 'native-base';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';
import styled from 'styled-components';
import { BigLogo, FormButton, FormContainer, FormInput } from 'ui';
import * as yup from 'yup';

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

const ToSignUpLink = styled(Text)`
  font-weight: bold;
`;
export const SignInScreen = () => {
  const { t } = useTranslation();

  const navigation = useAppNavigation();

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
          <FormInput name='username' placeholderTx='email' autoCompleteType='email' textContentType='oneTimeCode' autoCapitalize='none' />
          <FormInput name='password' placeholderTx='password' secureTextEntry textContentType='oneTimeCode' />
          <FormButton onSubmit={onSubmit} tx='signIn' />
        </FormContainer>
        <ToSignUpContainer>
          <Text>{t('dontHaveAccount')}</Text>
          <ToSignUpLink onPress={navigateToSignUp}> {t('signUp')}!</ToSignUpLink>
        </ToSignUpContainer>
      </StyledContent>
    </StyledContainer>
  );
};
