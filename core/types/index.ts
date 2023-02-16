import { FlattenSimpleInterpolation } from "styled-components";
import { DefaultTheme } from "styled-components/native";

export type CSSType = FlattenSimpleInterpolation;

export type CSS = (theme: DefaultTheme) => FlattenSimpleInterpolation;
