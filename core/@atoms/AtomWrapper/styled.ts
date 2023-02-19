import { MotiView } from 'moti/build';
import styled, { css } from 'styled-components/native';
import { AtomWrapperProps } from './types';

export const AtomViewStyled = styled(MotiView)<AtomWrapperProps>((props) => {
  return css`
    display: flex;
    justify-content: ${props?.justifyContent ?? 'flex-start'};
    flex-direction: ${props?.flexDirection ?? 'column'};
    align-items: ${props?.alignItems ?? 'flex-start'};
    background-color: ${props?.backgroundColor ?? 'transparent'};
    width: ${props?.width ?? '100%'};
    height: ${props?.height ?? 'auto'};
    margin: ${props?.margin ?? '0px'};
    border: ${props?.border ?? 'none'};
    ${props?.customCSS}
  `;
});
