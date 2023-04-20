import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { Table, Tag, Select, Input } from "antd";
import dayjs from "dayjs";

import { fetchTransactions } from "./actions";
import { RootState } from "../../store";

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

const { Search } = Input;

const Transactions = () => {
  const dispatch = useDispatch();

  const [transactionID, setTransactionID] = useState("");
  const [status, setStatus] = useState([]);
  const [transactionType, setTransactionType] = useState([]);

  useEffect(() => {
    dispatch(fetchTransactions({ transactionID, status, transactionType }));
  }, [transactionID, status, transactionType]);

  const { transactions } = useSelector(
    (state: RootState) => state.transactions
  );

  return (
    <>
      <h3>Transactions</h3>
      <Panel>
        <Filters>
          <Search
            placeholder="Search by transaction ID"
            style={{ width: "230px" }}
            onSearch={(e) => setTransactionID(e)}
          />
          <Select
            placeholder="Select a status"
            style={{ width: "200px" }}
            mode="multiple"
            onChange={(e) => setStatus(e)}
            options={statuses.map((s) => {
              return {
                value: s,
                label: s.charAt(0).toUpperCase() + s.slice(1),
              };
            })}
          />
          <Select
            placeholder="Select a transaction type"
            style={{ width: "250px" }}
            onChange={(e) => setTransactionType(e)}
            options={transactionTypes.map((t) => {
              return { value: t, label: t };
            })}
          />
        </Filters>
        <Table
          columns={columns}
          dataSource={transactions}
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

const statuses = ["completed", "cancelled", "pending", "expired"];

const transactionTypes = [
  "Bank Transfer In",
  "Bank Transfer Out",
  "Payment Sent",
  "Payment Received",
];

const Filters = styled.div`
  display: flex;
  gap: 0.5rem;
  background-color: #fbfbfb;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  box-sizing: border-box;
`;
