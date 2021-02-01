import React, { FC } from 'react';
import { Form } from 'native-base';
import { FormContainerProps } from './FormTypes';
import { useForm, FormProvider } from 'react-hook-form';

const FormContainer: FC<FormContainerProps> = ({ children }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Form style={{ paddingRight: 20, paddingLeft: 20 }}>{children}</Form>
    </FormProvider>
  );
};

export default FormContainer;
