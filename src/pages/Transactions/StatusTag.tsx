import { Tag } from "antd";

const StatusTag = ({ status }: { status: string }) => {
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
