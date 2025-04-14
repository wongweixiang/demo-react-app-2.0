import { Table } from "antd";
import dayjs from "dayjs";

import { Transaction } from "../../services/fetchTransactions";
import StatusTag from "./StatusTag";
import { FC } from "react";

const columns = [
  {
    dataIndex: "id",
    title: "Transaction ID",
  },
  {
    dataIndex: "createdAt",
    title: "Created At",
    render: (d: string) => {
      return <>{dayjs(d).format("DD MMM YYYY, HH:mm")}</>;
    },
  },
  {
    dataIndex: "type",
    title: "Transaction Type",
  },
  {
    dataIndex: "amount",
    title: "Amount",
    render: (a: Record<string, string>) => {
      return <>{`${a.direction} ${a.currency.toUpperCase()}${a.netAmount}`}</>;
    },
  },
  {
    dataIndex: "status",
    title: "Status",
    render: (s: string) => {
      return <StatusTag status={s} />;
    },
  },
];

type DesktopViewProps = {
  transactions: Transaction[];
  isLoading: boolean;
};

const DesktopView: FC<DesktopViewProps> = ({ transactions, isLoading }) => {
  return (
    <div className="hidden md:block">
      <Table
        rowKey="id"
        columns={columns}
        dataSource={transactions}
        pagination={false}
        loading={isLoading}
      />
    </div>
  );
};

export default DesktopView;
