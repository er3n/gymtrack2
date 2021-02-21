import { NativeBase } from 'native-base';
import Yup from 'yup';
import { SubmitHandler } from 'react-hook-form/dist/types/form';
import { DatePickerProps } from 'react-native-datepicker';

export interface FormContainerProps {
  validationSchema?: Yup.AnyObjectSchema;
  defaultValues?: any;
}

export interface FormInputProps extends NativeBase.Input {
  name: string;
  defaultValue?: string;
  placeholderTx: string;
}

export interface FormDatePickerProps extends DatePickerProps {
  name: string;
  defaultValue?: Date;
  placeholderTx: string;
}

export interface FormButtonProps extends NativeBase.Button {
  onSubmit: SubmitHandler<any>;
  tx: string;
}
