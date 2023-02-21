import { StatusBar } from "expo-status-bar";
import React from "react";
import { AtomButton, AtomText, AtomWrapper } from "../build";
import AtomWrapperComponet from "../core/@atoms/AtomWrapper";
import AtomTextComponet from "../core/@atoms/AtomText";
import AtomIcon from "../core/@atoms/AtomIcon";
import useTheme from "../core/hook/useTheme";
import { FC } from "react";
import { AppRegistry, Appearance, useColorScheme } from "react-native";
import { css } from "styled-components/native";

const ScreenIndex: FC = () => {
  const [theme, toggle, { key, keyTheme }] = useTheme();
  const colorscheme = useColorScheme();
  console.log("colorScheme into screen", colorscheme);
  console.log("theme", Appearance.getColorScheme());

  return (
    <AtomWrapperComponet
      customCSS={css`
        flex: 1;
        justify-content: center;
        align-items: center;
      `}
    >
      <StatusBar style="light" />
      {/* <AtomText
        css={() => css`
        font-size: 30px;
        `}
        >
        texto
      </AtomText> */}
      <AtomIcon
      // xml={{ color: "red" }}
      // source={svg}
      // xml={{ color: "original" }}
      />
      <AtomText>key {key}</AtomText>
      <AtomText>keytheme {keyTheme}</AtomText>
      <AtomButton onPress={() => toggle()}>
        <AtomText>Boton toggle</AtomText>
      </AtomButton>
      <AtomButton onPress={() => toggle("auto")}>
        <AtomText>Boton toggle auto</AtomText>
      </AtomButton>
      <AtomButton onPress={() => toggle("dark")}>
        <AtomText>Boton toggle dark</AtomText>
      </AtomButton>
      <AtomButton onPress={() => toggle("light")}>
        <AtomText>Boton toggle light</AtomText>
      </AtomButton>
    </AtomWrapperComponet>
  );
};
export default ScreenIndex;
