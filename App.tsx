import { StatusBar } from "expo-status-bar";
import React from "react";
// import { AtomText } from "./build";
import AtomWrapperComponet from "./core/@atoms/AtomWrapper";
import AtomTextComponet from "./core/@atoms/AtomText";
import { css } from "styled-components/native";

export default function App() {
  return (
    <AtomWrapperComponet>
      <StatusBar style="light" />
      <AtomTextComponet css={() => css``}>texto</AtomTextComponet>
    </AtomWrapperComponet>
  );
}
