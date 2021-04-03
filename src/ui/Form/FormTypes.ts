import { NativeBase } from 'native-base';
import { SubmitHandler } from 'react-hook-form/dist/types/form';
import Yup from 'yup';

export interface FormContainerProps {
  validationSchema?: Yup.AnyObjectSchema;
  defaultValues?: any;
}

export interface FormInputProps extends NativeBase.Input {
  name: string;
  defaultValue?: string;
  placeholderTx: string;
}

export interface FormDatePickerProps {
  name: string;
  defaultValue?: Date;
  placeholderTx: string;
}

export interface FormButtonProps extends NativeBase.Button {
  onSubmit: SubmitHandler<any>;
  tx: string;
}
