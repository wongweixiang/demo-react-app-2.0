import styled from "@emotion/styled";
import { Table, Tag } from "antd";
import dayjs from "dayjs";

const dataSource = [
  {
    id: "x202399",
    createdAt: "2022-11-09T17:19:18.000Z",
    type: "Bank Transfer Out",
    amount: {
      direction: "-",
      currency: "USD",
      netAmount: "$100.00",
    },
    status: "pending",
  },
  {
    id: "x202398",
    createdAt: "2022-11-05T15:19:18.000Z",
    type: "Payment Received",
    amount: {
      direction: "+",
      currency: "SGD",
      netAmount: "$250.00",
    },
    status: "completed",
  },
  {
    id: "x202396",
    createdAt: "2022-10-28T23:20:18.000Z",
    type: "Payment Received",
    amount: {
      direction: "+",
      currency: "USD",
      netAmount: "$150.00",
    },
    status: "completed",
  },
  {
    id: "x202391",
    createdAt: "2022-10-21T10:12:18.000Z",
    type: "Payment Sent",
    amount: {
      direction: "-",
      currency: "SGD",
      netAmount: "$592.45",
    },
    status: "cancelled",
  },
  {
    id: "x202387",
    createdAt: "2022-10-20T18:45:18.000Z",
    type: "Bank Transfer In",
    amount: {
      direction: "+",
      currency: "SGD",
      netAmount: "$183.90",
    },
    status: "completed",
  },
];

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
      return <>{`${a.direction} ${a.currency}${a.netAmount}`}</>;
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

const Transactions = () => {
  return (
    <>
      <h3>Transactions</h3>
      <Panel>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={{ pageSize: 5 }}
        />
      </Panel>
    </>
  );
};

const StatusTag = ({ status }: { status: string }) => {
  const colourMapping: Record<string, string> = {
    completed: "green",
    cancelled: "red",
    pending: "gold",
  };

  return (
    <Tag color={colourMapping[status]} style={{ textTransform: "capitalize" }}>
      {status}
    </Tag>
  );
};

export default Transactions;

const Panel = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  box-sizing: border-box;
`;
