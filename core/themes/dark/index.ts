import { css } from "styled-components/native";
import { IPalette } from "../types";

const colors = {
  button: {
    background: "#e2446c",
  },
};

const ThemeDark: IPalette = {
  general: {
    color: {
      primary: "#18181b",
      secondary: "#3c4043",
      accent: "#202124",
    },
  },
  shadow: {
    color: "#bebebe",
  },
  button: {
    backgroundColor: colors.button.background,
    color: {
      primary: colors.button.background,
      secondary: "#5a6a8a",
      accent: "#1461EB",
    },
    type: "flat",
  },
  view: {
    color: {
      primary: "#fafafa",
      secondary: "#ffffff",
      accent: "#1461EB",
    },
  },
  loader: {
    color: {
      primary: "#3459A8",
      secondary: "#5a6a8a",
      accent: "#1461EB",
    },
  },
  text: {
    color: {
      primary: "#1a1a1a",
      secondary: "#fafafa",
      accent: "#e2446c",
    },
  },
  modal: {
    backgroundColorModal: "ffffffd6",
  },
  wrapper: {
    color: {
      primary: "#fafafa",
      secondary: "#5a6a8a",
      accent: "#1461EB",
    },
    css: () => css`
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        background-color: red;
      }
    `,
  },
  icon: {
    color: {
      primary: "#202124",
      secondary: "#5a6a8a",
      accent: "#ff0000",
    },
  },
  scrollbar: {
    width: 7,
    thumb: "#db4a4a",
    track: "#e6e6e6",
  },
  input: {
    inputText: {
      colorLabel: "#fafafa",
      colorBackground: "#18181b",
      colorBorder: "#ffffff",
      colorPlaceholder: "#fafafa",
      colorText: "#ffffff",
      colorIcon: "#ffffff",
    },
    inputSelect: {
      borderColor: "#000000",
      colorText: "#000000",
      colorIcon: "#000000",
      colorModal: "#ffffffd7",
    },
    color: {
      primary: "#ffffff",
      secondary: "#3459a8",
      accent: "#db4a4a",
      hover: "#3459a8",
      border: "#e3e3e3",
      shadow: "#e3e3e3",
      placeholder: "#6b6b6b",
    },
  },
};

export default ThemeDark;
