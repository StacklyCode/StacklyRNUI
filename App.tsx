import { StatusBar } from "expo-status-bar";
import React from "react";
import { AtomText, AtomWrapper, css } from "./build";
import AtomWrapperComponet from "./core/@atoms/AtomWrapper";
import AtomTextComponet from "./core/@atoms/AtomText";
import AtomIcon from "./core/@atoms/AtomIcon";
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
      />
    </AtomWrapperComponet>
  );
}
