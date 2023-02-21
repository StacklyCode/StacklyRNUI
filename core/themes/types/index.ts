import { FlattenSimpleInterpolation } from 'styled-components';
import { DefaultTheme } from 'styled-components/native';
import { Palette } from './palette';
import { StateMachine, AnyEventObject } from 'xstate';
import { ReactNode } from 'react';
import { themes } from '../index';

export type IPalette = Palette;

export type CSSType = FlattenSimpleInterpolation;

export type CSS = (theme: DefaultTheme) => FlattenSimpleInterpolation;
export type WithTheme<P = {}, T = DefaultTheme> = P & { theme: T };
export type RDC = Record<string, unknown>;
export type SSP<P = RDC> = (props: WithTheme<P, DefaultTheme>) => FlattenSimpleInterpolation;

export type ThemesFamily = {
  select: {
    [key: string]: IPalette;
  };
  machine: StateMachine<string, any, AnyEventObject>;
};

export type ThemeKeyType = keyof typeof themes | 'auto';

export type ThemesFamilyType = [ThemeKeyType, (key?: ThemeKeyType) => void];

export type ThemeType = {
  key: ThemeKeyType;
  theme: IPalette;
};

export type ThemeContextProps = {
  themes: ThemesFamily;
  children: ReactNode;
  defaultTheme: IPalette;
};
