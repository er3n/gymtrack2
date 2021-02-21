import FormContainer from 'ui/Form/FormContainer';
import FormInput from 'ui/Form/FormInput';
import FormButton from 'ui/Form/FormButton';
import React, { useMemo } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { View } from 'react-native';
import { ProfileThumbnail, FormTextArea, FormDatePicker } from 'ui';
import { Toast } from 'native-base';

const StyledContainer = styled(View)`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
`;

export const PersonnelSettingsScreen = () => {
  const validationSchema = useMemo(() => {
    return yup.object().shape({});
  }, []);

  const onSubmit = async (data: any) => {
    console.log(data.name + data.weight);
    Toast.show({
      text: JSON.stringify(data),
    });
  };

  return (
    <StyledContainer>
      <View style={{ alignItems: 'center' }}>
        <ProfileThumbnail />
      </View>
      <FormContainer validationSchema={validationSchema}>
        <FormInput name='name' placeholderTx='name' />
        <FormDatePicker name='age' placeholderTx='age' />
        <FormInput name='weight' placeholderTx='weight' />
        <FormTextArea name='injuries' placeholderTx='injuries' />
        <FormButton onSubmit={onSubmit} tx='update' />
      </FormContainer>
    </StyledContainer>
  );
};
