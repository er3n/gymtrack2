import { Button, Spinner, Text } from 'native-base';
import React, { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FormItemContainer } from './FormStyles';
import { FormButtonProps } from './FormTypes';

const FullWidthButton = styled(Button)`
  width: 100%;
`;

const BoldText = styled(Text)`
  font-weight: bold;
`;

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
    <FormItemContainer>
      <FullWidthButton onPress={handleSubmit(onSubmitWrapper)} disabled={active}>
        <BoldText> {t(tx)} </BoldText>
        {active && <Spinner color='white' />}
      </FullWidthButton>
    </FormItemContainer>
  );
};
