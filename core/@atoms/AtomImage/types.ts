import { FlattenSimpleInterpolation } from 'styled-components';

export type AtomImageType = {
  customBorderRadius?: string;
  customWidth?: string;
  customPadding?: string;
  customHeight?: string;
  customBorder?: string;
  customMargin?: string;
  customCSS?: FlattenSimpleInterpolation;
  url?: string;
};

export type AtomImageProps = AtomImageType;
