import { MotiText } from "moti/build";
import styled, { css } from "styled-components/native";
// import { SSP } from '~/types';
// import isBackDark from '~/utils/isBackDark';
import { AtomTextTypes } from "./types";

export const AtomTextStyled = styled(MotiText)<AtomTextTypes>((props) => {
  return css`
    font-size: ${props?.fontSize ?? "16px"};
    font-weight: ${props?.fontWeight ?? "normal"};
    color: ${props?.color ?? props?.theme?.text?.color?.primary ?? "#000000"};
    margin: ${props?.margin ?? 0};
    width: ${props?.width ?? "auto"};
    text-align: ${props?.textAlign ?? "left"};
    ${props?.customCSS}
  `;
});
