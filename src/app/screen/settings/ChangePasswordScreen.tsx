import { updatePassword, useAppSelector } from 'core';
import { Text, Toast } from 'native-base';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import styled from 'styled-components';
import { FormButton, FormContainer, FormInput } from 'ui';
import * as yup from 'yup';

const StyledContainer = styled(View)`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
`;

const CenteredView = styled(View)`
  align-items: center;
`;

export const ChangePasswordScreen = () => {
  const email = useAppSelector((state) => state.authentication.username);
  const { t } = useTranslation();

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      currentPassword: yup.string().min(6).max(16).required(),
      newPassword: yup.string().min(6).max(16).required(),
      newPasswordConfirmation: yup.string().oneOf([yup.ref('newPassword'), null], t('validation.custom.passwordConfirmationMustMatch')),
    });
  }, [t]);

  const onSubmit = async (data: any) => {
    try {
      await updatePassword({ email, ...data });
      Toast.show({
        type: 'success',
        text: t('updateSuccess'),
        duration: 6000,
      });
    } catch (e) {
      console.log(e);
      Toast.show({
        type: 'danger',
        text: t(e.code),
        duration: 6000,
      });
    }
  };

  return (
    <StyledContainer>
      <CenteredView>
        <Text>{email}</Text>
      </CenteredView>
      <FormContainer validationSchema={validationSchema}>
        <FormInput name='currentPassword' placeholderTx='currentPassword' secureTextEntry />
        <FormInput name='newPassword' placeholderTx='newPassword' secureTextEntry />
        <FormInput name='newPasswordConfirmation' placeholderTx='newPasswordConfirmation' secureTextEntry />
        <FormButton onSubmit={onSubmit} tx='update' />
      </FormContainer>
    </StyledContainer>
  );
};
