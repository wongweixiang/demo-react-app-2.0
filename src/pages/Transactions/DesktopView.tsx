import { Table } from "antd";
import dayjs from "dayjs";

import { Transaction } from "../../services/fetchTransactions";
import StatusTag from "./StatusTag";
import { usePagination } from "../../hooks/usePagination";

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

const DesktopView = ({ transactions }: { transactions: Transaction[] }) => {
  const { currentPage, pageSize, setCurrentPage } = usePagination();

  return (
    <div className="hidden md:block">
      <Table
        rowKey="id"
        columns={columns}
        dataSource={transactions}
        pagination={{ current: currentPage, pageSize }}
        onChange={({ current }) => setCurrentPage(current)}
      />
    </div>
  );
};

export default DesktopView;
