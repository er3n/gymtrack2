import React, { FC, useState } from 'react';
import { Button, Item, Spinner, Text } from 'native-base';
import { useFormContext } from 'react-hook-form';
import { FormButtonProps } from './FormTypes';
import { useTranslation } from 'react-i18next';

export const FormButton: FC<FormButtonProps> = ({ onSubmit, tx }) => {
  const { handleSubmit } = useFormContext();
  const { t } = useTranslation();

  const [active, setActive] = useState<boolean>(false);

  const onSubmitWrapper = async (data: any) => {
    try {
      setActive(true);
      await onSubmit(data);
    } finally {
      setActive(false);
    }
  };

  return (
    <Item style={{ marginTop: 20, marginLeft: 0 }}>
      <Button block style={{ width: '100%' }} onPress={handleSubmit(onSubmitWrapper)} disabled={active}>
        <Text style={{ fontWeight: 'bold' }}> {t(tx)} </Text>
        {active && <Spinner color='white' />}
      </Button>
    </Item>
  );
};
