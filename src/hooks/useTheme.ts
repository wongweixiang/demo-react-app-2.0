import { useQuery } from "@tanstack/react-query";

export const useTheme = () => {
  const { data: isDarkMode } = useQuery({
    queryKey: ["isDarkMode"],
    initialData: false,
  });

  return isDarkMode ? "dark" : "light";
};
