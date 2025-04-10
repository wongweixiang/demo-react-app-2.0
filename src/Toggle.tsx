import { useQueryClient } from "@tanstack/react-query";
import { Switch } from "antd";

export const Toggle = () => {
  const queryClient = useQueryClient();

  const onChange = (checked: boolean) => {
    queryClient.setQueryData(["isDarkMode"], checked);
  };

  return (
    <div className="flex items-center justify-center gap-3 py-3 text-white">
      <span>Light</span>
      <Switch onChange={onChange} />
      <span>Dark</span>
    </div>
  );
};
