import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { signUp } from 'core';
import { Text, Toast } from 'native-base';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';
import styled from 'styled-components';
import { BigLogo, FormButton, FormContainer, FormInput } from 'ui';
import * as yup from 'yup';
import { UnAuthenticatedNavigations } from '../../navigation/NavigationTypes';

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
export const SignUpScreen = () => {
  const { t } = useTranslation();

  const navigation = useNavigation<StackNavigationProp<UnAuthenticatedNavigations>>();

  const navigateToSignIn = useCallback(() => {
    navigation.replace('SignIn');
  }, [navigation]);

  const signUpValidationSchema = useMemo(() => {
    return yup.object().shape({
      username: yup.string().email().required(),
      password: yup.string().min(6).max(16).required(),
      passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], t('validation.custom.passwordConfirmationMustMatch')),
    });
  }, [t]);

  const onSubmit = async (data: { username: string; password: string }) => {
    signUp(data).catch((err) => {
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
        <FormContainer validationSchema={signUpValidationSchema}>
          <FormInput name='username' placeholderTx='email' autoCompleteType='email' textContentType='oneTimeCode' autoCapitalize='none' />
          <FormInput name='password' placeholderTx='password' secureTextEntry textContentType='oneTimeCode' />
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
};
