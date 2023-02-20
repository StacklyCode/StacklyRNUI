import lodash from "lodash";
import { FC } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { useTheme } from "styled-components/native";
import AtomIcon from "../AtomIcon";
import AtomText from "../AtomText";
import AtomWrapper from "../AtomWrapper";
import AtomTextError from "./textError";
import AtomInputType from "./type";

const InputText: FC<AtomInputType> = (props) => {
  const {
    formik,
    value,
    id,
    label,
    wrapperWidth,
    placeholder,
    onPressIcon,
    iconUri,
    inputIconWidth,
    inputIconHeigth,
    inputIconcolor,
    backgroundColor,
    labelFontSize: fontSize,
    inputStyle,
  } = props;

  const theme = useTheme();
  return (
    <AtomWrapper
      width={wrapperWidth ?? "100%"}
      style={{
        marginBottom: 5,
      }}
    >
      <>
        {label && (
          <AtomText
            style={{
              fontSize: fontSize as number,
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            {label}
          </AtomText>
        )}
        <AtomWrapper
          style={[
            {
              backgroundColor: backgroundColor,
            },
            styles.inputContainer,
          ]}
        >
          <TextInput
            style={[
              styles.input,
              {
                width: iconUri ? "85%" : "100%",
                flex: 1,
                height: "100%",
              },
              inputStyle,
            ]}
            placeholder={placeholder}
            value={value ?? lodash.get(formik?.values, id)}
            onChangeText={formik?.handleChange(id)}
            {...props}
          />
          {iconUri && (
            <TouchableOpacity
              onPress={onPressIcon}
              style={styles.iconContainer}
            >
              <AtomIcon
                xml={{
                  color: inputIconcolor,
                  width: inputIconWidth || "22px",
                  height: inputIconHeigth || "22px",
                }}
                uri={iconUri}
              />
            </TouchableOpacity>
          )}
        </AtomWrapper>
        <AtomTextError {...props} />
      </>
    </AtomWrapper>
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 5,
    borderWidth: 0.5,
    borderColor: "#ececec",
    minHeight: 40,
    maxHeight: 200,
    height: "auto",
    borderRadius: 5,
    paddingLeft: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  input: {
    fontSize: 16,
    color: "#ffffff",
  },
});
