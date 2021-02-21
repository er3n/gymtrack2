import React, { FC } from 'react';
import { Icon, Item, Text } from 'native-base';
import { Controller, useFormContext } from 'react-hook-form';
import DatePicker from 'react-native-datepicker';
import { FormDatePickerProps } from './FormTypes';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ErrorText = styled(Text)`
  color: #ff0033;
`;

export const FormDatePicker: FC<FormDatePickerProps> = ({ name, defaultValue = '', placeholderTx, ...rest }) => {
  const methods = useFormContext();
  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      control={methods.control}
      defaultValue={defaultValue}
      render={({ value, onChange }) => (
        <>
          <Item style={{ marginTop: 20, marginLeft: 0 }} error={!!methods.errors[name]}>
            <DatePicker
              style={{ width: 40 }}
              date={value}
              mode='date'
              format='DD/MM/YYYY'
              confirmBtnText={t('confirm')}
              cancelBtnText={t('cancel')}
              onDateChange={(t, date) => {
                onChange(date);
              }}
              hideText
              iconComponent={<Icon name='calendar' type='AntDesign' />}
              {...rest}
            />
            <Text style={{ color: 'grey' }}>{!value ? t(placeholderTx) : value.toLocaleDateString()}</Text>
            {!!methods.errors[name] && <Icon name='close-circle' />}
          </Item>
          {methods.errors[name] && <ErrorText>{methods.errors[name].message}</ErrorText>}
        </>
      )}
    />
  );
};
