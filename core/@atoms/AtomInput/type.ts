import { FormikValues } from 'formik';
import { TextInputProps, TextStyle } from 'react-native';
import { AtomWrapperTypes } from '../AtomWrapper/types';
import { FlattenSimpleInterpolation } from 'styled-components';
import { NativeSyntheticEvent, ViewProps } from 'react-native';

export type CheckboxEvent = NativeSyntheticEvent<{ target: number; value: boolean }>;

export type CustomCheckbox = ViewProps & {
  formik?: FormikValues;
  value?: boolean;
  id: string;
  disabled?: boolean;
  labelProps?: {
    color?: string;
    fontSize?: number | string;
    fontWeight?:
      | 'normal'
      | '100'
      | '200'
      | '300'
      | '400'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900'
      | 'inherit'
      | 'bold';
  };
  colorChecked?: string;
  colorBoxChecked?: string;
  customCSS?: AtomWrapperTypes;
  label: string;

  setChecked: (value: boolean) => void;
  isChecked: boolean;
  onChange?: (event: CheckboxEvent) => void;
  onValueChange?: (value: boolean) => void;
};

type optionsType = {
  value: string | number;
  label: string;
  id: string | number;
  view?: (e: optionsType) => JSX.Element;
};

interface AtomInputType extends TextInputProps {
  formik?: FormikValues;
  value?: string;
  id: string;
  label?: string;
  wrapperWidth?: string;
  labelFontSize?: number;
  onPressIcon?: () => void;
  iconUri?: string;
  inputIconWidth?: string;
  inputIconHeigth?: string;
  inputIconcolor?: string;
  inputStyle?: TextStyle;
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'phone'
    | 'checkbox'
    | 'search'
    | 'select'
    | 'date'
    | 'radio';
  colorChecked?: string;
  colorBoxChecked?: string;
  isChecked?: boolean;
  setChecked?: (value: boolean) => void;
  disabled?: boolean;
  customCSS?: AtomWrapperTypes;
  options?: optionsType[];
  backgroundColor?: string;
  // // value?: boolean;
  // labelColor?: string;
  // labelFontWeight?:
  //   | 'normal'
  //   | 'bold'
  //   | '100'
  //   | '200'
  //   | '300'
  //   | '400'
  //   | '500'
  //   | '600'
  //   | '700'
  //   | '800'
  //   | '900';
  // wrapperCSS?: FlattenSimpleInterpolation;
  // inputCSS?: FlattenSimpleInterpolation;
  // labelCSS?: FlattenSimpleInterpolation;
  // onChange?: (event: CheckboxEvent) => void;
  // onValueChange?: (value: boolean) => void;
}

export default AtomInputType;
