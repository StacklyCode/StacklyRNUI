import { StatusBar } from "expo-status-bar";
import React from "react";
import { AtomText, AtomWrapper, css, AtomIcon } from "./build";
import AtomWrapperComponet from "./core/@atoms/AtomWrapper";
import AtomTextComponet from "./core/@atoms/AtomText";
// import AtomIcon from "./core/@atoms/AtomIcon2";
// const svg = require("./assets/userroles.svg");
// import { css } from "styled-components/native";

export default function App() {
  return (
    <AtomWrapperComponet
      customCSS={css`
        flex: 1;
        justify-content: center;
        align-items: center;
      `}
    >
      <StatusBar style="light" />
      <AtomText
        css={() => css`
          font-size: 30px;
        `}
      >
        texto
      </AtomText>
      <AtomIcon
      icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/APPS/Proa/icons/search.svg"
      // source={svg}
      />
    </AtomWrapperComponet>
  );
}
