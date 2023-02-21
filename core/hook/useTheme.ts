import { ThemeAtom, ThemeToggleAtom, ThemeKeyThemeAtom } from "../jotai/theme";
import { useAtomValue } from "jotai";

const useTheme = () => {
  const theme = useAtomValue(ThemeAtom);
  const [key, toggle] = useAtomValue(ThemeToggleAtom);
  const keyTheme = useAtomValue(ThemeKeyThemeAtom);
  return [
    theme,
    toggle,
    {
      key,
      keyTheme,
    },
  ] as const;
};

export default useTheme;
