import React, { FC } from 'react';
import { Form as NativeBaseForm } from 'native-base';
import { FormProps } from './FormTypes';
import { useForm, FormProvider } from 'react-hook-form';

const Form: FC<FormProps> = ({ children }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <NativeBaseForm style={{ paddingRight: 20, paddingLeft: 20 }}>{children}</NativeBaseForm>
    </FormProvider>
  );
};

export default Form;
