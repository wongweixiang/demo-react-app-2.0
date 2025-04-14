import { Tag } from "antd";
import { FC } from "react";

type StatusTagProps = { status: string };

const StatusTag: FC<StatusTagProps> = ({ status }) => {
  const colourMapping: Record<string, string> = {
    completed: "green",
    cancelled: "red",
    pending: "gold",
  };

  return (
    <Tag color={colourMapping[status]} className="capitalize">
      {status}
    </Tag>
  );
};

export default StatusTag;
