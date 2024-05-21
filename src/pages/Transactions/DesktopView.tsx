import { useDispatch, useSelector } from "react-redux";

import { Table } from "antd";
import dayjs from "dayjs";

import { updatePage } from "./reducer";
import { Transaction } from "./types";
import StatusTag from "./StatusTag";
import { AppDispatch, RootState } from "../../store";

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
  const dispatch: AppDispatch = useDispatch();
  const { currentPage, pageSize } = useSelector(
    (state: RootState) => state.transactions.pagination
  );

  return (
    <div className="hidden sm:block">
      <Table
        rowKey="id"
        columns={columns}
        dataSource={transactions}
        pagination={{ current: currentPage, pageSize }}
        onChange={({ current }) => dispatch(updatePage(current))}
      />
    </div>
  );
};

export default DesktopView;
