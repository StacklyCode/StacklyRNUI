import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { AtomButtonTypes } from "./types";

const AtomButtonStyled = styled(TouchableOpacity)<AtomButtonTypes>(
  (props) => css`
    display: flex;
    justify-content: ${props?.justifyContent ?? "flex-start"};
    align-items: ${props?.alignItems ?? "flex-start"};
    background-color: ${props?.backgroundColor ?? "transparent"};
    width: ${props?.width ?? "100%"};
    height: ${props?.height ?? "auto"};
    margin: ${props?.margin ?? 0};
    border: ${props?.border ?? "none"};
    ${props?.customCSS}
  `
);

export default AtomButtonStyled;
