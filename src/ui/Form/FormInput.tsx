import { Icon, Input, Text } from 'native-base';
import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FormItemContainer } from './FormStyles';
import { FormInputProps } from './FormTypes';

const ErrorText = styled(Text)`
  color: #ff0033;
`;

export const FormInput: FC<FormInputProps> = ({ name, defaultValue = '', placeholderTx, ...rest }) => {
  const methods = useFormContext();
  const { t } = useTranslation();
  return (
    <Controller
      name={name}
      control={methods.control}
      defaultValue={defaultValue}
      render={({ value, onChange, onBlur }) => (
        <>
          <FormItemContainer error={!!methods.errors[name]}>
            <Input {...rest} label='asd' placeholder={t(placeholderTx)} value={value} onChangeText={onChange} onBlur={onBlur} />
            {!!methods.errors[name] && <Icon name='close-circle' />}
          </FormItemContainer>
          {methods.errors[name] && <ErrorText>{methods.errors[name].message}</ErrorText>}
        </>
      )}
    />
  );
};
