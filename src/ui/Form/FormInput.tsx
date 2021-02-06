import React, { FC } from 'react';
import { Icon, Input, Item, Text } from 'native-base';
import { Controller, useFormContext } from 'react-hook-form';
import { FormInputProps } from './FormTypes';
import { useTranslation } from 'react-i18next';

const FormInput: FC<FormInputProps> = ({ name, defaultValue = '', rules, placeholderTx, ...rest }) => {
  const methods = useFormContext();
  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      control={methods.control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ value, onChange, onBlur }) => (
        <>
          <Item style={{ marginTop: 20 }} error={!!methods.errors[name]}>
            <Input {...rest} label='asd' placeholder={t(placeholderTx)} value={value} onChangeText={onChange} onBlur={onBlur} />
            {!!methods.errors[name] && <Icon name='close-circle' />}
          </Item>
          {methods.errors[name] && <Text style={{ color: 'red', marginLeft: 20 }}>{methods.errors[name].message}</Text>}
        </>
      )}
    />
  );
};

export default FormInput;
