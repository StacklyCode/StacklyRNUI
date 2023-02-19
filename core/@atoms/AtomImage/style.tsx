import styled from "styled-components/native";
import { AtomImageType } from "./types";

export const ImageStyle = styled.Image<AtomImageType>`
  border-radius: ${({ customBorderRadius }) => customBorderRadius ?? 0};
  width: ${({ customWidth }) => customWidth ?? "100%"};
  height: ${({ customHeight }) => customHeight ?? "100%"};
  padding: ${({ customPadding }) => customPadding ?? 0};
  margin: ${({ customMargin }) => customMargin ?? 0};
  ${({ customCSS }) => customCSS}
`;
