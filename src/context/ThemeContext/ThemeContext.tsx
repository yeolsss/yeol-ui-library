import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeType } from "@/types/themeType.ts";

// 1. 만든다.
interface ThemeValue {
  theme: ThemeType;
  handleClickTheme: () => void;
}
const initialTheme: ThemeValue = {
  theme: "" as ThemeType,
  handleClickTheme: () => {},
};
const ThemeContext = createContext<ThemeValue>(initialTheme);

// 2. 사용한다.
export const useTheme = () => useContext(ThemeContext);

// 3. 범위를 지정한다.
export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>("system");

  const handleClickTheme = useCallback(() => {
    const currentTheme = theme === "light" ? "dark" : "light";
    setTheme(currentTheme);
    document.body.className = currentTheme;
    localStorage.setItem("theme", currentTheme);
  }, [setTheme, theme]);

  useEffect(() => {
    const saveTheme = localStorage.getItem("theme");

    if (!saveTheme) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const currentTheme = mediaQuery.matches ? "dark" : "light";
      console.log({ currentTheme });
      setTheme(currentTheme);
      localStorage.setItem("theme", currentTheme);
      document.body.className = currentTheme;
    } else {
      setTheme(saveTheme as ThemeType);
      document.body.className = saveTheme as ThemeType;
    }
  }, []);

  const value = useMemo(
    () => ({
      theme,
      handleClickTheme,
    }),
    [theme, handleClickTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
