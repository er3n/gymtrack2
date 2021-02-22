import React, { FC } from 'react';
import { Icon, Input, Item, Text } from 'native-base';
import { Controller, useFormContext } from 'react-hook-form';
import { FormInputProps } from './FormTypes';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

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
          <Item style={{ marginTop: 20, marginLeft: 0 }} error={!!methods.errors[name]}>
            <Input {...rest} label='asd' placeholder={t(placeholderTx)} value={value} onChangeText={onChange} onBlur={onBlur} />
            {!!methods.errors[name] && <Icon name='close-circle' />}
          </Item>
          {methods.errors[name] && <ErrorText>{methods.errors[name].message}</ErrorText>}
        </>
      )}
    />
  );
};
