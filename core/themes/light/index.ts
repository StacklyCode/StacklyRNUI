import { css } from 'styled-components/native';
import { IPalette } from '../types';

const colors = {
  button: {
    background: '#e2446c',
  },
};

const ThemeLight: IPalette = {
  general: {
    color: {
      primary: '#ffffff',
      secondary: '#5a6a8a',
      accent: '#1461EB',
    },
  },
  shadow: {
    color: '#bebebe',
  },
  button: {
    backgroundColor: colors.button.background,
    color: {
      primary: colors.button.background,
      secondary: '#5a6a8a',
      accent: '#1461EB',
    },
    type: 'flat',
  },
  view: {
    color: {
      primary: '#fafafa',
      secondary: '#ffffff',
      accent: '#1461EB',
    },
  },
  loader: {
    color: {
      primary: '#3459A8',
      secondary: '#5a6a8a',
      accent: '#1461EB',
    },
  },
  text: {
    color: {
      primary: '#1a1a1a',
      secondary: '#fafafa',
      accent: '#e2446c',
    },
  },
  modal: {
    backgroundColorModal: 'ffffffd6',
  },
  wrapper: {
    color: {
      primary: '#fafafa',
      secondary: '#5a6a8a',
      accent: '#1461EB',
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
      primary: '#ff0000',
      secondary: '#5a6a8a',
      accent: '#0d00ff',
    },
  },
  scrollbar: {
    width: 7,
    thumb: '#3459A8',
    track: '#e6e6e6',
  },
  input: {
    inputText: {
      colorLabel: '#292c32',
      colorBackground: '#F4F4F4',
      colorBorder: '#000000',
      colorPlaceholder: '#000000',
      colorText: '#000000',
      colorIcon: '#000000',
    },
    inputSelect: {
      borderColor: '#000000',
      colorText: '#000000',
      colorIcon: '#000000',
      colorModal: '#ffffffd7',
    },
    color: {
      primary: '#ffffff',
      secondary: '#3459a8',
      accent: '#db4a4a',
      hover: '#3459a8',
      border: '#e3e3e3',
      shadow: '#e3e3e3',
      placeholder: '#6b6b6b',
    },
  },
};

export default ThemeLight;
