import { useDispatch, useSelector } from "react-redux";

import styled from "@emotion/styled";
import { Table } from "antd";
import dayjs from "dayjs";

import { updatePage } from "./reducer";
import { Transaction } from "./types";
import StatusTag from "./StatusTag";
import { AppDispatch, RootState } from "../../store";
import { SCREEN_SIZES } from "../../constants";

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
    <View>
      <Table
        columns={columns}
        dataSource={transactions}
        pagination={{ current: currentPage, pageSize }}
        onChange={({ current }) => dispatch(updatePage(current))}
      />
    </View>
  );
};

export default DesktopView;

const View = styled.div`
  display: none;

  @media only screen and (min-width: ${SCREEN_SIZES.SMALL}) {
    display: block;
  }
`;
