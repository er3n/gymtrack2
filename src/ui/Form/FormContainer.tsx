import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from 'native-base';
import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormContainerProps } from './FormTypes';

export const FormContainer: FC<FormContainerProps> = ({ children, validationSchema, defaultValues }) => {
  const methods = useForm({
    resolver: validationSchema && yupResolver(validationSchema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <Form>{children}</Form>
    </FormProvider>
  );
};
