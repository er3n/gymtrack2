import React, { FC } from 'react';
import { Icon, Input, Item, Text } from 'native-base';
import { Controller, useFormContext } from 'react-hook-form';
import { FormInputProps } from '../FormTypes';

const FormInput: FC<FormInputProps> = ({ name, defaultValue = '', rules, ...rest }) => {
  const methods = useFormContext();

  return (
    <Controller
      name={name}
      control={methods.control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ value, onChange, onBlur }) => (
        <>
          <Item style={{ marginTop: 20 }} error={!!methods.errors[name]}>
            <Input {...rest} value={value} onChangeText={onChange} onBlur={onBlur} />
            {!!methods.errors[name] && <Icon name='close-circle' />}
          </Item>
          {methods.errors[name] && <Text style={{ color: 'red', marginLeft: 20 }}>Geçersiz {rest.placeholder}</Text>}
        </>
      )}
    />
  );
};

export default FormInput;
