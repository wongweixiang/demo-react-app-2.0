import { useQuery } from "@tanstack/react-query";

export const useTheme = () => {
  const { data: isDarkMode } = useQuery({
    queryKey: ["isDarkMode"],
  });

  return isDarkMode ? "dark" : "light";
};
