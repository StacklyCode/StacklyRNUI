import { MotiText } from "moti/build";
import styled, { css } from "styled-components/native";
// import { SSP } from '~/types';
// import isBackDark from '~/utils/isBackDark';
import { AtomTextTypes } from "./types";

export const AtomTextStyled = styled(MotiText)<AtomTextTypes>((props) => {
  return css`
    font-size: 14px;
    font-weight: normal;
    color: "#000000";
    margin: 0;
    width: auto;
    text-align: left;
    ${props?.customCSS}
  `;
});
