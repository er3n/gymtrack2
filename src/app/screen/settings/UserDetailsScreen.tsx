import React, { useMemo } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { View } from 'react-native';
import { ProfileThumbnail, FormTextArea, FormDatePicker } from 'ui';
import { IUserDetails, updateUserDetails, useAppDispatch, useAppSelector, updateUserDetailsAction } from 'core';
import { FormContainer, FormInput, FormButton } from 'ui';
import { Toast } from 'native-base';
import { useTranslation } from 'react-i18next';

const StyledContainer = styled(View)`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
`;

export const UserDetailsScreen = () => {
  const uid = useAppSelector((state) => state.authentication.uid);
  const userDetails = useAppSelector((state) => state.userDetails);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const validationSchema = useMemo(() => {
    return yup.object().shape({});
  }, []);

  const onSubmit = async (data: IUserDetails) => {
    const updatedUserDetails = await updateUserDetails(uid!, data);
    dispatch(updateUserDetailsAction(updatedUserDetails));
    Toast.show({
      text: t('updateSuccess'),
      type: 'success',
      duration: 3000,
    });
  };

  if (!userDetails) {
    return null;
  }

  return (
    <StyledContainer>
      <View style={{ alignItems: 'center' }}>
        <ProfileThumbnail />
      </View>
      <FormContainer validationSchema={validationSchema} defaultValues={userDetails}>
        <FormInput name='name' placeholderTx='name' />
        <FormDatePicker name='birthDate' placeholderTx='birthDate' />
        <FormInput name='weight' placeholderTx='weight' keyboardType='numeric' />
        <FormTextArea name='injuries' placeholderTx='injuries' />
        <FormButton onSubmit={onSubmit} tx='update' />
      </FormContainer>
    </StyledContainer>
  );
};
