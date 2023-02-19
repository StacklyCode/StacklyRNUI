import React, { FC } from "react";
import { Modal } from "react-native";
import AtomWrapper from "../AtomWrapper";
import { AtomModalType } from "./types";

const AtomModal: FC<AtomModalType> = (props) => {
  const { isOpen, modalProps, component, colorModal } = props;
  return (
    <Modal
      visible={isOpen}
      transparent={true}
      animationType="slide"
      {...modalProps}
    >
      <AtomWrapper
        style={{
          flex: 1,
        }}
        justifyContent="center"
        alignItems="center"
        backgroundColor={colorModal ?? "transparent"}
      >
        {component}
      </AtomWrapper>
    </Modal>
  );
};
export default AtomModal;
