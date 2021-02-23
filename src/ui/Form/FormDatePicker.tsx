import React, { FC, useState } from 'react';
import { Button, Icon, Item, Text } from 'native-base';
import { Controller, useFormContext } from 'react-hook-form';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { FormDatePickerProps } from './FormTypes';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Platform, View } from 'react-native';

const ErrorText = styled(Text)`
  color: #ff0033;
`;

export const FormDatePicker: FC<FormDatePickerProps> = ({ name, defaultValue = '', placeholderTx, ...rest }) => {
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
          <View style={{ position: 'absolute', top: 100 }}>
            <DateTimePickerModal
              onCancel={() => setShow(false)}
              onConfirm={(date) => {
                onChange(date);
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
          </View>
          <Item style={{ marginTop: 20, marginLeft: 0 }} error={!!methods.errors[name]}>
            <Button transparent onPress={() => setShow(true)}>
              <Icon name='calendar' type='AntDesign' />
            </Button>
            <Text style={{ color: 'grey' }}>{!value ? t(placeholderTx) : value.toLocaleDateString()}</Text>
            {!!methods.errors[name] && <Icon name='close-circle' />}
          </Item>
          {methods.errors[name] && <ErrorText>{methods.errors[name].message}</ErrorText>}
        </>
      )}
    />
  );
};
