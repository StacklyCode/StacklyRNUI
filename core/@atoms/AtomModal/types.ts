import { ReactNode } from "react";
import { ModalProps } from "react-native";

export interface AtomModalType {
  isOpen: boolean;
  modalProps?: ModalProps;
  component?: ReactNode;
  colorModal?: string;
}
