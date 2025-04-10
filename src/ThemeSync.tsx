import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";

export const ThemeSync = () => {
  const theme = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return null;
};
