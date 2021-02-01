import { NativeBase } from 'native-base';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import { SubmitHandler } from 'react-hook-form/dist/types/form';

export interface FormProps {}

export interface FormInputProps extends NativeBase.Input {
  name: string;
  defaultValue?: string;
  rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
  placeholderTx: string;
}

export interface FormButtonProps extends NativeBase.Button {
  onSubmit: SubmitHandler<any>;
}
