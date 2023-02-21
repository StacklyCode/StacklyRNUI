import React from "react";
import { useSetAtom, useAtom } from "jotai";
import { ThemeProvider } from "styled-components/native";
import { FC, useEffect } from "react";
import { useColorScheme } from "react-native";
import { ThemeContextProps, ThemeKeyType } from "../../themes/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ThemeKeyAtom,
  ThemeAtom,
  ThemeCallbackAtom,
  ThemeKeyThemeAtom,
} from "../../jotai/theme";

const ThemeContext: FC<ThemeContextProps> = (props) => {
  const { children, themes, defaultTheme } = props;
  const [theme, setTheme] = useAtom(ThemeAtom);
  const [themeCallback, setThemeCallback] = useAtom(ThemeCallbackAtom);
  const setThemeKey = useSetAtom(ThemeKeyAtom);
  const setThemeKeyTheme = useSetAtom(ThemeKeyThemeAtom);
  const colorScheme = useColorScheme();
  // console.log("colorScheme", colorScheme);

  useEffect(() => {
    const loadTheme = async () => {
      const keySystem = colorScheme === "dark" ? "dark" : "light";
      const keyTheme = (await AsyncStorage.getItem(
        "THEME_KEY"
      )) as ThemeKeyType;
      const key = keyTheme === "auto" ? keySystem : keyTheme;
      // console.log("my keysave", keyTheme);
      // console.log("my key", key);
      setTheme(themes?.select?.[key] ?? defaultTheme);
      setThemeKey(key ?? "auto");
      setThemeKeyTheme(key ?? "light");
      setThemeCallback(() => async (keyArgs: ThemeKeyType) => {
        const keySystem = colorScheme === "dark" ? "dark" : "light";
        const keyTheme = (await AsyncStorage.getItem(
          "THEME_KEY"
        )) as ThemeKeyType;
        const key = keyArgs ?? keyTheme ?? keySystem;
        const nextKey = keyArgs
          ? key
          : themes.machine
              .transition(key === "auto" ? keySystem : key, "TOGGLE")
              .value.toString();
        setTheme(
          keyArgs
            ? key === "auto"
              ? themes?.select?.[keySystem] ?? defaultTheme
              : themes?.select?.[key] ?? defaultTheme
            : themes?.select?.[nextKey] ?? defaultTheme
        );
        const keyToSave = (keyArgs ? key : nextKey) as ThemeKeyType;
        setThemeKey(keyToSave);
        setThemeKeyTheme(
          (keyArgs
            ? key === "auto"
              ? keySystem ?? "light"
              : key ?? "light"
            : nextKey ?? "light") as ThemeKeyType
        );
        await AsyncStorage.setItem("THEME_KEY", keyToSave);
      });
    };
    loadTheme();
    return () => {};
  }, [!themeCallback, colorScheme]);

  useEffect(() => {
    const loadTheme = async () => {
      const key = (await AsyncStorage.getItem("THEME_KEY")) as ThemeKeyType;
      if (key === "auto") {
        const keySystem = colorScheme === "dark" ? "dark" : "light";
        setTheme(themes?.select?.[keySystem] ?? defaultTheme);
        setThemeKey("auto");
        setThemeKeyTheme(keySystem ?? "light");
      }
    };
    loadTheme();
    return () => {};
  }, [colorScheme]);

  return (
    <ThemeProvider theme={theme ?? defaultTheme}>{children}</ThemeProvider>
  );
};

export default ThemeContext;
