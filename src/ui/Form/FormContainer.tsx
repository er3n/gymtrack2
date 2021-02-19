import React, { FC } from 'react';
import { Form } from 'native-base';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormContainerProps } from './FormTypes';
import { useForm, FormProvider } from 'react-hook-form';

const FormContainer: FC<FormContainerProps> = ({ children, validationSchema }) => {
  const methods = useForm({
    resolver: validationSchema && yupResolver(validationSchema),
  });

  return (
    <FormProvider {...methods}>
      <Form>{children}</Form>
    </FormProvider>
  );
};

export default FormContainer;
