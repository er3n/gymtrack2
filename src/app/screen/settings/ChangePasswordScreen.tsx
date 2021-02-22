import React, { useMemo } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { View } from 'react-native';
import { updatePassword, useAppSelector } from 'core';
import { Text, Toast } from 'native-base';
import { useTranslation } from 'react-i18next';
import { FormContainer, FormInput, FormButton } from 'ui';

const StyledContainer = styled(View)`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
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
      <View style={{ alignItems: 'center' }}>
        <Text>{email}</Text>
      </View>
      <FormContainer validationSchema={validationSchema}>
        <FormInput name='currentPassword' placeholderTx='currentPassword' secureTextEntry />
        <FormInput name='newPassword' placeholderTx='newPassword' secureTextEntry />
        <FormInput name='newPasswordConfirmation' placeholderTx='newPasswordConfirmation' secureTextEntry />
        <FormButton onSubmit={onSubmit} tx='update' />
      </FormContainer>
    </StyledContainer>
  );
};
