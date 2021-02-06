import { NativeBase } from 'native-base';
import Yup from 'yup';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import { SubmitHandler } from 'react-hook-form/dist/types/form';

export interface FormContainerProps {
  validationSchema?: Yup.AnyObjectSchema;
}

export interface FormInputProps extends NativeBase.Input {
  name: string;
  defaultValue?: string;
  rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
  placeholderTx: string;
}

export interface FormButtonProps extends NativeBase.Button {
  onSubmit: SubmitHandler<any>;
}
