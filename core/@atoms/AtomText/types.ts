import { TextProps } from "react-native";
import { FlattenSimpleInterpolation } from "styled-components";
// import { ThemeColor } from "~/themes/types";
import { CSS } from "../../types";

type AtomTextKeys = "text" | "button" | "button-outline";

export type AtomTextTypes = TextProps & {
  fontSize?: string;
  fontWeight?: string | number;
  color?: string;
  children?: React.ReactNode;
  margin?: string;
  width?: string;
  fontFamily?: string;
  customCSS?: FlattenSimpleInterpolation;
  textAlign?: "left" | "center" | "right" | "justify";
};
