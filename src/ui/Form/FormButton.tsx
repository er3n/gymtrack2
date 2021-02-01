import React, { FC, useState } from 'react';
import { Button, Item, Spinner, Text } from 'native-base';
import { useFormContext } from 'react-hook-form';
import { FormButtonProps } from './FormTypes';

const FormButton: FC<FormButtonProps> = ({ onSubmit }) => {
  const { handleSubmit } = useFormContext();

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
    <Item style={{ marginTop: 20 }}>
      <Button block style={{ width: '100%' }} onPress={handleSubmit(onSubmitWrapper)} disabled={active}>
        <Text style={{ fontWeight: 'bold' }}> Giriş </Text>
        {active && <Spinner color='white' />}
      </Button>
    </Item>
  );
};

export default FormButton;
