import React from "react";
// import ThemeContext from "./core/context/theme";
import CreateThemes from "./core/utils/CreateThemes";
import themes from "./core/themes";
import ScreenIndex from "./src";
// import { ThemeContext } from "./core/context";
import { ThemeContext } from "./build";
// const svg = require("./assets/userroles.svg");
// import { css } from "styled-components/native";
export const ThemesWithMachine = CreateThemes(themes);
export default function App() {
  console.log("themes", themes);
  return (
    // <ThemeContext themes={ThemesWithMachine} defaultTheme={themes?.light}>
      <ScreenIndex />
    // </ThemeContext>
  );
}
