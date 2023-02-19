import { ViewProps } from 'react-native';
import { FlattenSimpleInterpolation } from 'styled-components';

export interface AtomWrapperTypes {
  color?: string;
  backgroundColor?: string;
  border?: string;
  width?: string;
  margin?: string;
  height?: string;
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  customCSS?: FlattenSimpleInterpolation;
  flexDirection?: 'row' | 'column';
}

export interface AtomWrapperProps extends ViewProps, AtomWrapperTypes {}
