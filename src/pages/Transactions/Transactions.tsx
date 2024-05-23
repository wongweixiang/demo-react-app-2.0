import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, Input } from "antd";

import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

import { fetchTransactions } from "./reducer";
import { AppDispatch, RootState } from "../../store";

const { Search } = Input;

const Transactions = () => {
  const dispatch: AppDispatch = useDispatch();

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
      <div className="flex flex-col min-w-[300px] p-0 sm:p-5 no-border sm:grey-border box-border">
        <div className="bg-gray-50 flex flex-col items-stretch md:grid md:grid-cols-3 xl:grid-cols-4 gap-2 rounded p-5 box-border mb-3">
          <Search
            placeholder="Search by transaction ID"
            onSearch={(e) => setTransactionID(e)}
          />
          <Select
            placeholder="Select a status"
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
            mode="multiple"
            onChange={(e) => setTransactionType(e)}
            options={transactionTypes.map((t) => {
              return { value: t, label: t };
            })}
          />
        </div>
        <DesktopView transactions={transactions} />
        <MobileView transactions={transactions} />
      </div>
    </>
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
