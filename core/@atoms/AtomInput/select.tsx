import React, { FC, useState } from "react";
import { FlatList } from "react-native";
import { css } from "styled-components/native";
import AtomIcon from "../AtomIcon";
import AtomModal from "../AtomModal";
import AtomWrapper from "../AtomWrapper";
import AtomButton from "../AtomButton";
import InputText from "./InputText";
import AtomText from "../AtomText";
import AtomInputType from "./type";

const InputSelect: FC<AtomInputType> = (props) => {
  const { options, formik, id } = props;
  const [isOpen, SetisOpen] = useState(false);
  return (
    <>
      <AtomModal
        isOpen={isOpen}
        colorModal={"#000000d7"}
        component={
          <AtomWrapper
            width="60%"
            alignItems="center"
            style={[
              {
                maxHeight: "50%",
                borderWidth: 1,
                borderColor: "#000000",
                borderStyle: "solid",
                paddingBottom: 20,
              },
            ]}
          >
            <AtomButton
              onPress={() => SetisOpen(!isOpen)}
              width="auto"
              backgroundColor="transparent"
              style={{
                alignSelf: "flex-end",
              }}
            >
              <AtomIcon
                uri="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/califarma/icons/close.svg"
                xml={{ color: "#000000" }}
              />
            </AtomButton>
            <FlatList
              style={{
                width: "100%",
              }}
              data={options}
              renderItem={({ item }) => (
                <AtomButton
                  key={item.id}
                  customCSS={css`
                    border-radius: 5px;
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 3px;
                    background-color: transparent;
                  `}
                  onPress={() => {
                    formik?.setFieldValue(id, item.value);
                    SetisOpen(!isOpen);
                    // callBack?.()
                  }}
                >
                  {item?.view ? (
                    item?.view?.(item)
                  ) : (
                    <AtomText
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        padding: 10,
                        textAlign: "center",
                      }}
                    >
                      {item.label}
                    </AtomText>
                  )}
                </AtomButton>
              )}
            />
          </AtomWrapper>
        }
      />
      <InputText
        iconUri="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/califarma/icons/selectInput.svg"
        onPressIcon={() => SetisOpen(!isOpen)}
        onPressIn={() => SetisOpen(!isOpen)}
        value={
          options?.find((item) => item.value === formik?.values[id])?.label ??
          ""
        }
        {...props}
      />
    </>
  );
};
export default InputSelect;
