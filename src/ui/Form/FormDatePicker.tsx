import { Button, Icon, Text } from 'native-base';
import React, { FC, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Platform, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styled from 'styled-components';
import { FormItemContainer } from './FormStyles';
import { FormDatePickerProps } from './FormTypes';

const ErrorText = styled(Text)`
  color: #ff0033;
`;

const DatePickerContainer = styled(View)`
  position: absolute;
  top: 100px;
`;

const CloseText = styled(Text)`
  color: grey;
`;

export const FormDatePicker: FC<FormDatePickerProps> = ({ name, defaultValue = '', placeholderTx }) => {
  const methods = useFormContext();
  const { t } = useTranslation();

  const [show, setShow] = useState<boolean>(false);

  return (
    <Controller
      name={name}
      control={methods.control}
      defaultValue={defaultValue}
      render={({ value, onChange }) => (
        <>
          <DatePickerContainer>
            <DateTimePickerModal
              onCancel={() => setShow(false)}
              onConfirm={(date) => {
                onChange(date.toLocaleDateString());
                setShow(Platform.OS === 'ios');
                setShow(false);
              }}
              mode='date'
              is24Hour
              display='spinner'
              isVisible={show}
              confirmTextIOS={t('confirm')}
              cancelTextIOS={t('cancel')}
              headerTextIOS={t('select')}
            />
          </DatePickerContainer>
          <FormItemContainer>
            <Button transparent onPress={() => setShow(true)}>
              <Icon name='calendar' type='AntDesign' />
            </Button>
            <CloseText>{!value ? t(placeholderTx) : value}</CloseText>
            {!!methods.errors[name] && <Icon name='close-circle' />}
          </FormItemContainer>
          {methods.errors[name] && <ErrorText>{methods.errors[name].message}</ErrorText>}
        </>
      )}
    />
  );
};
