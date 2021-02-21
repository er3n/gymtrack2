import FormContainer from 'ui/Form/FormContainer';
import FormInput from 'ui/Form/FormInput';
import FormButton from 'ui/Form/FormButton';
import React, { useEffect, useMemo, useState } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { View } from 'react-native';
import { ProfileThumbnail, FormTextArea, FormDatePicker } from 'ui';
import { useAuthState } from 'core';
import { getUserDetails, IUserDetails, updateUserDetails } from 'core';
import { Toast } from 'native-base';
import { useTranslation } from 'react-i18next';

const StyledContainer = styled(View)`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
`;

export const UserDetailsScreen = () => {
  const authState = useAuthState();
  const { t } = useTranslation();
  const [userDetails, setUserDetails] = useState<IUserDetails>();

  const validationSchema = useMemo(() => {
    return yup.object().shape({});
  }, []);

  useEffect(() => {
    getUserDetails(authState.uid!).then((res) => {
      setUserDetails(res || {});
    });
  }, [authState]);

  const onSubmit = async (data: IUserDetails) => {
    await updateUserDetails(authState.uid!, data);
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
