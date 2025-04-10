import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Switch } from "antd";

export const Toggle = () => {
  const queryClient = useQueryClient();

  const { data: isChecked } = useQuery<boolean>({ queryKey: ["isDarkMode"] });

  const onChange = (checked: boolean) => {
    queryClient.setQueryData(["isDarkMode"], checked);
  };

  return (
    <div className="flex items-center justify-center gap-3 py-3 text-white">
      <span>Light</span>
      <Switch checked={isChecked} onChange={onChange} />
      <span>Dark</span>
    </div>
  );
};
