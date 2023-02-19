import React, { FC } from 'react';
import { AtomViewStyled } from './styled';
import { AtomWrapperProps } from './types';

const AtomWrapper: FC<AtomWrapperProps> = (props) => {
  const { children } = props;
  return <AtomViewStyled {...props}>{children}</AtomViewStyled>;
};

export default AtomWrapper;
