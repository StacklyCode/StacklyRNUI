import React, { FC } from "react";
import AtomButtonStyled from "./styled";
import { AtomButtonTypes } from "./types";

const AtomButton: FC<AtomButtonTypes> = (props) => {
  const { children } = props;
  return <AtomButtonStyled {...props}>{children}</AtomButtonStyled>;
};
export default AtomButton;
