import { atom } from "jotai";
import { ThemeKeyType, ThemesFamilyType } from "../../themes/types";
import { DefaultTheme } from "styled-components/native";

export const ThemeAtom = atom(null as unknown as DefaultTheme);

export const ThemeKeyAtom = atom("auto" as ThemeKeyType);
export const ThemeKeyThemeAtom = atom("light" as ThemeKeyType);
export const ThemeCallbackAtom = atom(
  null as unknown as (key: ThemeKeyType) => void
);
export const ThemeToggleAtom = atom(
  (get) => [get(ThemeKeyAtom), get(ThemeCallbackAtom)] as ThemesFamilyType
);

